# Initial Monorepo AI Rules & Autoskills Integration

**Date**: April 15, 2026
**Topic**: Agent Workflows, Monorepo Boundaries, Rule Guarding, AI Synchronization

## Context

As the `fragance-wishlist` project evolved into a Turborepo monorepo encompassing `fw-web` (Next.js), `fw-api` (NestJS/Node), and shared `@repo` packages, we needed a robust system to govern AI agent behavior. Without explicit guardrails, agents risked blending frontend and backend architectural patterns and failing to respect Next.js App Router boundaries or TypeORM best practices.

## Decisions Made

### 1. Monorepo AI Governance

We established an explicit `.agents/workflows/` directory to act as the single source of truth for architectural integrity.

- **Why**: Standard prompt instructions (vibes) fail in monorepos. Agents need explicit, strict examples of right vs. wrong code patterns.
- **Outcome**: Created `general-agent-guidelines.md` acting as a global contract, accompanied by `fw-web/architecture.md`, `fw-api/architecture.md`, and specific boundary checks for shared `packages/`.
- **Active Rule Guarding**: Added a global override in `.cursorrules` explicitly forbidding agents from executing prompts that conflict with established guidelines unless formally asking the user to update the `.md` rule file first.

### 2. The 'Belongs in Package' Check

- **Why**: Prevented greedy abstraction where highly local Next.js helper logic (e.g., URL param parsing) was mistakenly dumped into universal `@repo/helpers`.
- **Outcome**: Agents are now contractually required to perform a boundary analysis before extracting code, ensuring only cross-boundary Data Transfer Objects (DTOs), purely deterministic utilities, or "dummy" stateless UI components are shared.

### 3. Automated Skills Sync (`autoskills.sh`)

We required a method for our agent guidelines to remain updated with modern external framework trends without breaking local workflows or corrupting handwritten custom rules.

- **Why Not GitIgnore**: AI prompt markdown must be committed so GitHub Actions can diff them and new clone installations operate safely on day one.
- **Why Not Pre-Commit**: Polling `skills.sh` on every commit causes extreme local latency and completely breaks offline commits.
- **Outcome (The Mixed Model)**:
  1.  Turborepo runs a scoped `npx autoskills --agent claude-code` script on `postinstall`.
  2.  This strictly targets Next.js rules for `fw-web` and Node rules for `fw-api`.
  3.  A GitHub Action Cron Job runs weekly to fetch upstream deprecations/updates async, creating standard Pull Requests without developer intervention.
  4.  Raw `CLAUDE.md` outputs are strictly `.gitignore`'d to avert pipeline corruption.

## Key References

- `.agents/workflows/general-agent-guidelines.md` (Self-governance protocols)
- `.github/workflows/sync-ai-skills.yml` (Async updater pipeline)

## Updates

- **April 19, 2026**: Discovered that the `sync:skills` background job and CI pipeline were crashing with Exit Code 1. This was because the `autoskills` CLI runs interactively by default, causing non-TTY environments to fail. The workflow scripts were updated to include the `-y` flag (`npx -y autoskills -y --agent claude-code`) to strictly enforce non-interactive execution.

- **April 26, 2026**: Two further pipeline failures fixed:
  1. **Node version too old** — The workflow was pinned to `node-version: '20'` (runner: `v20.20.2`), which is below the `autoskills@0.2.7` engine floor of `>=22.6.0`. Fixed by bumping to `node-version: '24'`. Additionally added `.nvmrc` (pinned to `24.15.0`) and `"engines": { "node": ">=24.0.0" }` to the root `package.json` to align local, engine declaration, and CI on the same version.
  2. **Husky pre-commit crash on bot commit** — After `npm ci` generates new skill files, `peter-evans/create-pull-request` attempts a commit, which triggers Husky → lint-staged → `git stash`. On the Linux runner, `autoskills` creates `.claude/skills/` using symlinks; git refuses to stash paths that traverse symlinks (`error: path is beyond a symbolic link`). Fixed by adding `HUSKY: '0'` at the job level. This is the [officially recommended approach](https://typicode.github.io/husky/how-to.html#ci-server-and-docker) and **does not affect local developer commits** — `HUSKY=0` is scoped to the runner environment only. See `general-agent-guidelines.md` §8 for the reusable template.

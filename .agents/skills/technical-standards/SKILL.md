---
name: technical-standards
description: CI pipeline requirements, historical architecture decisions (ADR), and automated skills sync rules. Use when configuring CI/CD, dealing with Husky, or making large architectural pivots.
---

# Technical Standards & CI

## 1. Automated AI Skills Synchronization

- A `postinstall` script fetches the newest framework rules (`autoskills.md`).
- **CRITICAL**: Do NOT manually rewrite `autoskills.md` files. Treat them as read-only.
- Always invoke with `-y` flag (`npx -y autoskills -y --agent claude-code`) to bypass interactive prompts in CI.

## 2. Historical Architecture Decisions (ADR)

- **Lookup Rule**: Before pivoting architecture, consult `.agents/history/` to understand why the current system exists.
- **Mandatory ADR**: NEVER add a commit without an ADR or updating the existing ADR that records the changes for the current branch.
- **Location**: Store ADRs in `.agents/history/YYYY-MM-DD-short-description.md`.

## 3. CI Pipeline Requirements

- **Node.js Version**: >=24.0.0, pinned in `.nvmrc`. Workflows must use `node-version: '24'`.
- **Husky in Bot Commits**: Any workflow job that automates `git commit` MUST set `env: HUSKY: "0"` at the job level. This prevents `lint-staged` from crashing on symlinks in the CI runner.

## 4. Errors & Built-in Tooling

- Do not invent formatting rules. Rely on `Husky`, `lint-staged`, `eslint`, and `stylelint`.
- If you make a mistake, update the rules rather than just fixing the code.

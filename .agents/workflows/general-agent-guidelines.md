# General Agent Guidelines

These guidelines dictate how AI coding agents should behave within this monorepo. They codify the implicit "vibes" and best practices into explicit rules.

## 1. Do Not Assume Tacit Knowledge

Never assume standard programming principles unless explicitly instructed.

- **Always separate configuration from code.**
- **Adhere to DRY (Don't Repeat Yourself) but prefer readability over premature abstraction.**
- **Use meaningful variable and method names.** Use camelCase for variables/functions and PascalCase for classes/types.

## 2. Examples Tell The Truth

AIs love patterns. Always look for existing code in the repository as a "Gold Standard" template before writing from scratch. Do not invent new architectural patterns if a template already exists.

## 3. Errors as Feedback Loop

If you (the agent) generate code that fails linting or breaks architecture rules, treat it as a failure of these guidelines.

- **Human Rule**: When the AI makes a mistake, developers MUST update these `.md` rules files rather than just fixing the code.

## 4. Rely on Built-in Tooling

Do not invent or force formatting rules.

- Rely on the `Husky` pre-commits, `lint-staged`, `eslint`, and our Tailwind-adapted `stylelint`.
- If formatting is required, defer to the installed prettier/linter configurations.

## 5. Active Rule Guarding (Auto-Update Check)

Agents must actively protect the integrity of the codebase rules.

- **Rule Check**: Before writing code or executing a user prompt, the agent MUST evaluate if the user's request contradicts any established rules or "Gold Standards" documented in `.agents/workflows/`.
- **Ask Before Breaking**: If a user request contradicts a rule, the agent MUST pause and explicitly ask the user: _"This request contradicts our established rule [Rule Name]. Should I proceed with this as an exception, or should we update the `.agents/workflows/` rules to reflect this new approach?"_
- **Auto-Update**: If the user confirms it's a new standard, the agent must update the relevant `.md` rule file BEFORE proceeding with the code changes.

## 6. Automated AI Skills Synchronization

This monorepo utilizes an automated standard via `autoskills.sh`.

- When `npm install` is run, a `postinstall` script via Turborepo fetches the newest skill rules for the frameworks (e.g., Next.js, TypeORM) and creates an `autoskills.md` file within the app's workflow directories (`fw-web`, `fw-api`).
  **CRITICAL CI/CD RULE**: The `autoskills` command MUST always be invoked with the `-y` flag (e.g., `npx -y autoskills -y --agent claude-code`) to bypass interactive prompts. Failing to do so causes CI pipelines and background jobs to crash with `exit code 1` due to waiting for user input.
- There is also a weekly GitHub Action that silently opens PRs keeping these rules fresh even when no dependencies change.
  **CRITICAL**: As an AI, you MUST NOT manually rewrite these `autoskills.md` files. Treat them as read-only automated knowledge graphs, while `.agents/workflows/` custom architecture guidelines take precedence.

- **Version Control Constraints**:
  - The final `.agents/workflows/**/autoskills.md` files MUST be committed to Git to preserve agent knowledge.
  - The root `.cursorrules` MUST be committed to Git to preserve Active Rule Guarding.
  - Raw `CLAUDE.md` temporary files are explicitly ignored in `.gitignore` to prevent mid-script pipeline crashes from leaking into the commit history.

## 7. Historical Architecture Decisions (ADR)

All major structural and tooling decisions are tracked in `.agents/history/`.

- **Lookup Rule**: When proposing large architectural pivots or modifying established automation strategies (e.g., migrating off Turborepo, changing linting hooks, or mutating agent boundaries), consult the `.agents/history/` directory first to comprehend _why_ the current system was built this way before attempting to rip it out.
- **Update Rule**: Whenever you (the AI and the developer) finalize a _new_ significant architectural shift, automation flow, or boundary rule, the AI MUST proactively generate a summarized `.md` file documenting the context and decisions made, and save it to `.agents/history/YYYY-MM-DD-filename.md`.

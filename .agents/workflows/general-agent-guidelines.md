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
- **Ask Before Breaking**: If a user request contradicts a rule, the agent MUST pause and explicitly ask the user: *"This request contradicts our established rule [Rule Name]. Should I proceed with this as an exception, or should we update the `.agents/workflows/` rules to reflect this new approach?"*
- **Auto-Update**: If the user confirms it's a new standard, the agent must update the relevant `.md` rule file BEFORE proceeding with the code changes.

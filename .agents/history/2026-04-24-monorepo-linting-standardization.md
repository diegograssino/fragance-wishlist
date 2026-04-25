# ADR: Monorepo Linting Standardization and Tailwind v4 Integration Improvements

**Status**: Accepted  
**Date**: 2026-04-24  
**Author**: Antigravity (AI Coding Assistant)

## Context

As the project evolved and migrated to **ESLint v9** and **Tailwind CSS v4**, several friction points emerged in the development workflow:

1.  **Commit Blockers**: Pre-commit hooks (`lint-staged`) were failing because ESLint v9 requires a root-level "Flat Config" (`eslint.config.js/mjs`), which was missing.
2.  **Tooling Crashes**: Stylelint was being "KILLED" during large commits because it lacked an ignore list, causing it to attempt to process thousands of files in build folders (`.next`, `.turbo`).
3.  **Tailwind v4 Compatibility**: Stylelint was reporting errors on valid Tailwind v4 directives like `@source`.
4.  **Token Duplication**: Design system tokens for border-radius and shadows were being manually defined in CSS variables, creating redundancy with Tailwind's built-in standard tokens.

## Decisions

### 1. Root-Level Linting Engine

We have introduced a root-level `eslint.config.mjs` and installed the core linting engines (`eslint`, `stylelint`, `prettier`) in the root `package.json`.

- **Reasoning**: This allows `lint-staged` to run efficiently from the root while ensuring all sub-packages are covered by a consistent base configuration.
- **Implementation**: The root config uses `typescript-eslint` and ignores all build artifacts globally.

### 2. Tailwind v4 Standard Alignment

We decided to **remove custom CSS variables for radius and shadows** (e.g., `--radius-lg`) in favor of standard Tailwind utility classes (e.g., `rounded-lg`).

- **Reasoning**: Tailwind v4 tokens are already well-optimized and sufficient for the premium aesthetic. Removing the custom variables simplifies the `theme.css` and reduces the maintenance surface.
- **Stylelint Update**: Added `source` to the `ignoreAtRules` list in `.stylelintrc.json` to support the Tailwind v4 `@source` directive.

### 3. Centralized Ignore Lists

Created [.stylelintignore](file:///Users/diegograssino/repos/personal/fragance-wishlist/.stylelintignore) and refined ESLint global ignores.

- **Reasoning**: Prevents linting tools from scanning non-source directories, resolving memory/timeout crashes during commits.

### 4. Font Variable Standardization

Decided to use Next.js font variables (`--font-primary`, `--font-secondary`) as the source of truth for the design system.

- **Reasoning**: This ensures that fonts are handled by the optimized `next/font` system while remaining accessible to the shared UI components via CSS variables.

## Consequences

- **Developer Experience**: Commits are now fast and reliable.
- **Consistency**: All packages now share a base linting standard.
- **Maintainability**: The `theme.css` is leaner and more aligned with the official Tailwind v4 migration paths.

# ADR 0001: Monorepo Design System Architecture & Theming

**Status:** Accepted
**Date:** 2026-04-22

## Context

We needed a scalable, framework-agnostic design system that could be consumed across Next.js and Storybook environments without code duplication. In addition, we faced severe development performance issues due to large barrel files (`index.ts`) in utility packages causing slow HMR. Lastly, we encountered CSS variable inheritance scoping issues where Tailwind v4's `:root` level mappings could not read variables injected via a nested React child component.

## Decision

1. **Centralized Theming Logic (`@repo/ui` and `@repo/helpers`)**

   - The UI logic lives entirely in `packages/ui`.
   - `packages/helpers` handles dynamic environment variable lookup (`getEnv`) mapping design tokens safely across Node and Browser contexts using `NEXT_PUBLIC_` fallbacks.

2. **Tailwind v4 CSS Decoupling**

   - The central Tailwind definitions and `@theme inline` configurations are maintained in `packages/ui/src/styles/theme.css`.
   - Consumer apps (Next.js, Storybook) only maintain a minimal entry CSS file that boots up `@import "tailwindcss";`, imports the theme preset, and maps the required `@source` directories.

3. **CSS Variable Scoping (`<html>` Tag Injection)**

   - To preserve native inheritance for Tailwind's `:root` generation, the dynamic `THEME_STYLES` dictionary (exported from `packages/ui/src/theme.ts`) must be applied directly to the `<html style={THEME_STYLES}>` tag in the consumer application, explicitly abandoning the use of a nested React `<ThemeProvider>` DOM wrapper.

4. **Strict Pointed Imports (No Barrel Files for Helpers)**
   - To maximize compilation performance and prevent circular dependencies, barrel files (`index.ts`) are disallowed in utility packages like `@repo/helpers`.
   - Consumers must use strict pointed imports (e.g., `import { getEnv } from '@repo/helpers/getEnv'`). Subpath exports are heavily enforced in `package.json`.

## Consequences

- **Positive:** Maximum bundler performance due to single-file AST resolution. Flawless CSS variable inheritance. Complete decoupling of UI styles from the Next.js framework.
- **Negative:** Slightly more verbose import paths for developers (loss of barrel convenience).

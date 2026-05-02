---
name: design-system
description: Design system and theming rules. Use when adding new colors, tokens, or modifying Tailwind CSS.
---

# Design System & Theming Rules

When interacting with the design system, colors, or tokens in this monorepo, AI agents must follow these strict architectural rules:

## 1. Adding New Colors / Tokens

Adding a new dynamic token requires 5 specific steps across the monorepo architecture:

1. **Define the Enum:** Add the new key (e.g., `BASE_NEWCOLOR`) to the `ENV` enum in `packages/helpers/src/getEnv/getEnv.types.ts`.
2. **Handle the Lookup:** Add the corresponding `case` statement in `packages/helpers/src/getEnv/getEnv.ts` providing both Node and `NEXT_PUBLIC_` browser fallbacks.
3. **Map the CSS Variable:** Add the `--base-` mapped variable to the `THEME_STYLES` dictionary in `packages/ui/src/theme.ts` with a hex fallback.
4. **Update Tailwind CSS:** In `packages/ui/src/styles/theme.css`:
   - Map it in `:root` (e.g., `--newcolor: var(--base-newcolor);`).
   - Create muted/inverted variants if required using `color-mix`.
   - Map it into the Tailwind engine inside `@theme inline` (e.g., `--color-newcolor: var(--newcolor);`).
5. **Update Env Example:** Append the new token to `apps/fw-web/.env.example` using the `NEXT_PUBLIC_` prefix.

## 2. Importing Helpers

- **NEVER** use barrel imports for helpers (e.g., `import { getEnv } from '@repo/helpers'`).
- **ALWAYS** use strict pointed imports (e.g., `import { getEnv, ENV } from '@repo/helpers/getEnv'`).
- Barrel files (`index.ts`) are strictly prohibited in `packages/helpers` to ensure optimal tree-shaking and compilation performance.

## 3. Tailwind Configuration

- The UI package's `theme.css` must remain a pure CSS preset and must NOT contain the `@import "tailwindcss";` boot script.
- Consumer apps (Next.js, Storybook) must boot Tailwind in their own entry point and explicitly define `@source` arrays to scan both their local directory and `packages/ui/src`.
- **CRITICAL DANGER (Infinite Loops):** NEVER use broad directory patterns like `@source "..";` in an app's `globals.css`. If Tailwind v4 scans build directories like `.next` or `.turbo`, it will trigger an infinite rebuild loop that panics Turbopack and crashes the server.
- **Explicit Scopes Only:** Always point `@source` exclusively to source folders (e.g., `@source "../app";`, `@source "../modules";`, `@source "../../../packages/ui/src";`).

## 4. DOM Injection & Architecture Reasoning

- **Why we inject via JS:** Standard CSS files cannot natively read `.env` variables. Therefore, `theme.ts` serves as the critical TypeScript bridge—it dynamically reads the environment variables and constructs the `THEME_STYLES` dictionary.
- **The Cascade Rule:** For Tailwind v4 to properly process dynamic variables (like `var(--base-accent-1)`), they MUST be physically attached to the absolute top of the DOM tree.
- **Implementation:** Always apply the `THEME_STYLES` dictionary directly to the root `<html>` tag (via `style={THEME_STYLES}` in Next.js, or via a static execution script in Storybook). Do NOT create a wrapper component like `<ThemeProvider>` for this.

## 5. Radius, Shadows, and Fonts

- **Radius & Shadows:** Do NOT define custom CSS variables for border-radius or shadows. Use standard Tailwind CSS utility classes (e.g., `rounded-lg`, `shadow-md`) to maintain consistency and simplify the theme.
- **Fonts:** Use `--font-primary` and `--font-secondary` variables. These are typically set by the `next/font` system in the application's root layout. In `theme.css`, these are mapped to the `@theme inline` block to provide `font-primary` and `font-secondary` utilities.
- **Neutral Scale:** Avoid manual neutral scales (gray-100, etc.) in the global CSS. Prefer using `color-mix` on the foreground/background or the built-in Tailwind neutral colors if specific gray shades are required.

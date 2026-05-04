---
name: design-system
description: Design system and theming rules. Use when adding new colors, tokens, or modifying Tailwind CSS.
---

# Design System & Theming Rules

When interacting with the design system, colors, or tokens in this monorepo, AI agents must follow these strict architectural rules:

## 1. The Dynamic Design Engine (Absolute Source of Truth)

The design system is a **Dynamic Engine** fed by the **root [DESIGN.md](file:///Users/diegograssino/repos/personal/fragance-wishlist/DESIGN.md)** and/or environment variables.

### Core Constraint: No Magic Hexes

- **STRICT FORBIDDEN**: Never hardcode a hex color (`#XXXXXX`) inside a CSS file.
- **Base Inputs**: All styles must originate from the `--base-*` variables injected by `theme.ts`.
- **Derivations**: If a value (like a dark mode surface or a container variant) is not explicitly provided as an input, it MUST be mathematically derived from the base inputs using `color-mix`. This ensures the entire system (including dark mode) adapts automatically if a base color is changed.

Adding or modifying a core token requires syncing these 4 layers:

1. **The ENV Monolith Enum:** Define the key in `packages/helpers/src/getEnv/getEnv.types.ts`.
2. **The CSS Injection (`theme.ts`):** Map the key to a `--base-*` variable with its exact `DESIGN.md` fallback.
3. **The Variable Engine (`theme.css`):**
   - Map `--base-*` to semantic variables.
   - Use `color-mix` to create derived scales (e.g., `--on-surface-variant: color-mix(in srgb, var(--on-surface) 70%, var(--surface))`).
   - Use `color-mix` for the Dark Mode pivot (e.g., `--surface: color-mix(in srgb, var(--base-surface) 5%, black)`).
4. **The Tailwind Mapper (`@theme inline`):** Expose to Tailwind v4.

### 2. Clean Component Architecture

- **External Constants**: NEVER define static arrays, config objects, or mapping dictionaries inside a component body. Move them to a companion `.constants.ts` file or declare them outside the function to avoid re-allocation on every render.
- **No Inline Styles**: Inline `style={{}}` is strictly prohibited unless the value is truly dynamic at runtime (e.g., animations). Use Tailwind or CSS variables.
- **Class Composition**: Use the `cn()` utility (`packages/ui/src/utils/cn.ts`) for all class merging. Raw string concatenation or template literals for classes are forbidden.
- **Semantic Muted Colors**: Never use alpha-opacity utilities (e.g., `bg-primary/10`) for backgrounds. Always use the provided semantic muted/container variables (e.g., `bg-primary-container` or `bg-success-muted`) to ensure dark mode parity.

### 6. The cn() Utility & Token Registration (CRITICAL)

The `cn()` utility uses `tailwind-merge`, which has a specific conflict resolution logic. Because our custom typography tokens use the `text-` prefix (e.g., `text-body-main`), `tailwind-merge` incorrectly identifies them as **color utilities** and will silently delete intended color classes (e.g., `text-primary`).

- **Mandatory Registration**: Every custom typography size token defined in `DESIGN.md` MUST be manually registered in the `font-size` classGroup inside `packages/ui/src/utils/cn.ts`.
- **Merge Order**: In components, always place the `variant` (color) classes **after** the `size` classes in the `cn()` call to ensure color takes precedence in case of an unregistered collision.
- **Fail-Safe**: If a component's color is not rendering, the first place to check is the `cn.ts` registration array.

### Reproduction Checklist (From Scratch)

1. **Root Specs**: Ensure `DESIGN.md` exists at the root with a valid YAML header.
2. **Enum Mapping**: Map all YAML keys to the `DS_ENV` enum in `packages/helpers`.
3. **Bridge Mapping**: Map every enum key to a `--base-*` CSS variable in `packages/ui/src/theme.ts` with the exact YAML hex as the fallback.
4. **CSS Wiring**: Wire `--base-*` to semantic tokens in `theme.css`. **Use derivations for any scale not explicitly in the YAML.**
5. **Token Registration**: Add all new typography size keys to the `customTwMerge` configuration in `packages/ui/src/utils/cn.ts`.
6. **Root Injection**: Verify `RootLayout` applies `style={THEME_STYLES}` to the `<html>` tag.

## 2. Importing Helpers

- **NEVER** use barrel imports for helpers (e.g., `import { getEnv } from '@repo/helpers'`).
- **ALWAYS** use strict pointed imports (e.g., `import { getEnv, DS_ENV } from '@repo/helpers/getEnv'`).
- Barrel files (`index.ts`) are strictly prohibited in `packages/helpers` to ensure optimal tree-shaking and compilation performance.

## 3. Tailwind Configuration

- The UI package's `theme.css` must remain a pure CSS preset and must NOT contain the `@import "tailwindcss";` boot script.
- Consumer apps (Next.js, Storybook) must boot Tailwind in their own entry point and explicitly define `@source` arrays to scan both their local directory and `packages/ui/src`.
- **CRITICAL DANGER (Infinite Loops):** NEVER use broad directory patterns like `@source "..";` in an app's `globals.css`. If Tailwind v4 scans build directories like `.next` or `.turbo`, it will trigger an infinite rebuild loop that panics Turbopack and crashes the server.
- **Explicit Scopes Only:** Always point `@source` exclusively to source folders (e.g., `@source "../app";`, `@source "../modules";`, `@source "../../../packages/ui/src";`).

## 4. DOM Injection & Architecture Reasoning

- **Why we inject via JS:** Standard CSS files cannot natively read `.env` variables. Therefore, `theme.ts` serves as the critical TypeScript bridge—it dynamically reads the 53 environment variables and constructs the `THEME_STYLES` dictionary.
- **The Cascade Rule:** For Tailwind v4 and the `color-mix` derivations to properly process dynamic variables, they MUST be physically attached to the absolute top of the DOM tree.
- **Implementation:** Always apply the `THEME_STYLES` dictionary directly to the root `<html>` tag (via `style={THEME_STYLES}` in Next.js, or via a static execution script in Storybook). Do NOT create a wrapper component like `<ThemeProvider>` for this.
- **Why keep next/font?:** While we use environment variables for font _sizes_ and _weights_, we retain `next/font` for the font _family_. This is a deliberate performance trade-off to avoid layout shifts (CLS), even though it requires editing `fonts.ts` to change the brand font.

## 5. Component Abstraction Rule

- Core primitive components (`Typography`, `Button`) MUST use the `DESIGN.md` semantic naming (e.g., `<Button variant="primary">`, `<Typography size="display-lg">`).
- **Vendor Lock-in Protection:** If a primitive component is backed by an external UI library, it must act as a _wrapper_ that consumes our `DESIGN.md` props and internally maps them to the library's classes. This ensures the frontend code never changes even if the library is swapped.

---

> **See the root [DESIGN.md](file:///Users/diegograssino/repos/personal/fragance-wishlist/DESIGN.md)** for the official YAML specification. AI agents MUST read this file before making any style changes.

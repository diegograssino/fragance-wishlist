# ADR: Design System Absolute Source of Truth (DESIGN.md)

**Date:** 2026-05-04  
**Status:** Accepted  
**Context:** The design system previously used a mix of environment variables and mathematical `color-mix` derivations in CSS to generate semantic tokens (like containers and fixed variants). This led to visual inconsistencies between Storybook and the Frontend, as well as a loss of precision regarding specific brand hex codes (e.g., "Sophisticated Gold").

## Decision

We have established the **root [DESIGN.md](file:///Users/diegograssino/repos/personal/fragance-wishlist/DESIGN.md)** as the absolute, immutable source of truth for the entire design system architecture.

1. **Exact Hex Enforcement**: Mathematical derivations (like `color-mix`) are strictly prohibited for base themes if a hex code is provided in the YAML specification of `DESIGN.md`.
2. **Monolithic ENV Sync**: All 53+ tokens defined in the YAML must be mapped through the `DS_ENV` enum and injected via the `THEME_STYLES` bridge in `packages/ui/src/theme.ts`.
3. **Fallback Consistency**: The hardcoded fallbacks in `theme.ts` must exactly match the hex codes, font sizes, and weights defined in the root `DESIGN.md`.

## Implementation details (Reproduction Guide)

To reproduce this system from scratch:

1.  **Specification**: Create a root `DESIGN.md` containing a YAML block with `colors`, `typography`, `rounded`, and `spacing` keys.
2.  **Enum Definition**: Define a `DS_ENV` enum in `packages/helpers` for every key in the YAML (e.g., `BASE_PRIMARY`, `BASE_PRIMARY_CONTAINER`).
3.  **Bridge Layer**: Create `packages/ui/src/theme.ts` which:
    - Imports all `DS_ENV` keys.
    - Exports a `THEME_STYLES` object where each key is a CSS variable (e.g., `--base-primary`).
    - Uses a helper to read the environment or fall back to the **exact hex/value** from the `DESIGN.md` YAML.
4.  **CSS Layer**: In `packages/ui/src/styles/theme.css`:
    - Map `--base-*` variables to semantic CSS variables (e.g., `--primary: var(--base-primary)`).
    - Use `@theme inline` to map these semantic variables into Tailwind v4 tokens.
5.  **Injection**: In the `RootLayout` of the consumer app (or Storybook's `preview.ts`), apply `style={THEME_STYLES}` to the `<html>` element.

## Consequences

- **Positive**: Visual parity between all environments (Storybook/Web).
- **Positive**: High precision for brand identity (no more calculated "beige" when it should be "gold").
- **Negative**: Higher maintenance overhead when adding new tokens (requires updating the Enum, the Bridge, and the CSS).

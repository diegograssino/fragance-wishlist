# ADR-004: Custom Tailwind-Merge Configuration for Design Tokens

## Status

Accepted

## Context

Our design system uses custom typography tokens (e.g., `display-lg`, `body-main`) that are mapped to Tailwind utilities with the `text-` prefix (e.g., `text-body-main`).

The `tailwind-merge` library, which powers our `cn()` utility, identifies any utility starting with `text-` as a **color** utility by default. When a component receives both a color variant (e.g., `text-primary`) and a custom size token, `tailwind-merge` identifies them as a conflict and silently removes the color class. This results in all typography components rendering with the default browser text color regardless of the `variant` prop.

## Decision

We will use `extendTailwindMerge` in `packages/ui/src/utils/cn.ts` to explicitly register our custom design system tokens under the `font-size` class group.

```typescript
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "display-lg",
        "headline-md",
        "title-sm",
        "body-main",
        "data-mono",
        "label-caps",
      ],
    },
  },
});
```

## Rationale

- **Prevents Silent Failures**: Ensures that color and size utilities can coexist on the same element.
- **Maintains Optimization**: We still benefit from `tailwind-merge`'s ability to handle other conflicts (like multiple padding or margin classes).
- **Centralized Management**: The `cn()` utility remains the single source of truth for class composition.

## Consequences

- **Maintenance Requirement**: Every time a new typography size is added to `DESIGN.md`, it **MUST** be manually registered in the `classGroups["font-size"]` array in `packages/ui/src/utils/cn.ts`.
- **Naming Constraints**: Avoid using the `text-` prefix for custom utilities that are not related to text (size or color) to prevent further `tailwind-merge` group collisions.

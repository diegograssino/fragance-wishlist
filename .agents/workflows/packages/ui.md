# Shared UI Package (`@repo/ui`) Guidelines

- **Purpose**: This package acts as the core dummy/dumb component library for the workspace.
- **Framework**: React / Tailwind CSS v4.
- **Architecture**:
  - Components MUST remain entirely stateless and agnostic of domain business logic.
  - Do not fetch data inside these components. They should only receive data and emit events via `props` (e.g., `onClick`, `onChange`).
  - Maintain the premium, dynamic design aesthetics (glassmorphism, interactive hovers) outlined in the workspace UI requirements.
  - Avoid coupling components to Next.js specific imports (like `next/link` or `next/image`) unless explicitly abstracted; keep them as raw React components so they can be consumed agnostically.

## Gold Standard Reference

When creating new shared UI components, refer to previously migrated components (like a `Button` or `Card`) inside `packages/ui` as the baseline.

- **Explicit Types**: Every component must export its own explicit TypeScript interface for `props`.
- **Styling**: Use utility libraries (e.g., `clsx` or `tailwind-merge`) effectively to merge conflicting classes dynamically.

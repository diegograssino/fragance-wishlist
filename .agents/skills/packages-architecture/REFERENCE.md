# Monorepo Packages Architecture Reference

## 1. Environment Variable Rules

When interacting with environment variables in this monorepo, AI agents must strictly adhere to the App-Level Wrapper abstraction pattern. Do not bypass the design architecture.

### No Direct `process.env` Access

- **NEVER** read `process.env.VARIABLE_NAME` directly within application code (`apps/fw-web`, `apps/fw-api`) or UI components (`packages/ui`).

### No Direct `getEnv()` Engine Access

- **NEVER** call the generic `getEnv()` engine from `@repo/helpers/getEnv` inside an application component.
- **ALWAYS** use the localized wrapper native to the app you are working in:
  - Inside `packages/ui/*`: use `getDesignSystemEnv(DS_ENV.*)`
  - Inside `apps/fw-web/*`: use `getWebEnv(WEB_ENV.* | DS_ENV.*)`
  - Inside `apps/fw-api/*`: use `getApiEnv(API_ENV.*)`

### Adding a New Environment Variable

If a new environment variable is required by a feature, you must execute this strict checklist:

1. **Update Domain Types:** Add the new key to the correct domain enum (`DS_ENV`, `WEB_ENV`, `API_ENV`, or `STORYBOOK_ENV`) in `packages/helpers/src/getEnv/getEnv.types.ts`. Do NOT create a "SHARED" key. Put it in the domain that owns it.
2. **Implement Fallbacks:** Add the `case` statement in `packages/helpers/src/getEnv/getEnv.ts`. You MUST provide explicit fallback chaining to support both Server (Node.js) and Client (Browser `NEXT_PUBLIC_`) environments seamlessly.
3. **Document in Example Files (Mandatory):** You MUST proactively document the new variable in the local `.env.example` of the app you are working on.

## 2. Shared Helpers Package (`@repo/helpers`)

- **Purpose**: A centralized repository for pure utility functions that are domain-agnostic and shared across both `fw-web` and `fw-api`. (e.g., string formatters, mathematical calculations, standardized validators).
- **Architecture**:
  - All functions MUST be pure and deterministic (given the same input, they always return the exact same output without side-effects).
  - Do NOT import business logic, React components, or TypeORM entities into these helpers.
  - Keep external library dependencies to an absolute minimum to avoid bloating the entire monorepo footprint.

### The "Belongs in Package" Check

Before creating a new utility, the agent MUST perform an explicit boundary analysis:

1. **Does this need to be shared?** If the logic is used across both `fw-web` and `fw-api` (like a universal currency converter), it belongs in `@repo/helpers`.
2. **Is it too specific?** Not every helper is worth moving to the monorepo package. If the helper is highly specific to the frontend (e.g., parsing Next.js URL params like `params.ts`), it should remain locally within `apps/fw-web/helpers/`.

## 3. Shared Types Package (`@repo/types`)

- **Purpose**: The single source of truth for TypeScript types, interfaces, and enums that bridge the boundary between the frontend (`fw-web`) and backend (`fw-api`).
- **Architecture**:
  - Include cross-boundary entities such as API Response interfaces, Database DTOs, and global Domain Enums.
  - Do NOT include types that belong exclusively to the UI layer (like React component props) or exclusively to internal backend processes (like backend request internals).
  - This package should contain absolutely zero runtime logic or classes. It should exclusively compile away or consist of pure `.d.ts` definitions.

### The "Belongs in Package" Check

Before creating a new type or interface, the agent MUST perform an explicit boundary analysis:

1. **Is it a cross-boundary contract?** If a type defines data that crosses between FE and BE (e.g., an API JSON response), it **MUST** go in `@repo/types` to ensure a Single Source of Truth (SSOT).
2. **Is it strictly local?** Some types aren't worth the overhead of the shared package. If a type is purely for a local React Component's internal state, or for an internal backend service process, it must remain local to its respective app.

## 4. Shared UI Package (`@repo/ui`)

- **Purpose**: This package acts as the core dummy/dumb component library for the workspace.
- **Framework**: React / Tailwind CSS v4.
- **Architecture**:
  - Components MUST remain entirely stateless and agnostic of domain business logic.
  - Do not fetch data inside these components. They should only receive data and emit events via `props` (e.g., `onClick`, `onChange`).
  - Maintain the premium, dynamic design aesthetics (glassmorphism, interactive hovers) outlined in the workspace UI requirements.
  - Avoid coupling components to Next.js specific imports (like `next/link` or `next/image`) unless explicitly abstracted; keep them as raw React components so they can be consumed agnostically.

### Gold Standard Reference

When creating new shared UI components, refer to previously migrated components (like a `Button` or `Card`) inside `packages/ui` as the baseline.

- **Explicit Types**: Every component must export its own explicit TypeScript interface for `props`.
- **Styling**: Use utility libraries (e.g., `clsx` or `tailwind-merge`) effectively to merge conflicting classes dynamically.

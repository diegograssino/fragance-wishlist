# Shared Types Package (`@repo/types`) Guidelines

- **Purpose**: The single source of truth for TypeScript types, interfaces, and enums that bridge the boundary between the frontend (`fw-web`) and backend (`fw-api`).
- **Architecture**:
  - Include cross-boundary entities such as API Response interfaces, Database DTOs, and global Domain Enums.
  - Do NOT include types that belong exclusively to the UI layer (like React component props) or exclusively to internal backend processes (like NestJS request internals).
  - This package should contain absolutely zero runtime logic or classes. It should exclusively compile away or consist of pure `.d.ts` definitions.

## The "Belongs in Package" Check

Before creating a new type or interface, the agent MUST perform an explicit boundary analysis:

1. **Is it a cross-boundary contract?** If a type defines data that crosses between FE and BE (e.g., an API JSON response), it **MUST** go in `@repo/types` to ensure a Single Source of Truth (SSOT).
2. **Is it strictly local?** Some types aren't worth the overhead of the shared package. If a type is purely for a local React Component's internal state, or for an internal NestJS service process, it must remain local to its respective app.
   _Always pause and perform this check before locating the file._

## Dependencies Context

This package is strictly for type documentation and contract mapping. Both the API and Web apps will consume these to ensure their endpoints send and receive identically structured data.

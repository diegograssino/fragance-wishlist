# Shared Helpers Package (`@repo/helpers`) Guidelines

- **Purpose**: A centralized repository for pure utility functions that are domain-agnostic and shared across both `fw-web` and `fw-api`. (e.g., string formatters, mathematical calculations, standardized validators).
- **Architecture**:
  - All functions MUST be pure and deterministic (given the same input, they always return the exact same output without side-effects).
  - Do NOT import business logic, React components, or TypeORM entities into these helpers.
  - Keep external library dependencies to an absolute minimum to avoid bloating the entire monorepo footprint.

## The "Belongs in Package" Check
Before creating a new utility, the agent MUST perform an explicit boundary analysis:
1. **Does this need to be shared?** If the logic is used across both `fw-web` and `fw-api` (like a universal currency converter), it belongs in `@repo/helpers`.
2. **Is it too specific?** Not every helper is worth moving to the monorepo package. If the helper is highly specific to the frontend (e.g., parsing Next.js URL params like `params.ts`), it should remain locally within `apps/fw-web/helpers/`. 
*Always pause and perform this check before locating the file.*

## Explicit Anti-Patterns vs Best Practices
**Wrong Way (Anti-pattern)**:
```typescript
// Don't import domain data directly into a generic helper
import { userRepository } from '...';
export const calculateTax = async (userId: string, amount: number) => { ... }
```

**Right Way (Gold Standard)**:
```typescript
// Do keep helpers strictly math/formatting oriented and pure
export const calculateBaseTax = (amount: number, taxRate: number): number => {
    return amount + (amount * taxRate);
};
```

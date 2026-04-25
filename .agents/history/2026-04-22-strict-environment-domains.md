# ADR 0002: Strict Environment Domains & App-Level Wrappers

**Status:** Accepted
**Date:** 2026-04-22

## Context

When managing environment variables across a monorepo, a generic `SHARED_ENV` or global `getEnv()` function introduces severe security risks. Specifically, an attacker compromising Storybook or the Web frontend might gain visibility into Backend/API secrets simply because the TypeScript constraints allow any app to request any key. Next.js statically replaces `NEXT_PUBLIC_` variables, but type-level leakage allows developers to accidentally bundle sensitive variables if they use the wrong key.

## Decision

We implement a **Strict Domain Isolation & App-Level Wrapper Architecture**:

1. **Domain Enums (No "Shared" Keys):**
   `packages/helpers/src/getEnv/getEnv.types.ts` exposes mutually exclusive enums (`DS_ENV`, `WEB_ENV`, `API_ENV`, `STORYBOOK_ENV`). A key belongs to one and only one domain.
2. **The Core Engine is Private to Wrappers:**
   The base `getEnv(key: string)` function in `@repo/helpers` acts merely as a lookup engine evaluating Node `process.env` and `process.env.NEXT_PUBLIC_`.

3. **App-Level Wrappers Enforce Visibility (The Security Boundary):**
   Apps physically do not export wrappers to each other. They define their own wrappers locally, and strictly define which domains they are allowed to read using TypeScript Unions:
   - `packages/ui/src/env.ts` exports `getDesignSystemEnv(key: DS_ENV)`.
   - `apps/fw-web/helpers/env.ts` exports `getWebEnv(key: WEB_ENV | DS_ENV)`.
   - `apps/fw-api/src/utils/env.ts` exports `getApiEnv(key: API_ENV)`.

## Consequences

- **Positive:** Mathematically guarantees that Next.js cannot read an `API_ENV` secret. Eliminates circular dependencies. Defines crystal-clear context boundaries.
- **Negative:** Requires creating a localized wrapper file in each new app. Developers must import from the local wrapper rather than the generic workspace helper.

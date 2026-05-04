---
name: packages-architecture
description: Rules for shared monorepo packages (UI, helpers, types, environment variables). Use when creating cross-boundary logic or deciding where a module belongs.
---

# Monorepo Packages Architecture

## 1. Environment Variables (`@repo/helpers/getEnv`)

- **NO Direct Access**: Never read `process.env.*` directly in apps or UI. Never call the generic `getEnv()` inside an app component.
- **ALWAYS Use Wrappers**:
  - `packages/ui/*`: use `getDesignSystemEnv(DS_ENV.*)`
  - `apps/fw-web/*`: use `getWebEnv(WEB_ENV.* | DS_ENV.*)`
  - `apps/fw-api/*`: use `getApiEnv(API_ENV.*)`
- When adding a variable: Add to domain enum, implement fallback chaining, and document in `.env.example`.

## 2. Shared Helpers (`@repo/helpers`)

- Pure, deterministic utility functions only (no side effects, no React, no TypeORM).
- **Check**: Does it need to be shared? If it's specific to the frontend (e.g., parsing Next.js URL params), keep it local in the app.

## 3. Shared Types (`@repo/types`)

- Cross-boundary contracts (API responses, Database DTOs, Enums).
- **Zero runtime logic**. Only `.d.ts` definitions.
- **Check**: If purely local state or internal backend process, keep local.

## 4. Shared UI (`@repo/ui`)

- React / Tailwind CSS v4. Stateless, generic, dummy components.
- No data fetching. Pass data via `props`.
- Do not couple to Next.js specific imports (`next/link`, `next/image`) unless abstracted.

## 5. Design System Rules (Source of Truth)

- **Absolute Source**: The root `DESIGN.md` dictates all colors, typography, and spacing.
- **Bridge**: `theme.ts` reads `.env` and constructs `THEME_STYLES` with hardcoded fallbacks matching `DESIGN.md`.
- **Injection**: Apply `THEME_STYLES` directly to root `<html>`.
- **No Derivations**: Do not calculate container colors; use the ones provided in the spec.

> See ADR [2026-05-04-design-system-absolute-source-of-truth.md](file:///Users/diegograssino/repos/personal/fragance-wishlist/.agents/history/2026-05-04-design-system-absolute-source-of-truth.md) for details.

---

> **See [REFERENCE.md](REFERENCE.md)** for detailed boundary checks, Anti-Patterns, and the 3-step checklist for Environment Variables.

---
name: testing-strategy
description: Monorepo testing strategy and rules. Use when writing tests, configuring Vitest, or setting up Storybook.
---

# Monorepo Testing Strategy

This document outlines the testing approach across the different applications in this monorepo. We have standardized on **Vitest** as our single test runner to ensure consistency, speed, and great TypeScript support across all environments.

## 1. Storybook (`apps/storybook`)

**Approach:** "Stories as Tests" (Component / UI Testing)

- **Runner:** Vitest (via `@storybook/addon-vitest`)
- **Environment:** Real Headless Browser (Chromium via `@vitest/browser-playwright`)
- **Strategy:** Instead of writing separate test files for UI components, we write stories. Inside these stories, we use the `play` function to simulate user interactions and assert DOM state using Testing Library matchers. Vitest automatically detects these stories and runs them in a real browser.
- **Benefits:** Guarantees real CSS rendering and layout, eliminating false positives common in JSDOM, and reduces duplicate test-writing effort.

## 2. Frontend (`apps/fw-web` or Next.js Apps)

**Approach:** Unit Testing & Logic Testing

- **Runner:** Vitest
- **Environment:** `jsdom` (Simulated Browser DOM)
- **Strategy:** For business logic, hooks, utility functions, and Next.js-specific behaviors (like routing/API routes), we use traditional unit tests (`.test.ts` or `.test.tsx`). We use React Testing Library for component unit tests that don't need the full Storybook browser environment.
- **Benefits:** Extremely fast execution compared to Jest (thanks to esbuild) while still providing a familiar `describe`/`it` API and `vi.fn()` for mocking.

## 3. Backend (`apps/fw-api` or Express Apps)

**Approach:** API & Service Unit Testing

- **Runner:** Vitest
- **Environment:** Node.js
- **Strategy:** We test API endpoints, database queries, and business logic using Vitest. For integration testing endpoints, we can use tools like `supertest` alongside Vitest.
- **Benefits:** Native TypeScript support without compiling via `ts-jest` or Babel, leading to lightning-fast test execution on the backend.

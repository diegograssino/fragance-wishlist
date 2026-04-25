# Storybook Architecture & Rules

This document outlines the strict rules and architectural decisions for the Storybook integration within the monorepo.

## 1. Standalone Host App Architecture

Storybook is not tied to `fw-web` or `fw-api`. It is a dedicated, standalone application located at `apps/storybook`.

- **Builder:** `@storybook/nextjs-vite` (or Vite React equivalent).
- **No Local Components:** `apps/storybook/src` MUST NOT contain component code or stories. It only acts as the compiler and host shell.
- **Port Convention:** Storybook MUST always run on port **3400** to prevent collisions with the Web app (3000), API (3100), and Docker ranges (3200-3300).

## 2. Co-Located Stories

All `.stories.tsx` files MUST live alongside the actual source code of the component they document.

- Components are in `packages/ui/src/`.
- Stories must be named `ComponentName.stories.tsx` in the exact same directory.
- `apps/storybook/.storybook/main.ts` is configured to map to `../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`.

## 3. Environment Variable Enforcement

Storybook operates as a first-class consumer of the `DS_ENV` domain.

- You MUST maintain a localized `.env` and `.env.example` file inside `apps/storybook`.
- This file MUST contain the exact same `NEXT_PUBLIC_BASE_*` tokens as the Next.js app to ensure the `getDesignSystemEnv` wrappers resolve correctly instead of relying on default hex strings.
- **Rule:** Never hardcode colors in `preview.tsx`. Always loop over `THEME_STYLES` from `@repo/ui` and inject it into `document.documentElement.style`.
- **Implementation Detail:** This injection MUST be done as a top-level execution block (e.g., `if (typeof document !== 'undefined') { ... }`) rather than a React `useEffect` or decorator. This prevents `eslint-plugin-react-hooks` violations and improves preview rendering performance.

## 4. Turborepo Caching Strategy

Editing a `.stories.tsx` file MUST NOT invalidate the build cache for the main production apps (`fw-web`, `fw-api`).
To enforce this, Turborepo is configured with strict segregation:

- **`build` Task:** The root `turbo.json` `build` task actively ignores stories via `"inputs": ["$TURBO_DEFAULT$", "!**/*.stories.{tsx,jsx,mdx,ts,js}"]`.
- **`build:storybook` Task:** The `apps/storybook` package exclusively uses `"build:storybook": "storybook build"`. The root `turbo.json` defines this as an independent task.
- **Gitignore:** Build artifacts output to `storybook-static/` which is globally git-ignored.

## Checklist for New Stories

1. Did you create the story in `packages/ui/src/<Component>`?
2. Did you use the official semantic variants (`default`, `accent-1`, `success`, etc.) instead of hardcoded tailwind classes?
3. Did you check if the component needs an environment variable token? If so, did you update `apps/storybook/.env.example`?

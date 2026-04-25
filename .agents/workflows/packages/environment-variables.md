# Environment Variable Rules

When interacting with environment variables in this monorepo, AI agents must strictly adhere to the App-Level Wrapper abstraction pattern. Do not bypass the design architecture.

## 1. No Direct `process.env` Access

- **NEVER** read `process.env.VARIABLE_NAME` directly within application code (`apps/fw-web`, `apps/fw-api`) or UI components (`packages/ui`).

## 2. No Direct `getEnv()` Engine Access

- **NEVER** call the generic `getEnv()` engine from `@repo/helpers/getEnv` inside an application component.
- **ALWAYS** use the localized wrapper native to the app you are working in:
  - Inside `packages/ui/*`: use `getDesignSystemEnv(DS_ENV.*)`
  - Inside `apps/fw-web/*`: use `getWebEnv(WEB_ENV.* | DS_ENV.*)`
  - Inside `apps/fw-api/*`: use `getApiEnv(API_ENV.*)`

## 3. Adding a New Environment Variable

If a new environment variable is required by a feature, you must execute this strict checklist:

### Step 1: Update Domain Types

Add the new key to the correct domain enum (`DS_ENV`, `WEB_ENV`, `API_ENV`, or `STORYBOOK_ENV`) in `packages/helpers/src/getEnv/getEnv.types.ts`.
Do NOT create a "SHARED" key. Put it in the domain that owns it.

### Step 2: Implement Fallbacks

Add the `case` statement in `packages/helpers/src/getEnv/getEnv.ts`. You MUST provide explicit fallback chaining to support both Server (Node.js) and Client (Browser `NEXT_PUBLIC_`) environments seamlessly:

```typescript
case WEB_ENV.NEW_FEATURE_URL:
  return (
    process.env.NEW_FEATURE_URL ||
    process.env.NEXT_PUBLIC_NEW_FEATURE_URL ||
    fallback
  );
```

### Step 3: Document in Example Files (Mandatory)

You MUST proactively document the new variable in the local `.env.example` of the app you are working on.

- Group it logically using `# Comments`.
- Provide a safe, functional default or example value.

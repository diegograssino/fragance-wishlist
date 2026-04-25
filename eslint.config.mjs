import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  {
    // Global ignores: This block MUST NOT have any other keys (like 'files' or 'languageOptions')
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/storybook-static/**",
      "**/.turbo/**",
      "**/__ignored__/**",
      "**/*.d.ts",
      "**/package-lock.json",
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "no-undef": "off", // TypeScript handles this better
      "no-unused-vars": "off", // Handled by @typescript-eslint
    },
  },
];

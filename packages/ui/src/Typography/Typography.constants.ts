export const sizeMapping: Record<string, string> = {
  // DESIGN.md Hierarchy
  "display-lg": "text-display-lg font-primary",
  "headline-md": "text-headline-md font-primary",
  "title-sm": "text-title-sm font-secondary",
  "body-main": "text-body-main font-secondary",
  "data-mono": "text-data-mono font-secondary",
  "label-caps": "text-label-caps font-secondary",
};

export const weightMapping: Record<string, string> = {
  light: "font-light",
  default: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const variantMapping: Record<string, string> = {
  "on-surface": "text-on-surface",
  "on-surface-variant": "text-on-surface-variant",
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  success: "text-success",
  error: "text-error",
  alert: "text-alert",
  info: "text-info",
};

export const booleanMappings = {
  truncate: "truncate",
  shadow: "drop-shadow-sm",
  disabled: "opacity-50 cursor-not-allowed",
};

export const DEFAULT_TYPOGRAPHY = {
  size: "body-main",
  weight: "default",
} as const;

export const TAG_TYPOGRAPHY_DEFAULTS: Record<
  string,
  { size: string; weight: string }
> = {
  h1: { size: "display-lg", weight: "bold" },
  h2: { size: "headline-md", weight: "bold" },
  h3: { size: "title-sm", weight: "semibold" },
  h4: { size: "title-sm", weight: "semibold" },
};

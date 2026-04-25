export const sizeMapping: Record<string, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
};

export const weightMapping: Record<string, string> = {
  light: "font-light",
  default: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const variantMapping: Record<string, string> = {
  default: "text-foreground",
  muted: "text-foreground-muted",
  inverted: "text-foreground-inverted",
  "accent-1": "text-accent-1",
  "accent-2": "text-accent-2",
  "accent-3": "text-accent-3",
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

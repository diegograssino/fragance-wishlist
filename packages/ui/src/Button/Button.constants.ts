export const variantStyles: Record<string, string> = {
  default: "bg-foreground text-background hover:bg-foreground-muted disabled:bg-foreground-muted disabled:text-background",
  "accent-1": "bg-accent-1 text-foreground hover:bg-accent-1-muted disabled:bg-accent-1-muted disabled:text-foreground-muted",
  "accent-2": "bg-accent-2 text-foreground hover:bg-accent-2-muted disabled:bg-accent-2-muted disabled:text-foreground-muted",
  "accent-3": "bg-accent-3 text-background hover:bg-accent-3-muted disabled:bg-accent-3-muted disabled:text-background",
  outline: "border border-foreground text-foreground hover:bg-foreground-muted disabled:border-foreground-muted disabled:text-foreground-muted",
  ghost: "text-foreground hover:bg-foreground-muted disabled:text-foreground-muted",
};

export const sizeStyles: Record<string, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-14 px-8 text-lg flex-shrink-0",
  icon: "h-11 w-11 flex items-center justify-center p-0",
};

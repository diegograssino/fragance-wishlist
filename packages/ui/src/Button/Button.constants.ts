export const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-fixed disabled:bg-surface-variant disabled:text-on-surface-variant",
  secondary:
    "bg-secondary text-on-secondary hover:bg-secondary-fixed disabled:bg-surface-variant disabled:text-on-surface-variant",
  tertiary:
    "bg-tertiary text-on-tertiary hover:bg-tertiary-fixed disabled:bg-surface-variant disabled:text-on-surface-variant",
  surface:
    "bg-surface text-on-surface hover:bg-surface-dim disabled:bg-surface-variant disabled:text-on-surface-variant",
  success:
    "bg-success text-on-success hover:bg-success-muted disabled:bg-surface-variant disabled:text-on-surface-variant",
  error:
    "bg-error text-on-error hover:bg-error-container disabled:bg-surface-variant disabled:text-on-surface-variant",
  alert:
    "bg-alert text-on-alert hover:bg-alert-muted disabled:bg-surface-variant disabled:text-on-surface-variant",
  info: "bg-info text-on-info hover:bg-info-muted disabled:bg-surface-variant disabled:text-on-surface-variant",
  outline:
    "border border-outline text-on-surface hover:bg-surface-dim disabled:border-outline-variant disabled:text-outline-variant",
  ghost: "text-on-surface hover:bg-surface-dim disabled:text-outline-variant",
};

export const sizeStyles: Record<string, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-14 px-8 text-lg flex-shrink-0",
  icon: "h-11 w-11 flex items-center justify-center p-0",
};

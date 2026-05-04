import React from "react";
import { DS_ENV } from "@repo/helpers/getEnv";
import { getDesignSystemEnv } from "./env";

/**
 * Design System Fallbacks
 *
 * These values are the absolute source of truth from DESIGN.md.
 * They are used if the corresponding environment variable is not set.
 */
const DS_FALLBACKS: Record<DS_ENV, string> = {
  // Surface
  [DS_ENV.BASE_SURFACE]: "#f9f9f9",
  [DS_ENV.BASE_SURFACE_DIM]: "#dadada",
  [DS_ENV.BASE_SURFACE_BRIGHT]: "#f9f9f9",
  [DS_ENV.BASE_SURFACE_CONTAINER_LOWEST]: "#ffffff",
  [DS_ENV.BASE_SURFACE_CONTAINER_LOW]: "#f3f3f3",
  [DS_ENV.BASE_SURFACE_CONTAINER]: "#eeeeee",
  [DS_ENV.BASE_SURFACE_CONTAINER_HIGH]: "#e8e8e8",
  [DS_ENV.BASE_SURFACE_CONTAINER_HIGHEST]: "#e2e2e2",
  [DS_ENV.BASE_ON_SURFACE]: "#1b1b1b",
  [DS_ENV.BASE_ON_SURFACE_VARIANT]: "#4c4546",
  [DS_ENV.BASE_INVERSE_SURFACE]: "#303030",
  [DS_ENV.BASE_INVERSE_ON_SURFACE]: "#f1f1f1",
  [DS_ENV.BASE_OUTLINE]: "#7e7576",
  [DS_ENV.BASE_OUTLINE_VARIANT]: "#cfc4c5",
  [DS_ENV.BASE_SURFACE_TINT]: "#5e5e5e",
  [DS_ENV.BASE_SURFACE_VARIANT]: "#e2e2e2",
  [DS_ENV.BASE_BACKGROUND]: "#f9f9f9",
  [DS_ENV.BASE_ON_BACKGROUND]: "#1b1b1b",

  // Primary
  [DS_ENV.BASE_PRIMARY]: "#000000",
  [DS_ENV.BASE_ON_PRIMARY]: "#ffffff",
  [DS_ENV.BASE_PRIMARY_CONTAINER]: "#1b1b1b",
  [DS_ENV.BASE_ON_PRIMARY_CONTAINER]: "#848484",
  [DS_ENV.BASE_INVERSE_PRIMARY]: "#c6c6c6",
  [DS_ENV.BASE_PRIMARY_FIXED]: "#e2e2e2",
  [DS_ENV.BASE_PRIMARY_FIXED_DIM]: "#c6c6c6",
  [DS_ENV.BASE_ON_PRIMARY_FIXED]: "#1b1b1b",
  [DS_ENV.BASE_ON_PRIMARY_FIXED_VARIANT]: "#474747",

  // Secondary
  [DS_ENV.BASE_SECONDARY]: "#735c00",
  [DS_ENV.BASE_ON_SECONDARY]: "#ffffff",
  [DS_ENV.BASE_SECONDARY_CONTAINER]: "#fed65b",
  [DS_ENV.BASE_ON_SECONDARY_CONTAINER]: "#745c00",
  [DS_ENV.BASE_SECONDARY_FIXED]: "#ffe088",
  [DS_ENV.BASE_SECONDARY_FIXED_DIM]: "#e9c349",
  [DS_ENV.BASE_ON_SECONDARY_FIXED]: "#241a00",
  [DS_ENV.BASE_ON_SECONDARY_FIXED_VARIANT]: "#574500",

  // Tertiary
  [DS_ENV.BASE_TERTIARY]: "#000000",
  [DS_ENV.BASE_ON_TERTIARY]: "#ffffff",
  [DS_ENV.BASE_TERTIARY_CONTAINER]: "#1b1b1b",
  [DS_ENV.BASE_ON_TERTIARY_CONTAINER]: "#848484",
  [DS_ENV.BASE_TERTIARY_FIXED]: "#e2e2e2",
  [DS_ENV.BASE_TERTIARY_FIXED_DIM]: "#c6c6c6",
  [DS_ENV.BASE_ON_TERTIARY_FIXED]: "#1b1b1b",
  [DS_ENV.BASE_ON_TERTIARY_FIXED_VARIANT]: "#474747",

  // Error
  [DS_ENV.BASE_ERROR]: "#ba1a1a",
  [DS_ENV.BASE_ON_ERROR]: "#ffffff",
  [DS_ENV.BASE_ERROR_CONTAINER]: "#ffdad6",
  [DS_ENV.BASE_ON_ERROR_CONTAINER]: "#93000a",

  // Success / Alert / Info
  [DS_ENV.BASE_SUCCESS]: "#2e7d32",
  [DS_ENV.BASE_SUCCESS_MUTED]: "#e8f5e9",
  [DS_ENV.BASE_ALERT]: "#ed6c02",
  [DS_ENV.BASE_ALERT_MUTED]: "#fff4e5",
  [DS_ENV.BASE_INFO]: "#0288d1",
  [DS_ENV.BASE_INFO_MUTED]: "#e1f5fe",

  // Typography - display-lg
  [DS_ENV.BASE_TYPOGRAPHY_DISPLAY_LG_SIZE]: "48px",
  [DS_ENV.BASE_TYPOGRAPHY_DISPLAY_LG_WEIGHT]: "700",
  [DS_ENV.BASE_TYPOGRAPHY_DISPLAY_LG_LINEHEIGHT]: "1.2",
  [DS_ENV.BASE_TYPOGRAPHY_DISPLAY_LG_LETTERSPACING]: "-0.02em",

  // Typography - headline-md
  [DS_ENV.BASE_TYPOGRAPHY_HEADLINE_MD_SIZE]: "32px",
  [DS_ENV.BASE_TYPOGRAPHY_HEADLINE_MD_WEIGHT]: "600",
  [DS_ENV.BASE_TYPOGRAPHY_HEADLINE_MD_LINEHEIGHT]: "1.3",

  // Typography - title-sm
  [DS_ENV.BASE_TYPOGRAPHY_TITLE_SM_SIZE]: "20px",
  [DS_ENV.BASE_TYPOGRAPHY_TITLE_SM_WEIGHT]: "600",
  [DS_ENV.BASE_TYPOGRAPHY_TITLE_SM_LINEHEIGHT]: "1.5",
  [DS_ENV.BASE_TYPOGRAPHY_TITLE_SM_LETTERSPACING]: "0.01em",

  // Typography - body-main
  [DS_ENV.BASE_TYPOGRAPHY_BODY_MAIN_SIZE]: "16px",
  [DS_ENV.BASE_TYPOGRAPHY_BODY_MAIN_WEIGHT]: "400",
  [DS_ENV.BASE_TYPOGRAPHY_BODY_MAIN_LINEHEIGHT]: "1.6",

  // Typography - data-mono
  [DS_ENV.BASE_TYPOGRAPHY_DATA_MONO_SIZE]: "14px",
  [DS_ENV.BASE_TYPOGRAPHY_DATA_MONO_WEIGHT]: "600",
  [DS_ENV.BASE_TYPOGRAPHY_DATA_MONO_LINEHEIGHT]: "1",
  [DS_ENV.BASE_TYPOGRAPHY_DATA_MONO_LETTERSPACING]: "0.05em",

  // Typography - label-caps
  [DS_ENV.BASE_TYPOGRAPHY_LABEL_CAPS_SIZE]: "12px",
  [DS_ENV.BASE_TYPOGRAPHY_LABEL_CAPS_WEIGHT]: "700",
  [DS_ENV.BASE_TYPOGRAPHY_LABEL_CAPS_LINEHEIGHT]: "1",

  // Rounded
  [DS_ENV.BASE_ROUNDED_SM]: "0.125rem",
  [DS_ENV.BASE_ROUNDED_DEFAULT]: "0.25rem",
  [DS_ENV.BASE_ROUNDED_MD]: "0.375rem",
  [DS_ENV.BASE_ROUNDED_LG]: "0.5rem",
  [DS_ENV.BASE_ROUNDED_XL]: "0.75rem",
  [DS_ENV.BASE_ROUNDED_FULL]: "9999px",

  // Spacing
  [DS_ENV.BASE_SPACING_BASE]: "8px",
  [DS_ENV.BASE_SPACING_XS]: "4px",
  [DS_ENV.BASE_SPACING_SM]: "12px",
  [DS_ENV.BASE_SPACING_MD]: "24px",
  [DS_ENV.BASE_SPACING_LG]: "48px",
  [DS_ENV.BASE_SPACING_XL]: "80px",
  [DS_ENV.BASE_SPACING_CONTAINER_MAX]: "1440px",
  [DS_ENV.BASE_SPACING_GUTTER]: "24px",
};

/**
 * THEME_STYLES
 *
 * Automated construction of the design system CSS variables.
 * Maps DS_ENV keys to --base-* variables using the DESIGN.md fallbacks.
 *
 * Applying this to the <html> tag ensures Tailwind v4 can consume
 * the variables as root tokens.
 */
export const THEME_STYLES = Object.entries(DS_FALLBACKS).reduce(
  (acc, [envKey, fallback]) => {
    // Transform BASE_PRIMARY to --base-primary
    const cssVarName = `--${envKey.toLowerCase().replace(/_/g, "-")}`;
    acc[cssVarName] = getDesignSystemEnv(envKey as DS_ENV, fallback);
    return acc;
  },
  {} as Record<string, string>,
) as React.CSSProperties;

import React from "react";
import { DS_ENV } from "@repo/helpers/getEnv";
import { getDesignSystemEnv } from "./env";

export const THEME_STYLES: React.CSSProperties = {
  "--base-background": getDesignSystemEnv(DS_ENV.BASE_BACKGROUND, "#FFFBF1"),
  "--base-accent-1": getDesignSystemEnv(DS_ENV.BASE_ACCENT_1, "#FFF2D0"),
  "--base-accent-2": getDesignSystemEnv(DS_ENV.BASE_ACCENT_2, "#FFB2B2"),
  "--base-accent-3": getDesignSystemEnv(DS_ENV.BASE_ACCENT_3, "#E36A6A"),
  "--base-foreground": getDesignSystemEnv(DS_ENV.BASE_FOREGROUND, "#2A2421"),
  "--base-success": getDesignSystemEnv(DS_ENV.BASE_SUCCESS, "#10B981"),
  "--base-error": getDesignSystemEnv(DS_ENV.BASE_ERROR, "#EF4444"),
  "--base-alert": getDesignSystemEnv(DS_ENV.BASE_ALERT, "#F59E0B"),
  "--base-info": getDesignSystemEnv(DS_ENV.BASE_INFO, "#3B82F6"),
} as React.CSSProperties;

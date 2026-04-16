import React, { ElementType, ReactNode } from "react";
import { ThemeSize, ThemeVariant, ThemeWeight } from "../types";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  weight?: ThemeWeight;
  size?: ThemeSize;
  variant?: ThemeVariant;
  truncate?: boolean;
  shadow?: boolean;
  disabled?: boolean;
}

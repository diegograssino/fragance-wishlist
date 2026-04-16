import React, { ElementType } from "react";
import { ThemeVariant, ThemeSize } from "../types";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ThemeVariant;
  size?: ThemeSize;
  as?: ElementType;
  href?: string;
  disabled?: boolean;
}

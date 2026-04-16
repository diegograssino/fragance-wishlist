import { ElementType } from "react";
import { ThemeSize, ThemeWeight } from "../types";

export const getTypographyDefaults = (Tag: ElementType): { defaultSize: ThemeSize; defaultWeight: ThemeWeight } => {
  switch (Tag) {
    case "h1":
      return { defaultSize: "4xl", defaultWeight: "bold" };
    case "h2":
      return { defaultSize: "3xl", defaultWeight: "bold" };
    case "h3":
      return { defaultSize: "2xl", defaultWeight: "semibold" };
    case "h4":
      return { defaultSize: "xl", defaultWeight: "semibold" };
    default:
      return { defaultSize: "md", defaultWeight: "default" };
  }
};

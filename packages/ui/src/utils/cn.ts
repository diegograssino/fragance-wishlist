import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Custom tailwind-merge configuration to handle our design system tokens.
 * This prevents 'text-' size utilities from conflicting with 'text-' color utilities.
 */
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "display-lg",
        "headline-md",
        "title-sm",
        "body-main",
        "data-mono",
        "label-caps",
      ],
    },
  },
});

/**
 * Utility to merge tailwind classes with clsx and tailwind-merge.
 * This ensures that conditional classes are handled correctly and
 * conflicting tailwind classes are merged (last one wins).
 */
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

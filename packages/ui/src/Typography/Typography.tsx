import React from "react";
import { cn } from "../utils/cn";
import { TypographyProps } from "./Typography.types";
import {
  sizeMapping,
  weightMapping,
  variantMapping,
  booleanMappings,
  TAG_TYPOGRAPHY_DEFAULTS,
  DEFAULT_TYPOGRAPHY,
} from "./Typography.constants";

const Typography = ({
  children,
  as: Tag = "p",
  weight,
  size,
  variant = "on-surface",
  truncate = false,
  shadow = false,
  disabled = false,
  className,
  ...otherProps
}: TypographyProps) => {
  const defaults =
    (typeof Tag === "string" ? TAG_TYPOGRAPHY_DEFAULTS[Tag] : null) ||
    DEFAULT_TYPOGRAPHY;

  const finalSize = size || defaults.size;
  const finalWeight = weight || defaults.weight;

  return (
    <Tag
      {...otherProps}
      className={cn(
        sizeMapping[finalSize as string],
        weightMapping[finalWeight as string],
        truncate && booleanMappings.truncate,
        shadow && booleanMappings.shadow,
        disabled && booleanMappings.disabled,
        variantMapping[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;

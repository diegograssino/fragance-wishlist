import React from "react";
import clsx from "clsx";
import { TypographyProps } from "./Typography.types";
import {
  sizeMapping,
  weightMapping,
  variantMapping,
  booleanMappings,
} from "./Typography.constants";
import { getTypographyDefaults } from "./Typography.helpers";

const Typography = ({
  children,
  as: Tag = "p",
  weight,
  size,
  variant = "default",
  truncate = false,
  shadow = false,
  disabled = false,
  className,
  ...otherProps
}: TypographyProps) => {
  const { defaultSize, defaultWeight } = getTypographyDefaults(Tag);

  const finalSize = size || defaultSize;
  const finalWeight = weight || defaultWeight;

  return (
    <Tag
      {...otherProps}
      className={clsx(
        variantMapping[variant],
        sizeMapping[finalSize as string],
        weightMapping[finalWeight as string],
        truncate && booleanMappings.truncate,
        shadow && booleanMappings.shadow,
        disabled && booleanMappings.disabled,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;

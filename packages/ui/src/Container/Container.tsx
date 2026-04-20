import { forwardRef } from "react";
import clsx from "clsx";
import { ContainerProps } from "./Container.types";

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, as: Tag = "div", className, ...otherProps }, ref) => {
    return (
      <Tag
        ref={ref}
        className={clsx(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
          className,
        )}
        {...otherProps}
      >
        {children}
      </Tag>
    );
  },
);

Container.displayName = "Container";

export default Container;

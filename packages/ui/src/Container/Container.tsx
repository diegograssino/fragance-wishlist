import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { ContainerProps } from "./Container.types";

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, as: Tag = "div", className, ...otherProps }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
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

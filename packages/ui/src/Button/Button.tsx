import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "../utils/cn";
import { ButtonProps } from "./Button.types";
import { variantStyles, sizeStyles } from "./Button.constants";

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      as,
      href,
      disabled = false,
      type = "button",
      className,
      ...otherProps
    },
    ref,
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:pointer-events-none",
      variantStyles[variant as string],
      sizeStyles[size as string],
      className,
    );

    if (as === Link || href) {
      const restLinkProps = otherProps as Omit<
        React.ComponentPropsWithoutRef<typeof Link>,
        "href"
      >;
      return (
        <Link
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href || "#"}
          className={classes}
          {...restLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={classes}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

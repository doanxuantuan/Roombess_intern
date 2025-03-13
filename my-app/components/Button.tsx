import { faBone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[10px] t-hl-bold cursor-pointer select-none transition-all",
  {
    variants: {
      variant: {
        default: "",
        primary: "text-base-black bg-primary",
        "primary-800": "text-base-white bg-primary-800",
        "neutrals-200-outline": "border border-neutrals-200 text-base-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      children,
      loading,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, className }),
          props.disabled && "opacity-70 cursor-not-allowed"
        )}
        ref={ref}
        {...props}
        {...(!loading && !props.disabled && { onClick })}
        disabled={loading}
      >
        {children}
        {loading && (
          <FontAwesomeIcon icon={faBone} className="mr-1.5 animate-spin" />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

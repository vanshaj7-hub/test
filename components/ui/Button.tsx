import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import {
  buttonBaseClasses,
  buttonVariants,
  type ButtonVariant,
} from "@/components/ui/buttonVariants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonBaseClasses,
          "disabled:pointer-events-none disabled:opacity-50",
          variant !== "link" && "min-h-11",
          buttonVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

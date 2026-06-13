import {
  buttonBaseClasses,
  buttonVariants,
  type ButtonVariant,
} from "@/components/ui/buttonVariants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonBaseClasses,
        variant !== "link" && "min-h-11",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

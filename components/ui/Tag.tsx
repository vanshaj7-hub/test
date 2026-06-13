import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  asButton?: boolean;
}

export function Tag({
  className,
  active = false,
  asButton = false,
  children,
  ...props
}: TagProps) {
  const classes = cn(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
    active
      ? "bg-indigo-500 text-white dark:bg-indigo-400 dark:text-zinc-900"
      : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    asButton && "cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 dark:hover:bg-indigo-950 dark:hover:text-indigo-300",
    !asButton && "pointer-events-none",
    className
  );

  if (asButton) {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}

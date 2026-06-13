import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900",
        hover &&
          "transition-shadow hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-400/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  id?: string;
}

export function Section({
  className,
  title,
  subtitle,
  id,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("landing-section py-16 md:py-24", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="mb-12 max-w-2xl">
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="landing-subtitle mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

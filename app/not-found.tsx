import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <FadeIn className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <ButtonLink href="/" className="mt-8">
          Back to Home
        </ButtonLink>
      </FadeIn>
    </div>
  );
}

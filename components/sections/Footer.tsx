import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            © {year} All rights reserved.
          </p>
        </div>

        <SocialLinks variant="icons" />
      </div>
    </footer>
  );
}

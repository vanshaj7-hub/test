import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export function AboutTeaser() {
  return (
    <Section id="about">
      <FadeIn>
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-12 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 md:text-3xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {siteConfig.shortBio} I blend engineering rigor with visual craft to
            build products that are fast, accessible, and a joy to use.
          </p>
          <ButtonLink href="/about" variant="link" className="mt-6">
            Read more about me →
          </ButtonLink>
        </div>
      </FadeIn>
    </Section>
  );
}

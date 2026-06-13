import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export function ContactCTA() {
  return (
    <Section>
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 px-8 py-16 text-center md:px-16">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-indigo-100">
              I&apos;m open to full-time roles and select freelance projects.
              Drop me a line and let&apos;s chat.
            </p>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="mt-8 border-0 bg-white text-indigo-600 hover:bg-indigo-50"
            >
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

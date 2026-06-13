import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for full-time roles or freelance projects.`,
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Have a project in mind or want to chat? I'd love to hear from you."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <ContactForm />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="mt-2 inline-block text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
              >
                {siteConfig.links.email}
              </a>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Social
              </h2>
              <ul className="mt-2 space-y-2" role="list">
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I typically respond within 1–2 business days. For urgent inquiries,
                email is the fastest way to reach me.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { getSkillsForAbout } from "@/lib/skills";
import { siteConfig } from "@/lib/site";

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1" aria-label={`Proficiency level ${level} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < level
              ? "bg-indigo-500 dark:bg-indigo-400"
              : "bg-zinc-200 dark:bg-zinc-700"
          }`}
        />
      ))}
    </div>
  );
}

export function AboutContent() {
  const skillGroups = getSkillsForAbout();

  return (
    <Section title="About" subtitle={siteConfig.role}>
      <div className="grid gap-12 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {siteConfig.longBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <SocialLinks className="mt-8" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-6xl font-bold text-white">
            AM
          </div>
        </FadeIn>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Skills
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.1}>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-4" role="list">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">
                        {skill.name}
                      </span>
                      <ProficiencyDots level={skill.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.3} className="mt-16">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
            Currently
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Open to full-time senior/staff engineering roles and select freelance
            projects. Based remotely, working across US time zones.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

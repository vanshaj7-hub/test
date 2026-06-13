import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/utils";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "Redis", level: 3 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "UI/UX Design", level: 4 },
      { name: "Design Systems", level: 5 },
      { name: "Figma", level: 5 },
      { name: "Accessibility", level: 4 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "Vercel / CI/CD", level: 4 },
      { name: "Storybook", level: 4 },
    ],
  },
];

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
  return (
    <Section title="About" subtitle={siteConfig.role}>
      <div className="grid gap-12 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {siteConfig.longBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
            >
              GitHub →
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
            >
              LinkedIn →
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
            >
              Email →
            </a>
          </div>
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

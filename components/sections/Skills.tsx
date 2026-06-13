import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "REST APIs"],
  },
  {
    category: "Design",
    skills: ["Figma", "Design Systems", "UI/UX", "Prototyping", "Accessibility"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Vercel", "Storybook", "CI/CD"],
  },
];

export function Skills() {
  return (
    <Section
      title="Skills & Tools"
      subtitle="Technologies I use to ship polished, production-ready products."
      id="skills"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.1}>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

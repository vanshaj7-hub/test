import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Tag } from "@/components/ui/Tag";
import { Section } from "@/components/ui/Section";
import type { Project } from "@/lib/projects";
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={project.image}
          alt={`${project.title} hero image`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <Section>
        <FadeIn>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </ButtonLink>
              )}
              {project.repoUrl && (
                <ButtonLink href={project.repoUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
                  View Code
                </ButtonLink>
              )}
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {[
              { title: "Overview", content: project.overview },
              { title: "Challenge", content: project.challenge },
              { title: "Solution", content: project.solution },
              { title: "Results", content: project.results },
            ].map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.1}>
                <section>
                  <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {section.content}
                  </p>
                </section>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <aside className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:sticky lg:top-24">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                Tech Stack
              </h2>
              <ul className="mt-4 space-y-2" role="list">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                {project.liveUrl && (
                  <ButtonLink
                    href={project.liveUrl}
                    className="w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </ButtonLink>
                )}
                {project.repoUrl && (
                  <ButtonLink
                    href={project.repoUrl}
                    variant="secondary"
                    className="w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </ButtonLink>
                )}
              </div>
            </aside>
          </FadeIn>
        </div>

        <FadeIn className="mt-16">
          <ButtonLink href="/projects" variant="ghost">
            ← Back to Projects
          </ButtonLink>
        </FadeIn>
      </Section>
    </>
  );
}

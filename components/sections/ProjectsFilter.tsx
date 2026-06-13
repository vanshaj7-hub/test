"use client";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface ProjectsFilterProps {
  projects: Project[];
  tags: string[];
}

export function ProjectsFilter({ projects, tags }: ProjectsFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <Section
      title="All Projects"
      subtitle="Browse by technology or discipline."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by tag">
        <Tag asButton active={activeTag === null} onClick={() => setActiveTag(null)}>
          All
        </Tag>
        {tags.map((tag) => (
          <Tag
            key={tag}
            asButton
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-zinc-500 dark:text-zinc-400">
          No projects match this filter.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <Card hover className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-zinc-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </Section>
  );
}

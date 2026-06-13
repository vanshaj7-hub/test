"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/projects";
import { useMemo, useState } from "react";

interface ProjectsFilterProps {
  projects: Project[];
  tags: string[];
}

export function ProjectsFilter({ projects, tags }: ProjectsFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
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
              <ProjectCard
                project={project}
                imageSizes="(max-width: 640px) 100vw, 50vw"
              />
            </FadeIn>
          ))}
        </div>
      )}
    </Section>
  );
}

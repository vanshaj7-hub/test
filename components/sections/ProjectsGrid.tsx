import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import type { Project } from "@/lib/projects";

interface ProjectsGridProps {
  projects: Project[];
  showViewAll?: boolean;
  title?: string;
  subtitle?: string;
}

export function ProjectsGrid({
  projects,
  showViewAll = false,
  title = "Featured Projects",
  subtitle = "Selected work spanning full-stack development and interface design.",
}: ProjectsGridProps) {
  return (
    <Section title={title} subtitle={subtitle} id="projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <ProjectCard project={project} tagLimit={3} />
          </FadeIn>
        ))}
      </div>

      {showViewAll && (
        <FadeIn className="mt-12 text-center">
          <ButtonLink href="/projects" variant="secondary">
            View All Projects
          </ButtonLink>
        </FadeIn>
      )}
    </Section>
  );
}

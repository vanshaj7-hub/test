import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  tagLimit?: number;
  imageSizes?: string;
}

export function ProjectCard({
  project,
  tagLimit,
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ProjectCardProps) {
  const tags =
    typeof tagLimit === "number" ? project.tags.slice(0, tagLimit) : project.tags;

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card hover className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={imageSizes}
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
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}

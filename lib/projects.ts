export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  date: string;
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: string;
};

import project1 from "@/content/projects/flowstate.json";
import project2 from "@/content/projects/pixelcraft.json";
import project3 from "@/content/projects/devpulse.json";
import project4 from "@/content/projects/meridian.json";
import project5 from "@/content/projects/canvas-api.json";

const projects: Project[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
] as Project[];

export function getAllProjects(): Project[] {
  return [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter((p) => p.tags.includes(tag));
}

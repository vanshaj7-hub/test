import fs from "fs";
import path from "path";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

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

function loadProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
      return JSON.parse(raw) as Project;
    });
}

let cachedProjects: Project[] | null = null;

function getProjects(): Project[] {
  if (!cachedProjects) {
    cachedProjects = loadProjects();
  }

  return cachedProjects;
}

export function getAllProjects(): Project[] {
  return [...getProjects()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getProjects().map((project) => project.slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getProjects().forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

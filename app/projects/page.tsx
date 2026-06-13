import { ProjectsFilter } from "@/components/sections/ProjectsFilter";
import { getAllProjects, getAllTags } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of full-stack development and design projects — from real-time collaboration tools to design systems and analytics dashboards.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllTags();

  return <ProjectsFilter projects={projects} tags={tags} />;
}

import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Skills } from "@/components/sections/Skills";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <Hero />
      <ProjectsGrid projects={featuredProjects} showViewAll />
      <Skills />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}

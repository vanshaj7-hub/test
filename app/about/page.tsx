import { AboutContent } from "@/components/sections/AboutContent";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — background, skills, and what I'm working on.`,
};

export default function AboutPage() {
  return <AboutContent />;
}

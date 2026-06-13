import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Alex Morgan",
  title: "Alex Morgan — Full-Stack Developer & Designer",
  description:
    "Full-stack developer and designer building fast, accessible web experiences with React, Next.js, and thoughtful UI craft.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/images/og-default.png",
  links: {
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    email: "hello@alexmorgan.dev",
  },
  role: "Full-Stack Developer & Designer",
  shortBio:
    "I build performant web applications with clean interfaces and solid engineering foundations.",
  longBio: [
    "I'm a full-stack developer with a passion for design systems, developer experience, and shipping products that feel as good as they work. Over the past six years, I've led frontend architecture at startups, built APIs that scale, and crafted interfaces that convert.",
    "My approach blends technical rigor with visual craft — I care about Lighthouse scores and pixel-perfect spacing in equal measure. Whether it's a SaaS dashboard, a marketing site, or an internal tool, I focus on clarity, accessibility, and maintainability.",
    "When I'm not coding, I write about web performance, contribute to open source, and experiment with generative design tools. I'm currently open to full-time roles and select freelance projects.",
  ],
};

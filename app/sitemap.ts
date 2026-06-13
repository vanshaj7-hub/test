import { getAllPostSlugs } from "@/lib/blog";
import { getAllProjectSlugs } from "@/lib/projects";
import { navLinks, siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: `${baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date(),
    changeFrequency:
      link.href === "/"
        ? "monthly"
        : link.href === "/contact"
          ? "yearly"
          : link.href === "/projects" || link.href === "/blog"
            ? "weekly"
            : "monthly",
    priority:
      link.href === "/"
        ? 1
        : link.href === "/projects"
          ? 0.9
          : link.href === "/blog"
            ? 0.8
            : link.href === "/about"
              ? 0.7
              : 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}

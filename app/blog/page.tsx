import { BlogList } from "@/components/sections/BlogList";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on web development, design systems, accessibility, and building performant web applications.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}

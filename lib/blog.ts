import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { PluggableList } from "unified";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: React.ReactElement;
};

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tags: (data.tags as string[]) || [],
    excerpt: data.excerpt as string,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(slug: string, limit = 2): BlogPostMeta[] {
  const current = getPostMeta(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .filter((p) => p.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit);
}

const rehypePlugins: PluggableList = [
  [
    rehypePrettyCode,
    {
      theme: {
        dark: "github-dark",
        light: "github-light",
      },
      keepBackground: false,
    },
  ],
];

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins,
      },
    },
  });

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tags: (data.tags as string[]) || [],
    excerpt: data.excerpt as string,
    readingTime: calculateReadingTime(content),
    content: mdxContent,
  };
}

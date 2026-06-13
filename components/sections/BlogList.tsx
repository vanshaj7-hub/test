import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import Link from "next/link";

interface BlogListProps {
  posts: BlogPostMeta[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <Section title="Blog" subtitle="Thoughts on web development, design, and craft.">
      <div className="space-y-6">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.1}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <Card hover>
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-zinc-900 group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                  {post.title}
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

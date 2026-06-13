import { ButtonLink } from "@/components/ui/ButtonLink";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import Link from "next/link";

interface BlogPostLayoutProps {
  post: BlogPostMeta;
  children: React.ReactNode;
  relatedPosts?: BlogPostMeta[];
}

export function BlogPostLayout({
  post,
  children,
  relatedPosts = [],
}: BlogPostLayoutProps) {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <header>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose prose-zinc mt-12 max-w-none dark:prose-invert prose-headings:font-display prose-a:text-indigo-500 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800">
            {children}
          </div>
        </FadeIn>

        {relatedPosts.length > 0 && (
          <FadeIn delay={0.2}>
            <footer className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
              <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Related Posts
              </h2>
              <ul className="mt-4 space-y-3" role="list">
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </footer>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-12">
            <ButtonLink href="/blog" variant="ghost">
              ← Back to Blog
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}

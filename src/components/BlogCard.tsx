import Link from "next/link";

import type { BlogPost } from "@/data/blogs";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
          {post.category}
        </span>
        <span className="text-sm text-brand-muted">{post.readTime}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-ink">
        <Link href={`/blog/${post.slug}`} className="transition group-hover:text-brand-blue">
          {post.title}
        </Link>
      </h3>
      <p className="mt-4 flex-1 text-base leading-7 text-brand-muted">
        {post.description}
      </p>
      <div className="mt-6 border-t border-brand-line pt-4 text-sm text-brand-muted">
        <p className="font-medium text-brand-ink">{post.author}</p>
        <div className="mt-1 flex items-center justify-between gap-4">
          <span>{formatDate(post.date)}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-semibold text-brand-blue transition hover:text-brand-green"
          >
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}

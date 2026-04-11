import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/CTASection";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: "Article not found"
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article"
    }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container-width section-spacing">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-muted transition hover:border-brand-green/40 hover:text-brand-green"
        >
          Back to blog
        </Link>

        <header className="mt-8 rounded-[2rem] border border-brand-line bg-white/90 p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            {post.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 border-t border-brand-line pt-6 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-brand-ink">{post.author}</p>
              <p>{formatDate(post.date)}</p>
            </div>
            <p>{post.readTime}</p>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_18rem]">
          <div className="rounded-[2rem] border border-brand-line bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-6 text-base leading-8 text-brand-muted">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-brand-line bg-brand-surface p-6 shadow-sm lg:sticky lg:top-28 lg:h-fit">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Key Takeaways
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-brand-muted">
              {post.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl bg-white px-4 py-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <div className="mt-20">
        <CTASection
          title="Want to turn ideas like this into visible community action?"
          description="JharVision is being structured so contributors can eventually help with content, design, engineering, documentation, and ecosystem mapping."
        />
      </div>
    </div>
  );
}


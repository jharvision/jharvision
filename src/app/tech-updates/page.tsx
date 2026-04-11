"use client";

import { CTASection } from "@/components/CTASection";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogPost } from "@/data/blogs";
import { getBlogsByCategory } from "@/lib/blogs";
import Link from "next/link";
import { useEffect, useState } from "react";

type LocalNewsItem = {
  title: string;
  link: string;
  pubDate?: string;
  author?: string;
};

type DevToUser = {
  username: string;
  profile_image_90?: string;
};

type GlobalTrendArticle = {
  id: number;
  title: string;
  url: string;
  user: DevToUser;
};

export default function TechUpdatesPage() {
  const [localNews, setLocalNews] = useState<LocalNewsItem[]>([]);
  const [globalTrends, setGlobalTrends] = useState<GlobalTrendArticle[]>([]);
  const [loadingLocal, setLoadingLocal] = useState(true);
  const [loadingGlobal, setLoadingGlobal] = useState(true);

  const techPosts = getBlogsByCategory("Open Source");
  const spotlightPost = techPosts[0] as BlogPost | undefined;
  const remainingPosts = techPosts.slice(1);

  useEffect(() => {
    async function fetchLocalJharkhand() {
      const localEndpoint = process.env.NEXT_PUBLIC_JHARKHAND_TECH_API;

      if (!localEndpoint) {
        console.warn("Check .env.local: NEXT_PUBLIC_JHARKHAND_TECH_API missing");
        setLoadingLocal(false);
        return;
      }

      try {
        const res = await fetch(localEndpoint);
        const data = (await res.json()) as { items?: LocalNewsItem[] };
        setLocalNews(Array.isArray(data.items) ? data.items.slice(0, 4) : []);
      } catch (err) {
        console.error("Local Fetch Error:", err);
      } finally {
        setLoadingLocal(false);
      }
    }

    async function fetchGlobalTrends() {
      const globalEndpoint = process.env.NEXT_PUBLIC_DEVTO_API;

      if (!globalEndpoint) {
        console.warn("Check .env.local: NEXT_PUBLIC_DEVTO_API missing");
        setLoadingGlobal(false);
        return;
      }

      try {
        const res = await fetch(globalEndpoint);
        const data = (await res.json()) as GlobalTrendArticle[];
        setGlobalTrends(Array.isArray(data) ? data.slice(0, 6) : []);
      } catch (err) {
        console.error("Global Fetch Error:", err);
      } finally {
        setLoadingGlobal(false);
      }
    }

    fetchLocalJharkhand();
    fetchGlobalTrends();
  }, []);

  return (
    <div className="container-width section-spacing">
      <section className="mb-12">
        <SectionHeading
          eyebrow="Ecosystem Signals"
          title="Tech Updates"
          description="Jharkhand&apos;s local momentum paired with global builder trends."
        />
      </section>

      {spotlightPost && (
        <section className="mb-20">
          <div className="group relative overflow-hidden rounded-[2rem] border-2 border-brand-ink bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1">
                <span className="mb-4 inline-block rounded-full bg-brand-ink px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Lamplight
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-brand-ink md:text-5xl">
                  {spotlightPost.title}
                </h2>
                <p className="mt-6 text-lg text-brand-muted">{spotlightPost.description}</p>
              </div>
              <div className="flex flex-none items-end lg:w-1/3">
                <Link
                  href={`/blog/${spotlightPost.slug}`}
                  className="w-full rounded-xl bg-brand-ink py-4 text-center font-bold text-white transition-all hover:bg-brand-ink/90"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-3 w-3 rounded-full bg-orange-600 animate-pulse" />
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-ink">
            Jharkhand&apos;s Tech
          </h3>
        </div>
        {loadingLocal ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((n) => (
              <div key={n} className="h-32 animate-pulse rounded-2xl bg-gray-100" />
            ))}
          </div>
        ) : localNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {localNews.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-brand-line bg-white p-6 transition-all hover:border-brand-ink/20"
              >
                <span className="text-[10px] font-bold uppercase text-brand-muted">
                  {item.pubDate?.split(" ")[0] ?? "Recent"}
                </span>
                <h4 className="mt-2 text-lg font-bold text-brand-ink transition group-hover:text-blue-700">
                  {item.title}
                </h4>
                <p className="mt-4 text-xs text-brand-muted">
                  Source: {item.author || "Jharkhand Feed"}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-brand-line bg-white/80 p-8 text-center text-brand-muted">
            Local Jharkhand feed is unavailable right now.
          </div>
        )}
      </section>

      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-3 w-3 rounded-full bg-blue-600" />
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-muted">
            Global Builder Trends
          </h3>
        </div>
        {loadingGlobal ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-40 animate-pulse rounded-2xl bg-gray-100" />
            ))}
          </div>
        ) : globalTrends.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {globalTrends.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col rounded-2xl border border-brand-line bg-white p-6 hover:shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.user.profile_image_90 || "/icon.svg"}
                    className="h-5 w-5 rounded-full object-cover"
                    alt={`${article.user.username} avatar`}
                  />
                  <span className="text-xs text-brand-muted">@{article.user.username}</span>
                </div>
                <h4 className="text-md line-clamp-2 font-bold text-brand-ink">
                  {article.title}
                </h4>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-brand-line bg-white/80 p-8 text-center text-brand-muted">
            Global builder feed is unavailable right now.
          </div>
        )}
      </section>

      <section className="pb-20">
        <h3 className="mb-8 text-sm font-bold text-brand-muted uppercase tracking-[0.2em]">Community Archive</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}

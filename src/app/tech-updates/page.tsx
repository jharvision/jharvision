

"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { getBlogsByCategory } from "@/lib/blogs";
import Link from "next/link";

export default function TechUpdatesPage() {
  const [localNews, setLocalNews] = useState([]);
  const [globalTrends, setGlobalTrends] = useState([]);
  const [loadingLocal, setLoadingLocal] = useState(true);
  const [loadingGlobal, setLoadingGlobal] = useState(true);

  const techPosts = getBlogsByCategory("Open Source"); 
  const spotlightPost = techPosts[0];
  const remainingPosts = techPosts.slice(1);

  useEffect(() => {
    // 1. LOCAL FEED: Fetching from NEXT_PUBLIC_JHARKHAND_TECH_API
    async function fetchLocalJharkhand() {
      const localEndpoint = process.env.NEXT_PUBLIC_JHARKHAND_TECH_API;
      
      if (!localEndpoint) {
        console.warn("Check .env.local: NEXT_PUBLIC_JHARKHAND_TECH_API missing");
        setLoadingLocal(false);
        return;
      }

      try {
        const res = await fetch(localEndpoint);
        const data = await res.json();
        setLocalNews(data.items?.slice(0, 4) || []);
      } catch (err) {
        console.error("Local Fetch Error:", err);
      } finally {
        setLoadingLocal(false);
      }
    }

    // 2. GLOBAL FEED: Fetching from NEXT_PUBLIC_DEVTO_API
    async function fetchGlobalTrends() {
      const globalEndpoint = process.env.NEXT_PUBLIC_DEVTO_API;

      if (!globalEndpoint) {
        console.warn("Check .env.local: NEXT_PUBLIC_DEVTO_API missing");
        setLoadingGlobal(false);
        return;
      }

      try {
        const res = await fetch(globalEndpoint);
        const data = await res.json();
        setGlobalTrends(data.slice(0, 6) || []);
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
          description="Jharkhand's local momentum paired with global builder trends."
        />
      </section>

      {/* Lamplight (Static Content) */}
      {spotlightPost && (
        <section className="mb-20">
          <div className="group relative overflow-hidden rounded-[2rem] border-2 border-brand-ink bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <span className="mb-4 inline-block rounded-full bg-brand-ink px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Lamplight</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-ink">{spotlightPost.title}</h2>
                <p className="mt-6 text-lg text-brand-muted">{spotlightPost.description}</p>
              </div>
              <div className="flex-none lg:w-1/3 flex items-end">
                 <Link href={`/blog/${spotlightPost.slug}`} className="w-full text-center py-4 rounded-xl bg-brand-ink font-bold text-white transition-all hover:bg-brand-ink/90">
                   Read Full Story
                 </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LOCAL FEED Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <span className="flex h-3 w-3 rounded-full bg-orange-600 animate-pulse" />
            <h3 className="text-sm font-bold text-brand-ink uppercase tracking-[0.2em]">Jharkhand's Tech</h3>
        </div>
        {loadingLocal ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((n) => <div key={n} className="h-32 animate-pulse rounded-2xl bg-gray-100" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localNews.map((item: any, i: number) => (
              <a key={i} href={item.link} target="_blank" className="p-6 rounded-2xl border border-brand-line bg-white hover:border-brand-ink/20 transition-all">
                <span className="text-[10px] font-bold text-brand-muted uppercase">{item.pubDate?.split(' ')[0]}</span>
                <h4 className="mt-2 text-lg font-bold text-brand-ink group-hover:text-blue-700">{item.title}</h4>
                <p className="mt-4 text-xs text-brand-muted">Source: {item.author || "Jharkhand Feed"}</p>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* GLOBAL FEED Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <span className="flex h-3 w-3 rounded-full bg-blue-600" />
            <h3 className="text-sm font-bold text-brand-muted uppercase tracking-[0.2em]">Global Builder Trends</h3>
        </div>
        {loadingGlobal ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => <div key={n} className="h-40 animate-pulse rounded-2xl bg-gray-100" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalTrends.map((article: any) => (
              <a key={article.id} href={article.url} target="_blank" className="flex flex-col p-6 rounded-2xl border border-brand-line bg-white hover:shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <img src={article.user.profile_image_90} className="w-5 h-5 rounded-full" alt="" />
                  <span className="text-xs text-brand-muted">@{article.user.username}</span>
                </div>
                <h4 className="text-md font-bold text-brand-ink line-clamp-2">{article.title}</h4>
              </a>
            ))}
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
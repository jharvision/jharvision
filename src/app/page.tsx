import Link from "next/link";

import { Suspense } from "react";

import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { ContributorsPreview } from "@/components/contributors/ContributorsPreview";
import { ContributorsPreviewSkeleton } from "@/components/contributors/ContributorsSkeleton";
import { EcosystemDiscoverySection } from "@/components/EcosystemDiscoverySection";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedBlogs } from "@/lib/blogs";

const featuredBlogs = getFeaturedBlogs();
const platformCards = [
  {
    title: "Tech updates",
    href: "/tech-updates",
    description:
      "Track emerging ideas, ecosystem signals, and product stories that matter to builders in Jharkhand."
  },
  {
    title: "Startup spotlight",
    href: "/blog",
    description:
      "Bring attention to local founders, early traction, and practical lessons from regional innovation."
  },
  {
    title: "Contributor ready",
    href: "/contribute",
    description:
      "Create a clear path for writers, developers, designers, and community volunteers to participate."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemDiscoverySection />

      <div className="container-width">
        <section id="platform-overview" className="section-spacing">
          {/* New Institute Link Section */}
<section className="mb-12 mt-6">
  <Link href="/institute" className="group block no-underline">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-full border border-brand-line bg-white/60 backdrop-blur-md px-8 py-4 shadow-sm transition-all duration-300 hover:border-brand-ink/10 hover:shadow-md active:scale-[0.99]">
      
      {/* Left side: Heading */}
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-ink text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </span>
        <h2 className="text-lg font-bold tracking-tight text-brand-ink md:text-xl">
          Foundation of Tech
        </h2>
      </div>

      {/* Right side: Explore Link */}
      <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-muted group-hover:text-brand-green transition-colors">
        Explore Institutions 
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>

    </div>
  </Link>
</section>
          <SectionHeading
            eyebrow="About JharVision"
            title="A focused platform for regional momentum, practical stories, and open collaboration."
            description="JharVision is designed to make Jharkhand's tech ecosystem more visible and more participatory. Readers can discover thoughtful updates, while contributors get a foundation that is ready to grow into a community-driven platform."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platformCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block no-underline"
              >
                <div className="h-full rounded-[1.75rem] border border-brand-line bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-brand-ink/20 hover:shadow-md active:scale-[0.98]">
                  <h3 className="text-2xl font-semibold tracking-tight text-brand-ink transition group-hover:text-brand-green">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Suspense fallback={<ContributorsPreviewSkeleton />}>
          <ContributorsPreview />
        </Suspense>

        <section className="pb-20">
          <SectionHeading
            eyebrow="Featured Stories"
            title="Read the latest ideas shaping Jharkhand's tech conversation."
            description="The first version of JharVision uses static content so the experience stays fast, simple, and easy to extend later with a CMS or Supabase-powered publishing flow."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}

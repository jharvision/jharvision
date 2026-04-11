import { Suspense } from "react";

import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { ContributorsPreview } from "@/components/contributors/ContributorsPreview";
import { ContributorsPreviewSkeleton } from "@/components/contributors/ContributorsSkeleton";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedBlogs } from "@/lib/blogs";

const featuredBlogs = getFeaturedBlogs();

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="container-width">
        <section id="platform-overview" className="section-spacing">
          <SectionHeading
            eyebrow="About JharVision"
            title="A focused platform for regional momentum, practical stories, and open collaboration."
            description="JharVision is designed to make Jharkhand's tech ecosystem more visible and more participatory. Readers can discover thoughtful updates, while contributors get a foundation that is ready to grow into a community-driven platform."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Tech updates",
                description:
                  "Track emerging ideas, ecosystem signals, and product stories that matter to builders in Jharkhand."
              },
              {
                title: "Startup spotlight",
                description:
                  "Bring attention to local founders, early traction, and practical lessons from regional innovation."
              },
              {
                title: "Contributor ready",
                description:
                  "Create a clear path for writers, developers, designers, and community volunteers to participate."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-brand-line bg-white/90 p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-brand-muted">
                  {item.description}
                </p>
              </div>
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

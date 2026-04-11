

import Link from 'next/link'; // Pehle ye import karein
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedBlogs } from "@/lib/blogs";

const featuredBlogs = getFeaturedBlogs();

export default function HomePage() {
  return (
    <div className="container-width section-spacing">
      <HeroSection />

      <section className="section-spacing">
        <SectionHeading
          eyebrow="About JharVision"
          title="A focused platform for regional momentum, practical stories, and open collaboration."
          description="JharVision is designed to make Jharkhand's tech ecosystem more visible and more participatory. Readers can discover thoughtful updates, while contributors get a foundation that is ready to grow into a community-driven platform."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tech updates",
              href: "/tech-updates", // Link destination
              description:
                "Track emerging ideas, ecosystem signals, and product stories that matter to builders in Jharkhand."
            },
            {
              title: "Startup spotlight",
              href: "/", // Link destination
              description:
                "Bring attention to local founders, early traction, and practical lessons from regional innovation."
            },
            {
              title: "Contributor ready",
              href: "/contribute", // Link destination
              description:
                "Create a clear path for writers, developers, designers, and community volunteers to participate."
            }
          ].map((item) => (
            /* Link component ko wrap kiya aur cursor-default rakha taaki standard link feel na aaye */
            <Link 
              key={item.title} 
              href={item.href} 
              className="block no-underline group"
            >
              <div
                className="h-full rounded-[1.75rem] border border-brand-line bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-brand-ink/20 hover:shadow-md active:scale-[0.98]"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
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
  );
}
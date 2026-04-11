import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Learn how future contributors can support JharVision through writing, design, development, and community efforts."
};

export default function ContributePage() {
  return (
    <div className="container-width section-spacing">
      <section className="rounded-[2rem] border border-brand-line bg-white/90 px-6 py-14 shadow-soft sm:px-10">
        <SectionHeading
          eyebrow="Contribute"
          title="A contributor-friendly platform designed to grow in public."
          description="JharVision is intentionally structured to support future GitHub-based collaboration. Version 1 keeps things simple while leaving room for documentation, issue templates, contributor profiles, and shared editorial workflows."
        />
      </section>

      <section className="section-spacing pb-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Writers",
              description:
                "Contribute ecosystem stories, founder interviews, event notes, or explainers that make Jharkhand's tech narrative easier to discover."
            },
            {
              title: "Designers",
              description:
                "Improve the brand system, accessibility, illustrations, content templates, and onboarding experiences for future contributors."
            },
            {
              title: "Developers",
              description:
                "Extend the static blog into a richer platform with auth, GitHub integrations, Supabase-backed workflows, and contributor dashboards."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-brand-line bg-brand-surface p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
              Contributor roadmap
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-brand-muted">
              <p>1. Publish clear onboarding and contribution guidelines.</p>
              <p>2. Add labels and starter issues for beginner-friendly work.</p>
              <p>3. Connect GitHub activity to visible contributor acknowledgements.</p>
              <p>4. Introduce Supabase-backed submissions and editorial workflows.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-line bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              What version 1 already solves
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-brand-muted">
              <p>Clean App Router structure with reusable components.</p>
              <p>Typed static blog data with dynamic slug-based article pages.</p>
              <p>SEO metadata, responsive UI, and a future-ready Supabase utility layer.</p>
              <p>Beginner-friendly code organization that is easy to extend safely.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="The foundation is ready for community-powered iteration."
        description="As the platform grows, this page can evolve into a full contributor hub with issue queues, writing guidelines, and public roadmap updates."
      />
    </div>
  );
}


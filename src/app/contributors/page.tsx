import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { ContributorsGrid } from "@/components/contributors/ContributorsGrid";
import { ContributorsNotice } from "@/components/contributors/ContributorsNotice";
import { TopContributorHighlight } from "@/components/contributors/TopContributorHighlight";
import { SectionHeading } from "@/components/SectionHeading";
import {
  CONTRIBUTORS_REVALIDATE_SECONDS,
  getContributors
} from "@/lib/github";

export const metadata: Metadata = {
  title: "Top Contributors",
  description:
    "Meet the GitHub contributors helping build JharVision and moving Jharkhand's tech future forward."
};

export const revalidate = CONTRIBUTORS_REVALIDATE_SECONDS;

export default async function ContributorsPage() {
  const { contributors, error, repository } = await getContributors();
  const topContributor = contributors[0];

  return (
    <div className="container-width section-spacing">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 px-6 py-16 shadow-soft backdrop-blur sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
        <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-brand-blue/10 bg-brand-blue/5 px-4 py-1 text-sm font-medium text-brand-blue">
              Live from GitHub API
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Top Contributors 🚀
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              People building Jharkhand&apos;s tech future.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-brand-muted">
              This page pulls real contributor data from GitHub with ISR, then turns it into a clean public leaderboard for the JharVision project.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={repository.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
              >
                Open Repository
              </Link>
              <Link
                href="/contribute"
                className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-green/40 hover:text-brand-green"
              >
                Start Contributing
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-brand-line bg-brand-surface p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
                Repository
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-brand-ink">
                {repository.owner}/{repository.name}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-brand-line bg-white p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
                Contributors
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink">
                {contributors.length.toLocaleString()}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-brand-line bg-white p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
                Highest count
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink">
                {topContributor?.contributions.toLocaleString() ?? "0"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pb-10">
        {error ? (
          <ContributorsNotice
            title="We couldn't load the latest contributors right now."
            description={`${error} You can still browse the repository directly while GitHub sync is unavailable.`}
            actionLabel="Open GitHub Repository"
            actionHref={repository.url}
          />
        ) : topContributor ? (
          <TopContributorHighlight
            contributor={topContributor}
            repositoryLabel={`${repository.owner}/${repository.name}`}
          />
        ) : (
          <ContributorsNotice
            title="No contributors were returned yet."
            description="Once GitHub exposes contributor activity for this repository, the leaderboard will populate automatically."
            actionLabel="Open GitHub Repository"
            actionHref={repository.url}
          />
        )}
      </section>

      {contributors.length > 0 ? (
        <section className="pb-20">
          <SectionHeading
            eyebrow="Contributors"
            title="Every contributor shaping the public build of JharVision."
            description="The list below is pulled from the GitHub contributors API and revalidated automatically so the page stays fresh without giving up static performance."
          />

          <div className="mt-12">
            <ContributorsGrid
              contributors={contributors}
              topContributorId={topContributor?.id}
            />
          </div>
        </section>
      ) : null}

      <CTASection
        title="Want to be featured here?"
        description="Ship code, improve content, refine the product experience, or help the project grow in public. Meaningful contributions can earn you a spot on this board."
        primaryActionLabel="Start Contributing"
        primaryActionHref="/contribute"
        secondaryActionLabel={null}
        secondaryActionHref={null}
      />
    </div>
  );
}

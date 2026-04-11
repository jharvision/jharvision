import Link from "next/link";

import { getContributors } from "@/lib/github";

import { ContributorsGrid } from "./ContributorsGrid";
import { ContributorsNotice } from "./ContributorsNotice";

export async function ContributorsPreview() {
  const { contributors, error } = await getContributors(2);
  const topContributor = contributors[0];

  return (
    <section className="section-spacing">
      <div className="rounded-[2rem] border border-brand-line bg-white/85 p-6 shadow-soft sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Community
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Top contributors building JharVision in public.
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-muted sm:text-lg">
              A live GitHub-powered preview of the people actively pushing the project forward.
            </p>
          </div>

          <Link
            href="/contributors"
            className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
          >
            View All →
          </Link>
        </div>

        <div className="mt-10">
          {error ? (
            <ContributorsNotice
              title="Contributor data is temporarily unavailable."
              description={error}
              actionLabel="View All →"
              actionHref="/contributors"
            />
          ) : contributors.length > 0 ? (
            <ContributorsGrid
              contributors={contributors}
              topContributorId={topContributor?.id}
              className="lg:grid-cols-2 xl:grid-cols-2"
            />
          ) : (
            <ContributorsNotice
              title="No contributors have been returned yet."
              description="Once GitHub exposes contributor activity for the repository, this preview will update automatically."
              actionLabel="View All →"
              actionHref="/contributors"
            />
          )}
        </div>
      </div>
    </section>
  );
}

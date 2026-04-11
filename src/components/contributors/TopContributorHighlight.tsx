import Image from "next/image";
import Link from "next/link";

import type { Contributor } from "@/lib/github";

type TopContributorHighlightProps = {
  contributor: Contributor;
  repositoryLabel: string;
};

export function TopContributorHighlight({
  contributor,
  repositoryLabel
}: TopContributorHighlightProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-brand-blue/15 bg-white/90 p-8 shadow-soft sm:p-10">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-brand-ink px-4 py-1.5 text-sm font-semibold text-white">
            Top Contributor 🏆
          </span>

          <div className="mt-6 flex items-center gap-5">
            <Image
              src={contributor.avatarUrl}
              alt={`${contributor.username} avatar`}
              width={96}
              height={96}
              className="h-24 w-24 rounded-[2rem] border border-brand-line object-cover"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
                Featured builder
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-brand-ink">
                @{contributor.username}
              </h2>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
            Leading the GitHub contributor board for <span className="font-semibold text-brand-ink">{repositoryLabel}</span> right now with the highest contribution count returned by the API.
          </p>

          <div className="mt-8">
            <Link
              href={contributor.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
            >
              View GitHub Profile
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-brand-line bg-brand-surface p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
              Contributions
            </p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink">
              {contributor.contributions.toLocaleString()}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-brand-line bg-white p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
              Repository
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-brand-ink">
              {repositoryLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import type { Contributor } from "@/lib/github";
import { cn } from "@/lib/utils";

type ContributorCardProps = {
  contributor: Contributor;
  badgeLabel?: string;
  isTopContributor?: boolean;
};

export function ContributorCard({
  contributor,
  badgeLabel = "Contributor",
  isTopContributor = false
}: ContributorCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft",
        isTopContributor
          ? "border-brand-blue/20 bg-gradient-to-br from-white via-[#f7fbff] to-[#edf6ff]"
          : "border-brand-line bg-white/95"
      )}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-brand-blue/10 blur-3xl transition duration-300 group-hover:bg-brand-green/10" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={contributor.avatarUrl}
              alt={`${contributor.username} avatar`}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-3xl border border-brand-line object-cover"
            />
            <div>
              <span
                className={cn(
                  "inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
                  isTopContributor
                    ? "bg-brand-blue text-white"
                    : "border border-brand-line bg-brand-surface text-brand-ink"
                )}
              >
                {badgeLabel}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">
                @{contributor.username}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
              Contributions
            </p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-brand-ink">
              {contributor.contributions.toLocaleString()}
            </p>
          </div>

          <Link
            href={contributor.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
          >
            View GitHub
          </Link>
        </div>
      </div>
    </article>
  );
}

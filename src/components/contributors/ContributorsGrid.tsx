import type { Contributor } from "@/lib/github";
import { cn } from "@/lib/utils";

import { ContributorCard } from "./ContributorCard";

type ContributorsGridProps = {
  contributors: Contributor[];
  topContributorId?: number;
  className?: string;
};

export function ContributorsGrid({
  contributors,
  topContributorId,
  className
}: ContributorsGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {contributors.map((contributor) => {
        const isTopContributor = contributor.id === topContributorId;

        return (
          <ContributorCard
            key={contributor.id}
            contributor={contributor}
            badgeLabel={isTopContributor ? "Top Contributor 🏆" : "Contributor"}
            isTopContributor={isTopContributor}
          />
        );
      })}
    </div>
  );
}

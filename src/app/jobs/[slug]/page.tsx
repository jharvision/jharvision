import type { Metadata } from "next";

import { EcosystemDetailPage } from "@/components/ecosystem/EcosystemDetailPage";
import { getAllSlugsByKind, getItemBySlug } from "@/data/ecosystem";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSlugsByKind("jobs");
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getItemBySlug("jobs", params.slug);

  return {
    title: item ? `${item.title} | JharVision` : "Opportunity not found",
    description: item?.summary
  };
}

export default function JobDetailPage({ params }: PageProps) {
  return <EcosystemDetailPage kind="jobs" slug={params.slug} />;
}

import type { Metadata } from "next";

import { EcosystemDetailPage } from "@/components/ecosystem/EcosystemDetailPage";
import { getAllSlugsByKind, getItemBySlug } from "@/data/ecosystem";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSlugsByKind("colleges");
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getItemBySlug("colleges", params.slug);

  return {
    title: item ? `${item.title} | JharVision` : "College not found",
    description: item?.summary
  };
}

export default function CollegeDetailPage({ params }: PageProps) {
  return <EcosystemDetailPage kind="colleges" slug={params.slug} />;
}

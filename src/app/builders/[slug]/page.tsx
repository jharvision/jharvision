import type { Metadata } from "next";

import { EcosystemDetailPage } from "@/components/ecosystem/EcosystemDetailPage";
import { getAllSlugsByKind, getItemBySlug } from "@/data/ecosystem";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSlugsByKind("builders");
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getItemBySlug("builders", params.slug);

  return {
    title: item ? `${item.title} | JharVision` : "Builder profile not found",
    description: item?.summary
  };
}

export default function BuilderDetailPage({ params }: PageProps) {
  return <EcosystemDetailPage kind="builders" slug={params.slug} />;
}

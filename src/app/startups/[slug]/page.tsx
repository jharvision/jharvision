import type { Metadata } from "next";

import { EcosystemDetailPage } from "@/components/ecosystem/EcosystemDetailPage";
import { getAllSlugsByKind, getItemBySlug } from "@/data/ecosystem";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSlugsByKind("startups");
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getItemBySlug("startups", params.slug);

  return {
    title: item ? `${item.title} | JharVision` : "Startup not found",
    description: item?.summary
  };
}

export default function StartupDetailPage({ params }: PageProps) {
  return <EcosystemDetailPage kind="startups" slug={params.slug} />;
}

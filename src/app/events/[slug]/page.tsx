import type { Metadata } from "next";

import { EcosystemDetailPage } from "@/components/ecosystem/EcosystemDetailPage";
import { getAllSlugsByKind, getItemBySlug } from "@/data/ecosystem";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSlugsByKind("events");
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getItemBySlug("events", params.slug);

  return {
    title: item ? `${item.title} | JharVision` : "Event not found",
    description: item?.summary
  };
}

export default function EventDetailPage({ params }: PageProps) {
  return <EcosystemDetailPage kind="events" slug={params.slug} />;
}

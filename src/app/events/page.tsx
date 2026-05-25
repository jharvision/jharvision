import type { Metadata } from "next";

import { EcosystemDirectoryPage } from "@/components/ecosystem/EcosystemDirectoryPage";

export const metadata: Metadata = {
  title: "Events & Hackathons | JharVision",
  description: "Discover startup events, hackathons, technical festivals, and ecosystem moments across Jharkhand."
};

export default function EventsPage() {
  return <EcosystemDirectoryPage kind="events" />;
}

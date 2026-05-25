import type { Metadata } from "next";

import { EcosystemDirectoryPage } from "@/components/ecosystem/EcosystemDirectoryPage";

export const metadata: Metadata = {
  title: "Startups & Innovation | JharVision",
  description: "Explore Jharkhand startups, incubators, software companies, and innovation support systems."
};

export default function StartupsPage() {
  return <EcosystemDirectoryPage kind="startups" />;
}

import type { Metadata } from "next";

import { EcosystemDirectoryPage } from "@/components/ecosystem/EcosystemDirectoryPage";

export const metadata: Metadata = {
  title: "Jobs & Opportunities | JharVision",
  description: "Track Jharkhand technology jobs, founder opportunities, and source-linked career channels."
};

export default function JobsPage() {
  return <EcosystemDirectoryPage kind="jobs" />;
}

import type { Metadata } from "next";

import { EcosystemDirectoryPage } from "@/components/ecosystem/EcosystemDirectoryPage";

export const metadata: Metadata = {
  title: "Builders & Talent | JharVision",
  description: "Explore Jharkhand's builders, open-source maintainers, campus talent, and startup operators."
};

export default function BuildersPage() {
  return <EcosystemDirectoryPage kind="builders" />;
}

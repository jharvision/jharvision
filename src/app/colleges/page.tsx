import type { Metadata } from "next";

import { EcosystemDirectoryPage } from "@/components/ecosystem/EcosystemDirectoryPage";

export const metadata: Metadata = {
  title: "Colleges & Universities | JharVision",
  description: "Discover source-linked colleges, universities, and incubation nodes in Jharkhand's digital ecosystem."
};

export default function CollegesPage() {
  return <EcosystemDirectoryPage kind="colleges" />;
}

import type { Metadata } from "next"
import { PricingClient } from "@/components/pricing-client"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Pricing - Free Plan & Premium Supporter | iPartyUp",
  description:
    "Watch together free forever on iPartyUp with YouTube, Google Drive, and 3-viewer rooms, or unlock the full HD library and 12-viewer rooms for $2.99/month.",
  path: "/pricing",
})

export default function PricingPage() {
  return <PricingClient />
}

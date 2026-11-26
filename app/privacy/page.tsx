import type { Metadata } from "next"
import { PrivacyClient } from "@/components/privacy-client"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy - iPartyUp",
  description:
    "Read the iPartyUp Privacy Policy. Learn how we protect your privacy across Windows, macOS, and Android.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return <PrivacyClient />
}

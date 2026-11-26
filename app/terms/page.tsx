import type { Metadata } from "next"
import { TermsClient } from "@/components/terms-client"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions - iPartyUp",
  description:
    "Read the iPartyUp Terms of Service covering Windows, macOS, and Android.",
  path: "/terms",
})

export default function TermsPage() {
  return <TermsClient />
}

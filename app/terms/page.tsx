import type { Metadata } from "next"
import { TermsClient } from "@/components/terms-client"

export const metadata: Metadata = {
  title: "Terms & Conditions - iPartyUp",
  description:
    "Read the iPartyUp Terms of Service covering Windows, macOS, and Android.",
}

export default function TermsPage() {
  return <TermsClient />
}

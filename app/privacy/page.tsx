import type { Metadata } from "next"
import { PrivacyClient } from "@/components/privacy-client"

export const metadata: Metadata = {
  title: "Privacy Policy - iPartyUp",
  description:
    "Read the iPartyUp Privacy Policy. Learn how we protect your privacy across Windows, macOS, and Android.",
}

export default function PrivacyPage() {
  return <PrivacyClient />
}

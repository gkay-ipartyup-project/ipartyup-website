import type { Metadata } from "next"
import { NOINDEX_ROBOTS } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Patreon Account Linking | iPartyUp",
  description: "Complete your Patreon Supporter account link and return to iPartyUp.",
  robots: NOINDEX_ROBOTS,
}

export default function PatreonCallbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

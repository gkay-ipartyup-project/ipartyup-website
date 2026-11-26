import type { Metadata } from "next"
import { UpdatesClient } from "@/components/updates-client"
import { fetchInitialPublishedUpdates } from "@/lib/public-data"
import { createPageMetadata } from "@/lib/seo"

export const revalidate = 300

export const metadata: Metadata = createPageMetadata({
  title: "iPartyUp Release Notes - What's New & App Updates",
  description:
    "View live iPartyUp release notes. Explore new features, playback improvements, and bug fixes across Windows, macOS, and Android.",
  path: "/updates",
})

export default async function UpdatesPage() {
  const initialUpdates = await fetchInitialPublishedUpdates()
  return <UpdatesClient initialUpdates={initialUpdates} />
}

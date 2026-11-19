import type { Metadata } from "next"
import { UpdatesClient } from "@/components/updates-client"

export const metadata: Metadata = {
  title: "iPartyUp Release Notes - What's New & App Updates",
  description:
    "View live iPartyUp release notes. Explore new features, playback improvements, and bug fixes across Windows, macOS, and Android.",
}

export default function UpdatesPage() {
  return <UpdatesClient />
}

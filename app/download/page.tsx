import type { Metadata } from "next"
import { DownloadClient } from "@/components/download-client"
import { fetchInitialLatestDownloads } from "@/lib/public-data"
import { createPageMetadata } from "@/lib/seo"

export const revalidate = 300

export const metadata: Metadata = createPageMetadata({
  title: "Download iPartyUp App - Windows, macOS & Android Installers",
  description:
    "Get the official iPartyUp app for Windows, macOS, and Android. Soon coming to iOS. Start hosting synchronized watch parties with friends in under a minute.",
  path: "/download",
})

export default async function DownloadPage() {
  const initialData = await fetchInitialLatestDownloads()
  return <DownloadClient initialData={initialData} />
}

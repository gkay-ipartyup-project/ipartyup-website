import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download iPartyUp App - Windows, macOS & Android Installers",
  description: "Get the official iPartyUp app for Windows, macOS, and Android. Soon coming to iOS. Start hosting synchronized watch parties with friends in under a minute.",
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

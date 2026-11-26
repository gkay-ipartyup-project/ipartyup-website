import type { Metadata } from "next"
import { AboutClient } from "@/components/about-client"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "About iPartyUp - Cross-Platform Watch Party App",
  description:
    "Learn about iPartyUp, an independent synchronized watch-party streaming app for Windows, macOS, and Android, with iOS on the way.",
  path: "/about",
})

export default function AboutPage() {
  return <AboutClient />
}

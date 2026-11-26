import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StreamingEnhanced } from "@/components/streaming-enhanced"
import { WatchEnjoy } from "@/components/watch-enjoy"
import { TvSection } from "@/components/tv-section"
import { Faq } from "@/components/faq"
import { ReviewCta } from "@/components/review-cta"
import { Footer } from "@/components/footer"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "iPartyUp - Watch Together in Perfect Sync",
  description:
    "iPartyUp is a synchronized watch-party streaming app for Windows, macOS, and Android. Watch movies, series, and anime together in frame-perfect sync with friends and family.",
  path: "/",
})

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <StreamingEnhanced />
      <WatchEnjoy />
      <TvSection />
      <Faq />
      <ReviewCta />
      <Footer />
    </main>
  )
}

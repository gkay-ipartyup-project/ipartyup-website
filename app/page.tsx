import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StreamingEnhanced } from "@/components/streaming-enhanced"
import { WatchEnjoy } from "@/components/watch-enjoy"
import { TvSection } from "@/components/tv-section"
import { Faq } from "@/components/faq"
import { ReviewCta } from "@/components/review-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative">
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

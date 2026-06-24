import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About iPartyUp - Curated Library & Sync Experience",
  description: "Discover the story and values behind iPartyUp. We replace subscription fatigue with one curated library and a seamless watch-together experience for friends and couples.",
}

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stremio-dark">
        {/* gradient backdrop */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-6 pb-[150px] pt-[200px] lg:pb-[180px]">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              About iPartyUp
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              One platform. Endless entertainment. Together.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Skewed Green */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 -mt-24 z-10">
        {/* Skewed background layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

        {/* Content wrapper (unskewed) */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-6">
          <div className="max-w-4xl mx-auto text-white">
            <p className="text-xl leading-relaxed text-white/95">
              We started iPartyUp because of one very real problem: subscription fatigue. Paying every month for a handful
              of streaming services just to watch the shows and movies you actually love adds up fast. One app for that
              one show, a second for the new movie, a third for the anime, a fourth for the documentary you saw trending.
              It&apos;s tiring, and honestly, it&apos;s silly.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-white/95">
              iPartyUp exists to replace that mess with something simple. One app. One membership. Movies, series,
              anime, documentaries — everything sitting in one curated library, ready to play. And because the best
              shows always feel better shared, we built the most seamless watch-together experience on top of it.
              Frame-perfect sync, real-time chat, voice chat, private rooms. The people you love, one press of play,
              no hacks required.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-white/95">
              Available on Windows and macOS. Download once and automatic updates keep the app current.
              The library grows every week, the feature list grows every update, and the whole thing is built
              around one simple idea: watching stuff together should feel effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Dark */}
      <section className="bg-stremio-dark pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* All-In-One Entertainment */}
            <div className="text-center md:text-left">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-stremio-green">
                  <rect x="2" y="7" width="20" height="15" rx="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">All-In-One Entertainment</h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                Movies, series, anime, documentaries — everything you love, all in one place. No more switching apps or juggling subscriptions just to finish one show.
              </p>
            </div>

            {/* Watch Together */}
            <div className="text-center md:text-left">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-stremio-green">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Watch Together</h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                Create rooms, invite friends, and watch in perfect sync. Whether they&apos;re across the street or across the globe, it feels like you&apos;re on the same couch.
              </p>
            </div>

            {/* Privacy First */}
            <div className="text-center md:text-left">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-stremio-green">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Privacy First</h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                Your viewing habits are your business. We don&apos;t track what you watch, and we never sell your data to anyone. Period.
              </p>
            </div>

            {/* Always Improving */}
            <div className="text-center md:text-left">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8 text-stremio-green">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Always Improving</h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                New content, new features, and improvements delivered through automatic updates. Download once, and you&apos;re always on the latest version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

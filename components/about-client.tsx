"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export function AboutClient() {
  const { t } = useLanguage()

  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 pb-[120px] pt-[150px] sm:pt-[180px] lg:pb-[170px] lg:pt-[200px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h1>
            <p className="mt-5 sm:mt-6 text-lg leading-relaxed text-white/80">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Skewed Green */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28 -mt-20 sm:-mt-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-white">
            <p className="text-lg sm:text-xl leading-relaxed text-white/95">
              {t.about.p1}
            </p>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/95">
              {t.about.p2}
            </p>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/95">
              {t.about.p3}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Dark */}
      <section className="bg-stremio-dark pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            <div className="text-center md:text-start">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-[#1ed765]" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="15" rx="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">{t.about.v1Title}</h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-neutral-400">
                {t.about.v1Desc}
              </p>
            </div>

            <div className="text-center md:text-start">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-[#1ed765]" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">{t.about.v2Title}</h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-neutral-400">
                {t.about.v2Desc}
              </p>
            </div>

            <div className="text-center md:text-start">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-[#1ed765]" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">{t.about.v3Title}</h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-neutral-400">
                {t.about.v3Desc}
              </p>
            </div>

            <div className="text-center md:text-start">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-[#1ed765]" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">{t.about.v4Title}</h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-neutral-400">
                {t.about.v4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

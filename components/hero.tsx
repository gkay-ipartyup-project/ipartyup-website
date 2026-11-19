"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { GOOGLE_PLAY_URL, SUPABASE_PUBLIC_URL } from "@/lib/constants"

interface PlatformDownload {
  version: string
  published_at: string | null
  url: string
  size: number | null
}

interface LatestDownloads {
  latest_version: string | null
  latest_published_at: string | null
  windows: PlatformDownload | null
  macos: PlatformDownload | null
}

async function getLatestDownloads(): Promise<LatestDownloads | null> {
  try {
    const res = await fetch(
      `${SUPABASE_PUBLIC_URL.replace(/\/$/, "")}/functions/v1/website-download`,
      { method: "GET" }
    )
    if (!res.ok) return null
    return (await res.json()) as LatestDownloads
  } catch {
    return null
  }
}

export function Hero() {
  const [platform, setPlatform] = useState<"windows" | "mac" | "android" | "ios" | "unknown">("windows")
  const [downloadUrls, setDownloadUrls] = useState<{ windows: string | null; macos: string | null }>({
    windows: null,
    macos: null,
  })
  const { t, isArabic } = useLanguage()

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (/ipad|iphone|ipod/.test(ua) && !(window as unknown as { MSStream?: unknown }).MSStream) {
      setPlatform("ios")
    } else if (/android/.test(ua)) {
      setPlatform("android")
    } else if (/macintosh|mac os x/.test(ua)) {
      setPlatform("mac")
    } else {
      setPlatform("windows")
    }

    getLatestDownloads().then((data) => {
      if (data) {
        setDownloadUrls({
          windows: data.windows?.url ?? null,
          macos: data.macos?.url ?? null,
        })
      }
    })
  }, [])

  const primaryCtaClasses =
    "inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-[#1ed765]/50 bg-[#1ed765] px-7 text-base font-bold text-black shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-[#4de087]"

  const renderDownloadButton = () => {
    switch (platform) {
      case "mac":
        return (
          <a href={downloadUrls.macos || "/download"} className={primaryCtaClasses}>
            <Image
              src="/apple-logo.webp"
              alt="macOS logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain brightness-0"
              priority
            />
            <span>{t.hero.downloadFree}</span>
          </a>
        )
      case "android":
        return (
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className={primaryCtaClasses}
          >
            <Image
              src="/playstore.webp"
              alt="Google Play logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain brightness-0"
              priority
            />
            <div className="flex flex-col items-start text-left leading-none">
              <span className="text-[10px] uppercase tracking-wider font-bold text-black/75">
                {t.hero.getItOn}
              </span>
              <span className="text-sm sm:text-base font-extrabold text-black mt-0.5">
                {t.hero.playStore}
              </span>
            </div>
          </a>
        )
      case "ios":
        return (
          <div className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-7 text-white/60 cursor-default">
            <Image
              src="/apple-logo.webp"
              alt="Apple logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain opacity-50 brightness-0 invert"
            />
            <div className="flex flex-col items-start text-start leading-none">
              <span className="text-sm font-bold text-white/75">{t.hero.comingSoon}</span>
              <span className="text-[10px] font-medium text-white/50 mt-0.5">{t.hero.forIphones}</span>
            </div>
          </div>
        )
      case "windows":
      default:
        return (
          <a href={downloadUrls.windows || "/download"} className={primaryCtaClasses}>
            <Image
              src="/windows.webp"
              alt="Windows logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain brightness-0"
              priority
            />
            <span>{t.hero.downloadFree}</span>
          </a>
        )
    }
  }

  return (
    <section className="relative overflow-hidden bg-stremio-dark">
      {/* gradient backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_110%,#0d3d1a_0%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-44 md:pb-[260px] lg:pt-[200px] lg:pb-[340px]">
        {/* Floating hero cards (flipped horizontally in Arabic so 3D perspective fans cleanly toward RTL copy) */}
        <div
          className={`pointer-events-none absolute top-16 hidden w-[58%] md:block lg:w-[90%] lg:top-20 z-30 transition-all duration-300 ${
            isArabic
              ? "-left-12 lg:-left-120 [transform:scaleX(-1)]"
              : "-right-12 lg:-right-120"
          }`}
        >
          <img
            src="/hero-cards.webp"
            alt="iPartyUp movies, series, and anime posters"
            width={1600}
            height={724}
            className="h-auto w-full"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        <div className="relative z-40 max-w-xl md:max-w-[56%] lg:max-w-2xl">
          <h1
            className={`text-balance text-[32px] text-white sm:text-4xl lg:text-5xl ${
              isArabic ? "font-bold leading-[1.32]" : "font-extrabold leading-[1.18]"
            }`}
          >
            {t.hero.titleLine1} <br className="hidden sm:inline" />
            {t.hero.titleLine2}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl font-semibold text-stremio-green">
            {t.hero.subtitle}
          </p>
          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-white/80 max-w-xl">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
            {renderDownloadButton()}
            <Link
              href="/download#platforms"
              className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center rounded-full border border-white/30 bg-white/[0.07] px-7 text-base font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-stremio-dark"
            >
              {t.hero.supportedDevices}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

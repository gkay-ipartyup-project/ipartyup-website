"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download } from "lucide-react"

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
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) return null

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/functions/v1/website-download`, {
      method: "GET",
    })
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

  useEffect(() => {
    // Detect operating system
    const ua = navigator.userAgent.toLowerCase()
    if (/ipad|iphone|ipod/.test(ua) && !(window as any).MSStream) {
      setPlatform("ios")
    } else if (/android/.test(ua)) {
      setPlatform("android")
    } else if (/macintosh|mac os x/.test(ua)) {
      setPlatform("mac")
    } else if (/windows|win32|win64/.test(ua)) {
      setPlatform("windows")
    } else {
      setPlatform("windows")
    }

    // Fetch latest downloads from Supabase
    getLatestDownloads().then((data) => {
      if (data) {
        setDownloadUrls({
          windows: data.windows?.url ?? null,
          macos: data.macos?.url ?? null,
        })
      }
    })
  }, [])

  const renderDownloadButton = () => {
    switch (platform) {
      case "mac":
        return (
          <a
            href={downloadUrls.macos || "/download"}
            className="inline-flex h-[56px] items-center gap-3 rounded-full border-2 border-stremio-green bg-stremio-green px-7 text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,215,101,0.4)]"
          >
            <Image
              src="/apple-logo.png"
              alt="Mac logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain brightness-0 invert"
            />
            <span>Download Free</span>
          </a>
        )
      case "android":
        return (
          <a
            href="/download"
            className="inline-flex h-[56px] items-center gap-3 rounded-full border-2 border-stremio-green bg-stremio-green px-7 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,215,101,0.4)]"
          >
            <Image
              src="/playstore.png"
              alt="Play Store logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain brightness-0 invert"
            />
            <div className="flex flex-col items-start text-left leading-none">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-white/80">Get it on</span>
              <span className="text-sm sm:text-base font-black text-white mt-0.5">Play Store</span>
            </div>
          </a>
        )
      case "ios":
        return (
          <div className="inline-flex h-[56px] items-center gap-3 rounded-full border-2 border-white/20 bg-white/5 px-7 text-white/60 transition-all duration-300 cursor-default">
            <Image
              src="/apple-logo.png"
              alt="Apple logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain opacity-40 brightness-0 invert"
            />
            <div className="flex flex-col items-start text-left leading-none">
              <span className="text-sm font-bold text-white/70">Coming Soon</span>
              <span className="text-[10px] font-medium text-white/50 mt-0.5">for iPhones</span>
            </div>
          </div>
        )
      case "windows":
      default:
        return (
          <a
            href={downloadUrls.windows || "/download"}
            className="inline-flex h-[56px] items-center gap-3 rounded-full border-2 border-stremio-green bg-stremio-green px-7 text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,215,101,0.4)]"
          >
            <Image
              src="/windows.png"
              alt="Windows logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain brightness-0 invert"
            />
            <span>Download Free</span>
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

      <div className="relative mx-auto max-w-[1320px] px-4 pb-[390px] pt-[200px] lg:pb-[340px]">
        {/* floating cards image */}
        <div className="pointer-events-none absolute -right-12 top-16 hidden w-[58%] md:block lg:w-[90%] lg:top-20 lg:-right-120 z-40">
          <img
            src="/hero-cards.png"
            alt="Stremio content posters"
            className="h-auto w-full"
            loading="eager"
          />
        </div>
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-balance text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Watch Together, <br className="hidden sm:inline" />
            No Matter the Distance
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-stremio-green">
            Watch anything together in perfect sync across all your devices.
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/80 max-w-xl">
            iPartyUp bring friends, families, and long-distance couples closer, lets you watch anything together seamlessly without the hassle of switching platforms.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {renderDownloadButton()}
            <a
              href="/download#platforms"
              className="inline-flex h-[56px] items-center rounded-full border-2 border-white px-7 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-stremio-dark"
            >
              Supported Devices
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

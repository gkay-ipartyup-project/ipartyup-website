"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function TvSection() {
  const [platform, setPlatform] = useState<"windows" | "mac" | "android" | "ios" | "unknown">("windows")

  useEffect(() => {
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
  }, [])

  const renderGooglePlayButton = () => {
    const isApple = platform === "mac" || platform === "ios"

    if (isApple) {
      return (
        <div
          className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg text-neutral-400 cursor-default"
        >
          <Image
            src="/apple-logo.png"
            alt="Apple logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain brightness-0 opacity-40"
          />
          <div className="flex flex-col items-start text-left leading-none">
            <span className="text-sm font-bold text-neutral-600">Coming Soon</span>
            <span className="text-[10px] font-medium text-neutral-400 mt-0.5">for iPhones</span>
          </div>
        </div>
      )
    }

    return (
      <a
        href="/download"
        className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-neutral-50"
      >
        <Image
          src="/Play-store-colored.png"
          alt="Google Play Store logo"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
        <div className="flex flex-col items-start text-left leading-none">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500">Android APK</span>
          <span className="text-sm sm:text-base font-black text-neutral-900 mt-0.5">Google Play</span>
        </div>
      </a>
    )
  }
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a3d1a_0%,#071f0f_55%,#0a0a0a_100%)] [transform:skewY(-4deg)] pt-28 pb-20 lg:pt-36 lg:pb-28 -mt-24 z-10">
        {/* Unskewed container to keep text and mockups straight */}
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-6 [transform:skewY(4deg)] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold leading-tight text-white">
              Try iPartyUp
              <br />
              On Your Mobile or Laptop
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              You can now watch all favorite TV shows, Movies and Anime on your Android/Windows/MacOS Devices.
              The iPartyUp app lets you enjoy huge library of content with your friends and family.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              {renderGooglePlayButton()}
            </div>
          </div>

          <div className="relative lg:translate-x-12 lg:scale-130">
            <Image
              src="/laptop-and-mobile.png"
              alt="iPartyUp app on laptop and mobile"
              width={1000}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Sibling Mascot container - positioned outside the skewed section to prevent distortion */}
      <div className="relative mx-auto max-w-[1320px] px-6 h-0 overflow-visible z-20">
        <div className="absolute right-1 -top-[200px] md:-top-[280px] lg:-top-[400px] w-[180px] md:w-[260px] lg:w-[340px]">
          <Image
            src="/pngwing.png"
            alt="iPartyUp Olaf mascot"
            width={500}
            height={750}
            className="h-auto w-full"
          />
        </div>
      </div>
    </>
  )
}


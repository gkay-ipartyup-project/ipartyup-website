"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { GOOGLE_PLAY_URL } from "@/lib/constants"

export function TvSection() {
  const [platform, setPlatform] = useState<"windows" | "mac" | "android" | "ios" | "unknown">("windows")
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
  }, [])

  const renderMobileButton = () => {
    if (platform === "ios") {
      return (
        <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.3)] text-neutral-500 cursor-default">
          <Image
            src="/apple-logo.webp"
            alt="Apple logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain brightness-0 opacity-40"
          />
          <div className="flex flex-col items-start text-start leading-none">
            <span className="text-sm font-bold text-neutral-700">{t.tvSection.comingSoon}</span>
            <span className="text-[10px] font-medium text-neutral-500 mt-0.5">{t.tvSection.forIphones}</span>
          </div>
        </div>
      )
    }

    return (
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        dir="ltr"
        className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-neutral-100"
      >
        <Image
          src="/Play-store-colored.webp"
          alt="Google Play Store logo"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
        <div className="flex flex-col items-start text-left leading-none">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500">
            GET IT ON
          </span>
          <span className="text-sm sm:text-base font-black text-neutral-900 mt-0.5">
            {t.tvSection.googlePlay}
          </span>
        </div>
      </a>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a3d1a_0%,#071f0f_55%,#0a0a0a_100%)] [transform:skewY(-4deg)] -mt-12 pt-20 pb-20 sm:-mt-16 sm:pt-24 sm:pb-24 lg:-mt-24 lg:pt-36 lg:pb-28 z-10">
        {/* Unskewed container */}
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-5 sm:px-6 [transform:skewY(4deg)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-start">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              {t.tvSection.titleLine1}
              <br />
              {t.tvSection.titleLine2}
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/80">
              {t.tvSection.desc}
            </p>

            <div className="mt-7 sm:mt-8 flex justify-center lg:justify-start">
              {renderMobileButton()}
            </div>
          </div>

          <div
            className={`relative mx-auto w-full max-w-[680px] lg:max-w-none transition-transform duration-300 ${
              isArabic ? "lg:-translate-x-8" : "lg:translate-x-8"
            } lg:scale-110`}
          >
            <Image
              src="/laptop-and-mobile.webp"
              alt="iPartyUp app on laptop and mobile"
              width={1200}
              height={689}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Sibling Mascot container (desktop & large tablet so it never covers mobile content) */}
      <div className="relative mx-auto hidden md:block max-w-[1320px] px-6 h-0 overflow-visible z-20 pointer-events-none">
        <div
          className={`absolute ${
            isArabic ? "left-2" : "right-2"
          } -top-[210px] lg:-top-[360px] w-[200px] lg:w-[320px] transition-all duration-300`}
        >
          <Image
            src="/pngwing.webp"
            alt="iPartyUp mascot"
            width={636}
            height={944}
            className="h-auto w-full"
          />
        </div>
      </div>
    </>
  )
}

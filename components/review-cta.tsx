"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { GOOGLE_PLAY_URL } from "@/lib/constants"

export function ReviewCta() {
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

  const renderGooglePlayButton = () => {
    if (platform === "ios") {
      return (
        <div className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-neutral-900 border border-white/15 px-7 text-white/60 cursor-default">
          <Image
            src="/apple-logo.webp"
            alt="Apple logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain brightness-0 invert opacity-40"
          />
          <div className="flex flex-col items-start text-start leading-none">
            <span className="text-sm font-bold text-white/75">{t.reviewCta.comingSoon}</span>
            <span className="text-[10px] font-medium text-white/50 mt-0.5">{t.reviewCta.forIphones}</span>
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
        className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-neutral-900 border border-white/15 px-7 shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-neutral-800"
      >
        <Image
          src="/Play-store-colored.webp"
          alt="Google Play Store logo"
          width={30}
          height={30}
          className="h-7 w-7 object-contain"
        />
        <div className="flex flex-col items-start text-left leading-none">
          <span className="text-[9px] uppercase tracking-wider font-semibold text-white/70">
            GET IT ON
          </span>
          <span className="text-sm sm:text-base font-black text-white mt-0.5">
            {t.reviewCta.googlePlay}
          </span>
        </div>
      </a>
    )
  }

  return (
    <section className="relative overflow-x-clip bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(2deg)] pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-36 lg:pb-36 -mt-8 mb-0 z-10">
      {/* Antique grimoire-textured accent band */}
      <div className="absolute top-1/2 left-0 w-full h-[85%] lg:h-74 -translate-y-1/2 bg-[linear-gradient(90deg,#07070f_0%,#150e07_20%,#3d2611_50%,#150e07_80%,#07070f_100%)] border-t border-b border-[#8a6037]/50 shadow-[0_2px_8px_rgba(0,0,0,0.3)] z-0" />
      <style>{`
        @keyframes floatAsta {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes floatBook {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-18px) rotate(-8deg) scale(1.03); }
        }
        .animate-asta {
          animation: floatAsta 6s ease-in-out infinite;
        }
        .animate-book {
          animation: floatBook 4.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-asta,
          .animate-book {
            animation: none;
          }
        }
      `}</style>

      <div
        dir="ltr"
        className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-8 sm:gap-10 px-6 sm:px-10 lg:px-6 [transform:skewY(-2deg)] lg:grid-cols-2"
      >
        {/* Artwork Column: flows naturally above CTA on mobile/tablet, dramatic overhang on desktop */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[540px] h-[250px] sm:h-[320px] lg:h-[420px] flex items-center justify-center pointer-events-none select-none">
          <div className="absolute inset-x-0 -top-10 sm:-top-14 lg:-top-16 animate-asta z-10">
            <Image
              src="/Asta.webp"
              alt="Asta"
              width={700}
              height={803}
              className="mx-auto w-[88%] sm:w-[92%] lg:w-full h-auto object-contain"
            />
          </div>
          <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-6 w-[30%] sm:w-[28%] animate-book z-20">
            <Image
              src="/Book.webp"
              alt="Floating Book"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* CTA Column */}
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="z-30 flex flex-col items-center text-center lg:items-start lg:text-start lg:justify-self-end"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{t.reviewCta.title}</h3>
          <div className="mt-6 flex w-full sm:w-auto flex-col gap-3.5 items-stretch sm:items-center lg:items-start">
            <Link
              href="/download"
              className="inline-flex h-[54px] w-full sm:w-auto items-center justify-center rounded-full bg-white px-9 text-base font-bold text-black shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-neutral-100"
            >
              {t.reviewCta.downloadNow}
            </Link>
            {renderGooglePlayButton()}
          </div>
        </div>
      </div>
    </section>
  )
}

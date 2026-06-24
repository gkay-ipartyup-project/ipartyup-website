"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function ReviewCta() {
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
          className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-neutral-900 px-7 text-white/60 cursor-default"
        >
          <Image
            src="/apple-logo.png"
            alt="Apple logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain brightness-0 invert opacity-40"
          />
          <div className="flex flex-col items-start text-left leading-none">
            <span className="text-sm font-bold text-white/70">Coming Soon</span>
            <span className="text-[10px] font-medium text-white/50 mt-0.5">for iPhones</span>
          </div>
        </div>
      )
    }

    return (
      <a
        href="/download"
        className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-neutral-900 px-7 transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,215,101,0.2)]"
      >
        <Image
          src="/Play-store-colored.png"
          alt="Google Play Store logo"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <div className="flex flex-col items-start text-left leading-none">
          <span className="text-[8px] uppercase tracking-wider font-semibold text-white/70">Get it on</span>
          <span className="text-sm sm:text-base font-black text-white mt-0.5">Google Play</span>
        </div>
      </a>
    )
  }

  return (
    <section className="relative bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(2deg)] pt-36 pb-28 lg:pt-44 lg:pb-36 -mt-24 mb-0 z-10">
      {/* Antique grimoire-textured accent band in the middle */}
      <div className="absolute top-1/2 left-0 w-full h-[580px] lg:h-74 -translate-y-1/2 bg-[linear-gradient(90deg,#07070f_0%,#150e07_20%,#3d2611_50%,#150e07_80%,#07070f_100%)] border-t border-b border-[#8a6037]/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-2px_4px_rgba(0,0,0,0.8),0_4px_10px_rgba(0,0,0,0.3)] z-0" />
      <style>{`
        @keyframes floatAsta {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }
        @keyframes floatBook {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-22px) rotate(-8deg) scale(1.03);
          }
        }
        .animate-asta {
          animation: floatAsta 6s ease-in-out infinite;
        }
        .animate-book {
          animation: floatBook 4.5s ease-in-out infinite;
        }
      `}</style>
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-12 sm:px-16 lg:px-6 [transform:skewY(-2deg)] lg:grid-cols-2 lg:items-center">
        {/* Spacer for mobile layout only (in normal flow, to reserve height for the absolute Asta/Book container) */}
        <div className="h-[240px] sm:h-[320px] lg:hidden" />

        {/* Middle Logo (between Asta & CTA on desktop only, hidden on mobile, shifted up and right, layered behind Asta & Book) */}
        <div className="hidden lg:block absolute left-[53%] lg:top-[38%] -translate-x-1/2 -translate-y-1/2 z-0 w-[240px] xl:w-[280px] pointer-events-none select-none">
          <Image
            src="/iPartyUp-Streaming.png"
            alt="iPartyUp Streaming"
            width={280}
            height={100}
            className="w-full h-auto object-contain pointer-events-none select-none"
            priority
          />
        </div>

        {/* Left Column: Floating Asta & Book (Absolute Positioned) */}
        <div className="absolute left-0 sm:left-16 lg:left-6 top-4 sm:top-8 lg:top-1/2 lg:-translate-y-1/2 w-full sm:w-[calc(100%-128px)] lg:w-[48%] max-w-[540px] h-[340px] sm:h-[390px] lg:h-[450px] flex items-center justify-center pointer-events-none select-none">
          {/* Asta */}
          <div className="absolute left-[-8%] sm:left-0 -top-50 lg:-top-32 w-[104%] sm:w-[100%] animate-asta z-10 select-none pointer-events-none">
            <Image
              src="/Asta.png"
              alt="Asta"
              width={650}
              height={650}
              className="w-full h-auto object-contain pointer-events-none select-none"
              priority
            />
          </div>
          {/* Floating Book */}
          <div className="absolute right-0 sm:right-0 bottom-0 sm:bottom-8 w-[40%] sm:w-[30%] animate-book z-20 select-none pointer-events-none">
            <Image
              src="/Book.png"
              alt="Floating Book"
              width={140}
              height={140}
              className="w-full h-auto object-contain pointer-events-none select-none"
              priority
            />
          </div>
        </div>

        {/* Right Column: CTA */}
        <div className="lg:col-start-2 lg:justify-self-end z-30">
          <h3 className="text-2xl font-semibold text-white">Get iPartyUp for free</h3>
          <div className="mt-6 flex flex-col gap-3.5 items-start">
            <a
              href="/download"
              className="inline-flex h-[54px] items-center justify-center rounded-full bg-white px-9 text-base font-semibold text-stremio-green transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              Download Now
            </a>
            {renderGooglePlayButton()}
          </div>
        </div>
      </div>
    </section>
  )
}

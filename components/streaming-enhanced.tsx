"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function StreamingEnhanced() {
  const { t, isArabic } = useLanguage()

  return (
    <section className="relative z-10 overflow-x-clip -mt-8 pt-14 pb-16 sm:-mt-14 sm:pt-20 sm:pb-20 md:-mt-32 lg:-mt-60 lg:pt-4 lg:pb-8">
      {/* Skewed green background layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-8 sm:gap-10 px-5 sm:px-6 lg:grid-cols-2">
        {/* App dashboard: centered cleanly on mobile/tablet, dramatic perspective on desktop */}
        <div
          className={`relative mx-auto w-full max-w-[560px] lg:max-w-none ${
            isArabic ? "lg:-mr-24" : "lg:-ml-24"
          }`}
        >
          <div
            className={`transition-transform duration-500 ${
              isArabic
                ? "lg:[transform:perspective(1400px)_rotateY(-8deg)_rotateZ(1deg)]"
                : "lg:[transform:perspective(1400px)_rotateY(8deg)_rotateZ(-1deg)]"
            }`}
          >
            <Image
              src="/app-dashboard.webp"
              alt="iPartyUp app dashboard"
              width={691}
              height={581}
              className="h-auto w-full rounded-xl lg:rounded-none"
              priority
            />
          </div>
        </div>

        <div className="lg:px-6 lg:-mt-8">
          <p className="text-pretty text-lg sm:text-xl leading-relaxed text-white">
            {t.streaming.description}
          </p>

          <p className="mt-8 sm:mt-10 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/65">
            {t.streaming.availableOn}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3.5">
            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <Image
                src="/windows.webp"
                alt="Windows icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              {t.streaming.windows}
            </span>

            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <Image
                src="/android.webp"
                alt="Android icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              {t.streaming.android}
            </span>

            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <Image
                src="/apple-logo.webp"
                alt="macOS icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              {t.streaming.macos}
            </span>

            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white/75">
              <Image
                src="/apple-logo.webp"
                alt="iPhone icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert opacity-65"
              />
              <span>
                {t.streaming.iphone}{" "}
                <span className="text-xs font-semibold text-white/65">
                  ({t.streaming.soon})
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

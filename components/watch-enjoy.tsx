"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function WatchEnjoy({ variant = "dark" }: { variant?: "dark" | "green" }) {
  const isGreen = variant === "green"
  const { t, isArabic } = useLanguage()

  return (
    <section
      className={
        isGreen
          ? "relative overflow-hidden bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] pt-24 pb-20 lg:pt-36 lg:pb-28 -mt-20 z-10 text-white"
          : "relative overflow-x-clip bg-stremio-dark pt-16 pb-28 sm:pt-20 sm:pb-40 lg:pt-28 lg:pb-64 text-white"
      }
    >
      <div
        className={`mx-auto max-w-[1320px] px-5 sm:px-6 ${
          isGreen ? "[transform:skewY(4deg)]" : ""
        }`}
      >
        <div className="text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold ${isGreen ? "text-white" : "text-stremio-green"}`}>
            {t.watchEnjoy.title}
          </h2>
          <h3 className={`mt-3 sm:mt-4 text-xl sm:text-2xl font-bold ${isGreen ? "text-white/95" : "text-white"}`}>
            {t.watchEnjoy.subtitle}
          </h3>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2">
          {/* Phone mockup */}
          <div className={`flex justify-center ${isArabic ? "md:justify-start md:pl-8 lg:pl-10" : "md:justify-end md:pr-8 lg:pr-10"}`}>
            <div className="relative w-[225px] h-[460px] sm:w-[265px] sm:h-[540px]">
              <div className="absolute inset-[9px] sm:inset-[10px] rounded-[1.85rem] sm:rounded-[2rem] overflow-hidden bg-neutral-900">
                <video
                  src="/app-video.mp4"
                  className="absolute top-1/2 left-1/2 w-[105%] h-[105%] -translate-x-1/2 -translate-y-1/2 object-cover border-0 pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
              <Image
                src="/smartphone-bezel.webp"
                alt=""
                width={600}
                height={1225}
                className="absolute inset-0 z-10 w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>

          <div className="mx-auto max-w-md text-center md:mx-0 md:text-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.watchEnjoy.instantPartiesTitle}
            </h2>
            <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${isGreen ? "text-white/90" : "text-neutral-400"}`}>
              {t.watchEnjoy.instantPartiesDesc}
            </p>

            <h2 className="mt-8 sm:mt-10 text-2xl sm:text-3xl font-bold text-white">
              {t.watchEnjoy.crossPlatformTitle}
            </h2>
            <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${isGreen ? "text-white/90" : "text-neutral-400"}`}>
              {t.watchEnjoy.crossPlatformDesc}
            </p>

            <Link
              href="/download"
              className={`mt-8 inline-flex items-center rounded-full border-2 border-white px-8 py-3 text-base font-bold text-white transition-colors ${
                isGreen
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-white hover:text-stremio-dark"
              }`}
            >
              {t.watchEnjoy.allDownloads}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

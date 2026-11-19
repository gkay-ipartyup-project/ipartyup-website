"use client"

import { useLanguage } from "@/lib/language-context"

interface UnderConstructionProps {
  launchDate: string
}

export default function UnderConstruction({ launchDate }: UnderConstructionProps) {
  const { isArabic } = useLanguage()

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center select-none"
    >
      <div className="max-w-xl w-full space-y-8 flex flex-col items-center">
        {/* Brand Logo */}
        <div dir="ltr" className="flex items-center gap-3">
          <img
            src="/favicon.webp"
            alt="iPartyUp"
            className="w-10 h-10 rounded-xl"
          />
          <span style={{ fontFamily: "Brolink, sans-serif" }} className="text-2xl tracking-wider text-white">
            iParty<span style={{ color: "#1ed765" }}>Up</span>
          </span>
        </div>

        {/* 3D Under Construction Illustration */}
        <div className="w-80 h-80 sm:w-96 sm:h-96 max-w-full flex items-center justify-center">
          <img
            src="/under-construction.webp"
            alt="Website Under Construction"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        {/* Messaging */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {isArabic ? "الموقع قيد التطوير حالياً" : "Website Under Construction"}
          </h1>
          <p className="text-white/65 text-base max-w-md mx-auto leading-relaxed">
            {isArabic ? (
              launchDate ? (
                <>
                  نعمل حالياً على تحسين iPartyUp لتقديم تجربة أفضل. سنعود إليكم في{" "}
                  <strong className="font-bold text-[#1ed765] whitespace-nowrap">{launchDate}</strong>.
                  ابقوا بالقرب!
                </>
              ) : (
                "نعمل حالياً على تحسين iPartyUp لتقديم تجربة أفضل. سنعود قريباً!"
              )
            ) : launchDate ? (
              <>
                We&apos;re polishing iPartyUp to deliver an even better experience. The site will be back on{" "}
                <strong className="font-bold text-[#1ed765] whitespace-nowrap">{launchDate}</strong>. Stay tuned!
              </>
            ) : (
              "We're polishing iPartyUp to deliver an even better experience. We'll be right back soon!"
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

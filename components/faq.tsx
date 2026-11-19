"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Faq() {
  const { t, isArabic } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section
      id="faq"
      className="relative overflow-x-clip scroll-mt-24 bg-stremio-dark pt-20 pb-28 sm:pt-24 sm:pb-36 lg:pt-28 lg:pb-44 -mt-12 sm:-mt-16 z-0"
    >
      <Image
        src="/turboabuelaa.webp"
        alt="iPartyUp FAQ mascot"
        width={520}
        height={963}
        className={`absolute top-1/2 -translate-y-1/2 hidden w-[240px] xl:block pointer-events-none z-10 transition-all duration-300 ${
          isArabic ? "left-0 [transform:translateY(-50%)_scaleX(-1)]" : "right-0"
        }`}
      />

      <div className="relative z-20 mx-auto max-w-[1320px] px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.faq.heading}
          </h2>
          <p className="mt-3 text-base text-white/60">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="relative mx-auto mt-10 sm:mt-12 max-w-[740px] divide-y divide-white/10 border-t border-b border-white/10">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx}>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start transition-colors hover:text-[#1ed765] cursor-pointer"
                >
                  <span
                    className={`text-[15px] sm:text-base font-bold transition-colors ${
                      isOpen ? "text-[#1ed765]" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1ed765]" : "text-white/45"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 text-[15px] leading-relaxed text-neutral-300">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

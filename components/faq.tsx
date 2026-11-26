"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Faq() {
  const { t, isArabic } = useLanguage()
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]))

  const handleToggle = (idx: number, isOpen: boolean) => {
    setOpenItems((prev) => {
      if (prev.has(idx) === isOpen) return prev
      const next = new Set(prev)
      if (isOpen) next.add(idx)
      else next.delete(idx)
      return next
    })
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
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
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white">
            {t.faq.heading}
          </h2>
          <p className="mt-3 text-base text-white/60">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="relative mx-auto mt-10 sm:mt-12 max-w-[740px] divide-y divide-white/10 border-t border-b border-white/10">
          {t.faq.items.map((item, idx) => (
            <details
              key={idx}
              className="faq-details group"
              open={openItems.has(idx)}
              onToggle={(e) => handleToggle(idx, e.currentTarget.open)}
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-5 text-start transition-colors hover:text-[#1ed765] [&::-webkit-details-marker]:hidden">
                <span className="text-[15px] sm:text-base font-bold text-white transition-colors group-open:text-[#1ed765] group-hover:text-[#1ed765]">
                  {item.q}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-white/45 transition-transform duration-200 group-open:rotate-180 group-open:text-[#1ed765]"
                />
              </summary>

              <div className="pb-5 text-[15px] leading-relaxed text-neutral-300">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

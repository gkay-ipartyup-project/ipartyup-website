"use client"

import { useState } from "react"

export function CookieBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex items-center justify-between gap-4 bg-[#1a1a1a] pl-6 text-neutral-300 shadow-[0_-1px_8px_rgba(0,0,0,0.3)]">
      <p className="py-4 text-[15px]">
        This website uses cookies to ensure you get the best experience on our
        website.{" "}
        <a href="#" className="underline">
          Learn more
        </a>
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="self-stretch bg-stremio-green px-10 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Got it!
      </button>
    </div>
  )
}

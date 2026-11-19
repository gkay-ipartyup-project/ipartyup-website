"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.15,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Scroll smoothly to hash target on navigation if present
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1)
      const el = document.getElementById(targetId)
      if (el) {
        setTimeout(() => {
          lenis.scrollTo(el, { offset: -80 })
        }, 60)
      }
    }

    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest("a[href]")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href) return

      const isSamePageHash =
        href.startsWith("#") ||
        (href.startsWith("/#") && window.location.pathname === "/")

      if (!isSamePageHash) return

      const id = href.replace(/^\/?#/, "")
      if (!id) return
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target, { offset: -80 })
        window.history.pushState(null, "", `#${id}`)
      }
    }

    document.addEventListener("click", handleHashClick)

    return () => {
      document.removeEventListener("click", handleHashClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [pathname])

  return null
}

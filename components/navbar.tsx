"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Downloads", href: "/download", green: true },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-stremio-dark/95 backdrop-blur border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className={`mx-auto flex max-w-[1320px] items-center justify-between px-6 lg:transition-all lg:duration-300 ${
        scrolled ? "py-5 lg:py-3" : "py-5"
      }`}>
        <Link 
          href="/" 
          className="group flex items-center lg:transition-transform lg:duration-300" 
          aria-label="iPartyUp home"
        >
          <Logo className="h-8 w-auto text-white" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`group relative pb-1 transition-colors duration-300 ${
                      link.green
                        ? "text-stremio-green hover:text-stremio-green-light"
                        : active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-current transition-transform duration-300 origin-center ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <a
            href="#"
            className="rounded-full border-2 border-white px-6 py-2 text-[15px] font-semibold text-white lg:transition-all lg:duration-300 hover:bg-white hover:text-stremio-dark lg:hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
          >
            Login
          </a>

          <div className="flex items-center gap-2 text-[15px] font-medium">
            <button type="button" className="text-white hover:text-stremio-green transition-colors duration-200 cursor-pointer">EN</button>
            <span className="text-white/30 font-light">|</span>
            <button type="button" className="text-white/50 hover:text-stremio-green transition-colors duration-200 cursor-pointer">BR</button>
          </div>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-stremio-dark/95 px-6 py-4 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-4 text-[15px] font-medium">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      link.green
                        ? "text-stremio-green"
                        : active
                          ? "font-bold text-white"
                          : "text-white/90"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a href="#" className="text-white">
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Users, HelpCircle, Download, ArrowUpRight, Tag } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div className="relative w-full max-w-6xl">
        {/* Main bar */}
        <div
          className={`relative flex items-center justify-between rounded-2xl px-5 md:px-8 py-3.5 transition-all duration-300 ${
            scrolled
              ? "bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
              : "bg-black/50 backdrop-blur-xl border border-white/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group select-none">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/favicon.png"
                alt="iPartyUp Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                priority
                loading="eager"
              />
            </div>
            <span className="font-brolink font-brolink-fallback text-[17px] tracking-wider text-white select-none">
              iParty<span className="text-primary">Up</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {["About", "Pricing", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-sm font-semibold text-white/50 hover:text-white transition-colors duration-200 group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}

            {/* Divider */}
            <div className="h-5 w-px bg-white/10 mx-1" />

            <Link
              href="/download"
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-black rounded-xl text-sm font-bold overflow-hidden btn-glow btn-shine"
            >
              <Download size={14} strokeWidth={2.5} />
              Get iPartyUp
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute top-full left-0 right-0 mt-2 z-50 md:hidden overflow-hidden rounded-2xl bg-black/95 border border-white/10 shadow-2xl backdrop-blur-2xl"
            >
              <div className="p-4 space-y-1">
                {[
                  { name: "About", icon: Users, href: "/about" },
                  { name: "Pricing", icon: Tag, href: "/pricing" },
                  { name: "FAQ", icon: HelpCircle, href: "/faq" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <item.icon size={18} strokeWidth={2} className="text-primary" />
                    <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </Link>
                ))}

                <div className="h-px bg-white/8 my-2" />

                {[
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "/terms" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={13} />
                  </Link>
                ))}

                <div className="pt-2">
                  <Link
                    href="/download"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-black rounded-xl text-sm font-bold btn-glow"
                  >
                    <Download size={16} strokeWidth={2.5} />
                    Get iPartyUp
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, Users, HelpCircle, Download, ArrowUpRight, Tag } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-3xl"
    >
      {/* Navbar Container - Relative for dropdown positioning */}
      <div className="relative flex items-center justify-between rounded-3xl">
        {/* Animated border glow effect - exactly matches inner content shape */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none z-0"
          animate={{
            boxShadow: [
              "0 0 20px rgba(34,197,94,0.3), inset 0 0 0 1px rgba(34,197,94,0.4)",
              "0 0 30px rgba(34,197,94,0.4), inset 0 0 0 1px rgba(34,197,94,0.6)",
              "0 0 20px rgba(34,197,94,0.3), inset 0 0 0 1px rgba(34,197,94,0.4)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner content - glass morphism effect */}
        <div className="relative z-10 flex items-center justify-between w-full px-6 md:px-8 py-4 backdrop-blur-2xl bg-black/30 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20">
      <Link href="/" className="flex items-center gap-3 group">
        <motion.div 
          className="relative w-10 h-10 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src="/favicon.png" 
            alt="iPartyUp Logo" 
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
            loading="eager"
          />
        </motion.div>
        <Image 
          src="/logo-text.png" 
          alt="iPartyUp" 
          width={70}
          height={18}
          className="h-3 md:h-4 w-auto object-contain"
          priority
          loading="eager"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {["About", "Pricing", "FAQ"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <Link 
              href={`/${item.toLowerCase()}`} 
              className="relative text-sm font-bold uppercase tracking-[0.15em] text-white/50 hover:text-white transition-all duration-300 group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary/50 group-hover:w-full transition-all duration-500 ease-out delay-75 blur-sm" />
            </Link>
          </motion.div>
        ))}
        
        {/* Divider */}
        <div className="h-6 w-px bg-white/10 mx-2" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <Link 
            href="/download" 
            className="relative inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-2xl text-sm font-black uppercase tracking-wider overflow-hidden group shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1">
              Get iPartyUp
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden relative p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
      >
        <AnimatePresence mode="wait">
          {mobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
        </div>

      {/* Mobile Dropdown Menu - Expands from Navbar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-full left-4 right-4 mt-2 z-50 md:hidden overflow-hidden rounded-2xl bg-[#020203]/95 border border-primary/20 shadow-2xl"
          >
            {/* Menu Content */}
            <div className="p-4 space-y-2">
              {/* Main Menu Items */}
              {[
                { name: "About", icon: Users, href: "/about" },
                { name: "Pricing", icon: Tag, href: "/pricing" },
                { name: "FAQ", icon: HelpCircle, href: "/faq" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {/* Green Icon Only */}
                    <item.icon 
                      size={22} 
                      strokeWidth={2}
                      className="text-primary"
                    />
                    
                    <span className="text-base font-bold text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="h-px bg-white/10 my-3" />

              {/* Secondary Links */}
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-2"
              >
                <Link
                  href="/download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-black uppercase tracking-wider"
                >
                  <Download size={18} strokeWidth={2.5} />
                  Get iPartyUp
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
}

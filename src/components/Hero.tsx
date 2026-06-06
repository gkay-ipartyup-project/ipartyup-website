"use client";

import { motion } from "framer-motion";
import { Download, Play, Users, MessageSquare, Zap, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-5 md:px-10 overflow-hidden bg-background">

      {/* Background: single soft green radial + subtle grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Green radial glow — top-left origin like screenscape */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)",
          }}
        />
        {/* Subtle bottom-right accent */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">

        {/* ── LEFT: Copy ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-7">

          {/* Casual Premium Text (No Badge Wrapper) */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-2.5 text-sm font-semibold tracking-wide text-white/50">
            <span className="text-primary font-black uppercase text-xs tracking-wider">Now Available</span>
            <span className="text-white/25 font-light">•</span>
            <span className="text-white/75">Sign Up Free, Get 24H Premium</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-[2.6rem] sm:text-5xl md:text-6xl xl:text-[4.5rem] font-extrabold tracking-tight leading-[1.07] font-display"
          >
            Watch together
            <br />
            <span className="text-gradient-green animate-gradient-x">
              even when apart.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-base md:text-lg text-white/50 font-medium leading-relaxed max-w-[480px]"
          >
            Tired of juggling five streaming subscriptions? <strong className="text-white/80 font-semibold">One app. Everything inside.</strong> Watch synchronized with friends in frame-perfect sync — across 30+ OTT platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <Link
              href="/download"
              className="relative group flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-black rounded-xl text-sm font-bold tracking-wide overflow-hidden btn-glow btn-shine w-full sm:w-auto"
            >
              <Download size={16} strokeWidth={2.5} />
              Get Started Free
            </Link>
            <Link
              href="#features"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white/80 rounded-xl text-sm font-semibold hover:bg-white/8 hover:text-white transition-all duration-200 w-full sm:w-auto"
            >
              <Play size={14} className="text-primary" fill="currentColor" />
              Explore Features
            </Link>
          </motion.div>

          {/* Platform badges */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-3 border-t border-white/[0.06] w-full"
          >
            {[
              { image: "/windows.png", label: "Windows" },
              { image: "/mac.png", label: "macOS" },
              { image: "/android.png", label: "Android" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 group cursor-pointer">
                <div className="relative w-4 h-4 opacity-35 group-hover:opacity-75 transition-opacity duration-200">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors duration-200">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Phone Mockup ── */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative animate-float"
          >
            {/* Outer glow ring behind phone */}
            <div
              className="absolute inset-0 rounded-[48px] -z-10 blur-[60px]"
              style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.2) 0%, transparent 70%)" }}
            />

            {/* Phone wrapper */}
            <div
              className="relative w-[260px] sm:w-[300px]"
              style={{ aspectRatio: "460/940" }}
            >
              {/* Bezel image */}
              <Image
                src="/smartphone-bezel.png"
                alt="iPartyUp App on Android"
                fill
                sizes="(max-width: 640px) 260px, 300px"
                className="object-contain z-20 pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
                priority
              />

              {/* Screen content */}
              <div className="absolute inset-[3.5%] rounded-[36px] overflow-hidden bg-[#060606] z-10 flex flex-col">

                {/* Status bar */}
                <div className="h-9 pt-3 px-5 flex items-center justify-between text-[10px] font-bold text-white/50 flex-shrink-0">
                  <span>9:41</span>
                  <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[70px] h-4 bg-black rounded-full border border-neutral-800/80" />
                  <span className="flex gap-1 items-center">
                    <span className="w-3 h-[7px] border border-white/40 rounded-[2px] inline-block relative">
                      <span className="absolute right-[-3px] top-[1.5px] w-[2px] h-[4px] bg-white/40 rounded-r-sm" />
                      <span className="absolute inset-0 bg-white/40 rounded-[1px] w-2/3" />
                    </span>
                  </span>
                </div>

                {/* App nav bar */}
                <div className="px-4 py-2 flex items-center justify-between border-b border-white/[0.05] bg-black/40 backdrop-blur-md flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Image src="/favicon.png" alt="iPartyUp" width={16} height={16} className="w-4 h-4 object-contain" />
                    <span className="font-brolink text-[11px] tracking-wide text-white">
                      iParty<span className="text-primary">Up</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping-slow" />
                    </div>
                  </div>
                </div>

                {/* Video player */}
                <div className="relative bg-neutral-950 flex-shrink-0" style={{ aspectRatio: "16/9" }}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/50 via-zinc-900/80 to-black" />
                  <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/15 rounded-full blur-2xl" />
                  <div className="absolute z-10 inset-0 flex flex-col items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2">
                      <Play size={14} fill="white" className="text-white translate-x-0.5" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-white/90">Cyberpunk: Edgerunners</span>
                    <span className="text-[8px] font-semibold text-primary/80 mt-0.5">S1:E10 • My Whole World</span>
                  </div>
                  {/* Progress */}
                  <div className="absolute bottom-2 inset-x-3 z-10 space-y-1">
                    <div className="flex justify-between text-[7px] text-white/50 font-bold">
                      <span>18:42</span><span>24:15</span>
                    </div>
                    <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full" />
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-primary/20 border border-primary/30 text-[7px] font-black uppercase tracking-wider text-primary z-10">Synced 0ms</span>
                </div>

                {/* Room info */}
                <div className="px-4 py-2.5 border-b border-white/[0.05] bg-neutral-950/60 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <Users size={10} className="text-primary" />
                    <div>
                      <p className="text-[8px] font-black uppercase text-white/80">Room: Friday Vibe</p>
                      <p className="text-[7px] text-white/40">4 watchers online</p>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-primary/15 border border-primary/25 text-[7px] font-black text-primary">MIC ON</span>
                </div>

                {/* Chat */}
                <div className="flex-1 p-3 space-y-2.5 overflow-hidden bg-neutral-950/30">
                  {[
                    { name: "Alex", color: "from-indigo-500 to-purple-600", msg: "That ending scene got me screaming 😭" },
                    { name: "Sarah", color: "from-rose-400 to-orange-500", msg: "Same! The soundtrack is fire." },
                    { name: "Dave", color: "from-emerald-400 to-teal-500", msg: "Is it synced? Just joined!" },
                  ].map((chat) => (
                    <div key={chat.name} className="flex items-start gap-1.5 max-w-[88%]">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${chat.color} flex items-center justify-center text-[7px] font-extrabold text-white flex-shrink-0`}>
                        {chat.name[0]}
                      </div>
                      <div className="p-1.5 rounded-2xl rounded-tl-none bg-white/[0.04] border border-white/[0.06]">
                        <p className="text-[7px] font-bold text-white/35 mb-0.5">{chat.name}</p>
                        <p className="text-[8.5px] text-white/85 font-medium leading-snug">{chat.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="p-2.5 border-t border-white/[0.05] bg-neutral-950 flex items-center gap-2 flex-shrink-0">
                  <div className="flex-1 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] px-2.5 flex items-center justify-between">
                    <span className="text-[8px] text-white/30">Type a message…</span>
                    <span className="text-[10px]">😊</span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-black">
                    <Share2 size={11} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="hidden sm:flex absolute top-[15%] -left-12 sm:-left-16 z-30 bg-card border border-white/10 rounded-2xl px-3 py-2 items-center gap-2 shadow-xl backdrop-blur-sm"
            >
              <div className="w-7 h-7 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                <Users size={13} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black text-white">50+ Users</p>
                <p className="text-[8px] text-white/40">Online now</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="hidden sm:flex absolute bottom-[22%] -right-10 sm:-right-14 z-30 bg-card border border-white/10 rounded-2xl px-3 py-2 items-center gap-2 shadow-xl backdrop-blur-sm"
            >
              <div className="w-7 h-7 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                <Zap size={13} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black text-white">0ms Sync</p>
                <p className="text-[8px] text-white/40">Frame perfect</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

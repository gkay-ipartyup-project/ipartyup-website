"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y: y1, opacity, scale }}
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight italic leading-[1.1] mb-6 md:mb-8 px-2"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          <span className="block">Watch together</span>
          <span className="block text-primary drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">even when apart.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14 max-w-2xl mx-auto px-4"
        >
          <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed mb-3">
            Tired of paying for Netflix, Prime, Hulu, and Crunchyroll separately?
          </p>
          <p className="text-base md:text-lg font-bold text-white/80">
            One app. <span className="text-primary">Unlimited content.</span> Watch together.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full max-w-md md:max-w-none px-4"
        >
          <Link 
            href="/download" 
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground rounded-2xl text-base md:text-lg font-black uppercase tracking-wider overflow-hidden shadow-[0_20px_60px_-15px_rgba(34,197,94,0.5)] transition-all duration-300 hover:shadow-[0_25px_70px_-10px_rgba(34,197,94,0.6)] hover:scale-[1.03] active:scale-[0.98] block text-center w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
              <Download className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              Get Started Free
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
          
          <Link 
            href="#features" 
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-base md:text-lg font-black uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm overflow-hidden hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Features
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </Link>
        </motion.div>

        {/* Platform Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-14 md:mt-20 flex items-center justify-center gap-10 md:gap-16 px-4"
        >
          {[
            { image: "/windows.png", label: "Windows" },
            { image: "/mac.png", label: "macOS" },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center gap-3 group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 max-md:border-primary/30 max-md:bg-primary/5">
                <div className="relative w-6 h-6 md:w-7 md:h-7">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-contain"
                    style={{ filter: 'brightness(0) invert(0.5)' }}
                  />
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 max-md:text-white/60 transition-colors duration-300">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ambient Glow — subtle depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[180px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[160px] -z-10" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { name: "Netflix", src: "/platform-OTT-images/Netflix.png" },
  { name: "Prime Video", src: "/platform-OTT-images/prime.png" },
  { name: "Disney+", src: "/platform-OTT-images/Disney.png" },
  { name: "HBO", src: "/platform-OTT-images/HBO.png" },
  { name: "Apple TV+", src: "/platform-OTT-images/AppleTv.png" },
  { name: "Hulu", src: "/platform-OTT-images/hulu.png" },
  { name: "Crunchyroll", src: "/platform-OTT-images/Crunchyroll.png" },
  { name: "Paramount+", src: "/platform-OTT-images/paramount.png" },
  { name: "Peacock", src: "/platform-OTT-images/peacock.png" },
  { name: "Warner Bros", src: "/platform-OTT-images/warners-brothers.png" },
];

export default function OTTShowcase() {
  // Duplicate logos array to make a seamless infinite loop
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center mb-10 md:mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-3"
        >
          All-In-One Streaming
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display text-white"
        >
          Popular OTT Services at one place{" "}
          <span className="text-gradient-green">on reasonable subscription</span>
        </motion.h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex items-center justify-center py-4 w-full overflow-hidden select-none">
        
        {/* Left & Right Shadow Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* CSS Scrolling Track */}
        <div className="flex gap-10 md:gap-16 items-center justify-center animate-[marquee_30s_linear_infinite] whitespace-nowrap min-w-full">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center h-9 md:h-12 w-24 md:w-32 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>


    </section>
  );
}

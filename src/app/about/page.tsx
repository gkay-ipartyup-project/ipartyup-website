"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LottieIcon from "@/components/LottieIcon";
import { motion } from "framer-motion";
import { useState } from "react";

const aboutItems = [
  { title: "All-In-One Entertainment", lottiePath: "/animated-icons/watch-together.json", text: "Movies, TV shows, anime, documentaries — everything you love, all in one place. No more switching between apps or managing multiple subscriptions." },
  { title: "Watch Together", lottiePath: "/animated-icons/sync.json", text: "Create rooms, invite friends, and watch in perfect sync. Whether they're across the street or across the globe, it feels like you're on the same couch." },
  { title: "Privacy First", lottiePath: "/animated-icons/security.json", text: "Your viewing habits are your business. We don't track what you watch, and we never sell your data to anyone. Period." },
  { title: "Always Improving", lottiePath: "/animated-icons/play.json", text: "New content, new features, and improvements delivered through automatic updates. Download once, and you're always on the latest version." }
];

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">ABOUT <span className="text-primary">iPARTYUP</span></h1>
          <p className="text-xl md:text-2xl text-white/40 font-medium">One platform. Endless entertainment. Together.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none mb-20 text-white/50 space-y-8 text-lg font-medium leading-relaxed">
          <p>
            We started iPartyUp because we were tired of the same problem everyone faces — paying for five different 
            streaming services just to watch the content we love. Netflix for one show, Prime for another, Crunchyroll 
            for anime, and the list goes on. It adds up fast, and it's frustrating.
          </p>
          <p>
            iPartyUp is the solution. One app gives 
            you access to a massive library of movies, TV shows, anime, documentaries, and more. But we didn&apos;t stop there — 
            we built the most seamless watch-together experience so you can enjoy everything with your friends, in perfect sync, 
            no matter where they are in the world.
          </p>
          <p>
            Available on Windows and macOS, iPartyUp is designed to be your go-to entertainment hub. Download it once, 
            and automatic updates keep you on the cutting edge. We&apos;re building something special, and we&apos;d love for you to be part of it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {aboutItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.04] transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-6">
                <LottieIcon path={item.lottiePath} size={56} isHovered={hoveredIndex === i} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight mb-3">{item.title}</h3>
              <p className="text-white/40 font-medium group-hover:text-white/60 transition-colors">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

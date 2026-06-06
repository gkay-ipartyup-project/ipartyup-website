"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tv, Users, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const aboutItems = [
  { 
    title: "All-In-One Entertainment", 
    icon: Tv, 
    color: "#22c55e",
    hoverClass: "group-hover:scale-110",
    text: "Movies, series, anime, documentaries — everything you love, all in one place. No more switching apps or juggling subscriptions just to finish one show." 
  },
  { 
    title: "Watch Together", 
    icon: Users, 
    color: "#16a34a",
    hoverClass: "group-hover:scale-110 group-hover:rotate-3",
    text: "Create rooms, invite friends, and watch in perfect sync. Whether they're across the street or across the globe, it feels like you're on the same couch." 
  },
  { 
    title: "Privacy First", 
    icon: Shield, 
    color: "#22c55e",
    hoverClass: "group-hover:scale-110",
    text: "Your viewing habits are your business. We don't track what you watch, and we never sell your data to anyone. Period." 
  },
  { 
    title: "Always Improving", 
    icon: Sparkles, 
    color: "#15803d",
    hoverClass: "group-hover:rotate-12",
    text: "New content, new features, and improvements delivered through automatic updates. Download once, and you're always on the latest version." 
  }
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter mb-4">ABOUT <span className="text-primary">iPARTYUP</span></h1>
          <p className="text-lg md:text-xl text-white/40 font-medium">One platform. Endless entertainment. Together.</p>
        </motion.div>

        <div className="prose prose-invert max-w-none mb-20 text-white/50 space-y-8 text-lg font-medium leading-relaxed">
          <p>
            We started iPartyUp because of one very real problem: subscription fatigue. Paying every month for a handful
            of streaming services just to watch the shows and movies you actually love adds up fast. One app for that
            one show, a second for the new movie, a third for the anime, a fourth for the documentary you saw trending.
            It&apos;s tiring, and honestly, it&apos;s silly.
          </p>
          <p>
            iPartyUp exists to replace that mess with something simple. One app. One membership. Movies, series,
            anime, documentaries — everything sitting in one curated library, ready to play. And because the best
            shows always feel better shared, we built the most seamless watch-together experience on top of it.
            Frame-perfect sync, real-time chat, voice chat, private rooms. The people you love, one press of play,
            no hacks required.
          </p>
          <p>
            Available on Windows and macOS. Download once and automatic updates keep the app current.
            The library grows every week, the feature list grows every update, and the whole thing is built
            around one simple idea: watching stuff together should feel effortless.
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
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300"
                  style={{ 
                    borderColor: hoveredIndex === i ? `${item.color}60` : "rgba(255,255,255,0.05)",
                    backgroundColor: hoveredIndex === i ? `${item.color}15` : "rgba(255,255,255,0.02)",
                    color: item.color,
                    boxShadow: hoveredIndex === i ? `0 0 20px ${item.color}40` : "none"
                  }}
                >
                  <item.icon className={`w-7 h-7 transition-all duration-500 ${item.hoverClass}`} />
                </div>
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

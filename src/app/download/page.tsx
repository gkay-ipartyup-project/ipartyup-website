"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadSection from "@/components/Download";
import SmartScreenNotice from "@/components/SmartScreenNotice";
import { Shield, Zap, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const downloadFeatures = [
  { 
    title: "Clean & Safe", 
    icon: Shield, 
    color: "#22c55e",
    hoverClass: "group-hover:scale-110",
    text: "Every build is signed and scanned before release. No bundled trackers, no adware, no shady extras — just the app." 
  },
  { 
    title: "Fast Installation", 
    icon: Zap, 
    color: "#16a34a",
    hoverClass: "group-hover:scale-110 group-hover:rotate-12",
    text: "Up and running in under a minute. iPartyUp is lightweight by design so it stays out of your way." 
  },
  { 
    title: "Automatic Updates", 
    icon: RefreshCw, 
    color: "#22c55e",
    hoverClass: "group-hover:rotate-180",
    text: "New features, fresh content, and security improvements roll in quietly in the background." 
  }
];

export default function DownloadPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter mb-4">Start Your <span className="text-primary">Party</span></h1>
          <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl mx-auto">Download iPartyUp for Windows, macOS, or Android and start streaming your favorite content today.</p>
        </motion.div>

        <DownloadSection />

        <SmartScreenNotice />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {downloadFeatures.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-6 flex justify-center">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300"
                  style={{ 
                    borderColor: hoveredIndex === i ? `${feature.color}60` : "rgba(255,255,255,0.05)",
                    backgroundColor: hoveredIndex === i ? `${feature.color}15` : "rgba(255,255,255,0.02)",
                    color: feature.color,
                    boxShadow: hoveredIndex === i ? `0 0 20px ${feature.color}40` : "none"
                  }}
                >
                  <feature.icon className={`w-7 h-7 transition-all duration-500 ${feature.hoverClass}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

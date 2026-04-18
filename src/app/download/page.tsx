"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadSection from "@/components/Download";
import SmartScreenNotice from "@/components/SmartScreenNotice";
import LottieIcon from "@/components/LottieIcon";
import { motion } from "framer-motion";
import { useState } from "react";

const downloadFeatures = [
  { title: "Clean & Open", lottiePath: "/animated-icons/security.json", text: "Every build is scanned and hosted on our own CDN. Open-source roots, no bundled trackers or adware." },
  { title: "Fast Installation", lottiePath: "/animated-icons/sync.json", text: "Get up and running in less than a minute. Our lightweight app is built for speed." },
  { title: "Automatic Updates", lottiePath: "/animated-icons/platform.json", text: "Stay current with the latest features and security improvements, delivered seamlessly." }
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
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">Start Your <span className="text-primary">Party</span></h1>
          <p className="text-xl md:text-2xl text-white/40 font-medium max-w-2xl mx-auto">Download iPartyUp for Windows or macOS and start streaming your favorite content today.</p>
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
              className="text-center"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-6 flex justify-center">
                <LottieIcon path={feature.lottiePath} size={56} isHovered={hoveredIndex === i} />
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

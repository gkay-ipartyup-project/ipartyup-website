"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LottieIcon from "@/components/LottieIcon";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const releases = [
  {
    version: "v1.0.0",
    date: "April 15, 2026",
    title: "Official Launch",
    type: "Major",
    changes: [
      { type: "feature", text: "All-in-one streaming — movies, TV shows, anime, and more in one app" },
      { type: "feature", text: "Watch Together rooms with real-time sync across the globe" },
      { type: "feature", text: "Live text chat and reactions in watch rooms" },
      { type: "feature", text: "Built-in friends system with add, search, and manage" },
      { type: "feature", text: "Content request system — ask for titles you want to see" },
      { type: "feature", text: "Automatic updates — download once, stay current forever" },
      { type: "improvement", text: "Optimized streaming engine for smooth HD playback" },
      { type: "improvement", text: "Secure authentication with Google Sign-In support" }
    ],
    downloads: [
      { platform: "Windows", link: "#", size: "~95 MB" },
      { platform: "macOS", link: "#", size: "~90 MB" }
    ]
  },
  {
    version: "v0.9.0",
    date: "March 20, 2026",
    title: "Beta Release",
    type: "Patch",
    changes: [
      { type: "feature", text: "Initial beta with core streaming functionality" },
      { type: "feature", text: "Basic watch room creation and joining" },
      { type: "improvement", text: "UI polish and dark theme refinements" },
      { type: "bug", text: "Fixed audio sync drift during long viewing sessions" },
      { type: "bug", text: "Resolved login issues on certain network configurations" }
    ],
    downloads: [
      { platform: "Windows", link: "#", size: "~90 MB" },
      { platform: "macOS", link: "#", size: "~85 MB" }
    ]
  }
];

const iconPaths = {
  feature: "/animated-icons/sync.json",
  improvement: "/animated-icons/check.json",
  bug: "/animated-icons/bug.json"
};

function ChangeItem({ change }: { change: { type: string; text: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const path = iconPaths[change.type as keyof typeof iconPaths] || iconPaths.improvement;
  const iconColor = change.type === "bug" ? "filter sepia saturate-0 hue-rotate-0 brightness-100" : "";
  
  return (
    <div 
      className="flex items-start gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={iconColor}>
        <LottieIcon path={path} size={20} isHovered={isHovered} />
      </div>
      <span className="text-white/50 font-medium leading-relaxed">{change.text}</span>
    </div>
  );
}

function DownloadLink({ dl }: { dl: { platform: string; link: string; size: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={dl.link}
      className="flex items-center justify-between p-4 bg-muted/50 hover:bg-muted border border-border rounded-2xl transition-colors group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <LottieIcon path="/animated-icons/inbox.json" size={20} isHovered={isHovered} />
        <div>
          <div className="font-bold">{dl.platform}</div>
          <div className="text-xs text-muted-foreground">{dl.size}</div>
        </div>
      </div>
      <span className="text-xs font-bold uppercase bg-background px-2 py-1 rounded">Download</span>
    </Link>
  );
}

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-background pt-32 px-6">
      <Navbar />
      
      <div className="max-w-4xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            RELEASE <span className="text-primary">NOTES</span>
          </h1>
          <p className="text-xl text-white/40 font-medium text-center">Stay updated with the latest improvements and features of iPartyUp.</p>
        </motion.div>

        <div className="space-y-12">
          {releases.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l border-white/5"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-3xl font-black text-primary uppercase italic tracking-tighter">{release.version}</span>
                  <div className="flex items-center gap-2 text-white/40 bg-white/5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/5">
                    <Clock size={12} strokeWidth={3} />
                    {release.date}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    release.type === "Major" ? "bg-primary text-primary-foreground" : "bg-white/5 text-white/40 border border-white/5"
                  }`}>
                    {release.type}
                  </span>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-6">{release.title}</h2>
                
                <div className="space-y-4 mb-8">
                  {release.changes.map((change, i) => (
                    <ChangeItem key={i} change={change} />
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {release.downloads.map((dl, i) => (
                    <DownloadLink key={i} dl={dl} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

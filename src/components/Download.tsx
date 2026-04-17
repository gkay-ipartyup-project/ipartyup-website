"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Monitor, Apple, Smartphone, LucideIcon } from "lucide-react";
import LottieIcon from "./LottieIcon";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Platform {
  name: string;
  icon: LucideIcon;
  image: string;
  version: string;
  date: string;
  tag: string;
  link: string;
}

interface PlatformCardProps {
  platform: Platform;
  index: number;
}

function PlatformCard({ platform, index }: PlatformCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-2xl"
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
        }}
      />
      
      {/* Glow border */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col items-center text-center h-full">
        <motion.div 
          className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary transition-all duration-500 shadow-2xl overflow-hidden"
          animate={isHovered ? { y: -5, boxShadow: "0 20px 40px -10px rgba(34,197,94,0.5)" } : {}}
        >
          <motion.div
            animate={isHovered ? { scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="relative w-10 h-10 md:w-12 md:h-12"
          >
            <Image 
              src={platform.image} 
              alt={platform.name}
              fill
              className="object-contain transition-all duration-500"
              style={{
                filter: isMobile ? 'brightness(0) invert(1)' : (isHovered ? 'brightness(0)' : 'brightness(0) invert(1)')
              }}
            />
          </motion.div>
        </motion.div>
        
        <h3 className="text-xl md:text-2xl font-black uppercase italic mb-2 tracking-tighter">{platform.name}</h3>
        
        <div className="flex flex-col items-center gap-2 mb-6 md:mb-8">
          <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/5 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
            {platform.tag}
          </span>
          <span className="text-xs text-white/20 font-bold">{platform.version} • {platform.date}</span>
        </div>
        
        <DownloadButton platform={platform} />
      </div>
    </motion.div>
  );
}

function DownloadButton({ platform }: { platform: Platform }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a 
      href={platform.link} 
      className="mt-auto w-full py-4 bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 border border-white/5 hover:border-primary group/btn overflow-hidden relative"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-200%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.8 }}
      />
      <div style={{ filter: isHovered ? 'brightness(0)' : 'brightness(0) invert(1)' }}>
        <LottieIcon path="/animated-icons/inbox.json" size={18} isHovered={isHovered} />
      </div>
      <span className="relative z-10">Download</span>
    </motion.a>
  );
}

export default function DownloadSection() {
  const platforms: Platform[] = [
    {
      name: "Windows",
      icon: Monitor,
      image: "/windows.png",
      version: "v1.0.0",
      date: "Apr 2026",
      tag: "Latest Stable",
      link: "#"
    },
    {
      name: "macOS",
      icon: Apple,
      image: "/mac.png",
      version: "v1.0.0",
      date: "Apr 2026",
      tag: "Latest Stable",
      link: "#"
    }
  ];

  return (
    <section id="download" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24 px-2"
        >
          <h2 className="mb-4 md:mb-6 flex items-center justify-center">
            <Image 
              src="/get-ipartyup.png" 
              alt="GET iPartyUp" 
              width={400}
              height={80}
              className="h-8 sm:h-10 md:h-14 lg:h-20 w-auto object-contain"
            />
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/40 font-medium tracking-tight">Available everywhere you watch.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto px-2" style={{ perspective: "1000px" }}>
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

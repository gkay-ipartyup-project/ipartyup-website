"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import LottieIcon from "./LottieIcon";
import { useRef, useState } from "react";

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const glowX = useSpring(0, { stiffness: 150, damping: 20 });
  const glowY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowX.set(x);
    glowY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 max-md:border-primary/30 transition-all duration-150 overflow-hidden"
    >
      {/* Mouse-following glow - desktop only */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 max-md:hidden"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`,
        }}
      />

      {/* Static glow for mobile */}
      <div
        className="absolute inset-0 rounded-[2rem] pointer-events-none md:hidden"
        style={{
          background: `radial-gradient(ellipse at center, ${feature.color}15 0%, transparent 60%)`,
        }}
      />
      
      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-opacity duration-150"
        style={{
          background: `linear-gradient(135deg, ${feature.color}20, transparent, ${feature.color}10)`,
        }}
      />
      
      <div className="relative z-10 p-5 md:p-8 h-full">
        <div className="mb-5 md:mb-8">
          <LottieIcon
            path={feature.lottiePath}
            size={48}
            isHovered={isHovered}
          />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-3 md:mb-4 tracking-tight">{feature.title}</h3>
        <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium group-hover:text-white/70 max-md:text-white/70 transition-colors duration-150">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

const features = [
  {
    title: "Perfect Sync",
    description: "Watch with friends in real-time — everyone sees the same frame at the same millisecond. No countdowns, no 'are you there yet?' moments.",
    lottiePath: "/animated-icons/sync.json",
    color: "#22c55e"
  },
  {
    title: "All-In-One Library",
    description: "Movies, TV shows, anime, documentaries, and more — all in one place. No more juggling between multiple subscriptions. iPartyUp has it all.",
    lottiePath: "/animated-icons/watch-together.json",
    color: "#16a34a"
  },
  {
    title: "Live Chat & Reactions",
    description: "React together in real-time with text chat, emojis, and shared moments. Feel like you're in the same room, no matter the distance.",
    lottiePath: "/animated-icons/chat.json",
    color: "#22c55e"
  },
  {
    title: "Windows & macOS",
    description: "Available on Windows and macOS. Download once, get automatic updates forever. Your entertainment hub, right on your desktop.",
    lottiePath: "/animated-icons/platform.json",
    color: "#15803d"
  },
  {
    title: "HD Streaming",
    description: "Crystal clear quality with adaptive streaming. Experience your content the way it was meant to be watched — smooth, sharp, and buffer-free.",
    lottiePath: "/animated-icons/play.json",
    color: "#22c55e"
  },
  {
    title: "Secure & Private",
    description: "Your data stays yours. We never track your viewing habits or sell your information. Privacy is built into everything we do.",
    lottiePath: "/animated-icons/security.json",
    color: "#166534"
  }
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16 md:mb-32 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase italic tracking-tighter mb-4 md:mb-6 leading-[0.9] md:leading-[0.85]"
          >
            The Future of <br className="hidden sm:block" /><span className="text-primary drop-shadow-[0_0_20px_rgba(34,197,94,0.2)]">Social Watching</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/40 mx-auto font-medium px-2"
          >
            Built from the ground up for the ultimate shared experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { RefreshCw, Tv, MessageSquare, Monitor, Play, Shield, LucideIcon } from "lucide-react";
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
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
            style={{ 
              borderColor: `${feature.color}30`,
              backgroundColor: `${feature.color}10`,
              color: feature.color,
              boxShadow: isHovered ? `0 0 20px ${feature.color}40` : 'none'
            }}
          >
            <feature.icon className={`w-6 h-6 transition-all duration-500 ${feature.hoverClass}`} />
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 md:mb-4">{feature.title}</h3>
        <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium group-hover:text-white/70 max-md:text-white/70 transition-colors duration-200">
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
    icon: RefreshCw,
    color: "#22c55e",
    hoverClass: "group-hover:rotate-180"
  },
  {
    title: "All-In-One Library",
    description: "Movies, TV shows, anime, documentaries, and more — all in one place. No more juggling between multiple subscriptions. iPartyUp has it all.",
    icon: Tv,
    color: "#16a34a",
    hoverClass: "group-hover:scale-110"
  },
  {
    title: "Live Chat & Reactions",
    description: "React together in real-time with text chat, emojis, and shared moments. Feel like you're in the same room, no matter the distance.",
    icon: MessageSquare,
    color: "#22c55e",
    hoverClass: "group-hover:scale-110 -rotate-6 group-hover:rotate-0"
  },
  {
    title: "Cross-Platform",
    description: "Available on Windows, macOS, and coming soon to Android. Download once, get automatic updates. Your entertainment hub, right there.",
    icon: Monitor,
    color: "#15803d",
    hoverClass: "group-hover:-translate-y-1"
  },
  {
    title: "HD Streaming",
    description: "Crystal clear quality with adaptive streaming. Experience your content the way it was meant to be watched — smooth, sharp, and buffer-free.",
    icon: Play,
    color: "#22c55e",
    hoverClass: "group-hover:scale-110 translate-x-[1px]"
  },
  {
    title: "Secure & Private",
    description: "Your data stays yours. We never track your viewing habits or sell your information. Privacy is built into everything we do.",
    icon: Shield,
    color: "#166534",
    hoverClass: "group-hover:scale-110"
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
        <div className="text-center mb-16 md:mb-24 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight font-display"
          >
            The Future of <span className="text-gradient-green">Social Watching</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-white/40 mx-auto font-medium max-w-2xl"
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

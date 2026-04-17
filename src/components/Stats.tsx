"use client";

import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import LottieIcon from "./LottieIcon";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 150,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // Delay start for dramatic effect
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

// Shockwave effect on hover
function Shockwave({ trigger }: { trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

// Animated Lottie icon wrapper with shockwave
function AnimatedLottieIcon({ path, isHovered, onHover }: { path: string; isHovered: boolean; onHover: () => void }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={isHovered ? { 
        scale: [1, 1.2, 1],
      } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={onHover}
    >
      <motion.div
        className="absolute inset-0 bg-primary/40 blur-2xl rounded-full"
        animate={isHovered ? { 
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.8, 0.3]
        } : { scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        animate={isHovered ? {
          rotate: [0, -10, 10, 0],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        <LottieIcon path={path} size={56} isHovered={isHovered} />
      </motion.div>
    </motion.div>
  );
}

const stats = [
  {
    lottiePath: "/animated-icons/users.json",
    value: 1000,
    suffix: "+",
    label: "Active Users",
    description: "Growing community",
    color: "#22c55e",
  },
  {
    lottiePath: "/animated-icons/globe.json",
    value: 150,
    suffix: "+",
    label: "Countries",
    description: "Global reach",
    color: "#16a34a",
  },
  {
    lottiePath: "/animated-icons/flash.json",
    value: 50,
    suffix: "ms",
    label: "Sync Latency",
    description: "Ultra low lag",
    color: "#22c55e",
  },
  {
    lottiePath: "/animated-icons/tick-circle.json",
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Reliable service",
    color: "#15803d",
  },
];

export default function Stats() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shockwaveTrigger, setShockwaveTrigger] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
    setShockwaveTrigger(index);
    setTimeout(() => setShockwaveTrigger(null), 800);
  };

  return (
    <section ref={containerRef} className="py-24 px-6 relative overflow-hidden">
      {/* Animated background glow with more intensity */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.12) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group text-center relative cursor-pointer p-2 overflow-visible"
            >
              
              <div className="mb-4 md:mb-6 relative">
                <AnimatedLottieIcon 
                  path={stat.lottiePath} 
                  isHovered={hoveredIndex === index}
                  onHover={() => {}}
                />
              </div>
              
              <motion.div 
                className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black italic mb-1 md:mb-2 overflow-visible whitespace-nowrap pr-2"
                style={{
                  background: `linear-gradient(135deg, white 0%, ${stat.color} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: '-0.02em',
                }}
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>
              
              <motion.div 
                className="text-xs md:text-sm font-bold uppercase tracking-wider md:tracking-widest text-white/80 mb-0.5 md:mb-1"
                animate={{ color: hoveredIndex === index ? stat.color : "rgba(255,255,255,0.8)" }}
                transition={{ duration: 0.3 }}
              >
                {stat.label}
              </motion.div>
              <div className="text-[10px] md:text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

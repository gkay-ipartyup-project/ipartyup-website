"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group text-center relative cursor-pointer p-2"
            >
              {/* Icon with glow */}
              <div className="mb-4 md:mb-6 relative flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"
                  animate={hoveredIndex === index ? { 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  } : { scale: 1, opacity: 0.15 }}
                  transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                />
                <motion.div
                  animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <LottieIcon path={stat.lottiePath} size={52} isHovered={hoveredIndex === index} />
                </motion.div>
              </div>
              
              {/* Number with gradient */}
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

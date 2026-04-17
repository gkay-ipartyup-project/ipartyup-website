"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Download, Smartphone, Monitor, Sparkles, Star, Zap, Play, Users, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Text decode effect component
function DecodedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => " "));
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          text.split("").map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
        );
        iteration += 1/3;
        if (iteration >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return <span className={className}>{displayText.join("")}</span>;
}

// Particle burst component
function ParticleBurst({ trigger }: { trigger: boolean }) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i / 12) * 360,
    distance: 50 + Math.random() * 50,
  }));
  
  return (
    <AnimatePresence>
      {trigger && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 bg-primary rounded-full"
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
            y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
            opacity: [1, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </AnimatePresence>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [burstTrigger, setBurstTrigger] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleButtonHover = () => {
    setBurstTrigger(true);
    setTimeout(() => setBurstTrigger(false), 700);
  };

  // Floating elements with physics
  const floatingElements = [
    { icon: Sparkles, text: "AI Sync", delay: 0, x: "5%", y: "15%", rotate: -15 },
    { icon: Zap, text: "0 Lag", delay: 0.3, x: "85%", y: "20%", rotate: 10 },
    { icon: Star, text: "4.9★", delay: 0.6, x: "8%", y: "65%", rotate: -8 },
    { icon: Play, text: "HD Ready", delay: 0.9, x: "90%", y: "70%", rotate: 12 },
    { icon: Users, text: "1K+", delay: 1.2, x: "3%", y: "40%", rotate: -20 },
    { icon: Globe, text: "Global", delay: 1.5, x: "92%", y: "45%", rotate: 8 },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(34,197,94,0.15)_0%,transparent_50%)]"
          style={{
            "--x": `${mousePos.x}px`,
            "--y": `${mousePos.y}px`,
          } as any}
        />
      </div>

      {/* Floating Elements with Physics - Hidden on mobile */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: el.rotate,
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            opacity: { delay: el.delay + 0.5, duration: 0.5 },
            scale: { delay: el.delay + 0.5, duration: 0.5, type: "spring", stiffness: 200 },
            rotate: { delay: el.delay + 0.5, duration: 0.8 },
            y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: el.delay },
            x: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: el.delay },
          }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          className="absolute hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-bold cursor-pointer hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 z-20"
          style={{ left: el.x, top: el.y }}
        >
          <el.icon size={14} className="text-primary" />
          {el.text}
        </motion.div>
      ))}

      {/* Mouse-following Glow Trail */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y: y1, opacity, scale, rotateX }}
        className="max-w-6xl mx-auto text-center z-10 perspective-1000"
      >
        {/* Main Title with Decode Effect */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter italic uppercase leading-[1.05] md:leading-[1.1] mb-5 md:mb-8 px-2"
        >
          <motion.span 
            className="block mb-1 md:mb-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            <DecodedText text="ALL YOUR" delay={400} />
          </motion.span>
          <motion.span 
            className="block relative mb-1 md:mb-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-primary via-green-400 to-emerald-500 bg-clip-text text-transparent px-2 md:px-4 py-1 md:py-2 inline-block drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              <DecodedText text="ENTERTAINMENT" delay={800} />
            </span>
            <motion.div
              className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/20 via-green-400/20 to-emerald-500/20 blur-2xl -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.span>
          <motion.span 
            className="block"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          >
            <DecodedText text="ONE PLACE" delay={1200} />
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="text-sm md:text-lg text-white/40 mb-3 md:mb-4 font-medium px-4"
        >
          Tired of paying for Netflix, Prime, Hulu, and Crunchyroll separately?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-base md:text-xl text-white/70 mb-8 md:mb-12 font-bold tracking-tight px-4"
        >
          One app.{" "}
          <motion.span
            className="text-primary"
            animate={{ textShadow: ["0 0 20px rgba(34,197,94,0)", "0 0 20px rgba(34,197,94,0.8)", "0 0 20px rgba(34,197,94,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Unlimited content
          </motion.span>
          . Watch together.
        </motion.p>

        {/* CTA Buttons with Particle Burst */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md md:max-w-none px-4"
        >
          <motion.div className="relative w-full sm:w-auto">
            <ParticleBurst trigger={burstTrigger} />
            <Link 
              href="/download" 
              className="group relative px-6 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground rounded-2xl text-base md:text-lg font-black uppercase tracking-wider overflow-hidden shadow-[0_20px_60px_-15px_rgba(34,197,94,0.6)] transition-all hover:scale-105 md:hover:scale-110 hover:shadow-[0_30px_80px_-15px_rgba(34,197,94,0.8)] block text-center"
              onMouseEnter={handleButtonHover}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Download className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                </motion.span>
                Get Started Free
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: "50%", transformOrigin: "center" }}
              />
            </Link>
          </motion.div>
          
          <Link 
            href="#features" 
            className="group relative px-6 md:px-10 py-4 md:py-5 bg-white/5 border border-white/20 text-white rounded-2xl text-base md:text-lg font-black uppercase tracking-wider hover:bg-white/10 hover:border-primary/50 transition-all backdrop-blur-sm overflow-hidden hover:scale-105 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Features
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
        </motion.div>

        {/* Platform Icons with Stagger Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-16 px-4"
        >
          {[
            { image: "/windows.png", label: "Windows" },
            { image: "/mac.png", label: "macOS" },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center gap-2 md:gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.4 + i * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div 
                className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:border-primary/50"
                whileHover={{ 
                  boxShadow: `0 0 20px #22c55e40`,
                  backgroundColor: `#22c55e10`,
                }}
              >
                <div className="relative w-5 h-5 md:w-7 md:h-7">
                  <Image 
                    src={item.image} 
                    alt={item.label}
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert-[.6] group-hover:sepia-[.8] group-hover:saturate-[5] group-hover:hue-rotate-[80deg]"
                    style={{ filter: 'brightness(0) invert(60%) sepia(60%) saturate(500%) hue-rotate(90deg)' }}
                  />
                </div>
              </motion.div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Orbs with More Movement */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/25 rounded-full blur-[120px] -z-10"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.3, 1.1, 1.4, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] -z-10"
        animate={{
          x: [0, -80, 0, 40, 0],
          y: [0, -60, -100, -40, 0],
          scale: [1, 1.4, 1.2, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Animated Gradient Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          style={{ left: `${15 + i * 17}%` }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0, 0.5, 0], scaleY: [0, 1, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: "easeInOut" 
          }}
        />
      ))}

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none -z-10" />
    </section>
  );
}

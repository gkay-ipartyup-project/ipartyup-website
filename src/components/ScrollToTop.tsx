"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1200;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, start * (1 - easeOut));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 30, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30, rotate: 180 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 right-8 z-[100] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center group max-md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Outer glow ring */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-green-400 to-primary"
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ padding: '2px' }}
          >
            <div className="w-full h-full rounded-full bg-[#020203]" />
          </motion.div>
          
          {/* Inner glow */}
          <motion.div 
            className="absolute inset-[2px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
            animate={{
              boxShadow: isHovered 
                ? "0 0 60px rgba(34,197,94,0.6), inset 0 0 20px rgba(34,197,94,0.2)"
                : "0 0 30px rgba(34,197,94,0.3), inset 0 0 10px rgba(34,197,94,0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon container */}
          <motion.div
            className="relative z-10 w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-green-600"
            animate={{
              boxShadow: isHovered
                ? "0 10px 40px rgba(34,197,94,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
                : "0 5px 20px rgba(34,197,94,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ 
                y: isHovered ? -2 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUp size={22} strokeWidth={3} className="text-black" />
            </motion.div>
          </motion.div>

          {/* Particle burst on hover */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                      y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                      opacity: [1, 1, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Ring pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeOut",
              times: [0, 0.5, 1]
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 15, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Create springs for trailing dots - faster response
  const trail1X = useSpring(cursorX, { damping: 20, stiffness: 400 });
  const trail1Y = useSpring(cursorY, { damping: 20, stiffness: 400 });
  const trail2X = useSpring(cursorX, { damping: 25, stiffness: 350 });
  const trail2Y = useSpring(cursorY, { damping: 25, stiffness: 350 });
  const trail3X = useSpring(cursorX, { damping: 30, stiffness: 300 });
  const trail3Y = useSpring(cursorY, { damping: 30, stiffness: 300 });
  const trail4X = useSpring(cursorX, { damping: 35, stiffness: 250 });
  const trail4Y = useSpring(cursorY, { damping: 35, stiffness: 250 });
  const trail5X = useSpring(cursorX, { damping: 40, stiffness: 200 });
  const trail5Y = useSpring(cursorY, { damping: 40, stiffness: 200 });

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Don't render on server
  if (!mounted) return null;
  
  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  const trails = [
    { x: trail1X, y: trail1Y, size: 3.5 },
    { x: trail2X, y: trail2Y, size: 3 },
    { x: trail3X, y: trail3Y, size: 2.5 },
    { x: trail4X, y: trail4Y, size: 2 },
    { x: trail5X, y: trail5Y, size: 1.5 },
  ];

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            width: isHovering ? 60 : 12,
            height: isHovering ? 60 : 12,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Trailing dots */}
      {trails.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{ x: trail.x, y: trail.y }}
        >
          <div 
            className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50"
            style={{ width: trail.size, height: trail.size }}
          />
        </motion.div>
      ))}
    </>
  );
}

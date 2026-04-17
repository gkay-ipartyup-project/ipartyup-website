"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LottieIconProps {
  path: string;
  size?: number;
  isHovered?: boolean;
  className?: string;
}

// Theme color #22c55e in RGB normalized
const THEME_COLOR = [0.133, 0.773, 0.369, 1]; // #22c55e

// Recursively find and replace all colors in Lottie JSON
function replaceColors(obj: any): any {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  // Handle arrays
  if (Array.isArray(obj)) {
    // Check if this looks like a color array [r, g, b, a]
    if (obj.length === 4 && 
        typeof obj[0] === 'number' && typeof obj[1] === 'number' && 
        typeof obj[2] === 'number' && typeof obj[3] === 'number' &&
        obj[0] >= 0 && obj[0] <= 1 && obj[1] >= 0 && obj[1] <= 1 && 
        obj[2] >= 0 && obj[2] <= 1 && obj[3] >= 0 && obj[3] <= 1 &&
        // Additional check: is it actually a color value, not just any 4-number array?
        (obj[0] !== 0 || obj[1] !== 0 || obj[2] !== 0 || obj[3] !== 0)) {
      // Replace with theme color, preserving original alpha
      return [THEME_COLOR[0], THEME_COLOR[1], THEME_COLOR[2], obj[3]];
    }
    return obj.map(item => replaceColors(item));
  }
  
  // Handle objects
  const newObj: any = {};
  for (const key in obj) {
    // Lottie color properties: 'c' (color), 'o' (opacity), 's' (stroke)
    if ((key === 'c' || key === 'color') && obj[key]?.k && Array.isArray(obj[key].k)) {
      const k = obj[key].k;
      if (k.length === 4 && typeof k[0] === 'number') {
        // Replace color, preserve alpha
        newObj[key] = { ...obj[key], k: [THEME_COLOR[0], THEME_COLOR[1], THEME_COLOR[2], k[3]] };
      } else {
        newObj[key] = replaceColors(obj[key]);
      }
    } else if (key === 'k' && Array.isArray(obj[key]) && obj[key].length === 4 &&
               typeof obj[key][0] === 'number' && obj[key][0] >= 0 && obj[key][0] <= 1) {
      // Direct k property with color array
      const k = obj[key];
      newObj[key] = [THEME_COLOR[0], THEME_COLOR[1], THEME_COLOR[2], k[3]];
    } else {
      newObj[key] = replaceColors(obj[key]);
    }
  }
  return newObj;
}

export default function LottieIcon({ path, size = 40, isHovered = false, className = "" }: LottieIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load animation data
  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(data => {
        // Convert all colors to theme green #22c55e
        const greenData = replaceColors(data);
        setAnimationData(greenData);
      })
      .catch(err => console.error("Failed to load Lottie:", err));
  }, [path]);

  // Control animation - auto-play on mobile, hover-controlled on desktop
  useEffect(() => {
    if (!lottieRef.current) return;
    
    if (isMobile || isHovered) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [isHovered, isMobile]);

  if (!animationData) {
    return <div style={{ width: size, height: size }} className={className} />;
  }

  return (
    <motion.div
      style={{ width: size, height: size }}
      className={className}
      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={isMobile}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}

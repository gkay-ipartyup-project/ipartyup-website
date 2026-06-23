"use client";

import { useEffect, useState } from "react";

interface UnderConstructionProps {
  launchDate: string;
}

export default function UnderConstruction({ launchDate }: UnderConstructionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#0A0A0A]" />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center select-none font-poppins">
      <div className="max-w-xl w-full space-y-8 flex flex-col items-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="iPartyUp"
            className="w-10 h-10 rounded-xl"
          />
          <span className="font-brolink font-brolink-fallback text-2xl tracking-wider text-white">
            iParty<span style={{ color: "#1ed765" }}>Up</span>
          </span>
        </div>

        {/* 3D Under Construction Png Image (Bigger & Main Attention) */}
        <div className="w-96 h-96 max-w-full flex items-center justify-center transition-transform hover:scale-105 duration-700">
          <img
            src="/under-construction.png"
            alt="Website Under Construction"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(30,215,101,0.15)]"
            draggable={false}
          />
        </div>

        {/* Messaging (Poppins font, friendly & simple) */}
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Website Under Construction
          </h1>
          <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed font-normal font-poppins">
            I am currently working on polishing iPartyUp to deliver a better user experience. The platform will be live and ready for everyone on <strong style={{ color: "#1ed765" }} className="font-bold whitespace-nowrap">{launchDate || "July 20th, 2026"}</strong>. Stay tuned!
          </p>
        </div>
        
      </div>
    </div>
  );
}

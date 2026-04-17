"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useRef } from "react";
import playCircleAnimation from "@/data/lottie/play-circle.json";
import profile2UserAnimation from "@/data/lottie/profile-2user.json";
import programmingArrowsAnimation from "@/data/lottie/programming-arrows.json";
import clockAnimation from "@/data/lottie/clock.json";

type Phase = {
  title: string;
  description: string;
  stat: string;
  animationData: object;
};

type PhaseCardProps = {
  phase: Phase;
  progress: MotionValue<number>;
  start: number;
  end: number;
  index: number;
};

const phases: Phase[] = [
  {
    title: "ROOM BOOT",
    description: "Create a room and share a secure instant code.",
    stat: "2.1s average room start",
    animationData: playCircleAnimation,
  },
  {
    title: "SYNC LOCK",
    description: "Playback locks with adaptive drift correction.",
    stat: "< 80ms drift under load",
    animationData: programmingArrowsAnimation,
  },
  {
    title: "LIVE MOMENTS",
    description: "React together with chat, control handoff, and co-pause.",
    stat: "Realtime multi-user controls",
    animationData: profile2UserAnimation,
  },
  {
    title: "TRUST LAYER",
    description: "Encrypted transport and scoped room permissions by default.",
    stat: "Privacy-first architecture",
    animationData: clockAnimation,
  },
];

function PhaseCard({ phase, progress, start, end, index }: PhaseCardProps) {
  // Each phase gets 25% of scroll: 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1
  // Show at full opacity for most of range, quick fade at boundaries
  const range = end - start; // 0.25
  const fadeDuration = range * 0.1; // 2.5% for fade
  
  const opacity = useTransform(
    progress,
    [start, start + fadeDuration, end - fadeDuration, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    progress,
    [start, start + fadeDuration, end - fadeDuration, end],
    [20, 0, 0, -20]
  );
  
  const scale = useTransform(
    progress,
    [start, start + fadeDuration, end - fadeDuration, end],
    [0.97, 1, 1, 0.97]
  );
  
  return (
    <motion.article
      style={{ opacity, y, scale }}
      className="absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-2xl lg:rounded-3xl border border-white/10 bg-white/[0.02] p-5 lg:p-6 backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl border border-white/10 bg-white/[0.03] p-2">
          <Lottie animationData={phase.animationData} loop autoplay className="h-full w-full" />
        </div>
        <span className="text-xs font-black tracking-[0.22em] text-white/40">
          PHASE 0{index + 1}
        </span>
      </div>
      <h3 className="mb-2 text-xl lg:text-2xl font-black italic tracking-tight text-white">
        {phase.title}
      </h3>
      <p className="mb-3 text-sm lg:text-base text-white/55 leading-relaxed">{phase.description}</p>
      <div className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary">
        {phase.stat}
      </div>
    </motion.article>
  );
}

export default function ScrollExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const screenScale = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.9, 1, 1.03, 1]);
  const screenRotate = useTransform(scrollYProgress, [0, 0.35, 1], [-8, 0, 4]);
  const screenY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-120, 140]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 1.35]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.25, 0.45, 0.15]);

  return (
    <section ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden px-6 py-14">
        <div className="mx-auto grid h-full w-full max-w-7xl gap-6 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative flex flex-col justify-center items-center h-full">
            <motion.div
              style={{ scale: ringScale, opacity: ringOpacity }}
              className="absolute h-[35vh] w-[35vh] lg:h-[45vh] lg:w-[45vh] rounded-full border border-primary/20"
            />
            <motion.div
              style={{ y: glowY }}
              className="absolute h-32 w-32 lg:h-48 lg:w-48 rounded-full bg-primary/35 blur-[100px] lg:blur-[120px]"
            />
            <motion.div
              style={{ scale: screenScale, rotate: screenRotate, y: screenY }}
              className="relative w-full max-w-[340px] lg:max-w-[420px] rounded-3xl border border-white/15 bg-black/60 p-3 lg:p-4 shadow-[0_40px_140px_-60px_rgba(34,197,94,0.55)] backdrop-blur-xl"
            >
              <div className="mb-3 lg:mb-4 flex items-center justify-between rounded-xl lg:rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 lg:px-4 lg:py-3">
                <span className="text-[10px] lg:text-xs font-black tracking-[0.28em] text-white/55">
                  SYNC CONSOLE
                </span>
                <span className="rounded-full border border-primary/35 bg-primary/15 px-2 py-0.5 lg:px-3 lg:py-1 text-[9px] lg:text-[11px] font-bold text-primary">
                  LIVE
                </span>
              </div>
              <div className="space-y-2 lg:space-y-3 rounded-xl lg:rounded-2xl border border-white/10 bg-white/[0.02] p-2 lg:p-4">
                <div className="h-24 lg:h-36 rounded-lg lg:rounded-xl bg-gradient-to-br from-white/10 via-transparent to-primary/10" />
                <div className="grid grid-cols-3 gap-2 lg:gap-3">
                  <div className="h-8 lg:h-12 rounded-md lg:rounded-lg bg-white/5" />
                  <div className="h-8 lg:h-12 rounded-md lg:rounded-lg bg-white/5" />
                  <div className="h-8 lg:h-12 rounded-md lg:rounded-lg bg-white/5" />
                </div>
                <div className="h-2 lg:h-3 rounded-full bg-white/10">
                  <motion.div
                    style={{ width: useTransform(scrollYProgress, [0, 1], ["12%", "92%"]) }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40">LATENCY</p>
                  <p className="text-base font-black text-white">28ms</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40">PARTICIPANTS</p>
                  <p className="text-base font-black text-white">24 Active</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col h-full justify-center">
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary/80">
                Scroll Story
              </p>
              <h2 className="text-2xl lg:text-4xl font-black uppercase italic leading-[0.95] tracking-tight text-white">
                A Cinematic
                <br />
                Product Walkthrough
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/50 leading-relaxed">
                Scroll down to reveal how iPartyUp orchestrates room creation, sync logic,
                social interaction, and trust in one motion-first journey.
              </p>
            </div>

            <div className="relative h-[280px] lg:h-[320px]">
              <div className="absolute left-0 top-0 bottom-0 w-px rounded-full bg-white/10" />
              <motion.div
                style={{ height: progressHeight }}
                className="absolute left-0 top-0 w-px rounded-full bg-primary shadow-[0_0_20px_rgba(34,197,94,0.8)]"
              />
              <div className="relative h-full ml-8">
                {phases.map((phase, index) => {
                  const start = index / phases.length;
                  const end = (index + 1) / phases.length;
                  return (
                    <PhaseCard
                      key={phase.title}
                      phase={phase}
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

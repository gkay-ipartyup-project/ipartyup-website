"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";
import TriangleParticles from "./TriangleParticles";
import {
    formatExactReleaseDate,
    sectionFontSizePx,
    type Release,
    type ReleaseNoteSection,
} from "@/lib/releaseNotes";

interface ReleaseNotesCardProps {
    release: Release;
    variant?: "featured" | "compact";
}

/**
 * Renders a single release's notes in the same visual language as the in-app
 * PostUpdateModal but with more creative web polish: iPartyUp logo anchor,
 * per-section animated Lottie icons, platform availability badges, floating
 * triangle particles, and mobile-first spacing.
 */
export default function ReleaseNotesCard({
    release,
    variant = "featured",
}: ReleaseNotesCardProps) {
    if (variant === "compact") {
        return <ReleaseNotesBody release={release} />;
    }

    const exactDate = formatExactReleaseDate(release.published_at);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden max-w-2xl mx-auto"
            style={{
                background: "linear-gradient(180deg, #181818 0%, #0f0f0f 100%)",
                border: "1px solid rgba(29, 185, 84, 0.18)",
                boxShadow:
                    "0 32px 80px rgba(0,0,0,0.6), 0 0 80px rgba(29,185,84,0.07), inset 0 1px 0 rgba(29,185,84,0.18)",
            }}
        >
            {/* Floating triangles */}
            <TriangleParticles />

            {/* Animated top accent */}
            <motion.div
                className="absolute top-0 inset-x-0 h-[2px] z-10"
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                    backgroundSize: "200% 100%",
                    background:
                        "linear-gradient(90deg, transparent, #1db954, rgba(29,185,84,0.5), transparent, #1db954, transparent)",
                }}
            />

            {/* Decorative green glow */}
            <div
                className="absolute top-4 left-1/2 -translate-x-1/2 w-[260px] h-[120px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(29,185,84,0.12) 0%, transparent 70%)",
                    filter: "blur(24px)",
                }}
            />

            {/* Header — iPartyUp brand + plain version + date + platform PNGs */}
            <div className="relative z-10 pt-8 sm:pt-10 pb-5 px-5 sm:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-4"
                >
                    <Image
                        src="/logo-text.png"
                        alt="iPartyUp"
                        width={400}
                        height={80}
                        priority
                        className="h-7 sm:h-8 w-auto object-contain opacity-90"
                        sizes="(max-width: 640px) 160px, 200px"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[14px] sm:text-[15px] font-black tracking-widest uppercase"
                    style={{ color: "#1ed760" }}
                >
                    Version {release.version}
                </motion.div>

                {exactDate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-1.5 text-[11px] sm:text-[12px] text-white/35 font-semibold uppercase tracking-widest mt-2"
                    >
                        <Calendar size={11} />
                        Released {exactDate}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-3 sm:gap-4 mt-4"
                >
                    <PlatformPng
                        src="/windows.png"
                        label="Windows"
                        available={release.windows_available}
                    />
                    <PlatformPng
                        src="/apple-logo.png"
                        label="macOS"
                        available={release.macos_available}
                    />
                </motion.div>
            </div>

            {/* Divider */}
            <div className="relative z-10 px-5 sm:px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Body */}
            <div className="relative z-10 px-5 sm:px-8 pb-7 sm:pb-9 pt-6 sm:pt-7">
                <ReleaseNotesBody release={release} animate />
            </div>
        </motion.div>
    );
}

function PlatformPng({
    src,
    label,
    available,
}: {
    src: string;
    label: string;
    available: boolean;
}) {
    const colorClass = available ? "#1ed760" : "rgba(255,255,255,0.25)";
    return (
        <span
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest"
            style={{ color: colorClass }}
        >
            <span
                className="inline-block h-2.5 sm:h-3 w-auto bg-current"
                style={{
                    maskImage: `url(${src})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${src})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    width: "14px",
                    height: "14px",
                }}
            />
            {label}
        </span>
    );
}

function ReleaseNotesBody({
    release,
    animate = false,
}: {
    release: Release;
    animate?: boolean;
}) {
    return (
        <div className="space-y-6 sm:space-y-7">
            {release.release_notes.map((section, i) => (
                <Section
                    key={i}
                    section={section}
                    sectionIndex={i}
                    animate={animate}
                />
            ))}
        </div>
    );
}

function Section({
    section,
    sectionIndex,
    animate,
}: {
    section: ReleaseNoteSection;
    sectionIndex: number;
    animate: boolean;
}) {
    const fSize = sectionFontSizePx(section.fontSize);
    const fWeight = section.fontWeight || 700;
    const tAlign = section.textAlign || "left";

    const headerClass =
        tAlign === "center"
            ? "text-center"
            : tAlign === "right"
            ? "text-right"
            : "text-left";

    return (
        <div>
            {/* Section header — no icons, just styled text */}
            <div className={`${headerClass} mb-3`}>
                <span
                    className="uppercase tracking-wider"
                    style={{
                        fontSize: fSize,
                        fontWeight: fWeight,
                        color: "#1db954",
                    }}
                >
                    {section.category}
                </span>
            </div>

            {/* Items */}
            <div className="space-y-2">
                {section.items.map((item, j) => {
                    const Content = (
                        <div className="flex items-start gap-2.5 ml-1">
                            <span
                                className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full"
                                style={{
                                    background: "rgba(29,185,84,0.5)",
                                    boxShadow:
                                        "0 0 6px rgba(29,185,84,0.35)",
                                }}
                            />
                            <span className="text-[13px] sm:text-[14px] text-white/65 leading-relaxed">
                                {item}
                            </span>
                        </div>
                    );
                    if (!animate) {
                        return <div key={j}>{Content}</div>;
                    }
                    return (
                        <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.55 + sectionIndex * 0.08 + j * 0.03,
                            }}
                        >
                            {Content}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

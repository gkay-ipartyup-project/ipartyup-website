"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { formatExactReleaseDate, type Release } from "@/lib/releaseNotes";
import ReleaseNotesCard from "./ReleaseNotesCard";

function PlatformPngRow({
    src,
    label,
    available,
}: {
    src: string;
    label: string;
    available: boolean;
}) {
    if (!available) return null;
    return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wide text-white/40">
            <span
                className="inline-block bg-current"
                style={{
                    maskImage: `url(${src})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${src})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    width: "12px",
                    height: "12px",
                }}
            />
            {label}
        </span>
    );
}

/**
 * Collapsible row for a previous release. Click expands to reveal the same
 * release-notes body used in the featured card, minus the heavy chrome.
 * Mobile-optimized with compact header layout and generous tap area.
 */
export default function CollapsedVersionCard({
    release,
    index,
}: {
    release: Release;
    index: number;
}) {
    const [open, setOpen] = useState(false);
    const exactDate = formatExactReleaseDate(release.published_at);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="rounded-2xl overflow-hidden border transition-colors"
            style={{
                background: open
                    ? "linear-gradient(180deg, rgba(29,185,84,0.04) 0%, rgba(15,15,15,0.6) 100%)"
                    : "rgba(255,255,255,0.02)",
                borderColor: open
                    ? "rgba(29,185,84,0.22)"
                    : "rgba(255,255,255,0.06)",
            }}
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 hover:bg-white/[0.02] transition-colors text-left"
                aria-expanded={open}
            >
                {/* Version badge — clean pill design */}
                <div
                    className="shrink-0 px-3.5 py-2 rounded-full flex items-center gap-1.5"
                    style={{
                        background: open
                            ? "linear-gradient(135deg, rgba(29,185,84,0.2) 0%, rgba(29,185,84,0.05) 100%)"
                            : "rgba(255,255,255,0.03)",
                        border: open
                            ? "1px solid rgba(29,185,84,0.25)"
                            : "1px solid rgba(255,255,255,0.06)",
                    }}
                >
                    <span
                        className="text-[9px] font-black tracking-widest uppercase opacity-50"
                        style={{ color: open ? "#1ed760" : "rgba(255,255,255,0.5)" }}
                    >
                        VER
                    </span>
                    <span
                        className="text-[12px] sm:text-[13px] font-black tracking-tight"
                        style={{ color: open ? "#1ed760" : "rgba(255,255,255,0.9)" }}
                    >
                        {release.version}
                    </span>
                </div>

                {/* Platform row + date */}
                <div className="flex-1 min-w-0">
                    {/* Platform PNGs row */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <PlatformPngRow
                            src="/windows.png"
                            label="Windows"
                            available={release.windows_available}
                        />
                        <PlatformPngRow
                            src="/apple-logo.png"
                            label="macOS"
                            available={release.macos_available}
                        />
                    </div>
                    {exactDate && (
                        <div className="text-[10px] sm:text-[11px] text-white/35 font-semibold mt-0.5 uppercase tracking-wider">
                            {exactDate}
                        </div>
                    )}
                </div>

                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-white/30"
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1">
                            <div className="h-px bg-white/[0.06] mb-5" />
                            <ReleaseNotesCard release={release} variant="compact" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

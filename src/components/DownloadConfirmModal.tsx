"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Monitor, Apple } from "lucide-react";
import { useEffect, useState } from "react";
import LottieIcon from "./LottieIcon";
import { formatReleaseDate, formatVersion, type PlatformDownload } from "@/lib/downloads";

interface DownloadConfirmModalProps {
    open: boolean;
    onClose: () => void;
    platformName: "Windows" | "macOS";
    download: PlatformDownload | null;
}

/**
 * Premium-styled confirmation modal that intercepts the Download click and
 * explains upfront that Chrome / macOS Gatekeeper may flag the unsigned
 * installer. Users leave reassured instead of scared.
 */
export default function DownloadConfirmModal({
    open,
    onClose,
    platformName,
    download,
}: DownloadConfirmModalProps) {
    const [iconHovered, setIconHovered] = useState(false);

    // Lock body scroll while open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const version = download ? formatVersion(download.version) : "";
    const dateLabel = download ? formatReleaseDate(download.published_at) : "";
    const fileName = download?.url.split("?")[0].split("/").pop() ?? "";

    const isWindows = platformName === "Windows";
    const PlatformIcon = isWindows ? Monitor : Apple;

    const handleDownload = () => {
        if (!download) return;
        // Trigger native download by programmatically clicking an anchor
        const a = document.createElement("a");
        a.href = download.url;
        if (fileName) a.download = fileName;
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
        // Close shortly after so the user sees confirmation feedback
        setTimeout(onClose, 400);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                    {/* Modal card */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: 20, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg my-auto rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0d0d10] to-[#060608] border border-white/10 shadow-[0_20px_80px_-10px_rgba(0,0,0,0.8)] overflow-hidden max-h-[calc(100dvh-2rem)] sm:max-h-[90vh] overflow-y-auto"
                    >
                        {/* Top glow */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white/90 transition-all"
                        >
                            <X size={16} />
                        </button>

                        <div className="relative p-5 sm:p-7 md:p-9 pb-7 sm:pb-8">
                            {/* Hero row */}
                            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 pr-10">
                                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shadow-[0_8px_30px_-8px_rgba(34,197,94,0.4)]">
                                    <ShieldCheck className="text-primary w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-primary/80 mb-0.5 sm:mb-1">
                                        <PlatformIcon size={11} className="sm:hidden" />
                                        <PlatformIcon size={12} className="hidden sm:block" />
                                        <span>{platformName} Installer</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-black italic uppercase tracking-tight leading-tight">
                                        Quick heads-up
                                    </h3>
                                </div>
                            </div>

                            {/* Message */}
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/65 leading-relaxed mb-4 sm:mb-5">
                                Your browser may label this installer as <span className="text-white/90 font-semibold">&quot;not commonly downloaded&quot;</span> or <span className="text-white/90 font-semibold">suspicious</span> — that&apos;s just because iPartyUp is indie and brand-new, not because anything&apos;s wrong with it. The file is clean and hosted on our own CDN.
                            </p>

                            {/* Tip card */}
                            <div className="rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3.5 sm:p-4 mb-5 sm:mb-6">
                                <div className="flex items-start gap-2.5 sm:gap-3">
                                    <div className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                                        <PlatformIcon size={13} className="text-primary/90" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/40 mb-1 sm:mb-1.5">
                                            {isWindows ? "If Chrome or Edge blocks it" : "If macOS blocks it"}
                                        </div>
                                        <p className="text-[12px] sm:text-[12.5px] md:text-[13px] text-white/60 leading-relaxed">
                                            {isWindows ? (
                                                <>
                                                    Click <span className="text-white/90 font-semibold">Keep</span> or <span className="text-white/90 font-semibold">Download suspicious file</span>. If SmartScreen appears, click <span className="text-white/90 font-semibold">More info</span> → <span className="text-white/90 font-semibold">Run anyway</span>. You&apos;ll only see this the first time.
                                                </>
                                            ) : (
                                                <>
                                                    Open the <span className="text-white/90 font-semibold">.dmg</span>, drag iPartyUp to Applications, then <span className="text-white/90 font-semibold">right-click → Open</span> the first time. macOS will remember it from then on.
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.button
                                type="button"
                                onClick={handleDownload}
                                disabled={!download}
                                whileHover={{ scale: download ? 1.015 : 1 }}
                                whileTap={{ scale: download ? 0.985 : 1 }}
                                onMouseEnter={() => setIconHovered(true)}
                                onMouseLeave={() => setIconHovered(false)}
                                className={`w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[12px] sm:text-[13px] flex items-center justify-center gap-2.5 sm:gap-3 border relative overflow-hidden transition-all duration-500 ${
                                    download
                                        ? "bg-primary hover:bg-primary/90 text-primary-foreground border-primary shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)]"
                                        : "bg-white/5 text-white/30 border-white/5 cursor-not-allowed"
                                }`}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                    initial={{ x: "-200%" }}
                                    whileHover={download ? { x: "200%" } : {}}
                                    transition={{ duration: 0.8 }}
                                />
                                <div
                                    className="shrink-0"
                                    style={{ filter: download ? "brightness(0)" : undefined }}
                                >
                                    <LottieIcon
                                        path="/animated-icons/inbox.json"
                                        size={20}
                                        isHovered={iconHovered}
                                    />
                                </div>
                                <span className="relative z-10 whitespace-nowrap">
                                    {download ? `Download Now · ${version}` : "Unavailable"}
                                </span>
                            </motion.button>

                            {/* Meta */}
                            {download && (
                                <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-[10px] sm:text-[11px] text-white/30 font-semibold px-2">
                                    {dateLabel && <span>{dateLabel}</span>}
                                    {dateLabel && fileName && <span className="text-white/15">•</span>}
                                    {fileName && (
                                        <span className="truncate max-w-[200px] sm:max-w-[240px]">{fileName}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

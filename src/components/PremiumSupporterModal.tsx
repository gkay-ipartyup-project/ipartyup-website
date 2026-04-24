"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface PremiumSupporterModalProps {
    open: boolean;
    onClose: () => void;
}

/**
 * Premium-styled modal explaining how to become an iPartyUp Premium Supporter.
 * Triggered from the Pricing page's "Get Premium" CTA. Uses Patreon-compliant
 * membership language (no buy/purchase/subscription wording).
 */
export default function PremiumSupporterModal({
    open,
    onClose,
}: PremiumSupporterModalProps) {
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
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

                    {/* Modal card */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: 20, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg my-auto rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0d0d10] to-[#060608] border border-primary/20 shadow-[0_20px_80px_-10px_rgba(0,0,0,0.9)] overflow-hidden"
                    >
                        {/* Top glow */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/25 rounded-full blur-3xl opacity-50 pointer-events-none" />

                        {/* Floating sparkles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full bg-primary/40"
                                    initial={{
                                        x: `${15 + i * 18}%`,
                                        y: "100%",
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: [null, "-10%"],
                                        opacity: [0, 0.8, 0],
                                    }}
                                    transition={{
                                        duration: 4 + i * 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.9,
                                        ease: "easeOut",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Close */}
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white/90 transition-all"
                        >
                            <X size={16} />
                        </button>

                        <div className="relative p-5 sm:p-6 md:p-7 pb-6 sm:pb-7">
                            {/* Hero */}
                            <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 180, damping: 14 }}
                                    className="mb-3 drop-shadow-[0_10px_30px_rgba(34,197,94,0.35)]"
                                >
                                    <Image
                                        src="/Premim_Supporter.png"
                                        alt="Premium Supporter"
                                        width={96}
                                        height={96}
                                        className="object-contain w-20 h-20 sm:w-24 sm:h-24"
                                    />
                                </motion.div>

                                <h3 className="text-[22px] sm:text-[28px] font-black italic uppercase tracking-tight leading-tight bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent">
                                    Become a Premium Supporter
                                </h3>
                            </div>

                            {/* Message */}
                            <p className="text-[13px] sm:text-[14px] text-white/65 leading-relaxed mb-4 sm:mb-5 text-center">
                                The <span className="text-white/90 font-semibold">Premium Supporter Plan</span> is unlocked by supporting the developer directly through the iPartyUp app. Download iPartyUp, tap the <span className="text-white/90 font-semibold">Support Developer</span> button on the dashboard, and join the membership on <span className="text-white/90 font-semibold">Patreon</span>. Your perks unlock instantly.
                            </p>

                            {/* Patreon badge row */}
                            <div className="rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3.5 sm:p-4 mb-4 sm:mb-5">
                                <div className="flex items-center gap-3.5">
                                    <Image
                                        src="/Patreon1.png"
                                        alt="Patreon"
                                        width={44}
                                        height={44}
                                        className="shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/40 mb-0.5">
                                            Secure Membership
                                        </div>
                                        <p className="text-[12.5px] sm:text-[13px] text-white/65 leading-snug">
                                            Powered by Patreon membership at <span className="text-white/90 font-semibold">$5.99/month</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link href="/download" onClick={onClose}>
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.015 }}
                                    whileTap={{ scale: 0.985 }}
                                    className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[12px] sm:text-[13px] flex items-center justify-center gap-2.5 sm:gap-3 border relative overflow-hidden transition-all duration-500 bg-primary hover:bg-primary/90 text-primary-foreground border-primary shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)]"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                        initial={{ x: "-200%" }}
                                        whileHover={{ x: "200%" }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    <Download size={16} strokeWidth={3} className="relative z-10" />
                                    <span className="relative z-10 whitespace-nowrap">
                                        Download iPartyUp
                                    </span>
                                </motion.button>
                            </Link>

                            {/* Secondary close link */}
                            <button
                                onClick={onClose}
                                className="w-full mt-2.5 text-center text-[11px] sm:text-[12px] text-white/35 hover:text-white/60 font-semibold uppercase tracking-widest transition-colors"
                            >
                                Maybe later
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ChevronDown, Monitor, Apple } from "lucide-react";
import { useState } from "react";

/**
 * Expandable "Why does my browser warn me?" notice shown under the download
 * cards. Explains Chrome SmartScreen / macOS Gatekeeper prompts users will
 * hit until the app has built OS-level reputation or been code-signed.
 */
export default function SmartScreenNotice() {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mt-8 px-2"
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center gap-3 p-4 md:p-5 rounded-2xl bg-amber-500/[0.04] hover:bg-amber-500/[0.07] border border-amber-500/20 hover:border-amber-500/30 transition-all text-left group"
                aria-expanded={open}
            >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <ShieldAlert size={16} className="text-amber-300/90" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-[13px] md:text-sm font-bold text-amber-100/90">
                        Browser warned you the file is suspicious?
                    </div>
                    <div className="text-[11px] md:text-xs text-amber-100/50 font-medium mt-0.5">
                        iPartyUp is safe — here's why you might see a warning and how to continue.
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-amber-300/60 group-hover:text-amber-300/90"
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="mt-3 p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-5">
                            <p className="text-[13px] md:text-sm text-white/60 leading-relaxed">
                                iPartyUp is an indie project and our installers are not yet covered by a paid
                                code-signing certificate. Chrome, Edge, and macOS Gatekeeper flag any new app
                                they haven't seen thousands of times before — it's a reputation check, not a
                                virus detection. The file is clean.
                            </p>

                            {/* Windows steps */}
                            <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <Monitor size={14} className="text-white/50" />
                                    <span className="text-[11px] font-black uppercase tracking-widest text-white/50">
                                        Windows — Chrome / Edge
                                    </span>
                                </div>
                                <ol className="space-y-1.5 text-[12px] md:text-[13px] text-white/60 list-decimal list-inside marker:text-white/30">
                                    <li>
                                        If Chrome says <span className="text-white/80 font-semibold">"This file isn't commonly downloaded"</span>, click
                                        <span className="text-white/80 font-semibold"> Keep </span> or
                                        <span className="text-white/80 font-semibold"> Download suspicious file</span>.
                                    </li>
                                    <li>
                                        When SmartScreen shows <span className="text-white/80 font-semibold">"Windows protected your PC"</span>, click
                                        <span className="text-white/80 font-semibold"> More info </span>→
                                        <span className="text-white/80 font-semibold"> Run anyway</span>.
                                    </li>
                                    <li>Then continue the installer normally.</li>
                                </ol>
                            </div>

                            {/* macOS steps */}
                            <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <Apple size={14} className="text-white/50" />
                                    <span className="text-[11px] font-black uppercase tracking-widest text-white/50">
                                        macOS — Gatekeeper
                                    </span>
                                </div>
                                <ol className="space-y-1.5 text-[12px] md:text-[13px] text-white/60 list-decimal list-inside marker:text-white/30">
                                    <li>Open the downloaded <span className="text-white/80 font-semibold">.dmg</span> and drag iPartyUp to <span className="text-white/80 font-semibold">Applications</span>.</li>
                                    <li>
                                        Right-click (or Control-click) iPartyUp in Applications →
                                        <span className="text-white/80 font-semibold"> Open</span>.
                                    </li>
                                    <li>In the dialog, click <span className="text-white/80 font-semibold">Open</span> once more. macOS remembers this for future launches.</li>
                                </ol>
                            </div>

                            <p className="text-[11px] md:text-xs text-white/35 leading-relaxed">
                                Prefer extra peace of mind? Scan the installer yourself at{" "}
                                <a
                                    href="https://www.virustotal.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    virustotal.com
                                </a>{" "}
                                before running it.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

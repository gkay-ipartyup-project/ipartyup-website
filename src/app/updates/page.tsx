"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReleaseNotesCard from "@/components/updates/ReleaseNotesCard";
import CollapsedVersionCard from "@/components/updates/CollapsedVersionCard";
import {
    getReleaseNotes,
    publicReleases,
    type Release,
} from "@/lib/releaseNotes";

export default function UpdatesPage() {
    const [releases, setReleases] = useState<Release[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ctrl = new AbortController();
        getReleaseNotes(ctrl.signal)
            .then((list) => setReleases(publicReleases(list)))
            .finally(() => setLoading(false));
        return () => ctrl.abort();
    }, []);

    const latest = releases && releases.length > 0 ? releases[0] : null;
    const older = releases && releases.length > 1 ? releases.slice(1) : [];

    return (
        <main className="min-h-screen bg-background pt-28 sm:pt-32 pb-24 sm:pb-32 relative overflow-hidden">
            <Navbar />

            {/* Ambient page backdrop */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-0 opacity-60"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(29,185,84,0.12) 0%, transparent 60%)",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10 sm:mb-14 md:mb-16"
                >
                    <Link
                        href="/download"
                        className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors mb-8 sm:mb-10"
                    >
                        <ArrowLeft size={12} />
                        Back to Download
                    </Link>

                    <h1 className="text-[44px] sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 leading-[0.95]">
                        What&apos;s <span className="text-primary">New</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/40 font-medium max-w-2xl mx-auto px-2">
                        Every iPartyUp release, documented. New features, bug fixes, and performance improvements in one place.
                    </p>
                </motion.div>

                {loading && <ReleaseSkeleton />}

                {!loading && (!releases || releases.length === 0) && <EmptyState />}

                {/* Latest release */}
                {latest && (
                    <section className="mb-12 sm:mb-16 md:mb-20">
                        <ReleaseNotesCard release={latest} variant="featured" />
                    </section>
                )}

                {/* Previous releases */}
                {older.length > 0 && (
                    <section className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 px-1"
                        >
                            <div className="h-px bg-white/10 flex-1" />
                            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/40">
                                Previous Releases
                            </span>
                            <div className="h-px bg-white/10 flex-1" />
                        </motion.div>

                        <div className="space-y-3 mb-10 sm:mb-14">
                            {older.map((r, i) => (
                                <CollapsedVersionCard
                                    key={r.version}
                                    release={r}
                                    index={i}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>

            <Footer />
        </main>
    );
}

function ReleaseSkeleton() {
    return (
        <div className="max-w-2xl mx-auto">
            <div
                className="rounded-3xl overflow-hidden animate-pulse h-[520px]"
                style={{
                    background: "linear-gradient(180deg, #181818 0%, #0f0f0f 100%)",
                    border: "1px solid rgba(29, 185, 84, 0.1)",
                }}
            />
        </div>
    );
}

function EmptyState() {
    return (
        <div
            className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 text-center"
            style={{
                background: "linear-gradient(180deg, #181818 0%, #0f0f0f 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
            }}
        >
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FileText size={22} className="text-white/30" />
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">
                No release notes yet
            </h3>
            <p className="text-[13px] text-white/40">
                Check back soon — we ship often.
            </p>
        </div>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumSupporterModal from "@/components/PremiumSupporterModal";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PlanFeature = { text: string; included: boolean };

type PlanTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  iconSrc: string;
  features: PlanFeature[];
};

const freeTier: PlanTier = {
  name: "Free Plan",
  price: "$0",
  period: "forever",
  description: "Start watching together, no card required",
  popular: false,
  iconSrc: "/Free1.png",
  features: [
    { text: "Access to the free tier of the iPartyUp library", included: true },
    { text: "YouTube, YouTube Live and Google Drive built in", included: true },
    { text: "Host watch rooms with up to 3 viewers", included: true },
    { text: "Real-time chat, reactions, and host controls", included: true },
    { text: "Voice chat inside rooms", included: true },
    { text: "Content requests (refreshes every 72 hours)", included: true },
    { text: "Browse New & Upcoming releases", included: true },
  ],
};

const premiumTier: PlanTier = {
  name: "Premium Supporter Plan",
  price: "$5.99",
  period: "/month",
  description: "The whole library + every bonus perk",
  popular: true,
  iconSrc: "/Premim_Supporter.png",
  features: [
    { text: "Full access to the entire iPartyUp content library", included: true },
    { text: "Priority content request refresh — from 72 hours down to just 24 hours", included: true },
    { text: "Host watch parties with up to 12 users", included: true },
    { text: "Invite up to 2 free-tier friends to enjoy premium content with you", included: true },
    { text: "Floating fullscreen chat panel", included: true },
    { text: "Dashboard notification panel — never miss an update", included: true },
    { text: "Continue watching — pick up right where you left off", included: true },
    { text: "Premium Supporter badge & personal chat with the creator", included: true },
    { text: "More amazing features + every upcoming perk included", included: true },
  ],
};

function PricingCard({
  tier,
  index,
  onPremiumClick,
}: {
  tier: PlanTier;
  index: number;
  onPremiumClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isPremium = tier.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: index === 0 ? 5 : -5 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      style={{ perspective: "1000px" }}
    >
      {/* Ambient radial glow behind premium card */}
      {isPremium && (
        <div className="pointer-events-none absolute -inset-10 -z-10 opacity-60">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
        </div>
      )}

      {/* Card */}
      <motion.div
        whileHover={{ y: -10, scale: 1.015 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden rounded-[2.25rem] p-[1px] ${
          isPremium
            ? "bg-gradient-to-b from-primary/70 via-primary/25 to-primary/5"
            : "bg-gradient-to-b from-white/10 via-white/5 to-transparent"
        }`}
      >
        {/* Animated border glow for premium */}
        {isPremium && (
          <>
            <motion.div
              className="absolute inset-0 rounded-[2.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "conic-gradient(from 0deg, #22c55e, #16a34a, #15803d, #166534, #22c55e)",
                filter: "blur(10px)",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-1 rounded-[2.25rem] -z-10"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(34,197,94,0.25)",
                  "0 0 80px rgba(34,197,94,0.45)",
                  "0 0 40px rgba(34,197,94,0.25)",
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </>
        )}

        <div
          className={`relative rounded-[calc(2.25rem-1px)] p-6 md:p-8 h-full ${
            isPremium
              ? "bg-gradient-to-b from-[#0a1a0f] via-[#060d08] to-background ring-1 ring-primary/20"
              : "bg-gradient-to-b from-white/[0.03] to-background"
          }`}
        >
          {/* Subtle diagonal sheen on premium card (luxury accent) */}
          {isPremium && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[calc(2.25rem-1px)] overflow-hidden"
              aria-hidden
            >
              <motion.div
                className="absolute -inset-[50%] bg-gradient-to-br from-transparent via-primary/[0.04] to-transparent"
                animate={{ x: ["-30%", "30%"], y: ["-30%", "30%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
              />
            </motion.div>
          )}
          {/* Floating particles for premium */}
          {isPremium && (
            <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/30"
                  initial={{
                    x: `${20 + i * 15}%`,
                    y: "100%",
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, "-10%"],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}

          {/* Header */}
          <div className="relative mb-6">
            <div className="flex items-center gap-4 mb-5">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
                className={`shrink-0 ${
                  isPremium
                    ? "drop-shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                    : "drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]"
                }`}
              >
                <Image
                  src={tier.iconSrc}
                  alt={tier.name}
                  width={72}
                  height={72}
                  className="object-contain w-16 h-16 md:w-[72px] md:h-[72px]"
                />
              </motion.div>
              <div className="min-w-0">
                <h3
                  className={`text-xl font-black uppercase tracking-tight leading-tight ${
                    isPremium ? "text-primary" : "text-white/80"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="text-xs text-white/30 font-medium">
                  {tier.description}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-2">
              <motion.span
                className={`text-5xl font-black tracking-[-0.04em] ${
                  isPremium
                    ? "text-white drop-shadow-[0_0_24px_rgba(34,197,94,0.35)]"
                    : "text-white/60"
                }`}
                animate={isPremium && isHovered ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {tier.price}
              </motion.span>
              <span className="text-lg text-white/30 font-medium">
                {tier.period}
              </span>
            </div>

            {isPremium && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 mt-1.5"
              >
                <Image
                  src="/Patreon1.png"
                  alt="Patreon"
                  width={22}
                  height={22}
                  className="shrink-0 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                />
                <p className="text-[12.5px] text-white/80 font-semibold tracking-wide">
                  Secure payment via Patreon
                </p>
              </motion.div>
            )}
          </div>

          {/* Divider with center dot accent */}
          <div className="relative mb-6 flex items-center justify-center">
            <div
              className={`flex-1 h-px ${
                isPremium
                  ? "bg-gradient-to-r from-transparent to-primary/30"
                  : "bg-gradient-to-r from-transparent to-white/10"
              }`}
            />
            <div
              className={`mx-2 w-1 h-1 rounded-full ${
                isPremium ? "bg-primary/60" : "bg-white/20"
              }`}
            />
            <div
              className={`flex-1 h-px ${
                isPremium
                  ? "bg-gradient-to-l from-transparent to-primary/30"
                  : "bg-gradient-to-l from-transparent to-white/10"
              }`}
            />
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    feature.included
                      ? isPremium
                        ? "bg-primary/20 text-primary ring-1 ring-primary/30"
                        : "bg-white/10 text-white/60"
                      : "bg-white/5 text-white/20"
                  }`}
                >
                  {feature.included ? (
                    <Check size={12} strokeWidth={3} />
                  ) : (
                    <X size={12} strokeWidth={3} />
                  )}
                </motion.div>
                <span
                  className={`text-sm font-medium leading-relaxed ${
                    feature.included
                      ? isPremium
                        ? "text-white/85"
                        : "text-white/50"
                      : "text-white/20 line-through"
                  }`}
                >
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          {isPremium ? (
            <motion.button
              onClick={onPremiumClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-primary to-emerald-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
            >
              Get Premium
            </motion.button>
          ) : (
            <Link href="/download">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-300 bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
              >
                Download Free
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PricingPage() {
  const [supporterModalOpen, setSupporterModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background pt-32 px-6">
      <Navbar />

      <div className="max-w-5xl mx-auto mb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl mx-auto">
            Start free. Become a supporter when you&apos;re ready. One small monthly
            instead of a stack of separate subscriptions. No hidden fees, pause anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <PricingCard
            tier={freeTier}
            index={0}
            onPremiumClick={() => setSupporterModalOpen(true)}
          />
          <PricingCard
            tier={premiumTier}
            index={1}
            onPremiumClick={() => setSupporterModalOpen(true)}
          />
        </div>

        {/* Bottom FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/30 text-sm mb-4 font-medium">
            Have questions about our plans?
          </p>
          <Link href="/faq">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-bold hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              Read our FAQ
              <ArrowRight size={14} />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <Footer />

      <PremiumSupporterModal
        open={supporterModalOpen}
        onClose={() => setSupporterModalOpen(false)}
      />
    </main>
  );
}

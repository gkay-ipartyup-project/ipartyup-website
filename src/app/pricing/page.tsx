"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Crown, Zap, Star, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const freeTier = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Get started with the essentials",
  popular: false,
  features: [
    { text: "Limited content library", included: true },
    { text: "Standard quality streaming", included: true },
    { text: "Watch Together (up to 3 friends)", included: true },
    { text: "Basic text chat in rooms", included: true },
    { text: "Community support", included: true },
    { text: "Full content library", included: false },
    { text: "HD streaming quality", included: false },
    { text: "Unlimited Watch Together rooms", included: false },
    { text: "Priority content requests", included: false },
    { text: "Early access to new features", included: false },
  ],
};

const premiumTier = {
  name: "Premium",
  price: "$2.99",
  period: "/month",
  description: "The complete iPartyUp experience",
  popular: true,
  features: [
    { text: "Full content library — Movies, TV, Anime & more", included: true },
    { text: "HD streaming quality", included: true },
    { text: "Unlimited Watch Together rooms", included: true },
    { text: "Live chat, emojis & reactions", included: true },
    { text: "Priority content requests", included: true },
    { text: "Early access to new features", included: true },
    { text: "Ad-free experience", included: true },
    { text: "Priority support", included: true },
    { text: "Custom room themes", included: true },
    { text: "Unlimited friends list", included: true },
  ],
};

function PricingCard({ tier, index }: { tier: typeof freeTier; index: number }) {
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
      {/* Popular badge */}
      {isPremium && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full text-xs font-black uppercase tracking-widest text-black shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            <Crown size={12} strokeWidth={3} />
            Most Popular
            <Sparkles size={12} strokeWidth={3} />
          </motion.div>
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden rounded-[2rem] p-[1px] ${
          isPremium
            ? "bg-gradient-to-b from-primary/60 via-primary/20 to-primary/5"
            : "bg-gradient-to-b from-white/10 via-white/5 to-transparent"
        }`}
      >
        {/* Animated border glow for premium */}
        {isPremium && (
          <>
            <motion.div
              className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "conic-gradient(from 0deg, #22c55e, #16a34a, #15803d, #166534, #22c55e)",
                filter: "blur(8px)",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-1 rounded-[2rem] -z-10"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(34,197,94,0.2)",
                  "0 0 60px rgba(34,197,94,0.4)",
                  "0 0 30px rgba(34,197,94,0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </>
        )}

        <div
          className={`relative rounded-[calc(2rem-1px)] p-8 md:p-10 h-full ${
            isPremium
              ? "bg-gradient-to-b from-[#0a1a0f] via-[#060d08] to-background"
              : "bg-gradient-to-b from-white/[0.03] to-background"
          }`}
        >
          {/* Floating particles for premium */}
          {isPremium && (
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
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
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={isPremium ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isPremium
                    ? "bg-primary/20 text-primary"
                    : "bg-white/5 text-white/50"
                }`}
              >
                {isPremium ? <Crown size={24} /> : <Zap size={24} />}
              </motion.div>
              <div>
                <h3 className={`text-xl font-black uppercase tracking-tight ${isPremium ? "text-primary" : "text-white/80"}`}>
                  {tier.name}
                </h3>
                <p className="text-xs text-white/30 font-medium">{tier.description}</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-2">
              <motion.span
                className={`text-5xl md:text-6xl font-black tracking-tighter ${
                  isPremium ? "text-white" : "text-white/60"
                }`}
                animate={isPremium && isHovered ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {tier.price}
              </motion.span>
              <span className="text-lg text-white/30 font-medium">{tier.period}</span>
            </div>
            
            {isPremium && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-primary/60 font-medium"
              >
                Cancel anytime — no contracts
              </motion.p>
            )}
          </div>

          {/* Divider */}
          <div className={`h-px mb-8 ${isPremium ? "bg-gradient-to-r from-transparent via-primary/30 to-transparent" : "bg-white/5"}`} />

          {/* Features */}
          <ul className="space-y-4 mb-10">
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
                        ? "bg-primary/20 text-primary"
                        : "bg-white/10 text-white/60"
                      : "bg-white/5 text-white/20"
                  }`}
                >
                  {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                </motion.div>
                <span
                  className={`text-sm font-medium leading-relaxed ${
                    feature.included
                      ? isPremium
                        ? "text-white/80"
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
          <Link href="/download">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                isPremium
                  ? "bg-gradient-to-r from-primary to-emerald-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              {isPremium ? (
                <>
                  Get Premium
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={16} strokeWidth={3} />
                  </motion.div>
                </>
              ) : (
                <>
                  Download Free
                  <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background pt-32 px-6">
      <Navbar />

      <div className="max-w-5xl mx-auto mb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
          >
            <Star size={28} className="text-primary" />
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl mx-auto">
            Start free. Upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Savings badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/[0.08] border border-primary/20 text-primary text-sm font-bold"
          >
            <Sparkles size={14} />
            Save hundreds vs. multiple streaming subscriptions
            <Sparkles size={14} />
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <PricingCard tier={freeTier} index={0} />
          <PricingCard tier={premiumTier} index={1} />
        </div>

        {/* Bottom FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/30 text-sm mb-4 font-medium">Have questions about our plans?</p>
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
    </main>
  );
}

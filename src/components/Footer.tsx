"use client";

import Link from "next/link";
import { Github, Twitter, Instagram, Youtube, Mail, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 w-full max-w-sm mx-auto"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-black uppercase tracking-wider">Subscribe to</span>
          <Image
            src="/logo-text.png"
            alt="iPartyUp"
            width={180}
            height={45}
            className="h-3.5 w-auto object-contain"
            sizes="100px"
          />
        </div>
        
        <form 
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email || isSubscribed) return;
            setIsSubmitting(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitting(false);
            setIsSubscribed(true);
            setEmail("");
          }}
          className={`flex items-center gap-2 backdrop-blur-sm border rounded-full p-1.5 pl-4 w-full transition-all duration-500 ${
            isSubscribed 
              ? "bg-green-500/10 border-green-500/30" 
              : "bg-white/[0.03] border-white/10 active:border-green-500/30 active:bg-white/[0.05]"
          }`}
        >
          <input 
            type="email" 
            placeholder={isSubscribed ? "You're subscribed!" : "your@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubscribed}
            className={`flex-1 bg-transparent placeholder:text-white/30 focus:outline-none text-sm min-w-[100px] transition-all duration-300 ${
              isSubscribed ? "text-green-500" : "text-white"
            }`}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email || isSubscribed}
            className={`relative px-4 py-2 rounded-full font-black uppercase tracking-wider text-xs whitespace-nowrap overflow-hidden transition-all duration-500 active:scale-95 ${
              isSubscribed
                ? "bg-green-500 text-black"
                : "bg-primary text-primary-foreground active:bg-green-500"
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {isSubmitting ? (
                <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : isSubscribed ? (
                <>
                  <Check size={14} strokeWidth={3} />
                  Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </span>
            
            {isSubscribed && (
              <span className="absolute inset-0 rounded-full bg-green-500/50 animate-ping" />
            )}
          </button>
        </form>
        
        <p className="text-center text-white/30 text-xs font-medium">Get latest updates & news</p>
      </div>
    </motion.div>
  );
}

export default function Footer() {
  const links = {
    product: [
      { name: "Download", href: "/download" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" }
    ]
  };

  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/5 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-16 mb-16"
      >
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-10 group">
            <motion.div 
              className="relative w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image 
                src="/favicon.png" 
                alt="iPartyUp Logo" 
                width={40}
                height={40}
                className="w-auto h-auto object-contain"
              />
            </motion.div>
            <Image
              src="/logo-text.png"
              alt="iPartyUp"
              width={200}
              height={50}
              className="h-4 md:h-5 w-auto object-contain"
              sizes="(max-width: 768px) 100px, 140px"
            />
          </Link>
          <p className="text-white/40 text-lg max-w-sm mb-10 font-medium leading-relaxed">
            Your all-in-one streaming platform. Movies, TV shows, anime, and more — watch together with friends, in perfect sync.
          </p>
          <div className="flex items-center gap-5 justify-center md:justify-start">
            {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#" 
                  className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 hover:text-primary-foreground shadow-xl group overflow-hidden relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-200%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Icon size={20} strokeWidth={2} className="relative z-10" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Subscribe — mobile only (below social icons) */}
          <div className="lg:hidden">
            <SubscribeSection />
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary/80">Product</h4>
          <ul className="space-y-5">
            {links.product.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-1 text-white/40 hover:text-primary transition-all duration-300 font-bold text-sm tracking-tight"
                >
                  {link.name}
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary/80">Company</h4>
          <ul className="space-y-5">
            {links.company.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-1 text-white/40 hover:text-primary transition-all duration-300 font-bold text-sm tracking-tight"
                >
                  {link.name}
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary/80">Legal</h4>
          <ul className="space-y-5">
            {links.legal.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-1 text-white/40 hover:text-primary transition-all duration-300 font-bold text-sm tracking-tight"
                >
                  {link.name}
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Subscribe Section — desktop centered */}
      <div className="hidden lg:block">
        <SubscribeSection />
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-black uppercase tracking-widest text-white/20 text-center">
        <p className="hover:text-white/40 transition-colors">© 2026 iPartyUp Inc. Crafted for communities.</p>
      </div>
    </footer>
  );
}


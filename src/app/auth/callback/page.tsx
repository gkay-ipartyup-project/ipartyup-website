"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [tickData, setTickData] = useState<object | null>(null);
  const [deepLinkUrl, setDeepLinkUrl] = useState("ipartyup://");
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    // Load the Lottie animation
    fetch("/animated-icons/tick-circle.json")
      .then((res) => res.json())
      .then((data) => setTickData(data));
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);

    if (hash && hash.includes("access_token")) {
      // Convert hash fragment to query string for the deep link.
      // Windows URL protocol handlers strip the # fragment when passing
      // URLs as command-line arguments, so we must use ? query params instead.
      const queryString = hash.substring(1); // Remove the leading #
      const fullDeepLink = `ipartyup://auth/callback?${queryString}`;
      setDeepLinkUrl(fullDeepLink);
      setStatus("success");

      // Auto-attempt to open the app after a short delay
      const timer = setTimeout(() => {
        window.location.href = fullDeepLink;
      }, 2500);
      return () => clearTimeout(timer);
    } else if (params.get("error")) {
      setStatus("error");
    } else {
      setStatus("success");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden select-none">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.03) 40%, transparent 70%)",
            animation: "authGlow 5s ease-in-out infinite",
          }}
        />
        {/* Secondary accent glow */}
        <div
          className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 60%)",
            animation: "authGlow 7s ease-in-out infinite reverse",
          }}
        />
        {/* Floating particles — fixed positions to avoid hydration mismatch */}
        {[
          { w: 2, l: 12, t: 8, d: 6, dl: 0.5, g: true },
          { w: 3, l: 85, t: 15, d: 9, dl: 2.1, g: false },
          { w: 1, l: 45, t: 72, d: 7, dl: 1.3, g: true },
          { w: 2, l: 22, t: 88, d: 11, dl: 3.8, g: false },
          { w: 3, l: 68, t: 34, d: 8, dl: 0.9, g: true },
          { w: 1, l: 91, t: 62, d: 10, dl: 4.2, g: false },
          { w: 2, l: 37, t: 19, d: 6, dl: 1.7, g: true },
          { w: 1, l: 74, t: 81, d: 12, dl: 2.5, g: false },
          { w: 3, l: 8, t: 45, d: 7, dl: 0.3, g: true },
          { w: 2, l: 56, t: 93, d: 9, dl: 3.1, g: false },
          { w: 1, l: 33, t: 56, d: 8, dl: 1.9, g: true },
          { w: 2, l: 79, t: 28, d: 11, dl: 4.5, g: false },
          { w: 3, l: 15, t: 67, d: 6, dl: 0.7, g: true },
          { w: 1, l: 62, t: 12, d: 10, dl: 2.8, g: false },
          { w: 2, l: 48, t: 41, d: 9, dl: 3.4, g: true },
          { w: 1, l: 93, t: 76, d: 7, dl: 1.1, g: false },
          { w: 3, l: 27, t: 33, d: 12, dl: 4.0, g: true },
          { w: 2, l: 71, t: 52, d: 8, dl: 0.6, g: false },
          { w: 1, l: 42, t: 85, d: 10, dl: 2.3, g: true },
          { w: 2, l: 88, t: 44, d: 6, dl: 3.7, g: false },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${p.w}px`,
              height: `${p.w}px`,
              background: p.g
                ? `rgba(34, 197, 94, 0.18)`
                : `rgba(168, 85, 247, 0.12)`,
              left: `${p.l}%`,
              top: `${p.t}%`,
              animation: `authFloat ${p.d}s ease-in-out infinite`,
              animationDelay: `${p.dl}s`,
            }}
          />
        ))}
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }} />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes authGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }
        @keyframes authFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          25% { transform: translateY(-30px) translateX(15px); opacity: 1; }
          50% { transform: translateY(-15px) translateX(-8px); opacity: 0.7; }
          75% { transform: translateY(-35px) translateX(20px); opacity: 0.9; }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes shimmerBtn {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes cardEntry {
          0% { opacity: 0; transform: translateY(32px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(34,197,94,0.08); }
          50% { border-color: rgba(34,197,94,0.18); }
        }
        @keyframes spinnerRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          15%, 45%, 75% { transform: translateX(-8px); }
          30%, 60%, 90% { transform: translateX(8px); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
      `}</style>

      {/* Main card */}
      <div
        className="relative z-10 max-w-[440px] w-full mx-6"
        style={{ animation: "cardEntry 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        <div
          className="rounded-[28px] p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(165deg, rgba(22,22,22,0.95) 0%, rgba(8,8,8,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 80px rgba(34,197,94,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
            animation: "borderGlow 4s ease-in-out infinite",
          }}
        >
          {/* Inner highlight line at top */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)" }} />

          {/* ─── LOADING STATE ─── */}
          {status === "loading" && (
            <div className="space-y-6 py-4">
              <div className="flex justify-center">
                <div
                  className="w-20 h-20 rounded-full border-[3px] border-white/[0.06] border-t-[#22c55e]"
                  style={{ animation: "spinnerRotate 0.8s linear infinite" }}
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-bold text-white tracking-tight">Completing Sign In...</h1>
                <p className="text-sm text-white/25">Please wait while we verify your account</p>
              </div>
            </div>
          )}

          {/* ─── SUCCESS STATE ─── */}
          {status === "success" && (
            <div className="space-y-8">
              {/* Logo + iPartyUp text side by side */}
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
              >
                <Image
                  src="/favicon.png"
                  alt="iPartyUp"
                  width={44}
                  height={44}
                  className="rounded-xl"
                  draggable={false}
                />
                <Image
                  src="/logo-text.png"
                  alt="iPartyUp"
                  width={110}
                  height={28}
                  className="opacity-90"
                  draggable={false}
                />
              </div>

              {/* Lottie tick animation */}
              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
              >
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(145deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)",
                  }}
                >
                  {/* Pulsing ring behind */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "1.5px solid rgba(34,197,94,0.15)",
                      animation: "pulseRing 3s ease-in-out infinite",
                    }}
                  />
                  {tickData && (
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={tickData}
                      loop={false}
                      autoplay={true}
                      style={{ width: 80, height: 80 }}
                    />
                  )}
                </div>
              </div>

              {/* Heading & description */}
              <div
                className="space-y-3"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both" }}
              >
                <h1 className="text-[26px] font-extrabold text-white tracking-tight leading-snug">
                  You&apos;re all set!
                </h1>
                <p className="text-sm text-white/30 leading-relaxed max-w-xs mx-auto">
                  Your Google account has been successfully connected to iPartyUp. Head back to the app to start your experience.
                </p>
              </div>

              {/* Open App button */}
              <div
                className="space-y-4"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both" }}
              >
                <a
                  href={deepLinkUrl}
                  className="block w-full py-4 rounded-2xl font-bold text-[15px] text-black transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(34,197,94,0.35)] active:scale-[0.97] relative overflow-hidden no-underline"
                  style={{
                    background: "linear-gradient(145deg, #22c55e 0%, #1db954 50%, #16a34a 100%)",
                    boxShadow: "0 8px 32px rgba(34,197,94,0.25), 0 0 0 1px rgba(34,197,94,0.1)",
                  }}
                >
                  {/* Shimmer */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.5), transparent 70%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmerBtn 3.5s ease-in-out infinite",
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    Open iPartyUp
                  </span>
                </a>

                {/* Fallback text */}
                <p className="text-[11px] text-white/15 leading-relaxed">
                  If the app didn&apos;t open, you can close this tab and check your app directly.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/[0.04]" />
                <div className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-[10px] text-white/10 tracking-wide font-medium">
                    Protected by Google
                  </span>
                </div>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>
            </div>
          )}

          {/* ─── ERROR STATE ─── */}
          {status === "error" && (
            <div className="space-y-6 py-4" style={{ animation: "errorShake 0.5s ease" }}>
              {/* Logo + text */}
              <div className="flex items-center justify-center gap-3">
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-70" draggable={false} />
              </div>
              <div className="flex justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.03) 100%)",
                    border: "1.5px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-bold text-white tracking-tight">Sign In Failed</h1>
                <p className="text-sm text-white/30 leading-relaxed">
                  Something went wrong during authentication.<br />
                  Please close this tab and try again from the app.
                </p>
              </div>
              <button
                onClick={() => window.close()}
                className="w-full py-3.5 rounded-2xl font-semibold text-sm text-white/50 transition-all hover:text-white/70 hover:bg-white/[0.06]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                Close This Tab
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

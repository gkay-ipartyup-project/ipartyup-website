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
    fetch("/animated-icons/tick-circle.json")
      .then((res) => res.json())
      .then((data) => setTickData(data));
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);

    if (hash && hash.includes("access_token")) {
      const queryString = hash.substring(1);
      const fullDeepLink = `ipartyup://auth/callback?${queryString}`;
      setDeepLinkUrl(fullDeepLink);
      setStatus("success");

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

  const isError = status === "error";

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden select-none">
      {/* Hidden scrollbar */}
      <style>{`
        html, body { scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }

        @keyframes authGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
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
        @keyframes shimmerBtn {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes cardEntry {
          0% { opacity: 0; transform: translateY(32px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(29,185,84,0.08); }
          50% { border-color: rgba(29,185,84,0.2); }
        }
        @keyframes spinnerRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
      `}</style>

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: isError
              ? "radial-gradient(circle, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.02) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(29,185,84,0.1) 0%, rgba(29,185,84,0.02) 40%, transparent 70%)",
            animation: "authGlow 5s ease-in-out infinite",
          }}
        />
        {!isError && (
          <div
            className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(29,185,84,0.04) 0%, transparent 60%)",
              animation: "authGlow 7s ease-in-out infinite reverse",
            }}
          />
        )}
        {/* Floating particles */}
        {[
          { w: 2, l: 12, t: 8, d: 6, dl: 0.5 },
          { w: 3, l: 85, t: 15, d: 9, dl: 2.1 },
          { w: 1, l: 45, t: 72, d: 7, dl: 1.3 },
          { w: 2, l: 22, t: 88, d: 11, dl: 3.8 },
          { w: 3, l: 68, t: 34, d: 8, dl: 0.9 },
          { w: 1, l: 91, t: 62, d: 10, dl: 4.2 },
          { w: 2, l: 37, t: 19, d: 6, dl: 1.7 },
          { w: 1, l: 74, t: 81, d: 12, dl: 2.5 },
          { w: 3, l: 8, t: 45, d: 7, dl: 0.3 },
          { w: 2, l: 56, t: 93, d: 9, dl: 3.1 },
          { w: 1, l: 33, t: 56, d: 8, dl: 1.9 },
          { w: 2, l: 79, t: 28, d: 11, dl: 4.5 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${p.w}px`,
              height: `${p.w}px`,
              background: isError
                ? "rgba(239,68,68,0.12)"
                : "rgba(29,185,84,0.15)",
              left: `${p.l}%`,
              top: `${p.t}%`,
              animation: `authFloat ${p.d}s ease-in-out infinite`,
              animationDelay: `${p.dl}s`,
            }}
          />
        ))}
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main card */}
      <div
        className="relative z-10 max-w-[440px] w-full mx-4 sm:mx-6 my-4"
        style={{ animation: "cardEntry 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        <div
          className="rounded-[24px] sm:rounded-[28px] px-6 py-8 sm:p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(165deg, rgba(22,22,22,0.95) 0%, rgba(8,8,8,0.98) 100%)",
            border: isError
              ? "1px solid rgba(239,68,68,0.1)"
              : "1px solid rgba(29,185,84,0.1)",
            boxShadow: `0 40px 120px rgba(0,0,0,0.6), 0 0 80px ${isError ? "rgba(239,68,68,0.03)" : "rgba(29,185,84,0.03)"}`,
            animation: isError ? undefined : "borderGlow 4s ease-in-out infinite",
          }}
        >
          {/* Top highlight line */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{
              background: isError
                ? "linear-gradient(90deg, transparent, rgba(239,68,68,0.15), transparent)"
                : "linear-gradient(90deg, transparent, rgba(29,185,84,0.2), transparent)",
            }}
          />

          {/* ─── LOADING STATE ─── */}
          {status === "loading" && (
            <div className="space-y-6 py-4">
              <div className="flex justify-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-white/[0.06] border-t-[#1db954]"
                  style={{ animation: "spinnerRotate 0.8s linear infinite" }}
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">Completing Sign In...</h1>
                <p className="text-[13px] sm:text-sm text-white/25">Please wait while we verify your account</p>
              </div>
            </div>
          )}

          {/* ─── SUCCESS STATE ─── */}
          {status === "success" && (
            <div className="space-y-7">
              {/* Logo */}
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
              >
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-90" draggable={false} />
              </div>

              {/* Lottie tick */}
              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
              >
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(145deg, rgba(29,185,84,0.08) 0%, rgba(29,185,84,0.02) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "1.5px solid rgba(29,185,84,0.15)",
                      animation: "pulseRing 3s ease-in-out infinite",
                    }}
                  />
                  {tickData && (
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={tickData}
                      loop={false}
                      autoplay={true}
                      style={{ width: 72, height: 72 }}
                    />
                  )}
                </div>
              </div>

              {/* Text */}
              <div
                className="space-y-2.5"
                style={{ animation: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both" }}
              >
                <h1 className="text-[22px] sm:text-[26px] font-extrabold text-white tracking-tight leading-snug">
                  You&apos;re all set!
                </h1>
                <p className="text-[13px] sm:text-sm text-white/30 leading-relaxed max-w-[280px] mx-auto">
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
                  className="block w-full py-3.5 sm:py-4 rounded-2xl font-bold text-[14px] sm:text-[15px] text-black transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(29,185,84,0.35)] active:scale-[0.97] relative overflow-hidden no-underline"
                  style={{
                    background: "linear-gradient(145deg, #22c55e 0%, #1db954 50%, #16a34a 100%)",
                    boxShadow: "0 8px 32px rgba(29,185,84,0.25), 0 0 0 1px rgba(29,185,84,0.1)",
                  }}
                >
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

                <p className="text-[10px] sm:text-[11px] text-white/15 leading-relaxed">
                  If the app didn&apos;t open, you can close this tab and check your app directly.
                </p>
              </div>

              {/* Footer divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/[0.04]" />
                <div className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="space-y-7">
              {/* Logo */}
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
              >
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-70" draggable={false} />
              </div>

              {/* 3D image placeholder */}
              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.6s ease 0.25s both" }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.02) 100%)",
                    border: "1.5px solid rgba(239,68,68,0.12)",
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2.5" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-[22px] sm:text-2xl font-extrabold text-white tracking-tight">Sign In Failed</h1>
                <p className="text-[13px] sm:text-sm text-white/30 leading-relaxed max-w-[280px] mx-auto">
                  Something went wrong during authentication. Please close this tab and try again from the app.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => window.close()}
                className="w-full py-3.5 sm:py-4 rounded-2xl font-semibold text-[14px] text-white/50 transition-all duration-200 hover:text-white/70"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  animation: "fadeUp 0.6s ease 0.55s both",
                }}
              >
                Close This Tab
              </button>
            </div>
          )}
        </div>

        {/* Footer — error state */}
        {isError && (
          <div
            className="flex items-center justify-center gap-2 mt-6"
            style={{ animation: "fadeUp 0.6s ease 0.7s both" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[10px] text-white/10 tracking-wide font-medium">
              Secured by iPartyUp
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

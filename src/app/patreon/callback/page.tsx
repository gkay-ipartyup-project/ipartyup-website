"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Status = "loading" | "linked" | "granted" | "denied" | "error";

export default function PatreonCallbackPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("status");
    const granted = params.get("granted");
    const message = params.get("message");

    if (s === "linked") {
      setStatus(granted === "true" ? "granted" : "linked");
    } else if (s === "denied") {
      setStatus("denied");
    } else if (s === "error") {
      setStatus("error");
      setErrorMsg(message || "Something went wrong. Please try again from the app.");
    } else {
      setStatus("error");
      setErrorMsg("Invalid callback. Please try again from the app.");
    }
  }, []);

  const isNegative = status === "error" || status === "denied";

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden select-none">
      {/* Hidden scrollbar but scroll works */}
      <style>{`
        html, body { scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }

        @keyframes pgGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardEntry {
          0% { opacity: 0; transform: translateY(28px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spinnerRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(29,185,84,0.08); }
          50% { border-color: rgba(29,185,84,0.2); }
        }
        @keyframes shimmerBtn {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
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
            background: isNegative
              ? "radial-gradient(circle, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.02) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(29,185,84,0.1) 0%, rgba(29,185,84,0.02) 40%, transparent 70%)",
            animation: "pgGlow 5s ease-in-out infinite",
          }}
        />
        {/* Secondary accent */}
        {!isNegative && (
          <div
            className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(29,185,84,0.04) 0%, transparent 60%)",
              animation: "pgGlow 7s ease-in-out infinite reverse",
            }}
          />
        )}
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

      {/* Card */}
      <div
        className="relative z-10 max-w-[440px] w-full mx-4 sm:mx-6 my-4"
        style={{ animation: "cardEntry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        <div
          className="rounded-[24px] sm:rounded-[28px] px-6 py-8 sm:p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(165deg, rgba(22,22,22,0.95) 0%, rgba(8,8,8,0.98) 100%)",
            border: isNegative
              ? "1px solid rgba(239,68,68,0.1)"
              : "1px solid rgba(29,185,84,0.1)",
            boxShadow: `0 40px 120px rgba(0,0,0,0.6), 0 0 80px ${isNegative ? "rgba(239,68,68,0.03)" : "rgba(29,185,84,0.03)"}`,
            animation: isNegative ? undefined : "borderGlow 4s ease-in-out infinite",
          }}
        >
          {/* Top highlight line */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{
              background: isNegative
                ? "linear-gradient(90deg, transparent, rgba(239,68,68,0.15), transparent)"
                : "linear-gradient(90deg, transparent, rgba(29,185,84,0.2), transparent)",
            }}
          />

          {/* ─── LOADING ─── */}
          {status === "loading" && (
            <div className="space-y-6 py-4">
              <div className="flex justify-center">
                <div
                  className="w-16 h-16 rounded-full border-[3px] border-white/[0.06] border-t-[#1db954]"
                  style={{ animation: "spinnerRotate 0.8s linear infinite" }}
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-lg font-bold text-white tracking-tight">Processing...</h1>
                <p className="text-sm text-white/25">Please wait while we link your account</p>
              </div>
            </div>
          )}

          {/* ─── SUCCESS: GRANTED (premium activated) ─── */}
          {status === "granted" && (
            <div className="space-y-7">
              {/* Logo */}
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
              >
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-90" draggable={false} />
              </div>

              {/* 3D image placeholder — replace src with 3D asset later */}
              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.6s ease 0.25s both" }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(145deg, rgba(29,185,84,0.1) 0%, rgba(29,185,84,0.02) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "1.5px solid rgba(29,185,84,0.15)",
                      animation: "pulseRing 3s ease-in-out infinite",
                    }}
                  />
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1db954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2.5" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-[22px] sm:text-2xl font-extrabold text-white tracking-tight">Premium Activated!</h1>
                <p className="text-[13px] sm:text-sm text-white/35 leading-relaxed max-w-[280px] mx-auto">
                  Your Patreon account has been linked and premium is now active. Head back to iPartyUp to enjoy your perks.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => window.close()}
                className="w-full py-3.5 sm:py-4 rounded-2xl font-bold text-[14px] sm:text-[15px] text-black transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(29,185,84,0.35)] active:scale-[0.97] relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #22c55e 0%, #1db954 50%, #16a34a 100%)",
                  boxShadow: "0 8px 32px rgba(29,185,84,0.25), 0 0 0 1px rgba(29,185,84,0.1)",
                  animation: "fadeUp 0.6s ease 0.55s both",
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
                <span className="relative z-10">Close This Tab</span>
              </button>
            </div>
          )}

          {/* ─── SUCCESS: LINKED (not yet a patron) ─── */}
          {status === "linked" && (
            <div className="space-y-7">
              {/* Logo */}
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
              >
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-90" draggable={false} />
              </div>

              {/* 3D image placeholder */}
              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.6s ease 0.25s both" }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(145deg, rgba(29,185,84,0.08) 0%, rgba(29,185,84,0.02) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "1.5px solid rgba(29,185,84,0.12)",
                      animation: "pulseRing 3s ease-in-out infinite",
                    }}
                  />
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1db954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2.5" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-[22px] sm:text-2xl font-extrabold text-white tracking-tight">Account Linked!</h1>
                <p className="text-[13px] sm:text-sm text-white/35 leading-relaxed max-w-[280px] mx-auto">
                  Your Patreon account has been linked. Once you subscribe to Premium Supporter, your premium will activate automatically.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => window.close()}
                className="w-full py-3.5 sm:py-4 rounded-2xl font-bold text-[14px] sm:text-[15px] text-black transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(29,185,84,0.35)] active:scale-[0.97] relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #22c55e 0%, #1db954 50%, #16a34a 100%)",
                  boxShadow: "0 8px 32px rgba(29,185,84,0.25), 0 0 0 1px rgba(29,185,84,0.1)",
                  animation: "fadeUp 0.6s ease 0.55s both",
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
                <span className="relative z-10">Close This Tab</span>
              </button>
            </div>
          )}

          {/* ─── DENIED ─── */}
          {status === "denied" && (
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
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2.5" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-[22px] sm:text-2xl font-extrabold text-white tracking-tight">Authorization Denied</h1>
                <p className="text-[13px] sm:text-sm text-white/30 leading-relaxed max-w-[280px] mx-auto">
                  You denied the Patreon authorization. No account was linked. You can try again from the app anytime.
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

          {/* ─── ERROR ─── */}
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
                <h1 className="text-[22px] sm:text-2xl font-extrabold text-white tracking-tight">Something Went Wrong</h1>
                <p className="text-[13px] sm:text-sm text-white/30 leading-relaxed max-w-[280px] mx-auto">{errorMsg}</p>
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

        {/* Footer */}
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
      </div>
    </div>
  );
}

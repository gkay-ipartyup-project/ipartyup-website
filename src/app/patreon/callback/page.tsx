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

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden select-none">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              status === "error" || status === "denied"
                ? "radial-gradient(circle, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.02) 40%, transparent 70%)"
                : "radial-gradient(circle, rgba(234,179,8,0.1) 0%, rgba(234,179,8,0.02) 40%, transparent 70%)",
            animation: "pgGlow 5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pgGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
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
      `}</style>

      {/* Card */}
      <div
        className="relative z-10 max-w-[440px] w-full mx-6"
        style={{ animation: "cardEntry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        <div
          className="rounded-[28px] p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(165deg, rgba(22,22,22,0.95) 0%, rgba(8,8,8,0.98) 100%)",
            border:
              status === "error" || status === "denied"
                ? "1px solid rgba(239,68,68,0.12)"
                : "1px solid rgba(234,179,8,0.12)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          }}
        >
          {/* ─── LOADING ─── */}
          {status === "loading" && (
            <div className="space-y-6 py-4">
              <div className="flex justify-center">
                <div
                  className="w-16 h-16 rounded-full border-[3px] border-white/[0.06] border-t-amber-400"
                  style={{ animation: "pgGlow 0.8s linear infinite" }}
                />
              </div>
              <p className="text-sm text-white/30">Processing...</p>
            </div>
          )}

          {/* ─── SUCCESS: GRANTED (premium activated) ─── */}
          {status === "granted" && (
            <div className="space-y-6">
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
              >
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-90" draggable={false} />
              </div>

              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.6s ease 0.25s both" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0.04) 100%)",
                    border: "2px solid rgba(234,179,8,0.25)",
                  }}
                >
                  <span className="text-4xl">&#x1F451;</span>
                </div>
              </div>

              <div className="space-y-2" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">Premium Activated!</h1>
                <p className="text-sm text-white/35 leading-relaxed max-w-xs mx-auto">
                  Your Patreon account has been linked and premium is now active. Head back to iPartyUp to enjoy your perks.
                </p>
              </div>

              <button
                onClick={() => window.close()}
                className="w-full py-3.5 rounded-2xl font-bold text-sm text-black transition-all hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #FFD36E 0%, #E8A530 100%)",
                  boxShadow: "0 6px 24px rgba(234,179,8,0.25)",
                  animation: "fadeUp 0.6s ease 0.55s both",
                }}
              >
                Close This Tab
              </button>
            </div>
          )}

          {/* ─── SUCCESS: LINKED (not yet a patron) ─── */}
          {status === "linked" && (
            <div className="space-y-6">
              <div
                className="flex items-center justify-center gap-3"
                style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
              >
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-90" draggable={false} />
              </div>

              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.6s ease 0.25s both" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(234,179,8,0.12) 0%, rgba(234,179,8,0.03) 100%)",
                    border: "2px solid rgba(234,179,8,0.2)",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">Account Linked!</h1>
                <p className="text-sm text-white/35 leading-relaxed max-w-xs mx-auto">
                  Your Patreon account has been linked. Once you subscribe to Premium Supporter, your premium will activate automatically.
                </p>
              </div>

              <button
                onClick={() => window.close()}
                className="w-full py-3.5 rounded-2xl font-semibold text-sm text-white/50 transition-all hover:text-white/70 hover:bg-white/[0.06]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  animation: "fadeUp 0.6s ease 0.55s both",
                }}
              >
                Close This Tab
              </button>
            </div>
          )}

          {/* ─── DENIED ─── */}
          {status === "denied" && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-70" draggable={false} />
              </div>

              <div className="space-y-2" style={{ animation: "fadeUp 0.6s ease 0.25s both" }}>
                <h1 className="text-xl font-bold text-white tracking-tight">Authorization Denied</h1>
                <p className="text-sm text-white/30 leading-relaxed max-w-xs mx-auto">
                  You denied the Patreon authorization. No account was linked. You can try again from the app anytime.
                </p>
              </div>

              <button
                onClick={() => window.close()}
                className="w-full py-3.5 rounded-2xl font-semibold text-sm text-white/50 transition-all hover:text-white/70 hover:bg-white/[0.06]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  animation: "fadeUp 0.6s ease 0.4s both",
                }}
              >
                Close This Tab
              </button>
            </div>
          )}

          {/* ─── ERROR ─── */}
          {status === "error" && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>
                <Image src="/favicon.png" alt="iPartyUp" width={40} height={40} className="rounded-xl" draggable={false} />
                <Image src="/logo-text.png" alt="iPartyUp" width={100} height={24} className="opacity-70" draggable={false} />
              </div>

              <div
                className="flex justify-center"
                style={{ animation: "fadeUp 0.6s ease 0.25s both" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.03) 100%)",
                    border: "1.5px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
                <h1 className="text-xl font-bold text-white tracking-tight">Something Went Wrong</h1>
                <p className="text-sm text-white/30 leading-relaxed max-w-xs mx-auto">{errorMsg}</p>
              </div>

              <button
                onClick={() => window.close()}
                className="w-full py-3.5 rounded-2xl font-semibold text-sm text-white/50 transition-all hover:text-white/70 hover:bg-white/[0.06]"
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
      </div>
    </div>
  );
}

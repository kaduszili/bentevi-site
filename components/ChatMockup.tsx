"use client";

import { useState, useEffect } from "react";

export default function ChatMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 700),   // AI greeting
      setTimeout(() => setStep(2), 2200),  // user question
      setTimeout(() => setStep(3), 3400),  // typing indicator
      setTimeout(() => setStep(4), 4000),  // AI response replaces typing
      setTimeout(() => setStep(5), 5800),  // final typing indicator (stays)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const fade = (visible: boolean): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(10px)",
    transition: "opacity 0.35s ease, transform 0.35s ease",
    pointerEvents: "none",
  });

  return (
    <div
      className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {/* Chat header */}
      <div
        className="flex items-center gap-3 px-4 py-3.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm"
          style={{ backgroundColor: "#ffffff" }}
        >
          B
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-none">Bentevi</p>
          <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Online
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-4 mb-16" style={{ minHeight: 220 }}>

        {/* 1 — AI greeting */}
        <div className="flex gap-2.5 items-end" style={fade(step >= 1)}>
          <div
            className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-black text-xs font-bold"
            style={{ backgroundColor: "#ffffff" }}
          >
            B
          </div>
          <div
            className="rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-white max-w-[85%] leading-relaxed"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            Hi! I'm here to help. Ask me anything about our products or services.
          </div>
        </div>

        {/* 2 — User question */}
        <div className="flex justify-end" style={fade(step >= 2)}>
          <div
            className="rounded-2xl rounded-br-sm px-3.5 py-2.5 text-sm text-black max-w-[80%] leading-relaxed"
            style={{ backgroundColor: "#ffffff" }}
          >
            What's your return policy?
          </div>
        </div>

        {/* 3 + 4 — Typing indicator and AI response share the same Y slot */}
        <div className="relative" style={{ minHeight: 76 }}>
          {/* 3 — Typing indicator (fades out when step 4 arrives) */}
          <div
            className="absolute inset-x-0 top-0 flex gap-2.5 items-end"
            style={fade(step === 3)}
            aria-hidden="true"
          >
            <div
              className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-black text-xs font-bold"
              style={{ backgroundColor: "#ffffff" }}
            >
              B
            </div>
            <div
              className="rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>

          {/* 4 — AI response (fades in at same position) */}
          <div
            className="absolute inset-x-0 top-0 flex gap-2.5 items-end"
            style={fade(step >= 4)}
          >
            <div
              className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-black text-xs font-bold"
              style={{ backgroundColor: "#ffffff" }}
            >
              B
            </div>
            <div
              className="rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-white max-w-[85%] leading-relaxed"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              Our return policy allows 30 days from purchase. Items must be unused and in original packaging.
            </div>
          </div>
        </div>

        {/* 5 — Final typing indicator (stays) */}
        <div className="mt-3 flex gap-2.5 items-end" style={fade(step >= 5)}>
          <div
            className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-black text-xs font-bold"
            style={{ backgroundColor: "#ffffff" }}
          >
            B
          </div>
          <div
            className="rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>

      </div>

      {/* Input bar */}
      <div
        className="flex items-center gap-2 px-3 py-3 m-3 rounded-xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <span className="text-sm text-white/40 flex-1">Ask a question...</span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-black shrink-0"
          style={{ backgroundColor: "#ffffff" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

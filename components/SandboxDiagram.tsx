"use client";

import { useState, useEffect } from "react";

const aiMessages = [
  {
    question: "What's your return policy?",
    answer: "The return window is 30 days from the purchase date.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "According to our policy, free shipping applies to all orders over $50.",
  },
  {
    question: "How do I reset my password?",
    answer: "Go to Settings → Account → Reset Password and follow the steps.",
  },
  {
    question: "Do you offer breakfast options?",
    answer: "Yes, our breakfast is available daily from 7-10 am.",
  },
    {
    question: "Do you have a physical store?",
    answer: "We are an online-only store and do not have a physical location.",
  },
];

export default function SandboxDiagram() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % aiMessages.length);
        setAnimating(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (index === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full max-w-sm flex flex-col gap-4 items-center">
      {/* Radar rings — centered on Bentevi core, behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: "192px",
              height: "192px",
              border: "1px solid #577F4F",
              opacity: 0,
              animation: `radar-ping 5s ease-out infinite`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes radar-ping {
          0%   { transform: scale(1);   opacity: 0.18; }
          100% { transform: scale(4);   opacity: 0; }
        }
      `}</style>

      {/* Your content box */}
      <div
        className="rounded-4xl mt-7 p-5 py-8 flex flex-col items-center w-full z-10"
        style={{ backgroundColor: "#e8f0e6", border: "1.5px solid #c4d9be" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#577F4F" }}>
          Your content
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {["PDF docs", "Help center", "FAQ pages", "Text files"].map((t) => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600" style={{ border: "1px solid #c4d9be" }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["Pages", "Product specs", "Brand guideline"].map((t) => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600" style={{ border: "1px solid #c4d9be" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-6 bg-gray-300" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1l5 5 5-5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Bentevi core */}
      <div className="relative rounded-full p-5 text-center w-48 z-10" style={{ backgroundColor: "#000" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 7h.01" />
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
            <path d="m20 7 2 .5-2 .5" />
            <path d="M10 18v3" />
            <path d="M14 17.75V21" />
            <path d="M7 18a6 6 0 0 0 3.84-10.61" />
          </svg>
          <span className="text-white font-bold text-base">Bentevi</span>
        </div>
        <p className="text-white/70 text-xs">Knowledge Sandbox</p>
      </div>

      {/* Arrow down */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-6 bg-gray-300" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1l5 5 5-5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* AI answer box — slider */}
      <div
        className="rounded-4xl py-5 px-5 w-full bg-stone-100 z-10"
        style={{ border: "1.5px solid #e2e8f0" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-400">
          AI Answer
        </p>

        {/* User question — left bubble */}
        <div
          className="flex justify-start mb-2 transition-opacity duration-500"
          style={{ opacity: animating ? 0 : 1 }}
        >
          <div
            className="rounded-2xl rounded-bl-sm p-3 text-sm text-white italic max-w-[85%]"
            style={{ backgroundColor: "#577F4F" }}
          >
            "{aiMessages[active].question}"
          </div>
        </div>

        {/* AI response — right bubble */}
        <div
          className="flex justify-end transition-opacity duration-500"
          style={{ opacity: animating ? 0 : 1 }}
        >
          <div
            className="rounded-2xl rounded-br-sm p-3 text-sm text-gray-700 leading-relaxed max-w-[85%]"
            style={{ backgroundColor: "white", border: "1px solid #e2e8f0" }}
          >
            {aiMessages[active].answer}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#577F4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-gray-400">Sourced from your content</span>
          </div>

          {/* Dot navigation */}
          <div className="flex gap-1.5">
            {aiMessages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "16px" : "6px",
                  height: "6px",
                  backgroundColor: i === active ? "#577F4F" : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

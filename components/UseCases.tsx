"use client";

import { useState } from "react";

const useCases = [
  {
    emoji: "🌐",
    tag: "Business websites",
    image: "/images/case-1.jpg",
    title: "Your website that actually answers questions.",
    description:
      "Stop making visitors hunt through pages. Give them an assistant trained on your services, pricing, and FAQs — so every question gets an instant, on-brand answer.",
    example: '"Do you work with international clients?"',
  },
  {
    emoji: "🤑",
    tag: "Ecommerce & Retail",
    image: "/images/case-2.jpg",
    title: "Fewer abandoned carts, more confident buyers.",
    description:
      "Bentevi answers questions about sizing, color, shipping, returns, or any specification questions instantly — right when the purchase decision is being made by customers.",
    example: '"Is this available in size M and what is the return window?"',
  },
  {
    emoji: "📚",
    tag: "Education",
    image: "/images/case-3.jpg",
    title: "Students get answers without waiting for office hours.",
    description:
      "Upload your course materials, syllabi, and policies. Students ask questions in plain language and get accurate answers sourced directly from your content.",
    example: '"Where can I find the syllabus for this course?"',
  },
  {
    emoji: "✈️",
    tag: "Travel & Hospitality",
    image: "/images/case-4.jpg",
    title: "Give guests a concierge that never sleeps.",
    description:
      "From check-in times to local dining tips, your assistant handles every guest query around the clock — so your staff can focus on the customer experience.",
    example: '"What time is check-in and is breakfast included?"',
  },
  {
    emoji: "💻",
    tag: "SaaS products",
    image: "/images/case-5.jpg",
    title: "Cut support volume with self-serve documentation.",
    description:
      "Embed Bentevi inside your product or docs site. Users get instant, pinpoint answers from your knowledge base — without opening a ticket or waiting in a queue.",
    example: '"How do I set up SSO for my workspace?"',
  },
  {
    emoji: "📱",
    tag: "Mobile Apps",
    image: "/images/case-6.jpg",
    title: "Help that lives inside the app, not outside it.",
    description:
      "Add a knowledgeable assistant directly into your mobile app. Users get contextual help without leaving the flow — no redirects, no wait times, no frustration.",
    example: '"How do I sync my data across devices?"',
  },
];

export default function UseCases() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + useCases.length) % useCases.length);
  const next = () => setCurrent((c) => (c + 1) % useCases.length);

  const uc = useCases[current];

  return (
    <section
      id="use-cases"
      data-navbar-theme="light"
      className="py-28 md:pb-38 px-6 relative"
    >
      <div className="container-max mx-auto relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-14 mx-auto text-center">
          <h2 className="text-3xl md:text-6xl/14 font-light text-gray-900">
            Built for different needs, same core idea.
          </h2>
        </div>

        {/* Slider card */}
        <div
          className="relative rounded-4xl overflow-hidden"
          style={{
            backgroundColor: "rgba(0,0,0,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.85)",
            minHeight: "640px",
          }}
        >
          {/* Slides */}
          <div className="flex h-full" style={{ minHeight: "640px" }}>
            {/* Left — image */}
            <div className="hidden md:block w-1/2 relative overflow-hidden">
              {useCases.map((u, i) => (
                <img
                  key={u.tag}
                  src={u.image}
                  alt={u.tag}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
            </div>

            {/* Right — content */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-10 md:p-14">
              <div className="flex flex-col gap-6 pr-9">
                {/* Emoji + tag */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{uc.emoji}</span>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#e8f0e6", color: "#577F4F" }}
                  >
                    {uc.tag}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl/9 font-light text-gray-900 leading-snug">
                  {uc.title}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {uc.description}
                </p>

                {/* Example quote — chat bubble */}
                <div className="flex items-end gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#577F4F" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.9)" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(255,255,255,0.9)" />
                    </svg>
                  </div>
                  <div
                    className="rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-gray-100 italic"
                    style={{
                      backgroundColor: "#000000",
                      border: "1px solid #e2ebe0",
                    }}
                  >
                    {uc.example}
                  </div>
                </div>
              </div>

              {/* Arrows + dots */}
              <div className="flex items-center justify-between mt-10">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {useCases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? "24px" : "8px",
                        height: "8px",
                        backgroundColor:
                          i === current ? "#577F4F" : "#d1d5db",
                      }}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(0,0,0,0.12)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(0,0,0,0.06)")
                    }
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      backgroundColor: "#577F4F",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#3d5c37")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#577F4F")
                    }
                  >
                    <ChevronRight color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft({ color = "#374151" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ color = "#374151" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/images/chat-style-1.jpg", label: "Minimal" },
  { image: "/images/chat-style-2.jpg", label: "Dark" },
  { image: "/images/chat-style-3.jpg", label: "Social" },
  { image: "/images/chat-style-4.jpg", label: "Travel" },
  { image: "/images/chat-style-5.jpg", label: "Photographer" },
  { image: "/images/chat-style-6.jpg", label: "Tech" },
  { image: "/images/chat-style-7.jpg", label: "Health & Wellness" },
  { image: "/images/chat-style-8.jpg", label: "Artist" },
  { image: "/images/chat-style-9.jpg", label: "Gaming" },
];

export default function CreateAssistant() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [startPadding, setStartPadding] = useState(24);

  // Keep startPadding in sync with the container's left offset
  useEffect(() => {
    const updatePadding = () => {
      if (headerRef.current) {
        setStartPadding(headerRef.current.getBoundingClientRect().left);
      }
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // Drive horizontal translation from scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current || !wrapperRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionScrollable = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / sectionScrollable);
      const maxTranslate = trackRef.current.scrollWidth - wrapperRef.current.clientWidth;
      setTranslateX(progress * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="create-assistant"
      data-navbar-theme="light"
      className="relative"
      style={{ 
        backgroundImage: "url('/images/yellow-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
        height: `${slides.length * 40 + 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-16">

        {/* Header — aligned to container-max */}
        <div className="px-6 w-full mb-12">
          <div ref={headerRef} className="container-max mx-auto">
            <h2 className="text-3xl md:text-6xl/14 font-extralight text-gray-900 mb-4">
              Welcome screen following{" "}
              <span style={{ color: "#577F4F" }}>your brand.</span>
            </h2>
            <p className="text-gray-500 text-xl font-extralight">
              Customize the welcome screen and the chat experience with your company's style — colors, fonts,
              tone, and personality.
            </p>
          </div>
        </div>

        {/* Gallery — full bleed, starts aligned with title */}
        <div ref={wrapperRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5"
            style={{
              paddingLeft: startPadding,
              paddingRight: startPadding,
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.08s linear",
              width: "max-content",
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.label}
                className="shrink-0 flex flex-col items-center gap-4"
                style={{ width: "365px" }}
              >
                {/* Image card — full image, no crop */}
                <div
                  className="w-full rounded-3xl overflow-hidden flex items-center justify-center"
                  style={{
                    height: "656px",
                    backgroundColor: "#f4f8f3",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Label — outside, centered */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700 text-center">
                    {slide.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

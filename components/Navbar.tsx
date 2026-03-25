"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 20);

      // Find the section currently covering the top of the page
      const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]");
      let currentTheme = "dark";
      sections.forEach((section) => {
        if (section.offsetTop <= scrollY + 80) {
          currentTheme = section.dataset.navbarTheme ?? "dark";
        }
      });
      setIsDark(currentTheme === "dark");
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = [
    { label: "How it Works", href: "#value-proposition" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
  ];

  // Derived colors based on section theme
  const textColor = isDark ? "#ffffff" : "#111111";
  const mutedColor = isDark ? "rgba(255,255,255,0.75)" : "#4b5563";
  const hoverColor = isDark ? "#ffffff" : "#577F4F";
  const btnBg = isDark ? "#ffffff" : "#111111";
  const btnColor = isDark ? "#111111" : "#ffffff";
  const btnHoverBg = isDark ? "#F9E798" : "#1f2937";

  // Navbar background: glass when scrolled, themed to section
  const navBg = hasScrolled
    ? isDark
      ? "rgba(0,0,0,0.6)"
      : "rgba(255,255,255,0.85)"
    : "transparent";
  const navBorder = hasScrolled
    ? isDark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(0,0,0,0.06)"
    : "none";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: navBg,
        backdropFilter: hasScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: hasScrolled ? "blur(16px)" : "none",
        borderBottom: navBorder,
      }}
    >
      <div className="container-max px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-xl transition-colors duration-500"
          style={{ color: textColor }}
        >
          <LeafIcon />
          Bentevi
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500"
              style={{ color: mutedColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full text-sm font-semibold transition-all duration-500"
            style={{ backgroundColor: btnBg, color: btnColor }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = btnHoverBg; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = btnBg; }}
          >
            Get Early Access
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md transition-colors duration-500"
            style={{ color: textColor }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-gray-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center h-10 px-6 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#577F4F" }}
            onClick={() => setMobileOpen(false)}
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
}

function LeafIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

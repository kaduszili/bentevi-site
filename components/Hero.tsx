export default function Hero() {
  return (
    <section
      data-navbar-theme="dark"
      className="relative min-h-screen overflow-hidden flex items-center border-0 md:border-4 border-white md:rounded-[40px] rounded-none"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #000000 30%, #000000 65%, #000000 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.7,
        }}
      />
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-max section-padding relative z-10 w-full flex flex-col items-center gap-12 pt-28 md:pt-32 pb-16">
        {/* Top — copy */}
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
          {/* Tag pill */}
          <div
            className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white uppercase"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            AI Assistant · Early Access
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl/18 font-extralight text-white leading-tight tracking-tight">
            The lightweight AI chat that answers using{" "}
            <span style={{ color: "#ffffff", filter: "drop-shadow(0 0 16px #ffffff90)" }}>your knowledge.</span>
          </h1>

          {/* Subtext */}
          <p className="text-2xl font-extralight text-white leading max-w-2xl">
            Train an AI assistant using your content. Your audience get accurate answers, you get full control over the responses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#waitlist" className="btn-white-hero h-12 px-7 text-base">
              Join Early Access
            </a>
            <a href="#value-proposition" className="btn-outline-hero h-12 px-7 text-base">
              See how it works
            </a>
          </div>

          {/* Social proof note */}
          <p className="text-sm text-white/50">
            No credit card required · Free waitlist
          </p>
        </div>

        {/* Bottom — chat mockup */}
        <div className="flex justify-center w-full" aria-hidden="true">
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
                <p className="text-white text-sm font-semibold leading-none">
                  Bentevi
                </p>
                <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-4 mb-16">
              {/* AI bubble */}
              <div className="flex gap-2.5 items-end">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-black text-xs font-bold"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  B
                </div>
                <div
                  className="rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-white max-w-[85%] leading-relaxed"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  Hi! I'm here to help. Ask me anything about our products or
                  services.
                </div>
              </div>

              {/* User bubble */}
              <div className="flex justify-end">
                <div
                  className="rounded-2xl rounded-br-sm px-3.5 py-2.5 text-sm text-black max-w-[80%] leading-relaxed"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  What's your return policy?
                </div>
              </div>

              {/* AI bubble */}
              <div className="flex gap-2.5 items-end">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-black text-xs font-bold"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  B
                </div>
                <div
                  className="rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-white max-w-[85%] leading-relaxed"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  Our return policy allows 30 days from purchase. Items must be
                  unused and in original packaging.
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex gap-2.5 items-end">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-black text-xs font-bold"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  B
                </div>
                <div
                  className="rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
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
              <span className="text-sm text-white/40 flex-1">
                Ask a question...
              </span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-black flex-shrink-0"
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
        </div>
      </div>
    </section>
  );
}

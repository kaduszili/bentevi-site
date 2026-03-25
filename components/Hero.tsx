import ChatMockup from "./ChatMockup";

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
          <p className="text-lg md:text-2xl font-extralight text-white leading max-w-2xl">
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
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}

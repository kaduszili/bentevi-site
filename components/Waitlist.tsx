"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // V1: Simulate async submission, log to console
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Bentevi waitlist submission:", { email, website: website || null });

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="waitlist"
      data-navbar-theme="dark"
      className="relative py-28 md:py-72 px-6"
      style={{
        backgroundImage: "url('/images/waitlist-v3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: " center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000",
      }}
    >
      {/* Soft fade-in from white above */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "360px",
          background: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="container-max">
        <div className="max-w-xl mx-auto text-center">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white uppercase mb-8"
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Early Access
          </span>

          <h2 className="text-3xl md:text-6xl/13 font-bold text-black mb-4">
            Be the first to know when we launch.
          </h2>
          <p className="text-black/80 text-xl/7 font-extralight mb-10">
            Join the waitlist and get early access to Bentevi. No spam — just
            the launch announcement when we're ready.
          </p>

          {/* Form card */}
          <div
            className="rounded-4xl p-7 text-left max-w-4xs mx-auto"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {submitted ? (
              <SuccessState />
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-white/80"
                  >
                    Email address <span className="text-white/80">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 px-4 rounded-2xl text-sm outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)")
                    }
                  />
                </div>

                {/* Website */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="website"
                    className="text-sm font-semibold text-white/80"
                  >
                    Your website{" "}
                    <span className="text-white/60 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full h-14 px-4 rounded-2xl text-sm outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)")
                    }
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-2xl text-base font-semibold text-white transition-all mt-1 flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ backgroundColor: "#577F4F" }}
                  onMouseEnter={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "#3d5c37";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "#577F4F";
                  }}
                >
                  {loading ? (
                    <>
                      <Spinner />
                      Joining...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social proof */}
          {!submitted && (
            <p className="text-white/90 text-sm mt-6">
              120+ people already on the waitlist
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(87,127,79,0.25)" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3d49a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white">You're on the list!</h3>
      <p className="text-white/65 text-sm leading-relaxed max-w-xs">
        We'll send you an email as soon as Bentevi is ready. Thanks for your
        interest.
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

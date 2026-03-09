const proofPoints = [
  "Answers come only from the content you upload or connect",
  "Never pulls from the internet or external sources",
  "You control what the assistant knows — and what it doesn't",
  "Uncertain questions are flagged instead of guessed",
];

export default function Solution() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <span
              className="text-xs font-semibold uppercase tracking-widest block"
              style={{ color: "#577F4F" }}
            >
              The Bentevi approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Your AI answers from your knowledge sandbox.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Upload your documents, connect your help center, or write your
              content directly. Bentevi creates a sealed knowledge base — a
              sandbox — and the assistant answers only from inside it.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#e8f0e6" }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#577F4F"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — sandbox diagram */}
          <div className="flex justify-center">
            <SandboxDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function SandboxDiagram() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      {/* Your content box */}
      <div
        className="rounded-2xl p-5"
        style={{
          backgroundColor: "#e8f0e6",
          border: "1.5px solid #c4d9be",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#577F4F" }}>
          Your content
        </p>
        <div className="flex flex-wrap gap-2">
          {["PDF docs", "Help center", "FAQ pages", "Text files"].map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600"
              style={{ border: "1px solid #c4d9be" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-gray-300" />
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1l5 5 5-5"
              stroke="#9ca3af"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Bentevi core */}
      <div
        className="rounded-2xl p-5 text-center"
        style={{ backgroundColor: "#577F4F" }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span className="text-white font-bold text-base">Bentevi</span>
        </div>
        <p className="text-white/70 text-xs">Knowledge Sandbox</p>
      </div>

      {/* Arrow down */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-gray-300" />
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1l5 5 5-5"
              stroke="#9ca3af"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* AI answer box */}
      <div
        className="rounded-2xl p-5"
        style={{
          backgroundColor: "#f8fafc",
          border: "1.5px solid #e2e8f0",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-400">
          AI Answer
        </p>
        <div
          className="rounded-xl p-3 text-sm text-gray-700 leading-relaxed"
          style={{ backgroundColor: "white", border: "1px solid #e2e8f0" }}
        >
          Based on your documentation, the return window is{" "}
          <strong>30 days</strong> from the purchase date.
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 6l3 3 5-5"
              stroke="#577F4F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs text-gray-400">Sourced from your content</span>
        </div>
      </div>
    </div>
  );
}

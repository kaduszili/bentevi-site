import SandboxDiagram from "./SandboxDiagram";

const proofPoints = [
  "Answers come only from the content you upload or connect",
  "Never pulls from the internet or external sources",
  "You control what the assistant knows — and what it doesn't",
  "Uncertain questions are flagged instead of guessed",
];

export default function Solution() {
  return (
    <section
      data-navbar-theme="light"
      className="py-28 md:py-60 px-6"
      style={{
        backgroundImage: "url('/images/bg-solution.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-6xl/15 font-light text-gray-900 tracking-tight">
              Ready from a simple welcome message to optimized sales.
            </h2>
            <p className="text-gray-600 font-extralight text-lg/7 md:text-2xl/8">
              Bentevi runs inside a sealed knowledge base with live connector defined by you. The assistant answers only from the content you provide.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 bg-stone-100 p-2 rounded-3xl">
                  <span
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#ffffff" }}
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
                  <span className="text-gray-600 text-lg leading-relaxed">
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

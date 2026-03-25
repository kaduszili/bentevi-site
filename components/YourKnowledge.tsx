import SandboxDiagram from "./SandboxDiagram";

const proofPoints = [
  "Answers come only from the content you upload or connect",
  "It does not search the internet",
  "You decide what the assistant knows",
  "If the answer is missing, the assistant says it doesn’t know",
];

export default function YourKnowledge() {
  return (
    <section
      data-navbar-theme="light"
      className="relative py-28 md:py-60 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Background image at 0.5 opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
      />
      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-6xl/15 font-light text-gray-900 tracking-tight">
              Ready from a simple welcome message to optimized sales.
            </h2>
            <p className="text-gray-600 font-extralight text-2xl/8">
              Bentevi runs inside a sealed knowledge base. The assistant answers only from the content you provide.
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

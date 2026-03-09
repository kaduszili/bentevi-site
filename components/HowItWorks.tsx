const steps = [
  {
    number: "1",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "Add your knowledge",
    description:
      "Upload documents, paste text, or connect your help center. Bentevi accepts PDFs, Word files, Markdown, and plain text.",
  },
  {
    number: "2",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M12 2a10 10 0 0 1 7.07 2.93" />
        <path d="M4.93 19.07a10 10 0 0 1 0-14.14M12 22a10 10 0 0 1-7.07-2.93" />
      </svg>
    ),
    title: "Train your assistant",
    description:
      "Bentevi indexes your information and builds a searchable knowledge base. Your assistant learns only what you provide.",
  },
  {
    number: "3",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Embed on your site",
    description:
      "Add one line of code to your website or internal tool. Your AI assistant is live and ready to answer questions.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding"
      style={{ backgroundColor: "#f4f8f3" }}
    >
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "#577F4F" }}
          >
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Get started in 3 simple steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(33%+1rem)] right-[calc(33%+1rem)]"
            style={{ borderTop: "2px dashed #c4d9be", zIndex: 0 }}
          />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="glass rounded-2xl p-7 h-full relative z-10">
                {/* Number badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5"
                  style={{ backgroundColor: "#577F4F" }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "#e8f0e6",
                    color: "#577F4F",
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

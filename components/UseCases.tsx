const useCases = [
  {
    emoji: "🌐",
    tag: "Personal websites",
    title: "Turn your portfolio into an interactive experience.",
    description:
      "Let visitors ask questions about your work, skills, and background. Instead of a static FAQ page, give them a conversational assistant that knows everything about you.",
    example: '"What kind of projects do you take on?"',
  },
  {
    emoji: "🏪",
    tag: "Small businesses",
    title: "Answer customer questions 24/7 — automatically.",
    description:
      "Upload your product catalog, pricing, policies, and FAQs. Bentevi handles routine questions so your team focuses on what matters.",
    example: '"Do you offer same-day delivery?"',
  },
  {
    emoji: "📚",
    tag: "Internal documentation",
    title: "Make your team's knowledge instantly searchable.",
    description:
      "Connect your internal docs, runbooks, or wikis. Anyone on the team can ask questions in plain language and get accurate, sourced answers.",
    example: '"How do I reset the staging environment?"',
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
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
            Use cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Built for different needs, same core idea.
          </h2>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.tag}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm"
              style={{ border: "1px solid #e8f0e6" }}
            >
              {/* Emoji + tag */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{uc.emoji}</span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#e8f0e6",
                    color: "#577F4F",
                  }}
                >
                  {uc.tag}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-lg leading-snug">
                {uc.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {uc.description}
              </p>

              {/* Example question */}
              <div
                className="rounded-xl px-4 py-3 text-sm italic"
                style={{
                  backgroundColor: "#f4f8f3",
                  color: "#4b5563",
                  borderLeft: "3px solid #577F4F",
                }}
              >
                {uc.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    emoji: "🔒",
    title: "Knowledge sandbox",
    description:
      "The assistant answers only from the sources you define. Nothing more, nothing less.",
  },
  {
    emoji: "✅",
    title: "Zero hallucinations",
    description:
      "When the answer isn't in your content, Bentevi says so — it never invents information.",
  },
  {
    emoji: "⚡",
    title: "Easy embedding",
    description:
      "One script tag is all it takes to add your assistant to any website or web app.",
  },
  {
    emoji: "💬",
    title: "Website chat",
    description:
      "A clean, customizable chat widget that fits your site's design and branding.",
  },
  {
    emoji: "📊",
    title: "Conversation dashboard",
    description:
      "Review all conversations, spot gaps in your knowledge base, and improve your content.",
  },
  {
    emoji: "🤝",
    title: "Human handoff",
    description:
      "When a question needs a human, Bentevi can transfer the conversation seamlessly.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "#577F4F" }}
          >
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Everything you need to run a reliable AI assistant.
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: "#e8f0e6" }}
              >
                {feature.emoji}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

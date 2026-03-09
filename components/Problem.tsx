const painPoints = [
  {
    icon: "⚠️",
    title: "Hallucinations",
    description:
      "Generic AI makes up information that doesn't exist. It confidently answers with facts it invented, misleading your users.",
  },
  {
    icon: "🔓",
    title: "No control",
    description:
      "You can't define what the AI knows or restrict what it says. It pulls from the entire internet — including competitors and outdated data.",
  },
  {
    icon: "🎭",
    title: "Off-brand answers",
    description:
      "Responses don't match your tone, terminology, or facts. The assistant says things you'd never say to a customer.",
  },
];

export default function Problem() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "#577F4F" }}
          >
            The problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            AI answers are often unreliable.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Most AI chatbots answer using general internet knowledge. They
            weren't built for your specific content — and it shows.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ borderLeft: "4px solid #f59e0b" }}
            >
              <span className="text-2xl mb-4 block">{point.icon}</span>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

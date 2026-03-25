const features = [
  {
    emoji: "🔒",
    image: "/images/feature-card-1.jpg",
    title: "Knowledge sandbox",
    description:
      "The assistant answers only from the sources you provide.",
  },
    {
    emoji: "⚡",
    image: "/images/feature-card-2.jpg",
    title: "Automations",
    description:
      "Add automation to make the assistant even more helpful.",
  },
  {
    emoji: "🔍",
    image: "/images/feature-card-3.jpg",
    title: "Conversation Inbox",
    description:
      "Follow your visitor's questions and the AI's answers in real time.",
  },
  {
    emoji: "💬",
    image: "/images/feature-card-4.jpg",
    title: "Channels",
    description:
      "Same AI Assistant, differente customer journey.",
  },
  {
    emoji: "📊",
    image: "/images/feature-card-6.jpg",
    title: "Analytics",
    description:
      "Improve your knowledge base with insights.",
  },
    {
    emoji: "👩🏽‍🚀",
    image: "/images/feature-card-5.jpg",
    title: "Guidance",
    description:
      "We'll help you set up your assistant and get the best out of it.",
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <div
    className="relative h-full rounded-4xl overflow-hidden flex flex-col justify-between"
    style={{
      backgroundImage: `url(${feature.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-5 pb-8">
      <div className="flex flex-col items-start max-w-3xs gap-3">
              <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-4xl shrink-0"
          style={{ backgroundColor: "rgba(0,0,0,0.07)", backdropFilter: "blur(8px)" }}
        >
          {feature.emoji}
        </div>
        <h3 className="text-3xl font-light text-white w-full">{feature.title}</h3>
            <p className="text-white/70 text-xl">{feature.description}</p>

      </div>
    </div>
  </div>
);

export default function Features() {
  return (
    <section id="features" data-navbar-theme="light" className="py-28 md:pt-38 px-6 relative">
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-6xl/16 font-light text-gray-900 mb-6">
            Everything you need to run a reliable AI assistant.
          </h2>
        </div>

        {/* Bento grid — 3 cols, 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:grid-rows-[500px_500px]">

          <div className="col-span-1 md:col-span-2 min-h-70 md:min-h-0"><FeatureCard feature={features[0]} /></div>
          <div className="col-span-1 md:col-span-2 min-h-70 md:min-h-0"><FeatureCard feature={features[1]} /></div>
          <div className="col-span-1 md:col-span-2 min-h-70 md:min-h-0"><FeatureCard feature={features[5]} /></div>

          <div className="col-span-1 md:col-span-2 min-h-70 md:min-h-0"><FeatureCard feature={features[2]} /></div>
          <div className="col-span-1 md:col-span-2 min-h-70 md:min-h-0"><FeatureCard feature={features[3]} /></div>
          <div className="col-span-1 md:col-span-2 min-h-70 md:min-h-0"><FeatureCard feature={features[4]} /></div>
        </div>
      </div>
    </section>
  );
}

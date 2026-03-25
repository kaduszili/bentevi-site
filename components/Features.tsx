const features = [
  {
    emoji: "🔒",
    image: "/images/feature-card-1.jpg",
    title: "Knowledge sandbox",
    description:
      "The assistant answers only from the sources you provide.",
  },
  {
    emoji: "✅",
    image: "/images/feature-card-2.jpg",
    title: "Zero hallucinations",
    description:
      "If the answer isn’t in your content, the assistant says so.",
  },
  {
    emoji: "⚡",
    image: "/images/feature-card-3.jpg",
    title: "Easy embedding",
    description:
      "Add the assistant to any site with a single script.",
  },
  {
    emoji: "💬",
    image: "/images/feature-card-4.jpg",
    title: "Website chat",
    description:
      "A clean chat interface that matches your website.",
  },
  {
    emoji: "📊",
    image: "/images/feature-card-5.jpg",
    title: "Conversation dashboard",
    description:
      "Review questions, see what users ask, and improve your knowledge base.",
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <div
    className="relative h-full rounded-4xl overflow-hidden flex flex-col justify-between border border-gray-200"
    style={{
      backgroundImage: `url(${feature.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-between p-5">
      <div className="flex flex-col items-start max-w-3xs gap-3">
              <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ backgroundColor: "rgba(0,0,0,0.07)", backdropFilter: "blur(8px)" }}
        >
          {feature.emoji}
        </div>
        <h3 className="text-2xl font-extralight text-black w-full">{feature.title}</h3>
            <p className="text-black/70 text-lg">{feature.description}</p>

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
        <div
          className="grid grid-cols-3 gap-4"
          style={{ gridTemplateRows: "400px 400px 400px" }}
        >
          {/* Row 1: image-1 full width */}
          {/* <div className="col-span-3 rounded-2xl overflow-hidden">
            <img src="/images/feature-img-1.jpg" alt="Feature" className="w-full h-full object-cover" />
          </div> */}

          {/* Row 2: card / image-2 (row-span-2) / card */}

{/* <div className="col-span-2 rounded-2xl overflow-hidden">
            <img src="/images/feature-img-2.jpg" alt="Feature" className="w-full h-full object-cover" />
          </div> */}

          <div className="col-span-2"><FeatureCard feature={features[0]} /></div>
          <div className="col-span-1"><FeatureCard feature={features[1]} /></div>


          {/* Row 3: card / [image-2 cont.] / card */}
          <div className="col-span-1"><FeatureCard feature={features[2]} /></div>
          <div className="col-span-1"><FeatureCard feature={features[3]} /></div>
          <div className="col-span-1"><FeatureCard feature={features[4]} /></div>
        </div>
      </div>
    </section>
  );
}

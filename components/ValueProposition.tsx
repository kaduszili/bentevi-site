const painPoints = [
  {
    image: "/images/problem-1.jpg",
    mobileImage: "/images/mobile-problem-1.jpg",
    title: "You define the knowledge base",
    description:
      "Upload documents, pages, or text. Decide exactly which live connector the assistant can read to answer questions.",
  },
  {
    image: "/images/problem-2.jpg",
    mobileImage: "/images/mobile-problem-2.jpg",
    title: "The assistant handles the conversation",
    description:
      "Bentevi stays consistent with your knowledge base, brand voice, and policies. No more off-brand or hallucinations.",
  },
  {
    image: "/images/problem-3.jpg",
    mobileImage: "/images/mobile-problem-3.jpg",
    title: "Automate actions based on visitor's intention",
    description:
      "Bentevi uses the power of AI to identify visitor's intention, triggers actions based on semantic topics defined by you.",
  },
  {
    image: "/images/problem-4.jpg",
    mobileImage: "/images/mobile-problem-4.jpg",
    title: "Your customer experience gets a boost",
    description:
      "With Bentevi handling common questions, your customers get a low friction experience with instant help 24/7. So your team can focus on high-impact work.",
  },
];

export default function ValueProposition() {
  return (
    <section id="value-proposition" data-navbar-theme="light" className="relative py-20 md:py-40 px-6">
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2
            className="text-3xl md:text-6xl font-light mb-10 md:mb-20 block tracking-tight"
            style={{ color: "#000" }}
          >
            A smart conversational AI assistant
          </h2>
          <p className="text-lg md:text-2xl font-extralight mb-10 md:mb-20 block tracking-tight"
            style={{ color: "#000" }}
          >Powered by large langague models, that understands your customers and reply them with accuracy and empathy.</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[400px]">

          {/* Row 1: img1 (wide) + text1 */}
          <div className="col-span-1 md:col-span-4 rounded-4xl overflow-hidden min-h-70 md:min-h-0 order-1 md:order-1" style={{ backgroundColor: "#D6EFD2" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[0].mobileImage} />
              <img src={painPoints[0].image} alt={painPoints[0].title} className="w-full h-full object-cover" />
            </picture>
          </div>
          <div className="col-span-1 md:col-span-2 rounded-4xl p-8 flex flex-col justify-end order-2 md:order-2" style={{ backgroundColor: "#D6EFD2" }}>
            <h3 className="font-light text-[#2C4D26] text-3xl md:text-4xl/9 mb-2">{painPoints[0].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[0].description}</p>
          </div>

          {/* Row 2: text2 + img2 (wide) */}
          <div className="col-span-1 md:col-span-2 rounded-4xl p-8 flex flex-col justify-end order-4 md:order-3" style={{ backgroundColor: "#F9E798" }}>
            <h3 className="font-light text-[#302807] text-3xl md:text-4xl/9 mb-2">{painPoints[1].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[1].description}</p>
          </div>
          <div className="col-span-1 md:col-span-4 rounded-4xl overflow-hidden min-h-70 md:min-h-0 order-3 md:order-4" style={{ backgroundColor: "#F2F1E8" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[1].mobileImage} />
              <img src={painPoints[1].image} alt={painPoints[1].title} className="w-full h-full object-cover" />
            </picture>
          </div>

          {/* Row 3: img3 + text3 (wide) */}
          <div className="col-span-1 md:col-span-4 rounded-4xl overflow-hidden min-h-70 md:min-h-0 order-5 md:order-5" style={{ backgroundColor: "#F2F1E8" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[2].mobileImage} />
              <img src={painPoints[2].image} alt={painPoints[2].title} className="w-full h-full object-cover" />
            </picture>
          </div>
          <div className="col-span-1 md:col-span-2 rounded-4xl p-8 flex flex-col justify-end order-6 md:order-6" style={{ backgroundColor: "#CEF3EF" }}>
            <h3 className="font-light text-[#1D4742] text-3xl md:text-4xl/9 mb-2">{painPoints[2].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[2].description}</p>
          </div>
          <div className="col-span-1 md:col-span-2 rounded-4xl p-8 flex flex-col justify-end order-8 md:order-7" style={{ backgroundColor: "#EDEAD6" }}>
            <h3 className="font-light text-[#575440] text-3xl md:text-4xl/9 mb-2">{painPoints[3].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[3].description}</p>
          </div>
          <div className="col-span-1 md:col-span-4 rounded-4xl overflow-hidden min-h-70 md:min-h-0 order-7 md:order-8" style={{ backgroundColor: "#F2F1E8" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[3].mobileImage} />
              <img src={painPoints[3].image} alt={painPoints[3].title} className="w-full h-full object-cover" />
            </picture>
          </div>

        </div>
      </div>
    </section>
  );
}

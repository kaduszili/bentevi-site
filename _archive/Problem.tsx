const painPoints = [
  {
    image: "/images/problem-1.jpg",
    mobileImage: "/images/mobile-problem-1.jpg",
    title: "You set the rules",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "/images/problem-2.jpg",
    mobileImage: "/images/mobile-problem-2.jpg",
    title: "AI Assistant handle the content",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "/images/problem-3.jpg",
    mobileImage: "/images/mobile-problem-3.jpg",
    title: "Customers get accurate and on-brand answers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export default function Problem() {
  return (
    <section data-navbar-theme="light" className="relative py-28 md:py-40 px-6"       style={{
        backgroundImage: "url('/images/bg-solution-.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}>
      <div className="container-max">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2
            className="text-3xl md:text-6xl font-light mb-10 md:mb-20 block tracking-tight"
            style={{ color: "#000" }}
          >
            Your smart conversational AI Assistant
          </h2>
          <p className="text-lg md:text-2xl font-extralight mb-10 md:mb-20 block tracking-tight"
            style={{ color: "#000" }}
          >Powered by large langague models, understands your visitors and customers, and reply them with accuracy and empathy.</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[400px]">

          {/* Row 1: img1 (wide) + text1 */}
          <div className="col-span-1 md:col-span-2 rounded-4xl overflow-hidden min-h-70 md:min-h-0" style={{ backgroundColor: "#F2F1E8" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[0].mobileImage} />
              <img src={painPoints[0].image} alt={painPoints[0].title} className="w-full h-full object-cover" />
            </picture>
          </div>
          <div className="col-span-1 rounded-4xl p-8 flex flex-col justify-end" style={{ backgroundColor: "#D6EFD2" }}>
            <h3 className="font-light text-[#2C4D26] text-3xl md:text-4xl/9 mb-2">{painPoints[0].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[0].description}</p>
          </div>

          {/* Row 2: text2 + img2 (wide) */}
          <div className="col-span-1 rounded-4xl p-8 flex flex-col justify-end" style={{ backgroundColor: "#F9E798" }}>
            <h3 className="font-light text-[#302807] text-3xl md:text-4xl/9 mb-2">{painPoints[1].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[1].description}</p>
          </div>
          <div className="col-span-1 md:col-span-2 rounded-4xl overflow-hidden min-h-70 md:min-h-0" style={{ backgroundColor: "#F2F1E8" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[1].mobileImage} />
              <img src={painPoints[1].image} alt={painPoints[1].title} className="w-full h-full object-cover" />
            </picture>
          </div>

          {/* Row 3: img3 + text3 (wide) */}
          <div className="col-span-1 rounded-4xl p-8 flex flex-col justify-end" style={{ backgroundColor: "#CEF3EF" }}>
            <h3 className="font-light text-[#1D4742] text-3xl md:text-4xl/9 mb-2">{painPoints[2].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[2].description}</p>
          </div>
          <div className="col-span-1 rounded-4xl overflow-hidden min-h-70 md:min-h-0" style={{ backgroundColor: "#F2F1E8" }}>
            <picture className="w-full h-full">
              <source media="(max-width: 767px)" srcSet={painPoints[2].mobileImage} />
              <img src={painPoints[2].image} alt={painPoints[2].title} className="w-full h-full object-cover" />
            </picture>
          </div>
          <div className="col-span-1 rounded-4xl p-8 flex flex-col justify-end" style={{ backgroundColor: "#EDEAD6" }}>
            <h3 className="font-light text-[#575440] text-3xl md:text-4xl/9 mb-2">{painPoints[2].title}</h3>
            <p className="text-gray-900 text-base md:text-lg/6">{painPoints[2].description}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "1",
    image: "/images/how-1.jpg",
    title: "Add your knowledge",
    description:
      "Upload documents, paste text, or connect your help center. Bentevi accepts PDFs, Word files, Markdown, and plain text.",
  },
  {
    number: "2",
    image: "/images/how-2.jpg",
    title: "Customize your assistant",
    description:
      "Bentevi indexes your information and builds a searchable knowledge base. Your assistant learns only what you provide.",
  },
  {
    number: "3",
    image: "/images/how-3.jpg",
    title: "Embed on your site",
    description:
      "Add one line of code to your website or internal tool. Your AI assistant is live and ready to answer questions.",
  },
  {
    number: "4",
    image: "/images/how-4.jpg",
    title: "Watch it answer",
    description:
      "Your visitors get instant, accurate answers sourced entirely from your content — no hallucinations, no off-topic replies.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-navbar-theme="dark"
      className="py-28 md:py-38 px-6 relative"
      style={{ backgroundColor: "#111" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/solution-v8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />
      <div className="container-max mx-auto relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16 mx-auto">
          <h2 className="text-3xl md:text-6xl text-center font-light text-white leading-tight">
            How it works
          </h2>
        </div>

        {/* Alternating timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.75 -translate-x-1/2"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.number} className="relative flex items-center gap-0">
                  {/* Left slot */}
                  <div className="w-1/2 pr-10 flex justify-end">
                    {isLeft ? (
                      <div className="rounded-4xl overflow-hidden flex flex-col w-full max-w-sm pb-2"  style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}>
                        <div className="p-5 w-full h-128 overflow-hidde">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="p-5">
                          <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>
                          <p className="text-white/80 text-lg/6">{step.description}</p>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Center badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-base ring-4 ring-white/40"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className="w-1/2 pl-10 flex justify-start">
                    {!isLeft ? (
                      <div className="rounded-4xl overflow-hidden flex flex-col w-full max-w-sm pb-2"  style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}>
                        <div className="p-5 w-full h-128 overflow-hidden">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="p-5">
                          <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>
                          <p className="text-white/60 text-lg/6">{step.description}</p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

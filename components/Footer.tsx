const productLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer data-navbar-theme="dark" className="bg-gray-900 text-gray-400">
      <div className="container-max px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-lg text-white w-fit"
            >
              <BirdIcon />
              Bentevi
            </a>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              AI assistant powered by your knowledge, not the internet.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
              Product
            </p>
            {productLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
              Legal
            </p>
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Bentevi. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with care · Early access
          </p>
        </div>
      </div>
    </footer>
  );
}

function BirdIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  );
}

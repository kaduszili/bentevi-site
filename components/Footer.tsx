const productLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer data-navbar-theme="dark" className="bg-gray-900 text-gray-400">
      <div className="container-max px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-lg text-white w-fit"
            >
              <LeafIcon />
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

          {/* Company */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
              Company
            </p>
            {companyLinks.map((l) => (
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

function LeafIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

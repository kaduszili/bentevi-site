import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy – Bentevi",
  description: "How Bentevi collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you sign up for our waitlist or create an account. This includes:

• **Email address** — to send you product updates, early access invitations, and important notices.
• **Usage data** — anonymized information about how you interact with Bentevi (pages visited, features used, session duration) to improve the product.
• **Content you upload** — documents, text, and files you add to your knowledge base to power your AI assistant. This content is stored securely and used only to generate responses for your assistant.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve Bentevi.
• Send product updates, early access notifications, and service announcements.
• Respond to your questions and support requests.
• Understand how users interact with the product to guide development.
• Comply with legal obligations.

We do not sell your personal information to third parties.`,
  },
  {
    title: "3. Your Knowledge Base Content",
    content: `Content you upload to your knowledge base (documents, FAQs, articles, etc.) is used exclusively to power your AI assistant's responses. We do not use your uploaded content to train general AI models, share it with other users, or make it accessible outside your account.

Your content remains yours. You can delete it at any time from your dashboard.`,
  },
  {
    title: "4. Data Storage and Security",
    content: `Your data is stored on secure servers with industry-standard encryption in transit (TLS) and at rest. We apply access controls so only authorized personnel can access infrastructure.

While we take reasonable precautions, no system is completely immune to security risks. We encourage you to use a strong, unique password and to notify us immediately if you suspect unauthorized access to your account.`,
  },
  {
    title: "5. Cookies and Analytics",
    content: `We use minimal cookies necessary to operate the service (e.g., session cookies). We may use privacy-respecting analytics tools (such as aggregate pageview counters) to understand traffic patterns. We do not use cross-site tracking or advertising cookies.`,
  },
  {
    title: "6. Sharing of Information",
    content: `We do not sell or rent your personal data. We may share information with:

• **Service providers** — third-party vendors who help us operate the platform (e.g., hosting, email delivery), bound by confidentiality obligations.
• **Legal requirements** — if required by law, regulation, or valid legal process.
• **Business transfers** — in connection with a merger, acquisition, or sale of assets, with notice provided to users.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data as long as your account is active or as needed to provide services. If you delete your account, we will delete or anonymize your data within 30 days, except where retention is required by law.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location, you may have the right to:

• Access the personal data we hold about you.
• Correct inaccurate data.
• Request deletion of your data.
• Object to or restrict certain processing.
• Data portability.

To exercise any of these rights, contact us at the email below.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Bentevi is not directed to children under 16. We do not knowingly collect personal information from anyone under 16. If you believe a minor has provided us with personal data, please contact us and we will delete it promptly.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by email or by a prominent notice in the product. Your continued use of Bentevi after changes take effect constitutes acceptance of the updated policy.`,
  },
  {
    title: "11. Contact",
    content: `If you have questions or concerns about this Privacy Policy, please contact us at:\n\nhello@bentevi.com`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-900 pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-brand-light uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">
              Effective date: March 25, 2026 &nbsp;·&nbsp; Last updated: March
              25, 2026
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-400 leading-relaxed mb-12">
            Bentevi (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is
            committed to protecting your privacy. This policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-semibold text-white mb-3">
                  {s.title}
                </h2>
                <div className="text-gray-400 leading-relaxed whitespace-pre-line text-[15px]">
                  {s.content.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={i} className="text-gray-200 font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

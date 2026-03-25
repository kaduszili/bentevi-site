import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service – Bentevi",
  description: "The terms that govern your use of Bentevi.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Bentevi (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.

We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the revised Terms. We will notify you of material changes by email or in-app notice.`,
  },
  {
    title: "2. Description of Service",
    content: `Bentevi is a SaaS platform that lets you build an AI-powered assistant grounded in your own knowledge base. You upload content (documents, FAQs, articles), and Bentevi uses that content to answer questions from your end users — without relying on general internet knowledge.

The Service is currently in early access. Features may change, and availability may be limited.`,
  },
  {
    title: "3. Eligibility",
    content: `You must be at least 16 years old to use Bentevi. By using the Service, you represent that you meet this requirement and that you have the legal capacity to enter into these Terms.`,
  },
  {
    title: "4. Your Account",
    content: `You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account.

You agree to:
• Provide accurate and complete information when registering.
• Notify us immediately if you suspect unauthorized access.
• Not share your account with others.

We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    title: "5. Your Content",
    content: `You retain full ownership of the content you upload to your knowledge base ("Your Content"). By uploading content, you grant Bentevi a limited, non-exclusive license to process and store it solely for the purpose of providing the Service to you.

You represent and warrant that:
• You own or have the rights to upload Your Content.
• Your Content does not violate any applicable law or third-party rights.
• Your Content does not include personal data of third parties without their consent.

We do not use Your Content to train general AI models or share it with other users.`,
  },
  {
    title: "6. Prohibited Uses",
    content: `You agree not to use Bentevi to:

• Violate any applicable law or regulation.
• Upload content that is illegal, harmful, defamatory, obscene, or that infringes third-party intellectual property rights.
• Attempt to gain unauthorized access to our systems or other users' accounts.
• Reverse engineer, decompile, or extract source code from the Service.
• Use the Service to build a competing product.
• Send spam, unsolicited messages, or automated abuse through the Service.
• Interfere with the integrity or performance of the Service.

Violation of these rules may result in immediate account termination.`,
  },
  {
    title: "7. Intellectual Property",
    content: `Bentevi and its underlying technology, design, trademarks, and content (excluding Your Content) are owned by us and protected by intellectual property laws. Nothing in these Terms grants you ownership of our intellectual property.

The AI-generated responses produced by your assistant are based on Your Content. You are responsible for ensuring those responses comply with applicable laws.`,
  },
  {
    title: "8. Payment and Billing",
    content: `Bentevi is currently free during the early access period. If we introduce paid plans, we will provide advance notice and updated Terms covering pricing, billing cycles, refunds, and cancellation.`,
  },
  {
    title: "9. Service Availability",
    content: `We aim for high availability but do not guarantee uninterrupted access to the Service. We may suspend the Service for maintenance, upgrades, or circumstances beyond our control. We are not liable for downtime or service interruptions.`,
  },
  {
    title: "10. Disclaimer of Warranties",
    content: `The Service is provided "as is" and "as available" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.

AI-generated responses may contain inaccuracies. You are responsible for reviewing assistant output before relying on it for important decisions.`,
  },
  {
    title: "11. Limitation of Liability",
    content: `To the maximum extent permitted by law, Bentevi and its team shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service, even if advised of the possibility of such damages.

Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months prior to the event giving rise to the claim (or $50 if you have paid nothing).`,
  },
  {
    title: "12. Indemnification",
    content: `You agree to indemnify and hold harmless Bentevi and its affiliates, employees, and agents from any claims, damages, or expenses (including legal fees) arising from: (a) your use of the Service; (b) Your Content; or (c) your violation of these Terms.`,
  },
  {
    title: "13. Termination",
    content: `You may stop using the Service and delete your account at any time. We may suspend or terminate your access at our discretion, with or without notice, for violations of these Terms or for any legitimate business reason.

Upon termination, your data will be deleted in accordance with our Privacy Policy.`,
  },
  {
    title: "14. Governing Law",
    content: `These Terms are governed by the laws of Brazil, without regard to conflict of law principles. Any disputes shall be resolved in the courts of São Paulo, SP, Brazil, unless otherwise required by applicable consumer protection law.`,
  },
  {
    title: "15. Contact",
    content: `Questions about these Terms? Reach us at:\n\nhello@bentevi.com`,
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-500 text-sm">
              Effective date: March 25, 2026 &nbsp;·&nbsp; Last updated: March
              25, 2026
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-400 leading-relaxed mb-12">
            Please read these Terms carefully before using Bentevi. They govern
            your relationship with us and your use of the Service.
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

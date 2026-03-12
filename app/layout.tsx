import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bentevi – AI Assistant Powered by Your Knowledge",
  description:
    "Bentevi lets you embed an AI chat assistant on your website that answers questions using only your content. No hallucinations. No guessing.",
  openGraph: {
    title: "Bentevi – AI Assistant Powered by Your Knowledge",
    description: "Build a grounded AI assistant from your own content.",
    siteName: "Bentevi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bentevi",
    description:
      "AI assistant that answers from your knowledge, not the internet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

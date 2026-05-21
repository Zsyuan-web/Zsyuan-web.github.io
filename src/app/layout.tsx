import type { Metadata } from "next";
import "./globals.css";
import { AdSenseScript } from "@/components/adsense-script";

export const metadata: Metadata = {
  title: "PneumaSofia — Wisdom of Buddhism & Taoism",
  description:
    "Explore the profound wisdom of Buddhism and Taoism, join community discussions, and nurture your spiritual companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <AdSenseScript />
      </body>
    </html>
  );
}

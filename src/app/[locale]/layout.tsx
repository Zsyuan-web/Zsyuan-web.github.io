import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@i18n/routing";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "zh")) {
    notFound();
  }

  const messages = await getMessages();

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PneumaSofia",
    url: "https://pneumasofia.com",
    description: locale === "zh"
      ? "佛道思想的现代回声 — 用现代人能听懂的语言，重新讲述佛教与道教的智慧。"
      : "Ancient wisdom, modern voice — exploring Buddhist and Taoist philosophy for thoughtful readers.",
    publisher: {
      "@type": "Organization",
      name: "PneumaSofia",
      url: "https://pneumasofia.com",
    },
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="flex flex-col flex-1">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </NextIntlClientProvider>
  );
}

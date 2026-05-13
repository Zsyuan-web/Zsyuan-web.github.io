import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/../i18n/routing";
import { notFound } from "next/navigation";
import { Link } from "@/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

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

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col flex-1">
        <LocaleHeader />
        {children}
      </div>
    </NextIntlClientProvider>
  );
}

async function LocaleHeader() {
  const t = await getTranslations("nav");

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          炁若{" "}
          <span className="text-sm text-zinc-500 font-normal">
            pneumasofia
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/wisdom"
            className="hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("wisdom")}
          </Link>
          <Link
            href="/community"
            className="hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("community")}
          </Link>
          <Link
            href="/pet"
            className="hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {t("pet")}
          </Link>
          <LanguageSwitcher />
          <Link
            href="/login"
            className="px-3 py-1.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium"
          >
            {t("login")}
          </Link>
        </div>
      </nav>
    </header>
  );
}

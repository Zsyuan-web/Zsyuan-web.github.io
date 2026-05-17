"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ locale: _locale }: { locale?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      router.refresh();
    });
  };

  return (
    <button
      onClick={() => switchLocale(locale === "zh" ? "en" : "zh")}
      disabled={isPending}
      aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
      className="flex items-center gap-1.5 text-sm text-muted hover:text-accent disabled:opacity-50 transition-colors ml-2"
    >
      <Globe className="size-4" aria-hidden="true" />
      <span>{locale === "zh" ? "EN" : "中"}</span>
    </button>
  );
}

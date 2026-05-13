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
    <div className="relative">
      <button
        onClick={() => switchLocale(locale === "zh" ? "en" : "zh")}
        disabled={isPending}
        className="flex items-center gap-1.5 text-sm hover:text-zinc-600 dark:hover:text-zinc-300 disabled:opacity-50"
      >
        <Globe className="w-4 h-4" />
        <span>{locale === "zh" ? "EN" : "中"}</span>
      </button>
    </div>
  );
}

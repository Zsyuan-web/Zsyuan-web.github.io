import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const t = await getTranslations("site");

  return (
    <footer className="text-center py-8 px-6 pb-12 text-muted text-sm">
      <p>炁若 <span className="font-serif italic">PneumaSofia</span></p>
      <p className="mt-1 text-xs opacity-80">
        {t("description")}
      </p>
    </footer>
  );
}

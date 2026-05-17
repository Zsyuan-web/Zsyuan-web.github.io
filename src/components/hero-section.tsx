import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

export async function HeroSection() {
  const t = await getTranslations("home");

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight max-w-xl mx-auto mb-4">
        <span className="text-accent">{t("hero.titleAccent")}</span>
        <br />
        {t("hero.titleMain")}
      </h1>
      <p className="text-base md:text-lg text-muted max-w-md mx-auto mb-10 leading-relaxed">
        {t("hero.subtitle")}
      </p>
      <Link
        href="/wisdom"
        className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors no-underline"
      >
        {t("hero.start")}
      </Link>
    </section>
  );
}

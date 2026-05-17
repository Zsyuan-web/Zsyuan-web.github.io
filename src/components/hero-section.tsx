import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

export async function HeroSection() {
  const t = await getTranslations("home");

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 text-center px-6">
      <p className="text-xs text-accent-light tracking-[0.2em] uppercase mb-4">
        Buddhist &amp; Taoist Philosophy
      </p>
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight max-w-xl mx-auto mb-5">
        <span className="bg-gradient-to-t from-accent-light/30 to-transparent bg-no-repeat bg-bottom px-1">
          {t("hero.titleAccent")}
        </span>
        <br />
        {t("hero.titleMain")}
      </h1>
      <p className="text-base md:text-lg text-muted max-w-md mx-auto mb-10 leading-relaxed italic">
        {t("hero.subtitle")}
      </p>
      <Link
        href="/wisdom"
        className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold text-sm shadow-[0_2px_8px_rgba(139,94,60,0.25)] hover:scale-[1.02] transition-all duration-200 no-underline"
      >
        {t("hero.start")}
      </Link>
    </section>
  );
}

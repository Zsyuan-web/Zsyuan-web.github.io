import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
          {t("hero.title")}
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/wisdom"
            className="px-6 py-3 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium"
          >
            {t("hero.start")}
          </Link>
          <Link
            href="/community"
            className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 font-medium"
          >
            {t("hero.join")}
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-lg mb-4">
            📿
          </div>
          <h2 className="text-lg font-semibold mb-2">
            {t("features.wisdom.title")}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("features.wisdom.desc")}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-lg mb-4">
            💬
          </div>
          <h2 className="text-lg font-semibold mb-2">
            {t("features.community.title")}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("features.community.desc")}
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-lg mb-4">
            🐉
          </div>
          <h2 className="text-lg font-semibold mb-2">
            {t("features.pet.title")}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("features.pet.desc")}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>{t("footer")}</p>
      </footer>
    </>
  );
}

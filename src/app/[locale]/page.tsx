import { getTranslations } from "next-intl/server";
import { getAllContent } from "@/lib/content";
import { HeroSection } from "@/components/hero-section";
import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const articles = getAllContent(locale);

  return (
    <main id="main-content" className="flex-1">
      <HeroSection />

      {articles.length > 0 ? (
        <section className="max-w-[960px] mx-auto px-6 pb-20">
          <h2 className="text-lg font-semibold text-muted mb-6">
            {t("featured")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticleCard
                key={article.meta.slug}
                title={article.meta.title}
                excerpt={article.content
                  .replace(/[#*>\[\]`\n]/g, " ")
                  .trim()
                  .slice(0, 180) + "…"}
                tags={article.meta.tags.slice(0, 3)}
                slug={article.meta.slug}
                locale={locale}
              />
            ))}
          </div>
        </section>
      ) : (
        <EmptyState message={t("featured")} />
      )}
    </main>
  );
}

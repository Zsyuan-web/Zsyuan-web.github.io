import { getAllContent } from "@/lib/content";
import { getTranslations } from "next-intl/server";
import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";

export default async function WisdomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articles = getAllContent(locale);
  const t = await getTranslations("wisdom");

  return (
    <main id="main-content" className="flex-1 w-full px-6 pb-16">
      <div className="max-w-[960px] mx-auto">
        <div className="pt-16 pb-8 text-center">
          <h1 className="text-3xl font-bold font-serif text-foreground mb-2">
            {t("title")}
          </h1>
          <p className="text-muted text-sm">
            {t("subtitle")}
          </p>
        </div>

        {articles.length === 0 ? (
          <EmptyState message={t("empty")} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticleCard
                key={article.meta.slug}
                title={article.meta.title}
                excerpt={article.content
                  .replace(/[#*>\[\]`\n]/g, " ")
                  .trim()
                  .slice(0, 200) + "…"}
                tags={article.meta.tags}
                slug={article.meta.slug}
                locale={locale}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

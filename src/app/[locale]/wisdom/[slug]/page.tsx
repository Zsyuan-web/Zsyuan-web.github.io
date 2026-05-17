import { getContentBySlug, getAllContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { ArticleContent } from "@/components/article-content";
import { CrossLinks } from "@/components/cross-links";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "zh"];
  const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const articles = getAllContent(locale);
    for (const article of articles) {
      if (!paths.some((p) => p.locale === locale && p.slug === article.meta.slug)) {
        paths.push({ locale, slug: article.meta.slug });
      }
    }
  }

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getContentBySlug(slug, locale);
  if (!article) return {};

  const description = article.content
    .replace(/[#*>\[\]`\n]/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: `${article.meta.title} — PneumaSofia`,
    description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const article = getContentBySlug(slug, locale);
  const t = await getTranslations("wisdom");

  if (!article) {
    notFound();
  }

  const allArticles = getAllContent(locale);
  const otherArticles = allArticles.filter((a) => a.meta.slug !== slug);

  return (
    <main id="main-content" className="flex-1 w-full px-6 pb-20">
      <div className="max-w-[760px] mx-auto">
        {/* Header */}
        <div className="pt-16 pb-8 text-center">
          <Link
            href="/wisdom"
            className="inline-block text-sm text-muted no-underline mb-5 hover:text-accent transition-colors"
          >
            {t("back")}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground leading-snug mb-3">
            {article.meta.title}
          </h1>
          {article.meta.tags.length > 0 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {article.meta.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="py-0.5 px-2.5 leading-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <ArticleContent content={article.content} />

        {/* Cross-links */}
        <CrossLinks
          articles={otherArticles}
          continueLabel={t("continueExploring")}
          locale={locale}
        />
      </div>
    </main>
  );
}

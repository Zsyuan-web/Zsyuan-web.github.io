import { getContentBySlug, getAllContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { ArticleContent } from "@/components/article-content";
import { CrossLinks } from "@/components/cross-links";
import type { Metadata } from "next";

const LOCALES = ["en", "zh"] as const;

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  const seen = new Set<string>();

  for (const locale of LOCALES) {
    for (const article of getAllContent(locale)) {
      const key = `${locale}:${article.meta.slug}`;
      if (!seen.has(key)) {
        seen.add(key);
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

  const description =
    article.meta.description ??
    article.content
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
  const otherArticles = allArticles
    .filter((a) => a.meta.slug !== slug)
    .sort((a, b) => {
      const order = article.meta.continueReading ?? [];
      const aIdx = order.indexOf(a.meta.slug);
      const bIdx = order.indexOf(b.meta.slug);
      if (aIdx === -1 && bIdx === -1) return 0;
      if (aIdx === -1) return 1;
      if (bIdx === -1) return -1;
      return aIdx - bIdx;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.meta.title,
    description: article.meta.description ?? article.content.replace(/[#*>\[\]`\n]/g, " ").trim().slice(0, 160),
    author: {
      "@type": "Organization",
      name: "PneumaSofia",
      url: "https://pneumasofia.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PneumaSofia",
      url: "https://pneumasofia.com",
    },
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
  };

  return (
    <main id="main-content" className="flex-1 w-full px-6 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[760px] mx-auto">
        {/* Header */}
        <div className="pt-12 pb-10 text-center border-b border-border mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground leading-snug mb-4">
            {article.meta.title}
          </h1>
          {article.meta.tags.length > 0 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {article.meta.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="py-1 px-3 text-xs tracking-wide">
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

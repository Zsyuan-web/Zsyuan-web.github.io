import { Link } from "@/navigation";
import type { ContentItem } from "@/lib/content";

interface CrossLinksProps {
  articles: ContentItem[];
  continueLabel: string;
  locale: string;
}

export function CrossLinks({ articles, continueLabel, locale }: CrossLinksProps) {
  if (articles.length === 0) return null;

  return (
    <div className="pt-10">
      <h2 className="text-lg text-muted font-semibold mb-4">
        {continueLabel}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {articles.map((a) => (
          <Link
            key={a.meta.slug}
            href={`/wisdom/${a.meta.slug}`}
            className="block no-underline bg-card border border-border rounded-lg p-5 transition-colors hover:bg-card-hover hover:border-accent-light hover:shadow-sm"
          >
            <h3 className="text-sm font-semibold font-serif text-accent mb-1.5">
              {a.meta.title}
            </h3>
            <p className="text-xs text-muted line-clamp-2 leading-relaxed">
              {a.content.replace(/[#*>\[\]`\n]/g, " ").trim().slice(0, 120)}&hellip;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

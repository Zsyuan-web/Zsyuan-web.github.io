import { Link } from "@/navigation";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  locale: string;
}

export function ArticleCard({
  title,
  excerpt,
  tags,
  slug,
  locale,
}: ArticleCardProps) {
  return (
    <Link
      href={`/wisdom/${slug}`}
      className="block no-underline bg-card border border-border rounded-xl p-6 md:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-accent-light/50"
    >
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs py-0.5 px-2.5 leading-normal hover:text-accent-dark transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <h3 className="text-xl font-semibold font-serif text-accent mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed line-clamp-3">
        {excerpt}
      </p>
    </Link>
  );
}

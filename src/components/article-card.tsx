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
      className="block no-underline bg-card border border-border rounded-lg p-6 md:p-7 transition-colors hover:bg-card-hover hover:border-accent-light hover:shadow-sm"
    >
      <h3 className="text-lg font-semibold font-serif text-accent mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
        {excerpt}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  );
}

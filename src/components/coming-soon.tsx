import { Link } from "@/navigation";
import { Construction } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  backTo?: string;
  backLabel?: string;
}

export function ComingSoon({
  title,
  description,
  backTo = "/wisdom",
  backLabel,
}: ComingSoonProps) {
  return (
    <main id="main-content" className="flex-1 flex items-center justify-center">
      <div className="text-center px-6 py-24 max-w-sm mx-auto">
        <Construction className="size-12 mx-auto mb-6 text-accent" aria-hidden="true" />
        <h1 className="text-2xl font-bold font-serif text-foreground mb-3">
          {title}
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          {description}
        </p>
        <Link
          href={backTo}
          className="inline-block bg-accent text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-dark transition-colors no-underline"
        >
          &larr; {backLabel}
        </Link>
      </div>
    </main>
  );
}

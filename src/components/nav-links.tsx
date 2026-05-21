"use client";

import { usePathname } from "@/navigation";
import { Link } from "@/navigation";

interface NavLinksProps {
  homeLabel: string;
  wisdomLabel: string;
  forumLabel: string;
  loginLabel: string;
}

export function NavLinks({
  homeLabel,
  wisdomLabel,
  forumLabel,
  loginLabel,
}: NavLinksProps) {
  const pathname = usePathname();

  const items = [
    { href: "/", label: homeLabel, exact: true },
    { href: "/wisdom", label: wisdomLabel, exact: false },
    { href: "/forum", label: forumLabel, exact: false, upcoming: true },
    { href: "/login", label: loginLabel, exact: false, upcoming: true },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === "/" || pathname === "/en" || pathname === "/zh";
    return pathname.startsWith(href);
  };

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            relative text-base no-underline px-3 py-1.5 rounded-full transition-all duration-200
            ${item.upcoming
              ? "text-muted/50 border border-dashed border-border hover:text-muted hover:bg-hover"
              : isActive(item.href, item.exact)
                ? "text-accent font-medium after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-accent after:rounded-full"
                : "text-muted hover:text-accent hover:bg-hover"
            }
          `}
        >
          {item.label}
          {item.upcoming && (
            <span className="ml-1 text-[0.6rem] opacity-50">soon</span>
          )}
        </Link>
      ))}
    </>
  );
}

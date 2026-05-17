import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/wisdom", label: t("wisdom") },
    { href: "/forum", label: t("forum") },
    { href: "/login", label: t("login") },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-border"
      style={{
        background: "rgba(250,249,246,0.92)",
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between h-14 px-6">
        <Link
          href="/"
          className="text-lg font-bold text-accent no-underline"
        >
          炁若{" "}
          <span className="font-normal text-sm text-muted">
            pneumasofia
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted no-underline px-3 py-1.5 rounded-full transition-colors hover:text-accent hover:bg-hover"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

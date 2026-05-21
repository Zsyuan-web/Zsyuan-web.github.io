import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NavLinks } from "@/components/nav-links";

export async function SiteHeader() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-[rgba(250,249,246,0.92)] backdrop-blur-md">
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between h-14 px-6">
        <Link
          href="/"
          className="text-lg font-bold text-accent no-underline leading-none"
        >
          炁若 <span className="font-serif italic">PneumaSofia</span>
        </Link>

        <div className="flex items-center gap-1">
          <NavLinks
            homeLabel={t("home")}
            wisdomLabel={t("wisdom")}
            forumLabel={t("forum")}
            loginLabel={t("login")}
          />
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

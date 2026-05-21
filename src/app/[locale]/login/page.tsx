import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/coming-soon";

export default async function LoginPage() {
  const t = await getTranslations("nav");
  const tc = await getTranslations("comingSoon");

  return (
    <ComingSoon
      title={t("login")}
      description={tc("login")}
      backLabel={tc("backLabel")}
    />
  );
}

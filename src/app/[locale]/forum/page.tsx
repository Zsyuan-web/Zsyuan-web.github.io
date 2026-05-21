import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/coming-soon";

export default async function ForumPage() {
  const t = await getTranslations("nav");
  const tc = await getTranslations("comingSoon");

  return (
    <ComingSoon
      title={t("forum")}
      description={tc("forum")}
      backLabel={tc("backLabel")}
    />
  );
}

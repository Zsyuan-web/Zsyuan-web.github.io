import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/coming-soon";

export default async function ForumPage() {
  const t = await getTranslations("nav");

  return (
    <ComingSoon
      title={t("forum")}
      description="Community discussions coming soon. Share your thoughts on Buddhist and Taoist philosophy with fellow readers."
    />
  );
}

import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/coming-soon";

export default async function LoginPage() {
  const t = await getTranslations("nav");

  return (
    <ComingSoon
      title={t("login")}
      description="Sign in and registration coming soon. Join the community to save your reading progress and participate in discussions."
    />
  );
}

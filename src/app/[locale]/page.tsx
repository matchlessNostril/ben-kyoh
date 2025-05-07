import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/domain/layout";
import { SignInToast, FeatureCard } from "./_components";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.onboarding" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function OnboardingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.onboarding" });

  return (
    <main className="h-full flex flex-col bg-gradient-to-b from-primary from-0% via-primary-light via-20% to-white to-50%">
      <Suspense fallback={null}>
        <SignInToast />
      </Suspense>

      <Header />

      <section className="text-center my-[6vh] lg:my-[8vh] xl:my-[10vh] px-2">
        <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4">
          {t("intro.title")}
        </h2>
        <p className="text-gray text-sm sm:text-lg xl:text-xl max-w-xl mx-auto">
          {t("intro.description")}
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-6 w-full max-w-xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 mb-10">
        <FeatureCard title={t("intro.features.1")} image="/logo.png" />
        <FeatureCard title={t("intro.features.2")} image="/logo.png" />
        <FeatureCard title={t("intro.features.3")} image="/logo.png" />
        <FeatureCard title={t("intro.features.4")} image="/logo.png" />
      </section>
    </main>
  );
}

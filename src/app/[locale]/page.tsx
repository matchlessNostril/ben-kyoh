import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { SignInToast, FeatureCard } from './_components';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.onboarding' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.onboarding' });

  return (
    <main className="bg-gray-light h-[calc(100vh-4rem)]">
      <Suspense fallback={null}>
        <SignInToast />
      </Suspense>

      <section className="py-[6vh] px-2 text-center lg:py-[8vh] xl:py-[10vh]">
        <h2 className="mb-2 text-xl font-bold sm:mb-4 sm:text-2xl md:text-4xl xl:text-5xl">
          {t('intro.title')}
        </h2>
        <p className="text-gray mx-auto max-w-xl text-sm sm:text-lg xl:text-xl">
          {t('intro.description')}
        </p>
      </section>

      <section className="mx-auto mb-10 grid w-full max-w-xl grid-cols-2 gap-2 px-4 sm:grid-cols-2 sm:gap-6 lg:max-w-6xl lg:grid-cols-4 xl:max-w-7xl xl:grid-cols-4">
        <FeatureCard title={t('intro.features.1')} image="/logo.png" />
        <FeatureCard title={t('intro.features.2')} image="/logo.png" />
        <FeatureCard title={t('intro.features.3')} image="/logo.png" />
        <FeatureCard title={t('intro.features.4')} image="/logo.png" />
      </section>
    </main>
  );
}

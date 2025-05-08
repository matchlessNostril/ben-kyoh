import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.workspace' });

  return {
    title: t('title'),
  };
}

export default function WorkspacePage() {
  return <>workspace</>;
}

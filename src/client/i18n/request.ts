import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const metadata = (await import(`@/client/messages/${locale}/metadata.json`)).default;

  const folders = ['common', 'pages'] as const;
  const filenames = {
    common: ['components', 'toast'],
    pages: ['onboarding', 'workspace'],
  } as const;

  const loadMessages = async () => {
    const result: Record<string, Record<string, unknown>> = {};
    for (const folder of folders) {
      result[folder] = {};
      for (const file of filenames[folder]) {
        const mod = (await import(`@/client/messages/${locale}/${folder}/${file}.json`)) as {
          default: Record<string, unknown>;
        };
        result[folder][file] = mod.default;
      }
    }
    return result;
  };

  const mergedMessages = await loadMessages();

  return {
    locale,
    messages: {
      metadata,
      ...mergedMessages,
    },
  };
});

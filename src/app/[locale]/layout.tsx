import { notFound } from 'next/navigation';
import { Noto_Sans, Noto_Sans_JP, Noto_Sans_KR } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/client/i18n/routing';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, ReactQueryProvider } from '@/client/providers';
import Header from '@/client/components/domain/header';
import '@/client/globals.css';

const notoSansJA = Noto_Sans_JP({
  variable: '--font-noto-sans-ja',
  subsets: ['latin'],
});
const notoSansEN = Noto_Sans({
  variable: '--font-noto-sans-en',
  subsets: ['latin'],
});
const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-ko',
  subsets: ['latin'],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // サーバーコンボーネントレンダリングコンテキストにlocale値を保存
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <ReactQueryProvider>
      <html lang={locale}>
        <body
          className={`${notoSansJA.variable} ${notoSansEN.variable} ${notoSansKR.variable} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            <AuthProvider>
              <Header />
              {children}
            </AuthProvider>
            <ToastContainer toastClassName="!rounded-lg !p-2 !mt-4 !text-sm sm:!text-base !w-[85vw] sm:!w-[350px]" />
          </NextIntlClientProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}

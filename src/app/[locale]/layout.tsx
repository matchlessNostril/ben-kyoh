import { Noto_Sans_JP, Noto_Sans_KR, Noto_Sans } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactQueryProvider, AuthProvider } from "./providers";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const notoSansJA = Noto_Sans_JP({
  variable: "--font-noto-sans-ja",
  subsets: ["latin"],
});
const notoSansEN = Noto_Sans({
  variable: "--font-noto-sans-en",
  subsets: ["latin"],
});
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-ko",
  subsets: ["latin"],
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

  const font =
    locale === "ja" ? notoSansJA : locale === "en" ? notoSansEN : notoSansKR;

  return (
    <ReactQueryProvider>
      <html lang={locale}>
        <body className={`${font.variable} antialiased`}>
          <NextIntlClientProvider messages={messages}>
            <AuthProvider>{children}</AuthProvider>
            <ToastContainer toastClassName="!rounded-lg !p-2 !mt-4 !text-sm sm:!text-base !w-[85vw] sm:!w-[350px]" />
          </NextIntlClientProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}

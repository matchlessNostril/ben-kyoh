import { NextResponse } from 'next/server';
import { createServerClient } from '@/server/auth';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const pathname = new URL(request.url).pathname;
  const localeMatch = pathname.match(/^\/(en|ja|ko)(?=\/|$)/);
  const locale = localeMatch?.[1] ?? 'ja';

  const next = searchParams.get('next') ?? '/workspace';

  if (code) {
    const supabaseServerClient = await createServerClient();
    const { error } = await supabaseServerClient.auth.exchangeCodeForSession(code);

    if (!error) {
      const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}${next}`;
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/auth/auth-code-error`,
  );
}

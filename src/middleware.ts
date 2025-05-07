import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/auth/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export async function middleware(request: NextRequest) {
  // 1. 認証
  const authResponse = await updateSession(request);
  if (authResponse.status !== 200) return authResponse;

  // 2.言語
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};

import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/client/i18n/routing';
import { updateSession } from '@/server/auth';

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

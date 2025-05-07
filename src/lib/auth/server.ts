import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { createServerClient as _createServerClient } from "@supabase/ssr";
import { rootPaths } from "@/constants";

export async function createServerClient() {
  const cookieStore = await cookies();

  return _createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabaseServerClient = _createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  const pathname = request.nextUrl.pathname;
  if (!user && !rootPaths.includes(pathname) && !pathname.includes("/auth")) {
    const localeMatch = pathname.match(/^\/(en|ko|ja)(\/|$)/);
    const locale = localeMatch ? localeMatch[1] : "ja";

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    url.searchParams.set("auth-redirect", "true");
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/auth/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/workspace";

  if (code) {
    const supabaseServerClient = await createServerClient();
    const { error } = await supabaseServerClient.auth.exchangeCodeForSession(
      code
    );
    if (!error) {
      const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${next}`;
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_SITE_URL}/auth/auth-code-error`
  );
}

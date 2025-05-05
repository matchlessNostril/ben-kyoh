import { createBrowserClient } from "@supabase/ssr";

export const supabaseBrowserClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const signInWithGoogle = async () =>
  await supabaseBrowserClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

export const signOut = async () => await supabaseBrowserClient.auth.signOut();

export const getUser = async () => await supabaseBrowserClient.auth.getUser();

import { createBrowserClient } from '@supabase/ssr';

export const supabaseBrowserClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const signInWithGoogle = async () => {
  const locale = window.location.pathname.split('/')[1] || 'ja';
  return await supabaseBrowserClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/auth/callback`,
    },
  });
};

export const signOut = async () => await supabaseBrowserClient.auth.signOut();

export const getUser = async () => await supabaseBrowserClient.auth.getUser();

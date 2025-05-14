import { NextResponse } from 'next/server';
import { createServerClient } from '@/server/auth';

export default async function checkAuth() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  return { success: true, user };
}

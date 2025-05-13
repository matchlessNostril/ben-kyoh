'use client';

import { useRouter, usePathname } from '@/client/i18n/routing';
import { useUser } from '@/client/hooks';
import { RoundButton } from '@/client/components/ui/button';
import { rootPaths } from '@/shared/constants';
import { useTranslations } from 'next-intl';

export default function AuthButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, signInWithGoogle, signOut } = useUser();
  const t = useTranslations('common.components.header.authButton');

  return (
    <>
      {rootPaths.includes(pathname) ? (
        <>
          {user ? (
            <RoundButton onClick={() => router.push('/workspace')}>{t('toWorkspace')}</RoundButton>
          ) : (
            <RoundButton onClick={signInWithGoogle}>{t('signIn')}</RoundButton>
          )}
        </>
      ) : (
        <RoundButton onClick={signOut}>{t('signOut')}</RoundButton>
      )}
    </>
  );
}

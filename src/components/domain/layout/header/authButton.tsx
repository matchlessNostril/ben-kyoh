'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useUser } from '@/hooks';
import { RoundButton } from '@/components/ui/button';
import { rootPaths } from '@/constants';
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
            <RoundButton fill={false} onClick={() => router.push('/workspace')}>
              {t('toWorkspace')}
            </RoundButton>
          ) : (
            <RoundButton fill={false} onClick={signInWithGoogle}>
              {t('signIn')}
            </RoundButton>
          )}
        </>
      ) : (
        <RoundButton onClick={signOut}>{t('signOut')}</RoundButton>
      )}
    </>
  );
}

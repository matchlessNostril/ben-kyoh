'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/client/i18n/routing';
import { toast } from 'react-toastify';
import { toastConfig } from '@/client/constants/toastConfig';

export default function SignInToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations('common.toast');

  useEffect(() => {
    if (searchParams.get('auth-redirect') === 'true') {
      toast.warning(t('signInRequired'), {
        ...toastConfig,
        onClose: () => {
          setTimeout(() => {
            router.replace('/', { scroll: false });
          }, 500);
        },
      });
    }
  }, []); // この副作用はリダイレクト時にのみ実行されるため、dependencies配列は空にしてある
  return null;
}

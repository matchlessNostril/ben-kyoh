'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/client/i18n/routing';
import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
  signInWithGoogle as _signInWithGoogle,
  signOut as _signOut,
  getUser as _getUser,
} from '@/client/auth';
import { toastConfig } from '@/client/constants/toastConfig';

export default function useUser() {
  const router = useRouter();
  const t = useTranslations('common.toast');

  const { data: user } = useSuspenseQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data, error } = await _getUser();
      if (error) {
        return null;
      }
      return data.user;
    },
    staleTime: 1000 * 60 * 30,
  });

  const signInWithGoogle = async () => {
    const { data, error } = await _signInWithGoogle();
    if (error) {
      toast.error(t('signInWithGoogleError'), {
        ...toastConfig,
        toastId: 'signInWithGoogleError',
      });
    }
    return data;
  };

  const signOut = async () => {
    const { error } = await _signOut();
    if (error) {
      toast.error(t('signOutError'), {
        ...toastConfig,
        toastId: 'signOutError',
      });
    } else {
      router.push('/');
    }
  };

  return { user, signInWithGoogle, signOut };
}

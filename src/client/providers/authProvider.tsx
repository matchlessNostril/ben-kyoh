'use client';

import { ReactNode, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { supabaseBrowserClient } from '@/client/auth';
import { toastConfig } from '@/client/constants/toastConfig';

const SIGN_IN_NOTIFIED_KEY = 'auth_signin_notified';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const t = useTranslations('common.toast');

  useEffect(() => {
    const { data: listener } = supabaseBrowserClient.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION' && session) {
        const hasNotified = sessionStorage.getItem(SIGN_IN_NOTIFIED_KEY);

        if (!hasNotified) {
          toast.success(
            t('signInSuccess', {
              name: session.user.identities?.[0].identity_data?.name || session.user.email,
            }),
            {
              ...toastConfig,
              toastId: 'signInSuccess',
            },
          );
          sessionStorage.setItem(SIGN_IN_NOTIFIED_KEY, 'true');
        }
      } else if (event === 'SIGNED_OUT') {
        queryClient.invalidateQueries({ queryKey: ['user'] });
        toast.success(t('signOutSuccess'), {
          ...toastConfig,
          toastId: 'signOutSuccess',
        });
        sessionStorage.removeItem(SIGN_IN_NOTIFIED_KEY);
      }
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [queryClient]);

  return children;
}

"use client";

import { ReactNode, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabaseBrowserClient } from "@/lib/auth/client";
import { toast } from "react-toastify";
import { toastConfig } from "@/constants/toastConfig";
import { useTranslations } from "next-intl";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const t = useTranslations("common.toast");

  useEffect(() => {
    const { data: listener } = supabaseBrowserClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === "INITIAL_SESSION" && session) {
          toast.success(
            t("signInSuccess", {
              name:
                session.user.identities?.[0].identity_data?.name ||
                session.user.email,
            }),
            {
              ...toastConfig,
              toastId: "signInSuccess",
            }
          );
        } else if (event === "SIGNED_OUT") {
          queryClient.invalidateQueries({ queryKey: ["user"] });
          toast.success(t("signOutSuccess"), {
            ...toastConfig,
            toastId: "signOutSuccess",
          });
        }
      }
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [queryClient]);

  return children;
}

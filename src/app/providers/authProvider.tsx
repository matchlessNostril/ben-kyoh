"use client";

import { ReactNode, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabaseBrowserClient } from "@/lib/auth/client";
import { toast } from "react-toastify";
import { toastConfig } from "@/constants/toastConfig";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: listener } = supabaseBrowserClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === "INITIAL_SESSION" && session) {
          toast.success(
            `${
              session.user.identities?.[0].identity_data?.name ||
              session.user.email
            }さん、ようこそ！😆`,
            {
              ...toastConfig,
              toastId: "signInSuccess",
            }
          );
        } else if (event === "SIGNED_OUT") {
          queryClient.invalidateQueries({ queryKey: ["user"] });
          toast.success("またお会いしましょう！🥹", {
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

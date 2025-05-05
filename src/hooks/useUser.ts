"use client";

import { useRouter } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  signInWithGoogle as _signInWithGoogle,
  signOut as _signOut,
  getUser as _getUser,
} from "@/lib/auth/client";
import { toast } from "react-toastify";
import { toastConfig } from "@/constants/toastConfig";

export default function useUser() {
  const router = useRouter();

  const { data: user } = useSuspenseQuery({
    queryKey: ["user"],
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
      toast.error("ログインに失敗しました。", {
        ...toastConfig,
        toastId: "signInWithGoogleError",
      });
    }
    return data;
  };

  const signOut = async () => {
    const { error } = await _signOut();
    if (error) {
      toast.error("ログアウトに失敗しました。", {
        ...toastConfig,
        toastId: "signOutError",
      });
    } else {
      router.push("/");
    }
  };

  return { user, signInWithGoogle, signOut };
}

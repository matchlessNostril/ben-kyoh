"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { toastConfig } from "@/constants/toastConfig";

export default function LoginToast() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("auth-redirect") === "true") {
      toast.warning("ログインが必要です。", {
        ...toastConfig,
        onClose: () => {
          setTimeout(() => {
            router.replace("/", { scroll: false });
          }, 500);
        },
      });
    }
  }, []); // この副作用はリダイレクト時にのみ実行されるため、dependencies配列は空にしてある
  return null;
}

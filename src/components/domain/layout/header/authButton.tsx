"use client";

import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@/hooks";
import { RoundButton } from "@/components/ui/button";

export default function AuthButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, signInWithGoogle, signOut } = useUser();

  return (
    <>
      {pathname === "/" ? (
        <>
          {user ? (
            <RoundButton fill={false} onClick={() => router.push("/workspace")}>
              ワークスペースへ
            </RoundButton>
          ) : (
            <RoundButton fill={false} onClick={signInWithGoogle}>
              Google&nbsp;ログイン
            </RoundButton>
          )}
        </>
      ) : (
        <RoundButton onClick={signOut}>ログアウト</RoundButton>
      )}
    </>
  );
}

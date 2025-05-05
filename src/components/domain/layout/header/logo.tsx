"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();
  const outline = pathname === "/";

  return (
    <button
      className={`flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full backdrop-blur-sm border cursor-pointer
        ${outline ? "border-white/20 bg-white/5" : "border-transparent"}
      `}
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        src="/logo.png"
        alt="ベンキョウ logo"
        width={24}
        height={24}
        className={`sm:w-[28px] sm:h-[28px] ${
          !outline ? "brightness-105 contrast-95" : ""
        }`}
      />
      <h1
        className={`text-sm sm:text-md font-bold pb-[1px] drop-shadow-sm ${
          outline ? "text-white" : "text-primary"
        }`}
      >
        <span className="sr-only">ベ</span>
        <span className="opacity-90">ン</span>キョウ
      </h1>
    </button>
  );
}

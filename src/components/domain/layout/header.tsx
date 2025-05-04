import Image from "next/image";
import { RoundButton } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-2 sm:px-5 sm:py-3">
      <Logo />
      <RoundButton fill={false}>ログイン</RoundButton>
    </header>
  );
}

type LogoProps = {
  outline?: boolean;
};

function Logo({ outline = true }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full backdrop-blur-sm border
        ${outline ? "border-white/20 bg-white/5" : "border-transparent"}
      `}
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
    </div>
  );
}

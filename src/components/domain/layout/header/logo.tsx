'use client';

import Image from 'next/image';
import { useRouter } from '@/i18n/routing';

export default function Logo() {
  const router = useRouter();

  return (
    <button
      className="flex cursor-pointer items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2 py-1.5 backdrop-blur-sm sm:px-3 sm:py-2"
      onClick={() => {
        router.push('/');
      }}
    >
      <Image
        src="/logo.png"
        alt="ベンキョウ logo"
        width={24}
        height={24}
        className="sm:h-[28px] sm:w-[28px]"
      />
      <h1 className="sm:text-md text-primary pb-[1px] text-sm font-bold drop-shadow-sm">
        <span className="sr-only">ベ</span>
        <span className="opacity-90">ン</span>キョウ
      </h1>
    </button>
  );
}

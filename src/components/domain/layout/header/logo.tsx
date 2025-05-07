'use client';

import Image from 'next/image';
import { useRouter, usePathname } from '@/i18n/routing';
import { rootPaths } from '@/constants';

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();
  const outline = rootPaths.includes(pathname);

  return (
    <button
      className={`flex cursor-pointer items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-sm sm:px-3 sm:py-2 ${outline ? 'border-white/20 bg-white/5' : 'border-transparent'} `}
      onClick={() => {
        router.push('/');
      }}
    >
      <Image
        src="/logo.png"
        alt="ベンキョウ logo"
        width={24}
        height={24}
        className={`sm:h-[28px] sm:w-[28px] ${!outline ? 'brightness-105 contrast-95' : ''}`}
      />
      <h1
        className={`sm:text-md pb-[1px] text-sm font-bold drop-shadow-sm ${
          outline ? 'text-white' : 'text-primary'
        }`}
      >
        <span className="sr-only">ベ</span>
        <span className="opacity-90">ン</span>キョウ
      </h1>
    </button>
  );
}

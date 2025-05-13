'use client';

import Image from 'next/image';
import { useRouter, usePathname } from '@/client/i18n/routing';

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      className="ml-1 flex cursor-pointer items-center gap-1"
      onClick={() => {
        router.push('/');
      }}
    >
      <Image
        src="/logo.png"
        alt="ベンキョウ logo"
        width={22}
        height={22}
        className="sm:h-[25px] sm:w-[25px]"
      />
      <h1
        className={`sm:text-md text-primary pb-[1px] text-sm font-bold drop-shadow-sm ${
          pathname === '/' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="sr-only">ベ</span>
        <span className="opacity-90">ン</span>キョウ
      </h1>
    </button>
  );
}

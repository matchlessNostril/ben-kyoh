'use client';

import { useSidebarStore } from '@/client/stores';
import { useMediaQuery } from '@/client/hooks';

export default function ExpandableArea({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebarStore();
  const { isLaptopOrOver } = useMediaQuery();

  return (
    <div
      className={`fixed w-full transition-all duration-300 ${
        isOpen && isLaptopOrOver ? 'translate-x-[var(--sidebar-width)]' : 'translate-x-0'
      }`}
    >
      {children}
    </div>
  );
}

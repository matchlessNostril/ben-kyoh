'use client';

import { useSidebarStore } from '@/stores';
import { useMediaQuery } from '@/hooks';
import Profile from './profile';
import Menu from './menu';

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { isLaptopOrOver } = useMediaQuery();

  return (
    <>
      {/* overlay */}
      {isOpen && !isLaptopOrOver && (
        <div
          className="fixed inset-0 z-10 bg-black/50 transition-opacity"
          onClick={toggleSidebar}
        />
      )}
      <aside
        className={`border-gray-light2 fixed left-0 z-20 w-[var(--sidebar-width)] border-r bg-white p-2 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${
          isLaptopOrOver
            ? 'top-[var(--header-height)] h-[calc(100vh-var(--header-height))]'
            : 'top-0 h-full'
        } `}
      >
        <Profile />
        <hr className="border-gray-light2 my-2" />
        <Menu />
      </aside>
    </>
  );
}

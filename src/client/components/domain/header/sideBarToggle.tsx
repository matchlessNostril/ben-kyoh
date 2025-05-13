'use client';

import { usePathname } from '@/client/i18n/routing';
import { useSidebarStore } from '@/client/stores';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { rootPaths } from '@/shared/constants';

export default function SideBarToggle() {
  const { toggleSidebar } = useSidebarStore();
  const pathname = usePathname();

  if (rootPaths.includes(pathname)) {
    return null;
  }
  return (
    <button
      onClick={toggleSidebar}
      className="hover:bg-gray-light3 flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-colors"
    >
      <MenuRoundedIcon sx={{ color: 'var(--color-gray-light1)' }} />
    </button>
  );
}

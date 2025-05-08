'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useSidebarStore } from '@/stores';
import { useMediaQuery } from '@/hooks';
import MenuItems, { GroupMenu } from './menuItems';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Menu() {
  const pathname = usePathname();
  const currentMenu = pathname.split('/workspace')[1] || '/';
  const menuItems = MenuItems();

  const currentGroup = Object.values(menuItems).find((item) => {
    if (item.type === 'group') {
      return (item as GroupMenu).children.some((child) => pathname.includes(child.route));
    }
    return false;
  });

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    currentGroup ? { [currentGroup.label]: true } : {},
  );
  const toggleGroup = (groupLabel: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupLabel]: !prev[groupLabel],
    }));
  };

  const { isLaptopOrOver } = useMediaQuery();
  const { closeSidebar } = useSidebarStore();
  const handleLinkClick = () => {
    if (!isLaptopOrOver) {
      closeSidebar();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        {Object.values(menuItems).map((item) => {
          const { type, label, icon, route } = item;
          if (type === 'single') {
            return (
              <Link key={label} href={`/workspace/${route}`} onClick={handleLinkClick}>
                <div
                  className={`flex items-center gap-2 rounded-md p-2 ${
                    currentMenu === route ? 'bg-primary-light3' : 'hover:bg-gray-light3'
                  }`}
                >
                  {renderStyledIcon({
                    icon,
                    color: currentMenu === route ? 'primary-deep1' : 'gray-light1',
                    scale: 0.85,
                  })}
                  <h2 className="text-gray text-[0.8rem] font-medium">{label}</h2>
                </div>
              </Link>
            );
          }

          const isGroupOpen = openGroups[label] ?? false;
          return (
            <div key={label} className="flex flex-col gap-1">
              <button
                className="hover:bg-gray-light3 flex w-full cursor-pointer items-center justify-between rounded-md p-2"
                onClick={() => toggleGroup(label)}
              >
                <div className="flex items-center gap-2">
                  {renderStyledIcon({
                    icon,
                    color:
                      `/${currentMenu.split('/')[1]}` === route ? 'primary-deep1' : 'gray-light1',
                    scale: 0.85,
                  })}
                  <h2 className="text-gray text-[0.8rem] font-medium">{label}</h2>
                </div>
                <div className="text-gray">
                  {isGroupOpen ? (
                    <ExpandLessIcon fontSize="small" className="text-gray-light1 pb-1" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" className="text-gray-light1 pb-1" />
                  )}
                </div>
              </button>

              {isGroupOpen && (
                <div className="ml-4 flex flex-col gap-1 transition-all duration-300">
                  {(item as GroupMenu).children.map((childItem) => {
                    const { label, icon, route } = childItem;
                    return (
                      <Link key={label} href={`/workspace/${route}`} onClick={handleLinkClick}>
                        <div
                          className={`flex items-center gap-2 rounded-md p-1.5 ${
                            currentMenu === route ? 'bg-primary-light3' : 'hover:bg-gray-light3'
                          }`}
                        >
                          {renderStyledIcon({
                            icon,
                            color: currentMenu === route ? 'primary-deep1' : 'gray-light1',
                            scale: 0.75,
                          })}
                          <h3 className="text-gray text-xs">{label}</h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const renderStyledIcon = ({
  icon,
  color,
  scale = 0.85,
}: {
  icon: React.ReactNode;
  color?: string;
  scale?: number;
}) => (
  <div className={`text-${color}`} style={{ transform: `scale(${scale})` }}>
    {icon}
  </div>
);

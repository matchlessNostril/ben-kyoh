'use client';

import { useTranslations } from 'next-intl';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';

export type SingleMenu = {
  type: 'single';
  label: string;
  icon: React.ReactNode;
  route: string;
};
export type GroupMenu = {
  type: 'group';
  label: string;
  icon: React.ReactNode;
  route: string;
  children: SingleMenu[];
};
export type MenuItems = Record<string, SingleMenu | GroupMenu>;

export default function MenuItems() {
  const t = useTranslations('common.components.sidebar.menu');
  return {
    home: {
      type: 'single',
      label: t('home'),
      icon: <HomeRoundedIcon />,
      route: '/',
    },
    search: {
      type: 'single',
      label: t('search'),
      icon: <SearchRoundedIcon />,
      route: '/search',
    },
    voca: {
      type: 'group',
      label: t('voca'),
      icon: <AutoStoriesRoundedIcon />,
      route: '/voca',
      children: [
        {
          type: 'single',
          label: t('search'),
          icon: <SearchRoundedIcon />,
          route: '/voca/search',
        },
        {
          type: 'single',
          label: t('library'),
          icon: <FolderCopyRoundedIcon />,
          route: '/voca/library',
        },
        {
          type: 'single',
          label: t('test'),
          icon: <ChecklistRoundedIcon />,
          route: '/voca/test',
        },
      ],
    },
    grammar: {
      type: 'group',
      label: t('grammar'),
      icon: <AutoStoriesRoundedIcon />,
      route: '/grammar',
      children: [
        {
          type: 'single',
          label: t('search'),
          icon: <SearchRoundedIcon />,
          route: '/grammar/search',
        },
        {
          type: 'single',
          label: t('library'),
          icon: <FolderCopyRoundedIcon />,
          route: '/grammar/library',
        },
        {
          type: 'single',
          label: t('test'),
          icon: <ChecklistRoundedIcon />,
          route: '/grammar/test',
        },
      ],
    },
  };
}

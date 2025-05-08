'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { routing, useRouter, usePathname } from '@/i18n/routing';
import { MenuItem, Menu, IconButton } from '@mui/material';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const menuLabel = {
    ja: {
      label: '日本語',
      fontFamily: 'var(--font-noto-sans-ja)',
    },
    en: {
      label: 'English',
      fontFamily: 'var(--font-noto-sans-en)',
    },
    ko: {
      label: '한국어',
      fontFamily: 'var(--font-noto-sans-ko)',
    },
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        id="language-switcher"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{
          color: 'var(--color-gray-light1)',
          '&:hover': {
            backgroundColor: 'var(--color-gray-light3)',
          },
        }}
      >
        <PublicRoundedIcon sx={{ width: '1.5rem', height: '1.5rem' }} />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {routing.locales.map((loc) => (
          <MenuItem
            key={loc}
            onClick={() => {
              router.replace(pathname, { locale: loc });
              setAnchorEl(null);
            }}
            disabled={loc === locale}
            sx={{
              fontFamily: menuLabel[loc].fontFamily,
              fontSize: '0.75rem',
            }}
          >
            {menuLabel[loc].label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

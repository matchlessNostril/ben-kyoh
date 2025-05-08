import { Suspense } from 'react';
import { Skeleton } from '@mui/material';
import SideBarToggle from './sideBarToggle';
import Logo from './logo';
import LanguageSwitcher from './languageSwitcher';
import AuthButton from './authButton';

export default function Header() {
  return (
    <header className="border-gray-light2 flex h-[var(--header-height)] items-center justify-between border-b px-3">
      <div className="flex items-center gap-1">
        <SideBarToggle />
        <Logo />
      </div>
      <Suspense
        fallback={
          <Skeleton
            animation="wave"
            width={100}
            height={47.5}
            sx={{
              bgcolor: 'var(--color-gray-light1)',
              opacity: 0.15,
              borderRadius: '20px',
            }}
          />
        }
      >
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <AuthButton />
        </div>
      </Suspense>
    </header>
  );
}

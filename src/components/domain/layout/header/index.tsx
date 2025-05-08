import { Suspense } from 'react';
import { Skeleton } from '@mui/material';
import Logo from './logo';
import AuthButton from './authButton';
import LanguageSwitcher from './languageSwitcher';

export default function Header() {
  return (
    <header className="flex h-[3rem] items-center justify-between px-3 py-2 sm:h-[3.5rem] sm:px-5 sm:py-3">
      <Logo />
      <Suspense
        fallback={
          <Skeleton
            animation="wave"
            width={120}
            height={45}
            sx={{
              bgcolor: 'var(--color-primary-deep2)',
              opacity: 0.15,
              borderRadius: '20px',
            }}
          />
        }
      >
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <AuthButton />
        </div>
      </Suspense>
    </header>
  );
}

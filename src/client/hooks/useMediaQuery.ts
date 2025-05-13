import { useMediaQuery as _useMediaQuery } from '@mui/material';

export default function useMediaQuery() {
  const isMobile = _useMediaQuery('(max-width: 640px)');
  const isTabletOrOver = _useMediaQuery('(min-width: 640px)');
  const isLaptopOrOver = _useMediaQuery('(min-width: 1024px)');
  const isDesktopOrOver = _useMediaQuery('(min-width: 1440px)');

  return {
    isMobile,
    isTabletOrOver,
    isLaptopOrOver,
    isDesktopOrOver,
  };
}

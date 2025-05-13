import type { ButtonHTMLAttributes, ReactNode } from 'react';

type RoundButtonProps = {
  fill?: boolean;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function RoundButton({
  children,
  fill = true,
  className = '',
  ...props
}: RoundButtonProps) {
  return (
    <button
      className={`transform cursor-pointer rounded-full border px-4 py-1.5 text-xs font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 active:shadow-inner ${
        fill
          ? 'bg-primary border-primary text-white'
          : 'text-primary-deep1 border-gray-100 bg-white'
      } ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}

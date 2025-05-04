import type { ButtonHTMLAttributes, ReactNode } from "react";

type RoundButtonProps = {
  fill?: boolean;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function RoundButton({
  children,
  fill = true,
  className = "",
  ...props
}: RoundButtonProps) {
  return (
    <button
      className={`
        rounded-full
        px-4 py-1.5
        text-xs font-bold
        shadow-md hover:shadow-lg
        transform hover:-translate-y-0.5
        transition-all duration-200
        border
        cursor-pointer
        active:scale-95 active:shadow-inner
        ${
          fill
            ? "bg-primary text-white border-primary"
            : "bg-white text-primary-deep1 border-gray-100"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

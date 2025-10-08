import type { IconProps } from '@/components/icons';

export const SiteLogo = (props: IconProps) => {
  return (
   <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-64 h-64 text-blue-600"
        {...props}
      >
        {/* Left side of A */}
        <path d="M 80 200 L 128 56" />
        {/* Right side of A */}
        <path d="M 128 56 L 176 200" />
        {/* Crossbar of A */}
        <path d="M 96 152 L 160 152" />
      </svg>
  );
};




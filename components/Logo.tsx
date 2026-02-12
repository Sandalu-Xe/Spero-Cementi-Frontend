
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Precision SVG recreation of the Spero emblem */}
      <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#00A550" />
        <path 
          d="M32 18C22 28 18 45 22 65C26 85 45 92 62 88C78 84 85 68 85 52C85 40 80 25 70 15C60 5 42 5 32 18Z" 
          fill="#00A550" 
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M45 15C32 15 22 24 18 38C14 52 18 68 28 80C38 92 58 95 72 88C86 81 92 65 90 48C88 31 78 18 65 15C58 13 52 14 45 15ZM50 28C58 28 66 32 71 39C76 46 77 56 74 63C71 70 63 74 54 73C45 72 38 65 36 56C34 47 38 37 45 32C47 31 48 30 50 28Z" 
          fill="#9CA3AF" 
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-[-0.05em] text-[#00A550] leading-none">SPERO</span>
            <span className="text-[12px] text-[#00A550] font-bold ml-1 mb-2">®</span>
          </div>
          <span className="text-[9px] md:text-[11px] text-[#9CA3AF] font-bold tracking-[0.25em] uppercase -mt-0.5">SOLUTIONS (PVT) LTD</span>
        </div>
      )}
    </div>
  );
};

export default Logo;

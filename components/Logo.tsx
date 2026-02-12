
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Scalable SVG recreation of the Spero emblem */}
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#00A550" />
        {/* The 'S' wave element */}
        <path 
          d="M35 15C25 25 20 45 25 65C30 85 50 90 65 85C80 80 85 65 85 50C85 40 80 25 70 15C60 5 45 5 35 15Z" 
          fill="#00A550" 
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M48 18C38 18 28 25 24 38C20 51 22 66 32 76C42 86 58 88 71 82C84 76 90 61 88 47C86 33 77 22 65 18C60 16 54 17 48 18ZM50 28C58 28 66 32 71 39C76 46 77 56 74 63C71 70 63 74 54 73C45 72 38 65 36 56C34 47 38 37 45 32C47 31 48 30 50 28Z" 
          fill="#9CA3AF" 
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-start">
            <span className="text-3xl font-black tracking-tighter text-[#00A550] leading-none">SPERO</span>
            <span className="text-[10px] text-[#00A550] font-bold ml-1">®</span>
          </div>
          <span className="text-[8px] md:text-[10px] text-zinc-400 font-bold tracking-[0.15em] uppercase mt-1">Solutions (Pvt) Ltd</span>
        </div>
      )}
    </div>
  );
};

export default Logo;

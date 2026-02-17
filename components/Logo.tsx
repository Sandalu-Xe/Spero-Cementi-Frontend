import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

// Function to get the logo URL from the specified bucket
export const getLogoUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/screen.png";

// Function to get the hero background image URL
export const getHeroBackgroundUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/16299883_254706704968621_1430825952678203593_o-1-1024x683.jpg";

const Logo: React.FC<LogoProps> = ({ className = "h-10 md:h-12" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={getLogoUrl()} 
        alt="Spero Solutions Logo" 
        className="h-full w-auto object-contain transition-opacity duration-300 hover:opacity-80"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
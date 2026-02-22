import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

// Function to get the logo URL from the specified bucket
export const getLogoUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/logo.png";

// Function to get the hero background image URL
export const getHeroBackgroundUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/16299883_254706704968621_1430825952678203593_o-1-1024x683.jpg";

// Function to get the Spero Skim Coat product image URL
export const getSkimCoatUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/3D-SB700.png";

// Function to get the Spero Polymer-Modified Cement product image URL
export const getPolymerCementUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/3D-SF150-PNG.png";

// Function to get the Spero White Tile Premium Adhesive product image URL
export const getTileAdhesiveUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/White-tile-premiurm-adesive-SB-400.png";

// Function to get the Spero Sealer product image URL
export const getFloorSealerUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/SPERo-Sealer-1024x1024.jpg";

// Function to get the Spero Cement Bond product image URL
export const getCementBondUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/SPERo-Cement-Bond-1024x1024.jpg";

// Function to get the Minimalist Villa portfolio image URL
export const getMinimalistVillaUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory6-1-1024x587.jpg";

// Function to get the Loft Studio portfolio image URL
export const getLoftStudioUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/16299883_254706704968621_1430825952678203593_o-1-1024x683.jpg";

// Function to get the Commercial Hall portfolio image URL
export const getCommercialHallUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory1-1024x587.jpg";

// Portfolio Page specific helper functions
export const getPortfolioVillaUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory6-1024x587%20(1).jpg";
export const getPortfolioImg2Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory3-1-1024x587.jpg";
export const getPortfolioImg3Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory2-1024x587.jpg";
export const getPortfolioImg4Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory1-1024x587.jpg";
export const getPortfolioImg5Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory2-1-1024x587%20(1).jpg";

// Founders Image URLs
export const getFounderImageUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactoryIMG_1725.jpg";
export const getCoFounderImageUrl = () => "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"; // Professional executive placeholder

// CTA Background URL
export const getPerspectiveBackgroundUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/FormatFactory2-1-1024x587%20(1).jpg";

// Vision Section Center Image
export const getVisionCenterImageUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/28056086_418432938595996_1057231177758578316_n-768x576.jpg";

// Blog Image URLs
export const getSustainableBlogImageUrl = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/27972321_417634938675796_6527605192364770624_n.png";

// New Content Detail Images for Innovation Section
export const getInnovationImg1Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/28056086_418432938595996_1057231177758578316_n-768x576.jpg";
export const getInnovationImg2Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/28168825_419526858486604_5987704182150092812_n-768x576.jpg";
export const getInnovationImg3Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/28279189_418628328576457_2262342115137255406_n.jpg";
export const getInnovationImg4Url = () => "https://abnmabkruylcdnczktgt.supabase.co/storage/v1/object/public/Spero%20Images/28276357_418432948595995_6509855256019369069_n-768x576.jpg";

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
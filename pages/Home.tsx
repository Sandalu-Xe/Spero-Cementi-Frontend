import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Shield,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getHeroBackgroundUrl, getMinimalistVillaUrl, getLoftStudioUrl, getCommercialHallUrl } from '../components/Logo';

const HERO_SLIDES = [
  {
    image: getHeroBackgroundUrl(),
    topLabel: "AESTHETIC EXCELLENCE",
    title: ["Architectural", "Wall", "Finishes"],
    description: "Transforming surfaces with polymer-based textures that provide both superior protection and modern visual appeal."
  },
  {
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop",
    topLabel: "INDUSTRIAL STRENGTH",
    title: ["Premium", "Floor", "Mastery"],
    description: "Seamless, high-durability flooring solutions designed for modern residential luxury and demanding commercial spaces."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    topLabel: "PRECISION ENGINEERING",
    title: ["Visionary", "Surface", "Innovation"],
    description: "Our research-driven approach creates finishing materials that resist cracking and weathering in the harshest environments."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    topLabel: "ECO-SUSTAINABLE BUILD",
    title: ["Brilliant", "Skim", "Coat"],
    description: "Engineered for an ultra-smooth, flawless finish. Eco-friendly and highly economical for large-scale luxury projects."
  }
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % HERO_SLIDES.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideChange = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 800); 
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div className="bg-white dark:bg-[#000000] selection:bg-brand-primary selection:text-black">
      {/* Immersive Hero Section with Synchronized Content */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-80 dark:opacity-60 scale-105' 
                  : 'opacity-0 scale-100'
              }`}
            >
              <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover animate-slow-pan"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 dark:from-black/70 via-white/20 dark:via-transparent to-white dark:to-black"></div>
        </div>

        {/* Hero Content - Synchronized with currentSlide text */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="overflow-hidden mb-6">
            <p className={`text-[#00A550] text-[10px] md:text-xs font-bold tracking-ultra-wide uppercase drop-shadow-sm transition-all duration-1000 ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {currentSlide.topLabel}
            </p>
          </div>
          
          <h1 className={`text-6xl md:text-9xl font-serif text-black dark:text-white leading-[0.85] tracking-tight mb-8 drop-shadow-md transition-all duration-1000 delay-100 ${isTransitioning ? 'opacity-0 translate-y-8 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
            <span className="block">{currentSlide.title[0]}</span>
            <span className="block">{currentSlide.title[1]}</span>
            <span className="block last:text-[#00A550] last:italic">{currentSlide.title[2]}</span>
          </h1>

          <div className={`flex justify-center py-6 transition-all duration-1000 delay-200 ${isTransitioning ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
            <div className="w-16 h-[2px] bg-[#00A550] rounded-full shadow-[0_0_15px_rgba(0,165,80,0.5)]"></div>
          </div>

          <p className={`text-zinc-800 dark:text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold mb-12 drop-shadow-sm transition-all duration-1000 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {currentSlide.description}
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 transition-all duration-1000 delay-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Link to="/products" className="bg-[#00A550] text-black px-12 py-5 rounded-md font-bold text-[11px] tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-1 uppercase shadow-[0_10px_30px_rgba(0,165,80,0.3)]">
              EXPLORE PRODUCTS
            </Link>
            <Link to="/contact" className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-zinc-300 dark:border-zinc-800 text-black dark:text-white px-12 py-5 rounded-md font-bold text-[11px] tracking-[0.2em] hover:border-black dark:hover:border-white transition-all uppercase">
              TECHNICAL DATA
            </Link>
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-[2px] transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'w-12 bg-[#00A550]' 
                  : 'w-4 bg-zinc-300 dark:bg-zinc-700 hover:bg-[#00A550]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Concrete Mastery Section */}
      <section className="py-40 container mx-auto px-6 lg:px-12 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-xl">
            <p className="text-[#00A550] text-[10px] font-bold tracking-ultra-wide uppercase mb-6">Portfolio Visualization</p>
            <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white">Concrete Mastery</h2>
          </div>
          <Link to="/portfolio" className="text-[#00A550] text-[10px] font-bold tracking-widest uppercase border-b border-[#00A550] pb-2 hover:text-black dark:hover:text-white transition-all">
            VIEW ALL MASTERPIECES
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Main Large Image */}
          <Link to="/portfolio" className="md:col-span-8 relative overflow-hidden group aspect-video md:aspect-auto border border-zinc-100 dark:border-zinc-900 shadow-xl rounded-md">
            <img 
              src={getMinimalistVillaUrl()} 
              className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" 
              alt="Minimalist Villa" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
              <h3 className="text-white text-4xl font-serif transition-transform duration-700 group-hover:-translate-y-1">Minimalist Villa</h3>
              <p className="text-zinc-400 group-hover:text-[#00A550] text-[10px] font-bold uppercase tracking-[0.2em] mt-3 transition-colors duration-1000">
                Wall Finishing / Texture 402
              </p>
            </div>
          </Link>

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {/* Side Image 1 */}
            <Link to="/portfolio" className="relative overflow-hidden group border border-zinc-100 dark:border-zinc-900 shadow-lg rounded-md">
              <img 
                src={getLoftStudioUrl()} 
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                alt="Loft Studio" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-serif transition-transform duration-700 group-hover:-translate-y-1">Loft Studio</h4>
                <p className="text-zinc-400 group-hover:text-[#00A550] text-[9px] uppercase font-bold tracking-[0.2em] mt-2 transition-colors duration-1000">
                  Polished Floor
                </p>
              </div>
            </Link>

            {/* Side Image 2 */}
            <Link to="/portfolio" className="relative overflow-hidden group border border-zinc-100 dark:border-zinc-900 shadow-lg rounded-md">
              <img 
                src={getCommercialHallUrl()} 
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                alt="Commercial Hall" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-serif transition-transform duration-700 group-hover:-translate-y-1">Commercial Hall</h4>
                <p className="text-zinc-400 group-hover:text-[#00A550] text-[9px] uppercase font-bold tracking-[0.2em] mt-2 transition-colors duration-1000">
                  Epoxy System
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="py-40 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-12">
          <p className="text-[#00A550] text-[10px] font-bold tracking-ultra-wide uppercase">Why Professionals Choose Spero</p>
          <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white">Seamless Integration. Unmatched Longevity.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12">
            <StatItem label="Formula Stability" val="25yr" />
            <StatItem label="Eco-Sustainable" val="100%" />
            <StatItem label="Rapid Curing" val="48h" />
            <StatItem label="Gallons Shipped" val="12k+" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 relative overflow-hidden flex items-center justify-center text-center bg-white dark:bg-black">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-40">
          <img src="https://images.unsplash.com/photo-1542332213-31f87348057f" className="w-full h-full object-cover" alt="Perspective" />
        </div>
        <div className="relative z-10 space-y-10 px-6">
          <h2 className="text-6xl md:text-9xl font-serif text-black dark:text-white leading-tight drop-shadow-xl">Elevate Your <br/>Perspective.</h2>
          <Link to="/contact" className="inline-block bg-[#00A550] text-black px-16 py-6 rounded-md font-bold text-xs tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:scale-105 shadow-[0_15px_40px_rgba(0,165,80,0.4)] uppercase">
            REQUEST A SAMPLE KIT
          </Link>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, val }: any) => (
  <div className="space-y-2">
    <span className="block text-4xl font-serif text-[#00A550] drop-shadow-[0_0_10px_rgba(0,165,80,0.3)]">{val}</span>
    <p className="text-zinc-600 dark:text-zinc-400 text-[9px] font-bold uppercase tracking-widest">{label}</p>
  </div>
);

export default Home;
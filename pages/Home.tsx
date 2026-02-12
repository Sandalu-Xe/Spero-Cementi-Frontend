
import React from 'react';
import { 
  ArrowRight,
  Shield,
  Zap,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#000000] selection:bg-brand-primary selection:text-black">
      {/* Static Hero Section (Replaces the Carousel) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-80 dark:opacity-60 scale-100">
          <img 
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop" 
            alt="Architectural texture" 
            className="w-full h-full object-cover animate-slow-pan"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 dark:from-black/70 via-white/20 dark:via-transparent to-white dark:to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="overflow-hidden mb-6">
            <p className="text-[#00A550] text-[10px] md:text-xs font-bold tracking-ultra-wide uppercase drop-shadow-sm">
              AESTHETIC EXCELLENCE
            </p>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif text-black dark:text-white leading-[0.85] tracking-tight mb-8 transition-colors duration-500 drop-shadow-md">
            <span className="block">Architectural</span>
            <span className="block">Wall</span>
            <span className="block last:text-[#00A550] last:italic">Finishes</span>
          </h1>

          <div className="flex justify-center py-6">
            <div className="w-16 h-[2px] bg-[#00A550] rounded-full shadow-[0_0_15px_rgba(0,165,80,0.5)]"></div>
          </div>

          <p className="text-zinc-800 dark:text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold mb-12 drop-shadow-sm">
            Transforming surfaces with polymer-based textures that provide both superior protection and modern visual appeal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link to="/products" className="bg-[#00A550] text-black px-12 py-5 rounded-md font-bold text-[11px] tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-1 uppercase shadow-[0_10px_30px_rgba(0,165,80,0.3)]">
              EXPLORE PRODUCTS
            </Link>
            <Link to="/contact" className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-zinc-300 dark:border-zinc-800 text-black dark:text-white px-12 py-5 rounded-md font-bold text-[11px] tracking-[0.2em] hover:border-black dark:hover:border-white transition-all uppercase">
              TECHNICAL DATA
            </Link>
          </div>
        </div>
      </section>

      {/* Full-Color Grid Portfolio Section */}
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
          <div className="md:col-span-8 relative overflow-hidden group aspect-video md:aspect-auto border border-zinc-100 dark:border-zinc-900 shadow-xl rounded-md">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Villa" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-12 flex flex-col justify-end text-white">
              <h3 className="text-3xl font-serif">Minimalist Villa</h3>
              <p className="text-[#00A550] text-xs font-bold uppercase tracking-widest mt-2">Wall Finishing / Texture 402</p>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden group border border-zinc-100 dark:border-zinc-900 shadow-lg rounded-md">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Loft" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end text-white">
                <h4 className="text-xl font-serif">Loft Studio</h4>
                <p className="text-[#00A550] text-[10px] uppercase font-bold tracking-widest">Polished Floor</p>
              </div>
            </div>
            <div className="relative overflow-hidden group border border-zinc-100 dark:border-zinc-900 shadow-lg rounded-md">
              <img src="https://images.unsplash.com/photo-1581850518616-bcb8186c39ea" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Commercial" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end text-white">
                <h4 className="text-xl font-serif">Commercial Hall</h4>
                <p className="text-[#00A550] text-[10px] uppercase font-bold tracking-widest">Epoxy System</p>
              </div>
            </div>
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

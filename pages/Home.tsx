
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  CheckCircle, 
  FlaskConical, 
  Factory, 
  CheckSquare, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Zap,
  Award,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop",
    title: "Architectural Wall Finishes",
    subtitle: "AESTHETIC EXCELLENCE",
    desc: "Transforming surfaces with polymer-based textures that provide both superior protection and modern visual appeal."
  },
  {
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop",
    title: "Seamless Floor Solutions",
    subtitle: "ENGINEERED DURABILITY",
    desc: "Experience industrial-grade strength meets residential elegance with our advanced self-leveling cement compounds."
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop",
    title: "Modern Polymer Textures",
    subtitle: "INNOVATIVE FORMULAS",
    desc: "Our unique cement blends offer flexible application and unmatched resistance to environmental weathering."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-[#000000] selection:bg-brand-primary selection:text-black">
      {/* Colorful Hero Carousel */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              idx === currentSlide ? 'opacity-80 dark:opacity-60 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img 
              src={slide.image} 
              alt="Architectural texture" 
              className="w-full h-full object-cover animate-slow-pan"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 dark:from-black/70 via-white/20 dark:via-transparent to-white dark:to-black"></div>
          </div>
        ))}

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="overflow-hidden mb-6">
            <p className="text-[#00A550] text-[10px] md:text-xs font-bold tracking-ultra-wide uppercase drop-shadow-sm">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif text-black dark:text-white leading-[0.85] tracking-tight mb-8 transition-colors duration-500 drop-shadow-md">
            {HERO_SLIDES[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className="block last:text-[#00A550] last:italic">{word}</span>
            ))}
          </h1>

          <div className="flex justify-center py-6">
            <div className="w-16 h-[2px] bg-[#00A550] rounded-full shadow-[0_0_15px_rgba(0,165,80,0.5)]"></div>
          </div>

          <p className="text-zinc-800 dark:text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold mb-12 drop-shadow-sm">
            {HERO_SLIDES[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link to="/portfolio" className="bg-[#00A550] text-black px-12 py-5 rounded-md font-bold text-[11px] tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-1 uppercase shadow-[0_10px_30px_rgba(0,165,80,0.3)]">
              EXPLORE PRODUCTS
            </Link>
            <Link to="/services" className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-zinc-300 dark:border-zinc-800 text-black dark:text-white px-12 py-5 rounded-md font-bold text-[11px] tracking-[0.2em] hover:border-black dark:hover:border-white transition-all uppercase">
              TECHNICAL DATA
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-16 flex gap-3 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-[2px] transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-[#00A550]' : 'w-4 bg-zinc-400 dark:bg-zinc-800 hover:bg-zinc-600'}`}
            />
          ))}
        </div>
      </section>

      {/* Colorful Authority Section */}
      <section className="py-40 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-black transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[#00A550] text-[10px] font-bold tracking-ultra-wide uppercase">Material Science</p>
              <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white leading-tight">Beyond Simple <br/>Cement</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-xl">
                We don't just sell products; we engineer molecular solutions. Our polymer-modified formulas react with architectural substrates to create an unbreakable bond.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 hover:border-[#00A550]/50 transition-colors group shadow-md rounded-md">
                <Cpu className="w-8 h-8 text-[#00A550] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-black dark:text-white font-bold mb-2">Smart Bonding</h4>
                <p className="text-zinc-500 text-sm">Molecular cross-linking technology for zero-delamination guarantee.</p>
              </div>
              <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 hover:border-[#00A550]/50 transition-colors group shadow-md rounded-md">
                <Shield className="w-8 h-8 text-[#00A550] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-black dark:text-white font-bold mb-2">Nano-Guard</h4>
                <p className="text-zinc-500 text-sm">Invisible protective barrier against UV and chemical corrosion.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594913785162-e6785b4ad3a2?q=80&w=1976&auto=format&fit=crop" 
                className="w-full h-full object-cover brightness-100 group-hover:scale-105 transition-all duration-1000" 
                alt="Colorful texture detail"
              />
            </div>
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

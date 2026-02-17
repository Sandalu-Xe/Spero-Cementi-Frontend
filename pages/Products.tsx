import React from 'react';
import { Layers, Shield, Leaf, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSkimCoatUrl, getPolymerCementUrl, getTileAdhesiveUrl, getFloorSealerUrl, getCementBondUrl } from '../components/Logo';

export const PRODUCT_DATA = [
  {
    title: "Wall Finishing Systems",
    items: [
      { 
        id: "skim-coat",
        name: "Spero Skim Coat", 
        code: "SP-SK100", 
        desc: "Premium quality brilliant white colour wall putty. Engineered with advanced technology for an ultra-smooth, flawless finish. Eco-friendly and highly economical for large scale luxury projects.", 
        image: getSkimCoatUrl(),
        specs: {
          color: "Brilliant White",
          coverage: "1.2kg / m² per mm thickness",
          packaging: "25kg / 40kg bags",
          potLife: "2-3 Hours"
        }
      },
      { 
        id: "polymer-cement",
        name: "Spero Polymer-Modified Cement", 
        code: "SP-WC102", 
        desc: "Ultra-flexible decorative coating for interior luxury walls. Ideal for high-traffic areas requiring superior adhesion and crack resistance.", 
        image: getPolymerCementUrl(),
        specs: {
          color: "Custom Tints",
          coverage: "0.8kg / m²",
          packaging: "20kg buckets",
          potLife: "4 Hours"
        }
      },
      { 
        id: "premium-adhesive",
        name: "Spero White Tile Premium Adhesive", 
        code: "SP-SB400", 
        desc: "High-performance brilliant white tile adhesive designed for premium tiling projects. Exceptional bonding strength for luxury wall and floor installations.", 
        image: getTileAdhesiveUrl(),
        specs: {
          color: "Brilliant White",
          coverage: "3-5kg / m²",
          packaging: "25kg bags",
          potLife: "2 Hours"
        }
      },
    ]
  },
  {
    title: "Floor Mastery Compounds",
    items: [
      { 
        id: "floor-sealer",
        name: "Spero Protective Floor Sealer", 
        code: "SP-FS500", 
        desc: "Advanced protective coating for various floor surfaces. Provides a durable, chemical-resistant barrier that enhances the natural appearance of the substrate while preventing staining.", 
        image: getFloorSealerUrl(),
        specs: {
          color: "Clear Gloss",
          coverage: "8-12m² / L",
          packaging: "5L / 20L containers",
          potLife: "N/A (Single Pack)"
        }
      },
      { 
        id: "cement-bond",
        name: "Spero Ultra Cement Bond", 
        code: "SP-CB300", 
        desc: "High-strength bonding agent for cementitious repairs and floor leveling. Significantly improves adhesion, water resistance, and tensile strength of mortar and concrete mixes.", 
        image: getCementBondUrl(),
        specs: {
          color: "Milky White (Dries Clear)",
          coverage: "0.2 - 0.4L / m²",
          packaging: "5L / 20L / 200L",
          potLife: "2 Hours (Mixed)"
        }
      },
    ]
  }
];

const Products: React.FC = () => {
  return (
    <div className="relative min-h-screen pb-24 transition-colors duration-500 overflow-hidden bg-white dark:bg-black">
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-32 border-b border-zinc-100 dark:border-zinc-900 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12 text-center md:text-left">
            <p className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4">Architectural Solutions</p>
            <h1 className="text-5xl md:text-8xl font-serif text-black dark:text-white mb-8 leading-[1.1]">The Product <br/><span className="text-[#00A550] italic">Collection</span></h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
              Explore our range of premium finishing materials, from the brilliant white perfection of our Skim Coat to advanced industrial flooring compounds.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 space-y-40">
          {PRODUCT_DATA.map((category, idx) => (
            <div key={idx} className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-6 mb-16">
                <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800"></div>
                <h2 className="text-3xl font-serif text-black dark:text-white whitespace-nowrap flex items-center gap-4">
                  <span className="text-[#00A550] text-sm font-bold font-sans">0{idx + 1}</span>
                  {category.title}
                </h2>
                <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.items.map((product, pIdx) => (
                  <div key={pIdx} className="group flex flex-col relative overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-md hover:border-[#00A550]/50 transition-all duration-500 shadow-xl">
                    {/* Image Container - Clickable Link but no visual "View Details" overlay */}
                    <Link to={`/products/${product.id}`} className="aspect-[4/3] overflow-hidden relative block">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-all duration-1000 bg-zinc-50 dark:bg-zinc-900/50" 
                      />
                    </Link>

                    {/* Content Container */}
                    <div className="p-8 flex-grow flex flex-col space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">{product.code}</span>
                          <Link to={`/products/${product.id}`}>
                            <h3 className="text-2xl font-serif text-black dark:text-white group-hover:text-[#00A550] transition-colors">{product.name}</h3>
                          </Link>
                        </div>
                        <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-md text-[#00A550] shadow-sm">
                          <Layers className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow font-light">
                        {product.desc}
                      </p>

                      <div className="pt-6 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900">
                        <div className="flex gap-4">
                           <span title="Certified Quality"><Shield className="w-4 h-4 text-[#00A550]" /></span>
                           <span title="Eco Friendly"><Leaf className="w-4 h-4 text-[#00A550]" /></span>
                        </div>
                        <Link to={`/products/${product.id}`} className="text-[#00A550] text-[10px] font-black tracking-widest uppercase flex items-center gap-2 hover:translate-x-1 transition-transform">
                          LEARN MORE <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Simplified Feature Highlight */}
        <section className="py-40 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
           <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-center max-w-4xl mx-auto">
                 <div className="space-y-6">
                    <div className="w-16 h-16 bg-[#00A550]/10 rounded-full flex items-center justify-center mx-auto">
                       <Award className="w-8 h-8 text-[#00A550]" />
                    </div>
                    <h3 className="text-xl font-serif text-black dark:text-white">Premium Quality</h3>
                    <p className="text-zinc-500 text-sm font-light">Rigorously tested formulas ensuring long-term structural integrity and aesthetic perfection for high-end builds.</p>
                 </div>
                 <div className="space-y-6">
                    <div className="w-16 h-16 bg-[#00A550]/10 rounded-full flex items-center justify-center mx-auto">
                       <Leaf className="w-8 h-8 text-[#00A550]" />
                    </div>
                    <h3 className="text-xl font-serif text-black dark:text-white">Eco-Sustainable</h3>
                    <p className="text-zinc-500 text-sm font-light">Formulated with environmental consciousness, reducing the carbon footprint of your construction projects.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-[#00A550] text-black">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-4">Ready to specify Spero for your next project?</h2>
              <p className="text-black/70 font-medium">Download our comprehensive technical brochures and application guides.</p>
            </div>
            <Link to="/contact" className="bg-black text-[#00A550] px-12 py-6 rounded-md font-black text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap shadow-2xl">
              REQUEST TECHNICAL KIT
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Products;
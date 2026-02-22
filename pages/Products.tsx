import React from 'react';
import { Shield, Leaf, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSkimCoatUrl, getPolymerCementUrl, getTileAdhesiveUrl, getFloorSealerUrl, getCementBondUrl } from '../components/Logo';

export const PRODUCT_DATA = [
  {
    title: "Wall Finishing Systems",
    items: [
      { 
        id: "skim-coat",
        name: "Spero Skim Coat", 
        code: "S P - S K 1 0 0", 
        desc: "Premium quality brilliant white colour wall putty. Engineered with advanced technology for an ultra-smooth, flawless finish. Eco-friendly and highly economical for large scale luxury projects.", 
        image: getSkimCoatUrl(),
        isFeatured: true,
        specs: { color: "Brilliant White", packaging: "20kg Bag", coverage: "1.2 - 1.5 kg/m²", potLife: "3 Hours" }
      },
      { 
        id: "polymer-cement",
        name: "Spero Polymer-Modified Cement", 
        code: "S P - W C 1 0 2", 
        desc: "Ultra-flexible decorative coating for interior luxury walls. Ideal for high-traffic areas requiring superior adhesion and crack resistance.", 
        image: getPolymerCementUrl(),
        isFeatured: true, 
        specs: { color: "Customizable", packaging: "25kg Bag", coverage: "2.0 - 2.5 kg/m²", potLife: "4 Hours" }
      },
      { 
        id: "premium-adhesive",
        name: "Spero White Tile Premium Adhesive", 
        code: "S P - S B 4 0 0", 
        desc: "High-performance brilliant white tile adhesive designed for premium tiling projects. Exceptional bonding strength for luxury wall and floor installations.", 
        image: getTileAdhesiveUrl(),
        isFeatured: false,
        specs: { color: "White", packaging: "25kg Bag", coverage: "3.5 - 4.5 kg/m²", potLife: "3 Hours" }
      },
    ]
  },
  {
    title: "Floor Mastery Compounds",
    items: [
      { 
        id: "floor-sealer",
        name: "Spero Protective Floor Sealer", 
        code: "S P - F S 5 0 0", 
        desc: "Advanced protective coating for various floor surfaces. Provides a durable, chemical-resistant barrier that enhances the natural appearance of the substrate while preventing staining.", 
        image: getFloorSealerUrl(),
        isFeatured: false,
        specs: { color: "Clear", packaging: "5L / 20L", coverage: "8 - 10 m²/L", potLife: "N/A" }
      },
      { 
        id: "cement-bond",
        name: "Spero Ultra Cement Bond", 
        code: "S P - C B 3 0 0", 
        desc: "High-strength bonding agent for cementitious repairs and floor leveling. Significantly improves adhesion, water resistance, and tensile strength of mortar and concrete mixes.", 
        image: getCementBondUrl(),
        isFeatured: true,
        specs: { color: "Milky White", packaging: "1L / 5L / 20L", coverage: "Varies by application", potLife: "N/A" }
      },
    ]
  }
];

const Products: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#020202] min-h-screen transition-colors duration-500 selection:bg-[#00A550] selection:text-black">
      {/* Background Subtle Grain Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      </div>

      <div className="relative z-10 pt-16">
        {/* Hero Section with Deliberately Smaller Font for Elegance */}
        <section className="py-24 md:py-32 flex flex-col items-center">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            {/* Top Label: Tiny, Wide Tracking */}
            <p className="text-[#00A550] text-[8px] font-bold tracking-[1em] uppercase mb-10 opacity-80">
              ARCHITECTURAL SOLUTIONS
            </p>
            
            {/* Main Title: Small Scale Serif */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-tight tracking-tighter mb-12">
              The <span className="text-[#00A550] italic font-normal">Collection</span>
            </h1>
            
            {/* Minimalist Divider */}
            <div className="h-[1px] w-12 bg-zinc-800 mx-auto opacity-20"></div>
          </div>
        </section>

        {/* Product Listing */}
        <div className="pb-48">
          {PRODUCT_DATA.map((category, catIdx) => (
            <div key={catIdx} className="mb-32 last:mb-0">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
                  {category.items.map((product) => (
                    <div 
                      key={product.id} 
                      className="group flex flex-col bg-transparent transition-all duration-700"
                    >
                      {/* Product Presentation Stage */}
                      <Link 
                        to={`/products/${product.id}`} 
                        className="aspect-[1/1.15] bg-zinc-50 dark:bg-zinc-900/30 flex items-center justify-center relative overflow-hidden p-12 rounded-sm mb-10 border border-zinc-100 dark:border-zinc-800 shadow-xl transition-all duration-500 hover:border-[#00A550]/20"
                      >
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-zinc-500/5 pointer-events-none"></div>
                        
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]" 
                        />
                      </Link>

                      {/* Info Block with Refined Small Typography */}
                      <div className="flex-grow flex flex-col px-1">
                        <div className="flex justify-between items-start mb-5">
                          <div className="space-y-3 max-w-[85%]">
                            {/* Product Code: Ultra Micro */}
                            <span className="text-[7px] font-black tracking-[0.6em] text-zinc-600 uppercase block">
                              {product.code}
                            </span>
                            <Link to={`/products/${product.id}`}>
                              {/* Title: Small but sophisticated serif (text-xl/2xl) */}
                              <h3 className={`text-xl md:text-2xl font-serif leading-tight transition-all duration-500 ${product.isFeatured ? 'text-[#00A550]' : 'text-black dark:text-white group-hover:text-[#00A550]'}`}>
                                {product.name}
                              </h3>
                            </Link>
                          </div>
                          
                          {/* SQUARE ICON BOX: Minimal footprint */}
                          <div className="bg-[#0f0f0f] p-4 rounded-sm border border-zinc-800 text-[#00A550] shadow-xl transition-all duration-500 group-hover:border-[#00A550]/30">
                            <Layers className="w-5 h-5" />
                          </div>
                        </div>
                        
                        {/* Description: Micro-text scale for density and luxury feel */}
                        <p className="text-zinc-600 dark:text-zinc-500 text-[13px] md:text-[14px] leading-relaxed font-light mb-10 line-clamp-3 max-w-[90%]">
                          {product.desc}
                        </p>

                        {/* Minimalist Card Footer */}
                        <div className="pt-6 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900/40">
                          <div className="flex gap-5 opacity-30 group-hover:opacity-100 transition-opacity">
                             <Shield className="w-4 h-4 text-zinc-400 hover:text-[#00A550] transition-colors" />
                             <Leaf className="w-4 h-4 text-zinc-400 hover:text-[#00A550] transition-colors" />
                          </div>
                          <Link 
                            to={`/products/${product.id}`} 
                            className="text-[#00A550] text-[8px] font-black tracking-[0.3em] uppercase flex items-center gap-2 group/link hover:text-black dark:hover:text-white transition-all"
                          >
                            DETAILS <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REFINED BOTTOM CTA: Matching the smaller font aesthetic */}
        <section className="py-40 bg-[#010101] border-t border-zinc-900">
          <div className="container mx-auto px-6 text-center max-w-2xl">
             <p className="text-[#00A550] text-[8px] font-bold tracking-[1em] uppercase mb-8 opacity-70">EXCELLENCE DEFINED</p>
             <h2 className="text-2xl md:text-4xl font-serif text-white mb-8 tracking-tight">Technical Mastery.</h2>
             <p className="text-zinc-600 text-[13px] md:text-[15px] font-light leading-relaxed mb-12 max-w-lg mx-auto">
               Engineered to meet the rigorous demands of modern luxury architecture, ensuring every surface reflects your vision with precision.
             </p>
             <Link to="/contact" className="inline-block bg-[#00A550] text-black px-10 py-5 rounded-sm font-black text-[9px] tracking-[0.4em] hover:bg-white transition-all transform hover:-translate-y-0.5 uppercase shadow-xl">
                DOWNLOAD CATALOG
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
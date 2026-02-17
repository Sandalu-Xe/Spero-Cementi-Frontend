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
    <div className="bg-white dark:bg-[#050505] min-h-screen transition-colors duration-500 selection:bg-[#00A550] selection:text-black">
      {/* Background Subtle Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-[#00A550] text-[10px] font-black tracking-[0.8em] uppercase mb-6">ARCHITECTURAL SOLUTIONS</p>
            <h1 className="text-5xl md:text-8xl font-serif text-black dark:text-white leading-none mb-10 tracking-tighter">
              The <span className="text-[#00A550] italic font-normal">Collection</span>
            </h1>
            <div className="h-[1px] w-24 bg-zinc-800 mx-auto opacity-50 mb-10"></div>
          </div>
        </section>

        {/* Categories Section */}
        <div className="pb-40">
          {PRODUCT_DATA.map((category, idx) => (
            <div key={idx} className="mb-40 last:mb-0">
              
              {/* Grid Layout - 3 Columns on Desktop */}
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((product) => (
                    <div 
                      key={product.id} 
                      className="group flex flex-col bg-transparent transition-all duration-700"
                    >
                      {/* IMAGE STAGE - High Contrast with Radial Shadow */}
                      <Link to={`/products/${product.id}`} className="aspect-[1/1.2] bg-[#0c0c0c] dark:bg-[#070707] flex items-center justify-center relative overflow-hidden p-16 rounded-sm mb-12 border border-zinc-900 shadow-inner">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white/5 pointer-events-none"></div>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" 
                        />
                      </Link>

                      {/* CONTENT BLOCK - Precise Style from Screenshot */}
                      <div className="flex-grow flex flex-col px-2">
                        <div className="flex justify-between items-start mb-6">
                          <div className="space-y-4 max-w-[80%]">
                            {/* Product Code: Small, wide-spaced, uppercase */}
                            <span className="text-[9px] font-black tracking-[0.5em] text-zinc-500 uppercase block">
                              {product.code}
                            </span>
                            <Link to={`/products/${product.id}`}>
                              {/* Title: Playfair Serif, featured green or white */}
                              <h3 className={`text-4xl md:text-5xl font-serif leading-[1.1] transition-all duration-500 ${product.isFeatured ? 'text-[#00A550]' : 'text-black dark:text-white group-hover:text-[#00A550]'}`}>
                                {product.name}
                              </h3>
                            </Link>
                          </div>
                          
                          {/* SQUARE ICON BOX - As seen in screenshot */}
                          <div className="bg-[#111111] p-4 rounded-sm border border-zinc-800 text-[#00A550] shadow-xl transition-all duration-500 group-hover:border-[#00A550]/40">
                            <Layers className="w-6 h-6" />
                          </div>
                        </div>
                        
                        {/* Description: Elegant small-ish font */}
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light mb-12 max-w-[95%]">
                          {product.desc}
                        </p>

                        {/* Visual Footer */}
                        <div className="pt-8 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900">
                          <div className="flex gap-6">
                             <Shield className="w-5 h-5 text-zinc-700 dark:text-zinc-400 hover:text-[#00A550] transition-colors" />
                             <Leaf className="w-5 h-5 text-zinc-700 dark:text-zinc-400 hover:text-[#00A550] transition-colors" />
                          </div>
                          <Link 
                            to={`/products/${product.id}`} 
                            className="text-[#00A550] text-[10px] font-black tracking-[0.2em] uppercase flex items-center gap-3 group/link hover:text-black dark:hover:text-white transition-all"
                          >
                            DETAILS <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
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

        {/* Technical Mastery CTA */}
        <section className="py-32 bg-[#020202] border-t border-zinc-900">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
             <div className="inline-block p-6 bg-[#00A550]/5 rounded-full mb-10">
                <Shield className="w-10 h-10 text-[#00A550]" />
             </div>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight">Technical Excellence.</h2>
             <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed mb-12">
               Our formulas are precision-engineered to meet the rigorous demands of modern luxury architecture, ensuring every surface reflects your vision with uncompromising longevity.
             </p>
             <Link to="/contact" className="inline-block bg-[#00A550] text-black px-12 py-6 rounded-sm font-black text-[11px] tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 uppercase shadow-2xl">
                DOWNLOAD FULL TECHNICAL CATALOG
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
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
        code: "SP-SK100", 
        desc: "Premium quality brilliant white colour wall putty. Engineered with advanced technology for an ultra-smooth, flawless finish. Eco-friendly and highly economical for large scale luxury projects.", 
        image: getSkimCoatUrl(),
        isFeatured: false,
        specs: { color: "Brilliant White", packaging: "20kg Bag", coverage: "1.2 - 1.5 kg/m²", potLife: "3 Hours" }
      },
      { 
        id: "polymer-cement",
        name: "Spero Polymer-Modified Cement", 
        code: "SP-WC102", 
        desc: "Ultra-flexible decorative coating for interior luxury walls. Ideal for high-traffic areas requiring superior adhesion and crack resistance.", 
        image: getPolymerCementUrl(),
        isFeatured: true, // This enables the signature green title from the screenshot
        specs: { color: "Customizable", packaging: "25kg Bag", coverage: "2.0 - 2.5 kg/m²", potLife: "4 Hours" }
      },
      { 
        id: "premium-adhesive",
        name: "Spero White Tile Premium Adhesive", 
        code: "SP-SB400", 
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
        code: "SP-FS500", 
        desc: "Advanced protective coating for various floor surfaces. Provides a durable, chemical-resistant barrier that enhances the natural appearance of the substrate while preventing staining.", 
        image: getFloorSealerUrl(),
        isFeatured: false,
        specs: { color: "Clear", packaging: "5L / 20L", coverage: "8 - 10 m²/L", potLife: "N/A" }
      },
      { 
        id: "cement-bond",
        name: "Spero Ultra Cement Bond", 
        code: "SP-CB300", 
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
      {/* Background Cement Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Collection Hero */}
        <section className="py-24 md:py-40">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-[#00A550] text-[11px] font-black tracking-[0.6em] uppercase mb-8">ARCHITECTURAL COLLECTION</p>
            <h1 className="text-6xl md:text-[10rem] font-serif text-black dark:text-white leading-none mb-12 tracking-tighter">
              The <span className="text-[#00A550] italic font-normal">Catalog</span>
            </h1>
            <div className="h-[1px] w-32 bg-[#00A550] mx-auto opacity-30 mb-12"></div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
              Precision-engineered systems designed to meet the highest aesthetic and structural demands of modern luxury architecture.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <div className="pb-60">
          {PRODUCT_DATA.map((category, idx) => (
            <div key={idx} className="mb-48 last:mb-0">
              {/* Category Header with lines - Screenshot Style */}
              <div className="w-full px-6 lg:px-12 mb-24 overflow-hidden">
                <div className="flex items-center gap-10 max-w-[2200px] mx-auto">
                  <div className="h-[1px] flex-grow bg-zinc-100 dark:bg-zinc-900"></div>
                  <div className="flex items-center gap-6">
                    <span className="text-[#00A550] font-black font-sans text-3xl">0{idx + 1}</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white whitespace-nowrap tracking-tight">
                      {category.title}
                    </h2>
                  </div>
                  <div className="h-[1px] flex-grow bg-zinc-100 dark:bg-zinc-900"></div>
                </div>
              </div>
              
              {/* Massive Impact Product Grid */}
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                  {category.items.map((product) => (
                    <div 
                      key={product.id} 
                      className="group flex flex-col bg-white dark:bg-[#080808] border border-zinc-100 dark:border-zinc-900 rounded-sm overflow-hidden hover:border-[#00A550]/40 transition-all duration-700 shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
                    >
                      {/* HERO IMAGE STAGE - Screenshot Style (Dark Box) */}
                      <Link to={`/products/${product.id}`} className="aspect-square bg-zinc-50 dark:bg-[#0c0c0c] flex items-center justify-center relative overflow-hidden p-16">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-110 drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 dark:from-black/20 to-transparent"></div>
                      </Link>

                      {/* CONTENT BLOCK - Screenshot Style */}
                      <div className="p-12 md:p-16 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-10">
                          <div className="space-y-4">
                            <span className="text-[11px] font-black tracking-[0.5em] text-zinc-400 dark:text-zinc-600 uppercase">
                              {product.code}
                            </span>
                            <Link to={`/products/${product.id}`}>
                              <h3 className={`text-4xl md:text-5xl font-serif leading-[1.1] transition-all duration-500 ${product.isFeatured ? 'text-[#00A550]' : 'text-black dark:text-white group-hover:text-[#00A550]'}`}>
                                {product.name}
                              </h3>
                            </Link>
                          </div>
                          {/* ICON BOX - Screenshot Style */}
                          <div className="bg-zinc-50 dark:bg-[#121212] p-6 rounded-md border border-zinc-200 dark:border-zinc-800 text-[#00A550] group-hover:bg-[#00A550] group-hover:text-black transition-all duration-500 shadow-inner">
                            <Layers className="w-8 h-8" />
                          </div>
                        </div>
                        
                        <p className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl leading-relaxed flex-grow font-light mb-16">
                          {product.desc}
                        </p>

                        {/* CARD FOOTER - Screenshot Style */}
                        <div className="pt-12 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900">
                          <div className="flex gap-8">
                             <Shield className="w-7 h-7 text-[#00A550]/60 hover:text-[#00A550] transition-colors stroke-[1.5]" />
                             <Leaf className="w-7 h-7 text-[#00A550]/60 hover:text-[#00A550] transition-colors stroke-[1.5]" />
                          </div>
                          <Link 
                            to={`/products/${product.id}`} 
                            className="text-[#00A550] text-[12px] font-black tracking-[0.3em] uppercase flex items-center gap-3 group/link hover:text-black dark:hover:text-white transition-all"
                          >
                            LEARN MORE <ArrowRight className="w-6 h-6 transition-transform group-hover/link:translate-x-3" />
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
        <section className="py-48 bg-zinc-50 dark:bg-[#030303] border-t border-zinc-100 dark:border-zinc-900">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-6xl">
             <div className="inline-block p-8 bg-[#00A550]/10 rounded-full mb-14">
                <Shield className="w-16 h-16 text-[#00A550]" />
             </div>
             <h2 className="text-6xl md:text-8xl font-serif text-black dark:text-white mb-12 tracking-tight">Uncompromising <span className="text-[#00A550] italic">Quality</span>.</h2>
             <p className="text-zinc-500 text-2xl md:text-3xl font-light leading-relaxed mb-20 max-w-4xl mx-auto">
               Our materials undergo rigorous climate-simulation testing to ensure they exceed the requirements of tropical architectural masterpieces.
             </p>
             <Link to="/contact" className="inline-block bg-[#00A550] text-black px-20 py-8 rounded-md font-black text-[13px] tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-2 uppercase shadow-2xl">
                DOWNLOAD TECHNICAL CATALOG (PDF)
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
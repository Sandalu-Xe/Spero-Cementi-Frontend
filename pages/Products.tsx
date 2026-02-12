
import React from 'react';
import { Box, Layers, Shield, Droplets, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCT_CATEGORIES = [
  {
    title: "Wall Finishing Systems",
    items: [
      { name: "Spero Polymer-Modified Cement", code: "SP-WC102", desc: "Ultra-flexible decorative coating for interior luxury walls.", image: "https://images.unsplash.com/photo-1594913785162-e6785b4ad3a2?q=80&w=800" },
      { name: "Spero Venetian Mineral", code: "SP-VM205", desc: "Traditional smooth mineral texture with modern longevity.", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800" },
    ]
  },
  {
    title: "Floor Mastery Compounds",
    items: [
      { name: "Spero Self-Leveling Industrial", code: "SP-FL400", desc: "Rapid-curing heavy duty floor compound for large-scale projects.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
      { name: "Spero Polished Concrete Gloss", code: "SP-PG601", desc: "Mirror-finish gloss enhancement for refined commercial spaces.", image: "https://images.unsplash.com/photo-1581850518616-bcb8186c39ea?q=80&w=800" },
    ]
  }
];

const Products: React.FC = () => {
  return (
    <div className="relative min-h-screen pb-24 transition-colors duration-500 overflow-hidden">
      {/* Immersive Cement Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1517260911058-0fcfd733702f?q=80&w=2000&auto=format&fit=crop" 
          alt="Cement texture background" 
          className="w-full h-full object-cover fixed"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="py-24 border-b border-zinc-100 dark:border-zinc-900 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4">Architectural Solutions</p>
            <h1 className="text-5xl md:text-7xl font-serif text-black dark:text-white mb-6">Product Catalog</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
              Engineered for high-end architecture, our cement-based products combine structural integrity with visual perfection.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 space-y-32">
          {PRODUCT_CATEGORIES.map((category, idx) => (
            <div key={idx} className="container mx-auto px-6 lg:px-12">
              <h2 className="text-3xl font-serif text-black dark:text-white mb-12 flex items-center gap-4">
                <span className="text-[#00A550] text-sm font-bold font-sans">0{idx + 1}</span>
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {category.items.map((product, pIdx) => (
                  <div key={pIdx} className="group relative overflow-hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-[#00A550]/50 transition-all duration-500 shadow-xl">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="p-10 space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">{product.code}</span>
                          <h3 className="text-2xl font-serif text-black dark:text-white mt-2">{product.name}</h3>
                        </div>
                        <div className="bg-[#00A550] p-2 rounded-md text-black shadow-lg">
                          <Box className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        {product.desc}
                      </p>
                      <div className="pt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                        <div className="flex gap-4">
                           <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">
                              <Shield className="w-3 h-3 text-[#00A550]" /> ISO Cert
                           </div>
                           <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">
                              <Droplets className="w-3 h-3 text-[#00A550]" /> Waterproof
                           </div>
                        </div>
                        <Link to="/contact" className="text-black dark:text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:text-[#00A550] transition-colors group/link">
                          Inquire <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Tech Spec Callout */}
        <section className="py-24 bg-[#00A550] text-black shadow-[0_-20px_50px_rgba(0,165,80,0.2)]">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl font-serif leading-tight">Need specific technical data sheets for your project?</h2>
            </div>
            <Link to="/contact" className="bg-black text-[#00A550] px-12 py-5 rounded-md font-black text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap shadow-2xl">
              Download Spec Library
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;


import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// Fix: Added missing 'Layers' import from lucide-react to resolve the 'Cannot find name Layers' error
import { ChevronLeft, Shield, Leaf, Zap, ArrowRight, Download, Package, Droplets, Info, Layers } from 'lucide-react';
import { PRODUCT_DATA } from './Products';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Find the product in the data structure
  const product = PRODUCT_DATA.flatMap(cat => cat.items).find(item => item.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-serif mb-6">Product not found</h2>
        <Link to="/products" className="text-[#00A550] font-black tracking-widest uppercase border-b border-[#00A550] pb-1">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/padded-cells.png')]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation / Header */}
        <section className="pt-32 pb-12 border-b border-zinc-100 dark:border-zinc-900">
          <div className="container mx-auto px-6 lg:px-12">
            <button 
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-zinc-400 hover:text-[#00A550] transition-colors mb-12 text-[10px] font-black tracking-widest uppercase"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Products
            </button>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-3xl">
                <span className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">{product.code}</span>
                <h1 className="text-6xl md:text-8xl font-serif text-black dark:text-white leading-[0.95] mb-2">{product.name}</h1>
              </div>
              <div className="flex gap-4">
                <span title="Certified Quality" className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-full text-[#00A550] border border-zinc-100 dark:border-zinc-800"><Shield className="w-6 h-6" /></span>
                <span title="Eco Friendly" className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-full text-[#00A550] border border-zinc-100 dark:border-zinc-800"><Leaf className="w-6 h-6" /></span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Visual Column */}
            <div className="lg:col-span-7">
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[600px] object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <p className="text-sm font-light leading-relaxed max-w-md">Actual application result of {product.name} in a premium architectural project.</p>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-[#00A550]">Product Overview</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-100 dark:border-zinc-900">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <Droplets className="w-3 h-3 text-[#00A550]" /> Color
                  </span>
                  <p className="font-serif text-xl">{product.specs.color}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <Package className="w-3 h-3 text-[#00A550]" /> Packaging
                  </span>
                  <p className="font-serif text-xl">{product.specs.packaging}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <Layers className="w-3 h-3 text-[#00A550]" /> Coverage
                  </span>
                  <p className="font-serif text-xl">{product.specs.coverage}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <Zap className="w-3 h-3 text-[#00A550]" /> Pot Life
                  </span>
                  <p className="font-serif text-xl">{product.specs.potLife}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-[#00A550]/10 flex items-center justify-center rounded-full text-[#00A550]">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black dark:text-white font-bold text-xs tracking-widest uppercase">Technical Data Sheet</span>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">PDF (2.4 MB)</span>
                  </div>
                </div>

                <div className="pt-10 flex flex-col gap-4">
                  <Link to="/contact" className="w-full bg-[#00A550] text-black py-6 rounded-md font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-xl">
                    ENQUIRE ABOUT THIS PRODUCT <ArrowRight className="w-5 h-5" />
                  </Link>
                  <p className="text-center text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center justify-center gap-2">
                    <Info className="w-3 h-3" /> Samples available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products Placeholder */}
        <section className="py-32 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
           <div className="container mx-auto px-6 lg:px-12">
              <h2 className="text-3xl font-serif mb-12">You might also <span className="text-[#00A550] italic">need</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Just show a few other products from the same category or overall */}
                {PRODUCT_DATA[0].items.filter(i => i.id !== productId).slice(0, 3).map((item, idx) => (
                   <Link key={idx} to={`/products/${item.id}`} className="group space-y-6">
                      <div className="aspect-square overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.name} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[#00A550] text-[10px] font-black uppercase tracking-widest">{item.code}</span>
                        <h4 className="text-xl font-serif text-black dark:text-white group-hover:text-[#00A550] transition-colors">{item.name}</h4>
                      </div>
                   </Link>
                ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;

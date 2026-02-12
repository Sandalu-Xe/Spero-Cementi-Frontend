
import React from 'react';
import { ArrowRight, Layers, Zap, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] pb-24 transition-colors duration-500">
       <section className="py-24 container mx-auto px-6 lg:px-12 text-center">
        <p className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4">What We Offer</p>
        <h1 className="text-5xl md:text-7xl font-serif text-black dark:text-white">Finishing Services</h1>
      </section>

      <section className="container mx-auto px-6 lg:px-12 space-y-32">
        {/* Wall Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative h-[600px] rounded-sm overflow-hidden group border border-[#00A550]/5">
            <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.8] dark:brightness-[0.6]" alt="Wall finishing" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="w-16 h-16 bg-[#00A550]/10 flex items-center justify-center rounded-sm text-[#00A550] border border-[#00A550]/20">
              <Layers className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif text-black dark:text-white leading-tight">Premium Wall <br/><span className="text-[#00A550]">Solutions</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              Our wall finishing systems are engineered for both interior and exterior applications. From textured cementitious coatings to smooth Venetian-style finishes.
            </p>
            <ul className="space-y-4">
              {['Decorative Texture Coatings', 'High-Performance Crack Filler', 'External Weather Shield Systems', 'Anti-Fungal Protective Layers'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-[#00A550]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-3 text-black dark:text-white font-bold tracking-widest text-xs border-b border-[#00A550] pb-2 hover:text-[#00A550] transition-colors">
              VIEW TECHNICAL SPECS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Floor Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-[#00A550]/10 flex items-center justify-center rounded-sm text-[#00A550] border border-[#00A550]/20">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif text-black dark:text-white leading-tight">High-Durability <br/><span className="text-[#00A550]">Flooring</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              Industrial strength meets residential elegance. We provide seamless flooring solutions that are easy to maintain and incredibly durable.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-sm border border-zinc-100 dark:border-white/5 group hover:border-[#00A550]/30 transition-all">
                <h4 className="text-[#00A550] font-bold mb-2 uppercase text-xs tracking-widest">Industrial</h4>
                <p className="text-xs text-zinc-400">Warehouse and manufacturing grade strength.</p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-sm border border-zinc-100 dark:border-white/5 group hover:border-[#00A550]/30 transition-all">
                <h4 className="text-[#00A550] font-bold mb-2 uppercase text-xs tracking-widest">Residential</h4>
                <p className="text-xs text-zinc-400">Smooth, warm, and elegant aesthetics.</p>
              </div>
            </div>
            <ul className="space-y-4">
               {['Polished Cement Systems', 'Epoxy Resin Coating', 'Heavy Duty Tile Adhesives', 'Self-Leveling Compounds'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-[#00A550]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-sm overflow-hidden group border border-[#00A550]/5">
            <img src="https://images.unsplash.com/photo-1581850518616-bcb8186c39ea" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.8] dark:brightness-[0.6]" alt="Floor finishing" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

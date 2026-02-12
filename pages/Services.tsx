
import React from 'react';
import { ArrowRight, Layers, Zap, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] pb-24">
       <section className="py-24 container mx-auto px-6 lg:px-12 text-center">
        <p className="text-[#19e680] text-xs font-bold tracking-[0.4em] uppercase mb-4">What We Offer</p>
        <h1 className="text-5xl md:text-7xl font-serif text-white">Finishing Services</h1>
      </section>

      <section className="container mx-auto px-6 lg:px-12 space-y-32">
        {/* Wall Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden group border border-[#19e680]/5">
            <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.6]" alt="Wall finishing" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="w-16 h-16 bg-[#19e680]/10 flex items-center justify-center rounded-2xl text-[#19e680] border border-[#19e680]/20">
              <Layers className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif text-white leading-tight">Premium Wall <br/><span className="text-[#19e680]">Solutions</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our wall finishing systems are engineered for both interior and exterior applications. From textured cementitious coatings to smooth Venetian-style finishes.
            </p>
            <ul className="space-y-4">
              {['Decorative Texture Coatings', 'High-Performance Crack Filler', 'External Weather Shield Systems', 'Anti-Fungal Protective Layers'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-[#19e680]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-3 text-white font-bold tracking-widest text-xs border-b border-[#19e680] pb-2 hover:text-[#19e680] transition-colors">
              VIEW TECHNICAL SPECS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Floor Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-[#19e680]/10 flex items-center justify-center rounded-2xl text-[#19e680] border border-[#19e680]/20">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif text-white leading-tight">High-Durability <br/><span className="text-[#19e680]">Flooring</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Industrial strength meets residential elegance. We provide seamless flooring solutions that are easy to maintain and incredibly durable.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 group hover:border-[#19e680]/30 transition-all">
                <h4 className="text-[#19e680] font-bold mb-2 uppercase text-xs tracking-widest">Industrial</h4>
                <p className="text-xs text-zinc-500">Warehouse and manufacturing grade strength.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-xl border border-white/5 group hover:border-[#19e680]/30 transition-all">
                <h4 className="text-[#19e680] font-bold mb-2 uppercase text-xs tracking-widest">Residential</h4>
                <p className="text-xs text-zinc-500">Smooth, warm, and elegant aesthetics.</p>
              </div>
            </div>
            <ul className="space-y-4">
               {['Polished Cement Systems', 'Epoxy Resin Coating', 'Heavy Duty Tile Adhesives', 'Self-Leveling Compounds'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-[#19e680]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden group border border-[#19e680]/5">
            <img src="https://images.unsplash.com/photo-1581850518616-bcb8186c39ea" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.6]" alt="Floor finishing" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
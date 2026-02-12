
import React from 'react';
import { ArrowRight, Layers, Zap, CheckCircle, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-[#050706] pb-32">
       <section className="py-32 container mx-auto px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] -z-10"></div>
        <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase mb-6">What We Offer</p>
        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight">Finishing Services</h1>
      </section>

      <section className="container mx-auto px-6 lg:px-12 space-y-48">
        {/* Wall Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative h-[650px] rounded-[50px] overflow-hidden group border border-brand-primary/20 p-2">
            <div className="w-full h-full overflow-hidden rounded-[40px]">
              <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Wall finishing" />
            </div>
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center rounded-3xl text-brand-primary border border-brand-primary/20 shadow-[0_0_30px_rgba(0,209,139,0.1)]">
              <Layers className="w-9 h-9" />
            </div>
            <h2 className="text-5xl font-serif text-white leading-tight">Premium Wall <br /><span className="text-brand-primary italic">Solutions</span></h2>
            <p className="text-zinc-500 text-xl leading-relaxed font-light">
              Our wall finishing systems are engineered for both interior and exterior applications. From textured cementitious coatings to smooth Venetian-style finishes.
            </p>
            <ul className="grid grid-cols-1 gap-5">
              {['Decorative Texture Coatings', 'High-Performance Crack Filler', 'External Weather Shield Systems', 'Anti-Fungal Protective Layers'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300 group/item">
                  <div className="w-6 h-6 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover/item:bg-brand-primary transition-all">
                    <CheckCircle className="w-4 h-4 text-brand-primary group-hover/item:text-zinc-950 transition-colors" />
                  </div>
                  <span className="text-sm font-bold tracking-tight group-hover/item:text-brand-primary transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-5 text-brand-primary font-black tracking-[0.3em] text-[10px] uppercase group transition-all hover:text-white">
              VIEW TECHNICAL SPECS <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floor Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center rounded-3xl text-brand-primary border border-brand-primary/20 shadow-[0_0_30px_rgba(0,209,139,0.1)]">
              <Zap className="w-9 h-9" />
            </div>
            <h2 className="text-5xl font-serif text-white leading-tight">High-Durability <br /><span className="text-brand-primary italic">Flooring</span></h2>
            <p className="text-zinc-500 text-xl leading-relaxed font-light">
              Industrial strength meets residential elegance. We provide seamless flooring solutions that are easy to maintain and incredibly durable.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-950 rounded-[32px] border border-brand-primary/10 hover:border-brand-primary/40 transition-all shadow-xl">
                <h4 className="text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase mb-4">Industrial</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">Warehouse and manufacturing grade strength with chemical resistance.</p>
              </div>
              <div className="p-8 bg-zinc-950 rounded-[32px] border border-brand-primary/10 hover:border-brand-primary/40 transition-all shadow-xl">
                <h4 className="text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase mb-4">Residential</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">Smooth, warm, and elegant aesthetics for modern home designs.</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-5">
               {['Polished Cement Systems', 'Epoxy Resin Coating', 'Heavy Duty Tile Adhesives', 'Self-Leveling Compounds'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300 group/item">
                  <div className="w-6 h-6 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover/item:bg-brand-primary transition-all">
                    <CheckCircle className="w-4 h-4 text-brand-primary group-hover/item:text-zinc-950 transition-colors" />
                  </div>
                  <span className="text-sm font-bold tracking-tight group-hover/item:text-brand-primary transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[650px] rounded-[50px] overflow-hidden group border border-brand-primary/20 p-2">
            <div className="w-full h-full overflow-hidden rounded-[40px]">
              <img src="https://images.unsplash.com/photo-1581850518616-bcb8186c39ea" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Floor finishing" />
            </div>
             <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

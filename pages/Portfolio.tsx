
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Wall Finishes', 'Floor Finishes', 'Full Commercial'];

  const projects = [
    { id: 1, title: "Modern Minimalist Villa", category: "Wall Finishes", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" },
    { id: 2, title: "Industrial Loft Floor", category: "Floor Finishes", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace" },
    { id: 3, title: "Boutique Hotel Lobby", category: "Full Commercial", img: "https://images.unsplash.com/photo-1542332213-31f87348057f" },
    { id: 4, title: "Exterior Facade System", category: "Wall Finishes", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85" },
    { id: 5, title: "Seamless Office Flooring", category: "Floor Finishes", img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6" },
    { id: 6, title: "Luxury Resort Terraces", category: "Full Commercial", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#050706] min-h-screen pb-32">
      <section className="py-32 container mx-auto px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-mesh opacity-30 -z-10"></div>
        <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase mb-6">Our Work</p>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-16 tracking-tight">Masterpiece Projects</h1>

        <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black tracking-[0.3em] mb-24">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-3 uppercase transition-all border-b-2 ${filter === cat ? 'text-brand-primary border-brand-primary' : 'text-zinc-600 border-transparent hover:text-zinc-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-[40px] aspect-[4/5] animate-fade-in border border-white/5">
              <img 
                src={`${project.img}?auto=format&fit=crop&w=1000&q=80`} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-90 p-12 flex flex-col justify-end">
                <span className="text-brand-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4">Spero Project</span>
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-white text-3xl font-serif leading-tight">{project.title}</h3>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{project.category}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-zinc-950 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

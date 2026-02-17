import React, { useState } from 'react';
import { 
  getPortfolioVillaUrl, 
  getPortfolioImg2Url, 
  getPortfolioImg3Url, 
  getPortfolioImg4Url, 
  getPortfolioImg5Url 
} from '../components/Logo';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Wall Finishes', 'Floor Finishes', 'Full Commercial'];

  const projects = [
    { id: 1, title: "Modern Minimalist Villa", category: "Wall Finishes", img: getPortfolioVillaUrl() },
    { id: 2, title: "Industrial Loft Floor", category: "Floor Finishes", img: getPortfolioImg2Url() },
    { id: 3, title: "Boutique Hotel Lobby", category: "Full Commercial", img: getPortfolioImg3Url() },
    { id: 4, title: "Exterior Facade System", category: "Wall Finishes", img: getPortfolioImg4Url() },
    { id: 5, title: "Seamless Office Flooring", category: "Floor Finishes", img: getPortfolioImg5Url() },
    { id: 6, title: "Luxury Resort Terraces", category: "Full Commercial", img: getPortfolioVillaUrl() }, // Repeating first as 5 were provided for 6 slots
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen pb-24 transition-colors duration-500">
      <section className="py-24 container mx-auto px-6 lg:px-12 text-center">
        <p className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4">Our Work</p>
        <h1 className="text-5xl md:text-7xl font-serif text-black dark:text-white mb-12">Masterpiece Projects</h1>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold tracking-widest mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-2 uppercase transition-all border-b-2 ${filter === cat ? 'text-[#00A550] border-[#00A550]' : 'text-zinc-400 dark:text-zinc-500 border-transparent hover:text-black dark:hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-md aspect-[4/5] animate-fade-in border border-zinc-100 dark:border-white/5 shadow-lg">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-black/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                <span className="text-[#00A550] text-[10px] font-black tracking-widest uppercase mb-2">{project.category}</span>
                <h3 className="text-black dark:text-white text-2xl font-serif leading-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
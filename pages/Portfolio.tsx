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
    { id: 6, title: "Luxury Resort Terraces", category: "Full Commercial", img: getPortfolioVillaUrl() },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white dark:bg-[#0a0a0a] min-h-screen pb-24 transition-colors duration-500">
      <section className="py-20 md:py-28 container mx-auto px-6 lg:px-12 text-center">
        {/* Header matched to 'Masterpiece Projects' reference with SMALL font sizing */}
        <p className="text-[#00A550] text-[9px] font-bold tracking-[0.8em] uppercase mb-6">OUR WORK</p>
        <h1 className="text-4xl md:text-7xl font-serif text-black dark:text-white mb-14 tracking-tighter">Masterpiece Projects</h1>

        {/* Professional Filter Navigation - Small refined text */}
        <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black tracking-[0.3em] mb-20 border-b border-zinc-100 dark:border-zinc-900 pb-6 uppercase">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-2 transition-all relative group ${filter === cat ? 'text-[#00A550]' : 'text-zinc-500 hover:text-white'}`}
            >
              {cat}
              <span className={`absolute -bottom-[2px] left-0 h-[2px] bg-[#00A550] transition-all duration-500 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-sm aspect-[4/5] border border-zinc-100 dark:border-zinc-900/50 shadow-2xl">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-[#00A550] text-[9px] font-black tracking-[0.4em] uppercase mb-3">{project.category}</span>
                <h3 className="text-white text-2xl font-serif leading-tight">{project.title}</h3>
                <div className="h-[1px] w-0 group-hover:w-12 bg-[#00A550] mt-6 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock, Share2, MessageSquare, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from './About';
import { getInnovationImg1Url, getInnovationImg2Url, getInnovationImg3Url, getInnovationImg4Url } from '../components/Logo';
import FadeIn from '../components/FadeIn';
import RevealWords from '../components/RevealWords';

const BlogDetails: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === Number(blogId));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif">Article not found</h2>
          <Link to="/about" className="text-[#00A550] font-black tracking-widest uppercase border-b-2 border-[#00A550] pb-1">
            Return to About
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500 selection:bg-[#00A550] selection:text-black">
      {/* Article Header */}
      <article className="pt-24 lg:pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn>
            <button 
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-zinc-500 hover:text-[#00A550] transition-colors mb-12 text-[10px] font-black tracking-[0.3em] uppercase"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO INSIGHTS
            </button>
          </FadeIn>

          <div className="space-y-10 mb-20">
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap items-center gap-8 text-[10px] font-black tracking-[0.4em] text-[#00A550] uppercase">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-2"><User className="w-3 h-3" /> BY {post.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> 5 MIN READ</span>
              </div>
            </FadeIn>
            
            <RevealWords 
              text={post.title} 
              className="text-5xl md:text-8xl font-serif text-black dark:text-white leading-[0.9] tracking-tight" 
            />
            
            <FadeIn delay={0.6}>
              <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed italic border-l-[6px] border-[#00A550] pl-10 max-w-4xl py-2">
                {post.excerpt}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.8}>
            <div className="aspect-[21/9] w-full rounded-sm overflow-hidden mb-24 shadow-2xl border border-zinc-100 dark:border-zinc-900">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
            </div>
          </FadeIn>

          {/* Reading Content */}
          <div className="max-w-4xl mx-auto space-y-12 text-zinc-800 dark:text-zinc-300 font-sans font-light leading-[1.8] text-xl md:text-2xl">
            <FadeIn>
              <p>
                The landscape of modern architecture is undergoing a radical shift. As global awareness of environmental impact grows, architects and builders are seeking materials that provide the necessary strength and aesthetic appeal without compromising the planet's health. At Spero Solutions, we are at the forefront of this evolution.
              </p>
            </FadeIn>

            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white pt-10 tracking-tight">
                Innovation in Polymer Chemistry
              </h2>
            </FadeIn>
            
            <FadeIn>
              <p>
                Our research team has spent years developing polymer-modified cementitious formulas that drastically reduce the carbon footprint of traditional wall and floor finishes. By optimizing the hydration process and using sustainable raw materials, we've created a product line that is both eco-friendly and industrially superior.
              </p>
            </FadeIn>

            {/* Core Benefits Block */}
            <FadeIn>
              <div className="bg-[#050505] dark:bg-[#050505] p-12 md:p-16 rounded-sm border border-zinc-900 my-20 shadow-2xl">
                 <h4 className="text-[#00A550] text-xs font-black tracking-[0.4em] uppercase mb-12">CORE BENEFITS</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                    <div className="flex items-center gap-5 text-zinc-100 text-lg md:text-xl font-light">
                      <span className="text-[#00A550] font-black text-2xl tracking-tighter">→</span>
                      30% Lower Carbon Footprint
                    </div>
                    <div className="flex items-center gap-5 text-zinc-100 text-lg md:text-xl font-light">
                      <span className="text-[#00A550] font-black text-2xl tracking-tighter">→</span>
                      Zero VOC Emissions
                    </div>
                    <div className="flex items-center gap-5 text-zinc-100 text-lg md:text-xl font-light">
                      <span className="text-[#00A550] font-black text-2xl tracking-tighter">→</span>
                      Enhanced Thermal Protection
                    </div>
                    <div className="flex items-center gap-5 text-zinc-100 text-lg md:text-xl font-light">
                      <span className="text-[#00A550] font-black text-2xl tracking-tighter">→</span>
                      100% Recyclable Packaging
                    </div>
                 </div>
              </div>
            </FadeIn>

            {/* In-Body Showcase Gallery with requested URLs */}
            <div className="space-y-8 my-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[getInnovationImg1Url(), getInnovationImg4Url(), getInnovationImg2Url(), getInnovationImg3Url()].map((url, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="aspect-[16/10] rounded-sm overflow-hidden border border-zinc-100 dark:border-zinc-900 shadow-2xl">
                      <img src={url} alt={`Innovation Showcase ${i + 1}`} className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn>
                <p className="text-zinc-500 text-sm text-center font-light tracking-widest uppercase">Visual documentation of structural surface performance and aesthetic durability.</p>
              </FadeIn>
            </div>

            <FadeIn>
              <p>
                Beyond the materials themselves, the application techniques have also evolved. Our "Brilliant White" skim coat doesn't just provide a visual masterpiece; it acts as a protective barrier that extends the life of the underlying structure by decades, reducing the need for maintenance and renovation.
              </p>
            </FadeIn>

            <FadeIn>
              <p>
                As we look toward 2025 and beyond, Spero remains committed to defining the next generation of architectural finishes. We believe that luxury and sustainability are not mutually exclusive—they are the two pillars upon which the future of our industry will be built.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-32 pt-16 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex gap-10">
                 <button className="flex items-center gap-3 text-zinc-500 hover:text-[#00A550] transition-colors text-[10px] font-black uppercase tracking-[0.3em]">
                    <Share2 className="w-4 h-4" /> SHARE
                 </button>
                 <button className="flex items-center gap-3 text-zinc-500 hover:text-[#00A550] transition-colors text-[10px] font-black uppercase tracking-[0.3em]">
                    <MessageSquare className="w-4 h-4" /> 12 COMMENTS
                 </button>
              </div>
              <Link to="/contact" className="bg-[#00A550] text-black px-12 py-5 rounded-md font-black text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 uppercase shadow-2xl">
                 DISCUSS YOUR PROJECT
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Suggested Reading */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-16 tracking-tight">More <span className="text-[#00A550] italic">Insights</span></h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.filter(p => p.id !== Number(blogId)).slice(0, 2).map((other, i) => (
              <FadeIn key={other.id} delay={i * 0.1}>
                <Link to={`/blog/${other.id}`} className="group flex flex-col md:flex-row gap-10 items-center bg-white dark:bg-black p-8 rounded-sm border border-zinc-100 dark:border-zinc-900 hover:border-[#00A550]/30 transition-all shadow-lg hover:shadow-2xl">
                  <div className="w-full md:w-2/5 aspect-video md:aspect-square overflow-hidden rounded-sm">
                     <img src={other.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={other.title} />
                  </div>
                  <div className="flex-1 space-y-4">
                     <span className="text-[#00A550] text-[10px] font-black uppercase tracking-[0.4em]">{other.date}</span>
                     <h4 className="text-2xl font-serif text-black dark:text-white leading-tight group-hover:text-[#00A550] transition-colors">{other.title}</h4>
                     <div className="flex items-center gap-3 text-[#00A550] text-[10px] font-black tracking-[0.3em] uppercase">
                        READ NOW <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                     </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

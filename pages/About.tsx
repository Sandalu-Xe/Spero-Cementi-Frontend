import React from 'react';
import { 
  Shield, 
  Target, 
  Award, 
  Flag, 
  Lightbulb, 
  Briefcase, 
  Search,
  CheckCircle,
  Clock,
  ArrowRight,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFounderImageUrl, getCoFounderImageUrl, getLogoUrl, getVisionCenterImageUrl, getSustainableBlogImageUrl } from '../components/Logo';

export const BLOG_POSTS = [
  {
    id: 1,
    date: "Oct 12, 2024",
    author: "Technical Team",
    title: "The Future of Sustainable Surfaces in Modern Architecture",
    excerpt: "How our new polymer-modified formulas are reducing carbon footprints without compromising structural integrity.",
    image: getSustainableBlogImageUrl()
  },
  {
    id: 2,
    date: "Sep 28, 2024",
    author: "Chamara K.",
    title: "Choosing the Perfect Texture: A Designer's Guide to Finishes",
    excerpt: "Understanding the interplay between light and surface texture in luxury residential interiors.",
    image: "https://images.unsplash.com/photo-1600607687940-477a284e68c6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "Aug 15, 2024",
    author: "Dr. Laksiri A.",
    title: "Combatting Tropical Weathering with Advanced Polymers",
    excerpt: "The science of hydration and curing in high-humidity environments for long-lasting wall protection.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      {/* 1. Main Header */}
      <section className="pt-24 pb-12 border-b border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-zinc-700 dark:text-zinc-300 tracking-wider uppercase mb-8">
            ABOUT SPERO SOLUTIONS (PVT) LTD
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 md:w-48 bg-zinc-300 dark:bg-zinc-800"></div>
            <div className="w-2 h-2 rounded-full bg-[#00A550]"></div>
            <div className="h-[1px] w-24 md:w-48 bg-zinc-300 dark:bg-zinc-800"></div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Graphic Section (Updated Centerpiece) */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Points */}
            <div className="space-y-24 order-2 lg:order-1">
              {/* Established */}
              <div className="flex items-start lg:flex-row-reverse gap-6 group text-right lg:text-right">
                <div className="hidden lg:block w-12 h-12 text-zinc-300 dark:text-zinc-700 mt-1 transition-colors group-hover:text-[#00A550]">
                  <Flag className="w-full h-full stroke-1" />
                </div>
                <div className="lg:pr-4">
                  <h3 className="text-[#00A550] dark:text-[#00A550] text-xl font-medium mb-2">Established in</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">We had our humble beginning in 2013</p>
                </div>
                <div className="lg:hidden w-12 h-12 text-[#00A550]">
                   <Flag className="w-full h-full" />
                </div>
              </div>

              {/* Mission */}
              <div className="flex items-start lg:flex-row-reverse gap-6 group text-right lg:text-right">
                <div className="hidden lg:block w-12 h-12 text-zinc-300 dark:text-zinc-700 mt-1 transition-colors group-hover:text-[#00A550]">
                  <Target className="w-full h-full stroke-1" />
                </div>
                <div className="lg:pr-4">
                  <h3 className="text-[#00A550] dark:text-[#00A550] text-xl font-medium mb-2">Our Mission</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
                    To stand for high quality Standards in all our processes, products and to offer construction services 
                    the highest level of quality products consistently at fair and market competitive price by exceeding 
                    their expectations and gaining their trust through exceptional performance.
                  </p>
                </div>
                <div className="lg:hidden w-12 h-12 text-[#00A550]">
                   <Target className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Center Graphic */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-sm overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl group">
                <img 
                  src={getVisionCenterImageUrl()} 
                  alt="Spero Project Showcase" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                {/* Subtle Floating Logo Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center p-2 border border-[#00A550]/20">
                  <img src={getLogoUrl()} alt="Spero Icon" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Right Column Points */}
            <div className="space-y-24 order-3">
              {/* Built Upon */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mt-1 transition-colors group-hover:text-[#00A550]">
                  <Flag className="w-full h-full stroke-1" />
                </div>
                <div>
                  <h3 className="text-[#00A550] dark:text-[#00A550] text-xl font-medium mb-2">We are built Upon</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">Quality, Consistency, Innovation and Economy.</p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mt-1 transition-colors group-hover:text-[#00A550]">
                  <Lightbulb className="w-full h-full stroke-1" />
                </div>
                <div>
                  <h3 className="text-[#00A550] dark:text-[#00A550] text-xl font-medium mb-2">Our Vision</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">Be the most preferred Construction Material Brand and Solutions provider in Asia</p>
                </div>
              </div>

              {/* Value */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mt-1 transition-colors group-hover:text-[#00A550]">
                  <Briefcase className="w-full h-full stroke-1" />
                </div>
                <div>
                  <h3 className="text-[#00A550] dark:text-[#00A550] text-xl font-medium mb-2">We Value</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-light">Respect, Integrity, Collaboration, and Endurance.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* New Blog Section: Insights & Innovation */}
      <section className="py-24 lg:py-40 bg-white dark:bg-black border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-[#00A550] text-xs font-black tracking-[0.5em] uppercase mb-4">Deep Knowledge</p>
              <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white leading-tight">
                Insights & <span className="italic text-[#00A550]">Innovation</span>
              </h2>
            </div>
            <button className="text-[10px] font-black tracking-widest uppercase border-b-2 border-[#00A550] pb-2 text-[#00A550] hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all">
              VIEW ALL ARTICLES
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group cursor-pointer block">
                <article>
                  <div className="aspect-[16/10] overflow-hidden rounded-sm mb-8 relative border border-zinc-100 dark:border-zinc-900 shadow-xl">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-sm border border-[#00A550]/20">
                      <span className="text-[10px] font-black text-[#00A550] tracking-widest uppercase">{post.date}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400 text-[10px] font-bold tracking-widest uppercase">
                      <User className="w-3 h-3 text-[#00A550]" />
                      {post.author}
                    </div>
                    <h3 className="text-2xl font-serif text-black dark:text-white leading-tight group-hover:text-[#00A550] transition-colors duration-500">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-[#00A550] text-[10px] font-black tracking-[0.2em] uppercase">
                      READ ARTICLE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership Section */}
      <section className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
           <p className="text-[#00A550] text-xs font-black tracking-[0.8em] uppercase mb-4">The Team Behind Spero</p>
           <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white">Our Leadership</h2>
        </div>

        {/* Profile 1: Chamara Karunarathna */}
        <div className="py-24 lg:py-40 bg-white dark:bg-black overflow-hidden border-t border-zinc-100 dark:border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#00A550] mb-4">
                    <div className="h-[1px] w-12 bg-[#00A550]"></div>
                    <span className="text-xs font-bold tracking-widest uppercase">Founder's Message</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-black dark:text-white leading-tight">Chamara Karunarathna</h3>
                  <p className="text-[#00A550] text-sm font-bold tracking-widest uppercase">Founder / General Manager</p>
                </div>
                
                <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  <p>
                    Construction is a business where success is measured by the ability to complete projects on time within 
                    expected budgets. We, Spero, as a manufacturer of polymer-based construction materials and products, 
                    continuously strive to supply quality polymer-based products and services to our customers empowering 
                    them to achieve well-engineered constructions using most cost-effective solutions.
                  </p>
                  <p>
                    In our efforts to ensure our customers' utmost satisfaction, we always use high quality raw materials 
                    and state of the art technology in our production processes. Spero is equipped with the technical 
                    know-how, machinery and highly-qualified staff.
                  </p>
                  <div className="pt-4">
                    <p className="font-medium italic border-l-4 border-[#00A550] pl-6 text-black dark:text-zinc-300">
                      "We foster a culture where our teams get directly involved with you in achieving your construction 
                      dream through our innovative solutions."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative mx-auto max-w-xs lg:max-w-sm">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 shadow-2xl bg-zinc-50 dark:bg-zinc-900 relative group">
                    <img 
                      src={getFounderImageUrl()} 
                      alt="Chamara Karunarathna" 
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 border-[15px] border-white/5 dark:border-black/5 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile 2: Dr. Laksiri Andradi */}
        <div className="py-24 lg:py-40 bg-zinc-50 dark:bg-zinc-950 overflow-hidden border-t border-zinc-100 dark:border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-1">
                <div className="relative mx-auto max-w-xs lg:max-w-sm">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 shadow-2xl bg-zinc-50 dark:bg-zinc-900 relative group">
                    <img 
                      src={getCoFounderImageUrl()} 
                      alt="Dr. Laksiri Andradi" 
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 border-[15px] border-white/5 dark:border-black/5 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-10 order-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#00A550] mb-4">
                    <div className="h-[1px] w-12 bg-[#00A550]"></div>
                    <span className="text-xs font-bold tracking-widest uppercase">Technical Excellence</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-black dark:text-white leading-tight">Dr. Laksiri Andradi</h3>
                  <p className="text-[#00A550] text-sm font-bold tracking-widest uppercase">Technical Director / Co-Founder</p>
                </div>
                
                <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  <p>
                    The common focus of Spero is to serve construction industry through supply of high quality products & 
                    services at affordable prices and timely response to architects', engineers' and builders' needs in a 
                    highly professional manner.
                  </p>
                  <p>
                    Though relatively young in the industry, we are mature and competent enough to provide high value adding 
                    "Spero" brand quality products manufactured using most modern polymer technology. We appreciate the 
                    fact that there is no substitute for expertise and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-40 bg-white dark:bg-black text-center">
        <div className="container mx-auto px-6 max-w-2xl">
           <CheckCircle className="w-12 h-12 text-[#00A550] mx-auto mb-8" />
           <h2 className="text-3xl font-serif mb-6 text-black dark:text-white">Our Promise to You</h2>
           <p className="text-zinc-500 font-light leading-relaxed">
             We maintain uncompromising standards, utilizing the finest raw materials to deliver results that exceed 
             expectations in durability and aesthetic perfection.
           </p>
        </div>
      </section>
    </div>
  );
};

export default About;
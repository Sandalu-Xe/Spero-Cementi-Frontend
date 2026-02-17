import React from 'react';
import { 
  Shield, 
  Target, 
  Award, 
  Flag, 
  Lightbulb, 
  Briefcase, 
  Search,
  CheckCircle
} from 'lucide-react';
import { getFounderImageUrl, getCoFounderImageUrl, getLogoUrl } from '../components/Logo';

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

      {/* 2. Vision & Mission Graphic Section (Replica of Image) */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center">
            
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

            {/* Center Graphic (Smartphone/Logo concept) */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-[480px] md:w-80 md:h-[580px] bg-[#111] rounded-[40px] border-[6px] border-[#222] shadow-2xl p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-1/3 h-6 bg-[#222] rounded-b-2xl z-10"></div>
                <div className="w-full h-full bg-white flex items-center justify-center rounded-[30px] p-8">
                  <img src={getLogoUrl()} alt="Spero Logo" className="w-full h-auto object-contain transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="absolute bottom-4 w-12 h-12 rounded-full border-2 border-[#222] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a]"></div>
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

      {/* 3. Leadership Section */}
      <section className="bg-white dark:bg-black">
        <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
           <p className="text-[#00A550] text-xs font-black tracking-[0.8em] uppercase mb-4">The Team Behind Spero</p>
           <h2 className="text-5xl md:text-7xl font-serif text-black dark:text-white">Our Leadership</h2>
        </div>

        {/* Profile 1: Chamara Karunarathna */}
        <div className="py-24 lg:py-40 overflow-hidden border-t border-zinc-100 dark:border-white/5">
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
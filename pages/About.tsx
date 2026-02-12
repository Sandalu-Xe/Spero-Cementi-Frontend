
import React from 'react';
import { Shield, Target, Users, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] pb-24 transition-colors duration-500">
      {/* Page Header */}
      <section className="py-24 border-b border-zinc-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">Since 2009</p>
          <h1 className="text-5xl md:text-7xl font-serif text-black dark:text-white text-center">About Spero Solutions</h1>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1000" className="rounded-sm shadow-2xl grayscale dark:grayscale-0 brightness-[0.9] dark:brightness-[0.7] border border-zinc-200 dark:border-white/5" alt="Our Facility" />
            <div className="absolute -bottom-10 -right-10 w-2/3 p-1 bg-gradient-to-br from-[#00A550] to-[#004d26] rounded-sm shadow-xl">
              <div className="bg-white dark:bg-[#0a0a0a] rounded-sm p-8 text-black dark:text-white">
                <p className="text-sm font-light leading-relaxed">"We bridge the gap between luxury and longevity in modern architecture."</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-black dark:text-white">Redefining the standard of finishing materials</h2>
            <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed text-lg">
              Spero Solutions has been at the forefront of architectural finishing for over 15 years. We started with a simple vision: to create materials that don't just look premium but perform under extreme conditions.
            </p>
            <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
              Our research facility is dedicated to studying cement chemistries and polymer interactions. This scientific approach allows us to produce wall and floor finishes that resist cracking, weathering, and wear while maintaining their aesthetic brilliance.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-serif text-[#00A550] mb-2 drop-shadow-[0_0_10px_rgba(0,165,80,0.3)]">500+</span>
                <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">Projects Delivered</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-[#00A550] mb-2 drop-shadow-[0_0_10px_rgba(0,165,80,0.3)]">15+</span>
                <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Uncompromising Quality", desc: "Every batch of our polymer-modified cement undergoes rigorous multi-stage testing before leaving our facility." },
              { icon: Target, title: "Precision Engineering", desc: "We formulate our products to meet the exact environmental demands of each architectural site." },
              { icon: Users, title: "Client Partnership", desc: "We collaborate with architects and designers from conception to the final application stage." }
            ].map((value, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-sm bg-[#00A550]/10 flex items-center justify-center text-[#00A550]">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-black dark:text-white">{value.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] pb-24">
      {/* Page Header */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-[#19e680] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">Since 2009</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white text-center">About Spero Solutions</h1>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1000" className="rounded-3xl shadow-2xl grayscale border border-white/5" alt="Our Facility" />
            <div className="absolute -bottom-10 -right-10 w-2/3 p-1 bg-gradient-to-br from-[#19e680] to-green-900 rounded-3xl shadow-xl">
              <div className="bg-[#0a0a0a] rounded-[22px] p-8 text-white">
                <p className="text-sm font-light leading-relaxed">"We bridge the gap between luxury and longevity in modern architecture."</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-white">Redefining the standard of finishing materials</h2>
            <p className="text-zinc-500 leading-relaxed text-lg">
              Spero Solutions has been at the forefront of architectural finishing for over 15 years. We started with a simple vision: to create materials that don't just look premium but perform under extreme conditions.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Our research facility is dedicated to studying cement chemistries and polymer interactions. This scientific approach allows us to produce wall and floor finishes that resist cracking, weathering, and wear while maintaining their aesthetic brilliance.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-serif text-[#19e680] mb-2 drop-shadow-[0_0_10px_rgba(25,230,128,0.3)]">500+</span>
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Projects Delivered</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-[#19e680] mb-2 drop-shadow-[0_0_10px_rgba(25,230,128,0.3)]">12+</span>
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Patent Formulas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Shield className="w-10 h-10" />, title: "Quality Control", text: "Multi-stage testing for every batch produced." },
            { icon: <Target className="w-10 h-10" />, title: "Innovation", text: "Continuous R&D in cement technology." },
            { icon: <Users className="w-10 h-10" />, title: "Client Focus", text: "Tailored solutions for unique architectural needs." },
            { icon: <Award className="w-10 h-10" />, title: "Expertise", text: "Decades of combined technical knowledge." }
          ].map((val, i) => (
            <div key={i} className="p-10 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-[#19e680]/30 transition-all group">
              <div className="text-[#19e680] mb-6 group-hover:scale-110 transition-transform duration-500">{val.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import RevealWords from '../components/RevealWords';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] pb-24 transition-colors duration-500">
      <section className="py-24 container mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-[#00A550] text-xs font-bold tracking-[0.4em] uppercase mb-4">Connect With Us</p>
        </FadeIn>
        <RevealWords 
          text="Start Your Project" 
          className="text-5xl md:text-7xl font-serif text-black dark:text-white justify-center" 
        />
      </section>

      <section className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <FadeIn direction="right">
              <h2 className="text-3xl font-serif text-black dark:text-white leading-tight">Talk to a technical expert today</h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed font-light">
                Whether you're an architect with a complex vision or a homeowner looking for the perfect finish, our team is ready to assist.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { icon: MapPin, title: "Office Location", desc: "105/1, Madupitiya Road, Mahawila, Panadura, Sri Lanka" },
              { icon: Phone, title: "Phone Number", desc: "+94 777 982 138\n+94 382 233 445" },
              { icon: Mail, title: "Email Us", desc: "marketing@spero.lk\nsupport@spero.lk" },
              { icon: Clock, title: "Working Hours", desc: "Mon - Fri: 8:30 AM - 5:30 PM\nSat: 8:30 AM - 1:00 PM" }
            ].map((item, i) => (
              <FadeIn key={i} direction="right" delay={0.3 + i * 0.1}>
                <div className="space-y-4 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-[#00A550] group-hover:bg-[#00A550] group-hover:text-black transition-all shadow-[0_0_10px_rgba(0,165,80,0.1)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-black dark:text-white font-bold tracking-tight">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn direction="left">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-10 lg:p-16 rounded-md border border-zinc-200 dark:border-[#00A550]/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A550]/5 rounded-full blur-3xl"></div>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#00A550] text-[10px] font-bold tracking-widest uppercase ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-md px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#00A550] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[#00A550] text-[10px] font-bold tracking-widest uppercase ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-md px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#00A550] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[#00A550] text-[10px] font-bold tracking-widest uppercase ml-1">Service of Interest</label>
                <select className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-md px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#00A550] appearance-none transition-colors">
                  <option>Wall Finishing Solutions</option>
                  <option>Floor Finishing Solutions</option>
                  <option>Full Architectural Package</option>
                  <option>Other / Technical Query</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[#00A550] text-[10px] font-bold tracking-widest uppercase ml-1">Your Message</label>
                <textarea rows={5} placeholder="Tell us about your project requirements..." className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-md px-6 py-4 text-black dark:text-white focus:outline-none focus:border-[#00A550] transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#00A550] text-black py-5 rounded-md font-black tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#008540] transition-all transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,165,80,0.3)]">
                SEND ENQUIRY <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </FadeIn>
      </section>

      {/* Map Placeholder */}
      <FadeIn delay={0.5}>
        <section className="mt-24 h-[500px] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative grayscale group transition-all hover:grayscale-0">
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1500" alt="Map Location" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#00A550] p-5 rounded-full shadow-[0_0_50px_rgba(0,165,80,0.4)] animate-pulse">
                 <MapPin className="w-8 h-8 text-black" />
              </div>
           </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Contact;

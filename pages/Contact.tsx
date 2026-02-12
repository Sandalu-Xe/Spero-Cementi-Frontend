
import React from 'react';
import { MapPin, Mail, Phone, Clock, Send, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#050706] pb-32">
      <section className="py-32 container mx-auto px-6 lg:px-12 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20 -z-10"></div>
        <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase mb-6">Connect With Us</p>
        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight">Start Your Project</h1>
      </section>

      <section className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
        <div className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-5xl font-serif text-white leading-tight">Talk to a technical expert today</h2>
            <p className="text-zinc-500 text-xl leading-relaxed max-w-md font-light">
              Whether you're an architect with a complex vision or a homeowner looking for the perfect finish, our team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              { icon: MapPin, title: "Office Location", content: "105/1, Madupitiya Road, Mahawila, Panadura, Sri Lanka" },
              { icon: Phone, title: "Phone Number", content: "+94 777 982 138\n+94 382 233 445" },
              { icon: Mail, title: "Email Us", content: "marketing@spero.lk\nsupport@spero.lk" },
              { icon: Clock, title: "Working Hours", content: "Mon - Fri: 8:30 AM - 5:30 PM\nSat: 8:30 AM - 1:00 PM" }
            ].map((item, i) => (
              <div key={i} className="space-y-5 group">
                <div className="w-14 h-14 rounded-2xl border border-brand-primary/20 flex items-center justify-center text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-zinc-950 group-hover:scale-110">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold tracking-tight text-lg">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-zinc-300 transition-colors">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-950 p-12 lg:p-20 rounded-[50px] border border-brand-primary/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl"></div>
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-brand-primary/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-brand-primary/50 transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase ml-1">Service of Interest</label>
              <select className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-brand-primary/50 appearance-none transition-all cursor-pointer">
                <option>Wall Finishing Solutions</option>
                <option>Floor Finishing Solutions</option>
                <option>Full Architectural Package</option>
                <option>Other / Technical Query</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase ml-1">Your Message</label>
              <textarea rows={5} placeholder="Tell us about your project requirements..." className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-brand-primary/50 transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-primary text-zinc-950 py-6 rounded-2xl font-black tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,209,139,0.2)]">
              SEND ENQUIRY <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-32 h-[600px] w-full bg-zinc-950 overflow-hidden relative grayscale group border-t border-brand-primary/10">
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000" alt="Map Location" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary/40 rounded-full blur-[40px] animate-pulse"></div>
              <div className="relative bg-brand-primary p-6 rounded-3xl shadow-[0_0_50px_rgba(0,209,139,0.5)] transform transition-transform group-hover:scale-125">
                 <MapPin className="w-10 h-10 text-zinc-950" />
              </div>
            </div>
         </div>
         <div className="absolute bottom-12 left-12 bg-zinc-950/80 backdrop-blur-md p-10 rounded-[32px] border border-brand-primary/20">
           <h4 className="text-white text-xl font-bold mb-2">Visit Our Showroom</h4>
           <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">Experience our premium wall and floor textures in person.</p>
           <button className="mt-6 flex items-center gap-2 text-brand-primary text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors">
             GET DIRECTIONS <ArrowUpRight className="w-4 h-4" />
           </button>
         </div>
      </section>
    </div>
  );
};

export default Contact;

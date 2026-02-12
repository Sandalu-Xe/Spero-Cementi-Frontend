
import React from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] pb-24">
      <section className="py-24 container mx-auto px-6 lg:px-12 text-center">
        <p className="text-[#19e680] text-xs font-bold tracking-[0.4em] uppercase mb-4">Connect With Us</p>
        <h1 className="text-5xl md:text-7xl font-serif text-white">Start Your Project</h1>
      </section>

      <section className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white leading-tight">Talk to a technical expert today</h2>
            <p className="text-zinc-500 max-w-md leading-relaxed font-light">
              Whether you're an architect with a complex vision or a homeowner looking for the perfect finish, our team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#19e680] group-hover:bg-[#19e680] group-hover:text-black transition-all shadow-[0_0_10px_rgba(25,230,128,0.1)]">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold tracking-tight">Office Location</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                105/1, Madupitiya Road, Mahawila, Panadura, Sri Lanka
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#19e680] group-hover:bg-[#19e680] group-hover:text-black transition-all shadow-[0_0_10px_rgba(25,230,128,0.1)]">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold tracking-tight">Phone Number</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                +94 777 982 138<br />+94 382 233 445
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#19e680] group-hover:bg-[#19e680] group-hover:text-black transition-all shadow-[0_0_10px_rgba(25,230,128,0.1)]">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold tracking-tight">Email Us</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                marketing@spero.lk<br />support@spero.lk
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#19e680] group-hover:bg-[#19e680] group-hover:text-black transition-all shadow-[0_0_10px_rgba(25,230,128,0.1)]">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold tracking-tight">Working Hours</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Mon - Fri: 8:30 AM - 5:30 PM<br />Sat: 8:30 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 lg:p-16 rounded-3xl border border-[#19e680]/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#19e680]/5 rounded-full blur-3xl"></div>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#19e680] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#19e680] transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase ml-1">Service of Interest</label>
              <select className="w-full bg-zinc-950 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#19e680] appearance-none transition-colors">
                <option>Wall Finishing Solutions</option>
                <option>Floor Finishing Solutions</option>
                <option>Full Architectural Package</option>
                <option>Other / Technical Query</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase ml-1">Your Message</label>
              <textarea rows={5} placeholder="Tell us about your project requirements..." className="w-full bg-zinc-950 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#19e680] transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#19e680] text-black py-5 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#15c26b] transition-all transform hover:-translate-y-1 shadow-[0_5px_15px_rgba(25,230,128,0.2)]">
              SEND ENQUIRY <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-24 h-[500px] w-full bg-zinc-900 overflow-hidden relative grayscale group transition-all hover:grayscale-0">
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1500" alt="Map Location" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#19e680] p-5 rounded-full shadow-[0_0_50px_rgba(25,230,128,0.4)] animate-pulse">
               <MapPin className="w-8 h-8 text-black" />
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
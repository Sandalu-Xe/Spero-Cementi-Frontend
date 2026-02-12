
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, ChevronDown, MapPin, Mail, Phone, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050a15] border-t border-white/5 pt-20 pb-12 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Top Section / Brand */}
        <div className="flex flex-col items-center mb-16 text-center space-y-6">
          <Link to="/">
            <Logo className="h-12" />
          </Link>
          <p className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-bold">
            Contact
          </p>
        </div>

        {/* Sectioned List - Styled like the reference image */}
        <div className="space-y-0 border-t border-white/10">
          
          {/* Quick Links Section */}
          <div className="group border-b border-white/10">
            <button className="w-full py-8 flex justify-between items-center text-left group-hover:bg-white/5 transition-colors px-4">
              <h4 className="text-white text-3xl md:text-4xl font-serif">Quick Links</h4>
              <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-[#00A550] transition-colors" />
            </button>
            <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out bg-black/20">
              <div className="px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                <Link to="/about" className="text-zinc-500 hover:text-[#00A550] text-xs font-bold tracking-widest uppercase transition-colors">About</Link>
                <Link to="/products" className="text-zinc-500 hover:text-[#00A550] text-xs font-bold tracking-widest uppercase transition-colors">Products</Link>
                <Link to="/portfolio" className="text-zinc-500 hover:text-[#00A550] text-xs font-bold tracking-widest uppercase transition-colors">Portfolio</Link>
                <Link to="/services" className="text-zinc-500 hover:text-[#00A550] text-xs font-bold tracking-widest uppercase transition-colors">Services</Link>
                <Link to="/contact" className="text-zinc-500 hover:text-[#00A550] text-xs font-bold tracking-widest uppercase transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="group border-b border-white/10">
            <button className="w-full py-8 flex justify-between items-center text-left group-hover:bg-white/5 transition-colors px-4">
              <h4 className="text-white text-3xl md:text-4xl font-serif">Information</h4>
              <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-[#00A550] transition-colors" />
            </button>
            <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out bg-black/20">
              <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-[#00A550] shrink-0" />
                  <p className="text-zinc-400 text-xs leading-relaxed uppercase tracking-widest">
                    105/1, Madupitiya Road,<br />Mahawila, Panadura, Sri Lanka
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <Phone className="w-5 h-5 text-[#00A550] shrink-0" />
                    <p className="text-zinc-400 text-xs font-bold tracking-widest">+94 777 982 138</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="w-5 h-5 text-[#00A550] shrink-0" />
                    <p className="text-zinc-400 text-xs font-bold tracking-widest">MARKETING@SPERO.LK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Presence Section */}
          <div className="group border-b border-white/10">
            <button className="w-full py-8 flex justify-between items-center text-left group-hover:bg-white/5 transition-colors px-4">
              <h4 className="text-white text-3xl md:text-4xl font-serif">Follow Us</h4>
              <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-[#00A550] transition-colors" />
            </button>
            <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out bg-black/20">
              <div className="px-6 py-10 flex gap-8 justify-center">
                <a href="#" className="p-4 border border-white/5 rounded-full text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-500"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-4 border border-white/5 rounded-full text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-500"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-4 border border-white/5 rounded-full text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-500"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-black">
            © 2024 Spero Solutions (PVT) Ltd.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 hover:text-[#00A550] transition-colors font-black">Privacy</a>
            <a href="#" className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 hover:text-[#00A550] transition-colors font-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

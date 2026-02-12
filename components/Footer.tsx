
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-24 pb-12 text-zinc-400">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand Info */}
        <div className="space-y-8">
          <Link to="/">
            <Logo className="h-12" />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs text-zinc-500">
            Innovative architectural finishing solutions for modern residential and commercial spaces. Premium quality meets visionary design.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-white/10 rounded-full text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 border border-white/10 rounded-full text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="p-2 border border-white/10 rounded-full text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-8">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-[#00A550] text-sm transition-colors duration-300">About Spero Solutions</Link></li>
            <li><Link to="/products" className="hover:text-[#00A550] text-sm transition-colors duration-300">Product Catalog</Link></li>
            <li><Link to="/services" className="hover:text-[#00A550] text-sm transition-colors duration-300">Wall Solutions</Link></li>
            <li><Link to="/services" className="hover:text-[#00A550] text-sm transition-colors duration-300">Floor Finishes</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#00A550] text-sm transition-colors duration-300">Our Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[#00A550] text-sm transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-8">Get in Touch</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 text-sm">
              <MapPin className="w-5 h-5 text-[#00A550] shrink-0" />
              <span className="text-zinc-500">105/1, Madupitiya Road,<br />Mahawila, Panadura, Sri Lanka</span>
            </li>
            <li className="flex gap-4 text-sm">
              <Phone className="w-5 h-5 text-[#00A550] shrink-0" />
              <span className="text-zinc-500">+94 777 982 138</span>
            </li>
          </ul>
        </div>

        {/* Contact info Right */}
        <div className="lg:pt-16">
          <ul className="space-y-6">
            <li className="flex gap-4 text-sm">
              <Mail className="w-5 h-5 text-[#00A550] shrink-0" />
              <span className="text-zinc-500">marketing@spero.lk</span>
            </li>
            <li className="flex gap-4 text-sm">
              <Globe className="w-5 h-5 text-[#00A550] shrink-0" />
              <span className="text-zinc-500">www.spero.lk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] tracking-[0.2em] uppercase text-zinc-600">
          © 2024 Spero Solutions (PVT) Ltd. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-zinc-600 hover:text-[#00A550] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[9px] tracking-[0.2em] uppercase text-zinc-600 hover:text-[#00A550] transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

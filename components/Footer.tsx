
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#19e680] w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-xl shadow-[0_0_10px_rgba(25,230,128,0.2)]">S</div>
            <span className="text-2xl font-bold tracking-tighter text-white">SPERO<sup className="text-[10px] text-[#19e680] ml-1 font-normal">Solutions</sup></span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Innovative architectural finishing solutions for modern residential and commercial spaces. Premium quality meets visionary design in every project we undertake.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-[#19e680] hover:text-black hover:border-[#19e680] transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-[#19e680] hover:text-black hover:border-[#19e680] transition-all"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-[#19e680] hover:text-black hover:border-[#19e680] transition-all"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-zinc-500 hover:text-[#19e680] text-sm transition-colors">About Spero Solutions</Link></li>
            <li><Link to="/services" className="text-zinc-500 hover:text-[#19e680] text-sm transition-colors">Wall Solutions</Link></li>
            <li><Link to="/services" className="text-zinc-500 hover:text-[#19e680] text-sm transition-colors">Floor Finishes</Link></li>
            <li><Link to="/portfolio" className="text-zinc-500 hover:text-[#19e680] text-sm transition-colors">Our Portfolio</Link></li>
            <li><Link to="/contact" className="text-zinc-500 hover:text-[#19e680] text-sm transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex gap-4 text-sm text-zinc-500">
              <MapPin className="w-5 h-5 text-[#19e680] shrink-0" />
              <span>105/1, Madupitiya Road,<br />Mahawila, Panadura, Sri Lanka</span>
            </li>
            <li className="flex gap-4 text-sm text-zinc-500">
              <Phone className="w-5 h-5 text-[#19e680] shrink-0" />
              <span>+94 777 982 138</span>
            </li>
          </ul>
        </div>

        {/* Contact info Right */}
        <div className="lg:pt-14">
          <ul className="space-y-4">
            <li className="flex gap-4 text-sm text-zinc-500">
              <Mail className="w-5 h-5 text-[#19e680] shrink-0" />
              <span>marketing@spero.lk</span>
            </li>
            <li className="flex gap-4 text-sm text-zinc-500">
              <Globe className="w-5 h-5 text-[#19e680] shrink-0" />
              <span>www.spero.lk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase">
          © 2024 Spero Solutions (PVT) Ltd. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-600 text-[10px] tracking-widest uppercase hover:text-[#19e680] transition-colors">Privacy Policy</a>
          <a href="#" className="text-zinc-600 text-[10px] tracking-widest uppercase hover:text-[#19e680] transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
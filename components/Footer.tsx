
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-brand-primary/10 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
        {/* Brand Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary w-11 h-11 rounded-xl flex items-center justify-center font-bold text-zinc-950 text-2xl shadow-[0_0_20px_rgba(0,209,139,0.3)]">S</div>
            <span className="text-2xl font-bold tracking-tighter text-white">SPERO<sup className="text-[10px] text-brand-primary ml-1 font-semibold">Solutions</sup></span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs group-hover:text-zinc-400 transition-colors">
            Innovative architectural finishing solutions for modern residential and commercial spaces. Premium quality meets visionary design in every project we undertake.
          </p>
          <div className="flex gap-5">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-xl text-zinc-500 hover:text-zinc-950 hover:bg-brand-primary hover:border-brand-primary transition-all group/icon">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-10">Quick Links</h4>
          <ul className="space-y-4">
            {['About Spero Solutions', 'Wall Solutions', 'Floor Finishes', 'Our Portfolio', 'Contact Us'].map((item, i) => (
              <li key={i}>
                <Link to={item === 'Contact Us' ? '/contact' : item === 'Our Portfolio' ? '/portfolio' : '/services'} className="text-zinc-500 hover:text-brand-primary text-sm transition-all flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-brand-primary group-hover:w-4 transition-all"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-10">Get in Touch</h4>
          <ul className="space-y-6">
            <li className="flex gap-5 text-sm text-zinc-500 group">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-zinc-950 transition-all">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="group-hover:text-zinc-300 transition-colors">105/1, Madupitiya Road,<br />Mahawila, Panadura, Sri Lanka</span>
            </li>
            <li className="flex gap-5 text-sm text-zinc-500 group">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-zinc-950 transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className="group-hover:text-zinc-300 transition-colors">+94 777 982 138</span>
            </li>
          </ul>
        </div>

        {/* Contact info Right */}
        <div className="lg:pt-20">
          <ul className="space-y-6">
            <li className="flex gap-5 text-sm text-zinc-500 group">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-zinc-950 transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="group-hover:text-zinc-300 transition-colors">marketing@spero.lk</span>
            </li>
            <li className="flex gap-5 text-sm text-zinc-500 group">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-zinc-950 transition-all">
                <Globe className="w-4 h-4" />
              </div>
              <span className="group-hover:text-zinc-300 transition-colors">www.spero.lk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-700 text-[10px] font-black tracking-[0.4em] uppercase">
          © 2024 Spero Solutions (PVT) Ltd. All Rights Reserved.
        </p>
        <div className="flex gap-10">
          <a href="#" className="text-zinc-700 text-[10px] font-black tracking-[0.4em] uppercase hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-zinc-700 text-[10px] font-black tracking-[0.4em] uppercase hover:text-brand-primary transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

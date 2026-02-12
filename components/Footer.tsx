
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const navLinks = [
    { name: 'About Spero', path: '/about' },
    { name: 'Wall Solutions', path: '/services' },
    { name: 'Floor Finishes', path: '/services' },
    { name: 'Our Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className={`bg-[#050a15] text-white pt-24 pb-12 transition-all duration-500 border-t border-white/5 ${className}`}>
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Mobile View: Accordion Concept (from reference image) */}
        <div className="lg:hidden space-y-4 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-zinc-400 text-sm font-bold tracking-[0.4em] uppercase">Contact</h3>
          </div>

          {/* Quick Links Accordion */}
          <div className="border-b border-white/10">
            <button 
              onClick={() => toggleAccordion('quicklinks')}
              className="w-full py-6 flex justify-between items-center text-left"
            >
              <h4 className="text-white text-3xl font-serif">Quick Links</h4>
              <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${activeAccordion === 'quicklinks' ? 'rotate-180 text-[#00A550]' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'quicklinks' ? 'max-h-[400px] mb-6' : 'max-h-0'}`}>
              <div className="flex flex-col space-y-4 pl-1">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-[#00A550] text-sm uppercase tracking-widest transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Information Accordion */}
          <div className="border-b border-white/10">
            <button 
              onClick={() => toggleAccordion('info')}
              className="w-full py-6 flex justify-between items-center text-left"
            >
              <h4 className="text-white text-3xl font-serif">Information</h4>
              <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${activeAccordion === 'info' ? 'rotate-180 text-[#00A550]' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'info' ? 'max-h-[400px] mb-6' : 'max-h-0'}`}>
              <div className="flex flex-col space-y-6 pl-1 pt-2">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-[#00A550] shrink-0 mt-0.5" />
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    105/1, Madupitiya Road, Mahawila,<br />Panadura, Sri Lanka
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 text-[#00A550] shrink-0" />
                  <p className="text-zinc-500 text-sm font-light">marketing@spero.lk</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="w-5 h-5 text-[#00A550] shrink-0" />
                  <p className="text-zinc-500 text-sm font-light">+94 777 702 738</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View: Multi-column Grid */}
        <div className="hidden lg:grid grid-cols-12 gap-8 mb-20">
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block">
              <Logo className="h-10" showText={true} />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-light">
              Innovative architectural finishing solutions for modern residential and commercial spaces. Premium quality meets visionary design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#00A550] hover:text-black hover:border-[#00A550] transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-2xl font-serif tracking-tight">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-zinc-500 hover:text-[#00A550] text-sm transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-2xl font-serif tracking-tight">Get in Touch</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#00A550] shrink-0 mt-0.5" />
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  105/1, Madupitiya Road, Mahawila,<br />Panadura, Sri Lanka
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#00A550] shrink-0" />
                <p className="text-zinc-500 text-sm font-light">marketing@spero.lk</p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#00A550] shrink-0" />
                <p className="text-zinc-500 text-sm font-light">+94 777 702 738</p>
              </div>
              <div className="flex gap-4 items-center">
                <Globe className="w-5 h-5 text-[#00A550] shrink-0" />
                <p className="text-zinc-500 text-sm font-light">www.spero.lk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand & Social (Mobile Only, shown below accordion) */}
        <div className="lg:hidden flex flex-col items-center gap-8 mb-16">
          <Logo className="h-10" showText={true} />
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-[#00A550] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-[#00A550] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-[#00A550] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-[#00A550] transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-bold text-center md:text-left">
            © 2024 SPERO SOLUTIONS (PVT) LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 hover:text-[#00A550] transition-colors font-bold">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 hover:text-[#00A550] transition-colors font-bold">
              TERMS & CONDITIONS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

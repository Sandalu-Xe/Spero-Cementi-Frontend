
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun, ChevronDown, MapPin, Mail, Phone, Globe as GlobeIcon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  isDark: boolean;
  setIsDark: (v: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, isDark, setIsDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCT', path: '/products' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-black/80 py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="group">
            <Logo className="h-10 md:h-12" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[14px] font-black tracking-[0.3em] transition-all hover:text-[#00A550] relative group ${
                  isActive(link.path) ? 'text-[#00A550]' : 'text-zinc-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-[#00A550] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/contact" className="bg-[#00A550] text-black px-10 py-3 rounded-md text-[11px] font-black tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,165,80,0.15)] uppercase">
              ENQUIRE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Fade in instead of slide) */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#050a15] p-8 flex flex-col h-full overflow-y-auto">
          {/* Mobile Header - Exactly as image */}
          <div className="flex justify-between items-center mb-8">
             <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Logo className="h-10" showText={false} />
             </Link>
             <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#00A550] transition-colors">
                <X className="w-8 h-8 font-light" />
             </button>
          </div>

          <div className="text-center mb-16">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.6em] uppercase">CONTACT</p>
          </div>

          {/* Accordion Layout Grid - Exactly as image */}
          <div className="space-y-4 px-2">
            {/* Quick Links Section */}
            <div className="border-b border-white/5">
              <button 
                onClick={() => toggleSection('quicklinks')}
                className="w-full py-10 flex justify-between items-center text-left"
              >
                <h4 className="text-white text-4xl font-serif">Quick Links</h4>
                <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-500 ${activeSection === 'quicklinks' ? 'rotate-180 text-[#00A550]' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'quicklinks' ? 'max-h-[500px] mb-8' : 'max-h-0'}`}>
                <div className="flex flex-col gap-6 pl-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-light tracking-widest uppercase transition-colors ${
                        isActive(link.path) ? 'text-[#00A550]' : 'text-zinc-500'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="border-b border-white/5">
              <button 
                onClick={() => toggleSection('info')}
                className="w-full py-10 flex justify-between items-center text-left"
              >
                <h4 className="text-white text-4xl font-serif">Information</h4>
                <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-500 ${activeSection === 'info' ? 'rotate-180 text-[#00A550]' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'info' ? 'max-h-[500px] mb-8' : 'max-h-0'}`}>
                <div className="flex flex-col gap-8 pl-2">
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-5 h-5 text-[#00A550] shrink-0 mt-1" />
                    <p className="text-zinc-500 text-sm leading-relaxed tracking-wider font-light">
                      105/1, MADUPITIYA ROAD,<br />MAHAWILA, PANADURA, SRI LANKA
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="w-5 h-5 text-[#00A550] shrink-0" />
                    <p className="text-zinc-500 text-sm font-bold tracking-widest">+94 777 982 138</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="w-5 h-5 text-[#00A550] shrink-0" />
                    <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase">MARKETING@SPERO.LK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle Area - Exactly as image */}
          <div className="mt-auto py-12 flex justify-center items-center gap-16">
              <button 
                onClick={() => setIsDark(true)}
                className={`transition-all duration-500 ${isDark ? 'text-[#00A550] scale-125' : 'text-zinc-700'}`}
              >
                <Moon className="w-6 h-6" />
              </button>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <button 
                onClick={() => setIsDark(false)}
                className={`transition-all duration-500 ${!isDark ? 'text-[#00A550] scale-125' : 'text-zinc-700'}`}
              >
                <Sun className="w-6 h-6" />
              </button>
          </div>

          {/* Mobile Footer Button - Exactly as image */}
          <div className="mt-4">
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="bg-[#00A550] text-black w-full block text-center py-6 rounded-md font-black text-xs tracking-[0.3em] uppercase hover:bg-white transition-all active:scale-95"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

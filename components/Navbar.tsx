
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
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
              className={`text-[10px] font-black tracking-[0.3em] transition-all hover:text-[#00A550] relative group ${
                isActive(link.path) ? 'text-[#00A550]' : 'text-zinc-400'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-[#00A550] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button className="text-zinc-400 hover:text-[#00A550] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/contact" className="bg-[#00A550] text-black px-10 py-3 rounded-md text-[11px] font-black tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,165,80,0.15)] uppercase">
            ENQUIRE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-black z-[100] p-12 flex flex-col gap-8 animate-fade-in">
          <div className="flex justify-between items-center mb-10">
             <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Logo className="h-10" />
             </Link>
             <button onClick={() => setIsMenuOpen(false)} className="text-white"><X className="w-8 h-8" /></button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-serif tracking-tighter transition-colors ${isActive(link.path) ? 'text-[#00A550]' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto border-t border-zinc-800 pt-10">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-[#00A550] text-black w-full block text-center py-6 rounded-md font-black text-xs tracking-widest uppercase">
              START A PROJECT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

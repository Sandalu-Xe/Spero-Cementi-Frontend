
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-brand-primary w-11 h-11 rounded-xl flex items-center justify-center font-bold text-zinc-950 text-2xl shadow-[0_0_20px_rgba(0,209,139,0.4)] transition-transform group-hover:scale-110">S</div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            SPERO<sup className="text-[10px] text-brand-primary ml-1 font-semibold tracking-normal uppercase">Solutions</sup>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-bold tracking-[0.2em] transition-all hover:text-brand-primary relative group ${
                isActive(link.path) ? 'text-brand-primary' : 'text-zinc-400'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button className="text-zinc-400 hover:text-brand-primary transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <Link to="/contact" className="bg-brand-primary text-zinc-950 px-8 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-0.5 uppercase">
            ENQUIRE NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-t border-brand-primary/20 p-8 flex flex-col gap-6 animate-fade-in-down shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-bold tracking-widest transition-colors ${isActive(link.path) ? 'text-brand-primary' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-primary text-zinc-950 text-center py-5 rounded-xl font-black tracking-widest uppercase">
            ENQUIRE NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

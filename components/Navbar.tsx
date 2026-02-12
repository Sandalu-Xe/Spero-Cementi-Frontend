
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-sm shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#19e680] w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(25,230,128,0.4)]">S</div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            SPERO<sup className="text-[10px] text-[#19e680] ml-1 font-normal tracking-normal uppercase">Solutions</sup>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold tracking-widest transition-colors hover:text-[#19e680] ${
                isActive(link.path) ? 'text-[#19e680]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="text-white hover:text-[#19e680] transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <Link to="/contact" className="bg-[#19e680] text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-[#15c26b] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(25,230,128,0.3)]">
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-white/10 p-6 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-bold tracking-widest ${isActive(link.path) ? 'text-[#19e680]' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-[#19e680] text-black text-center py-4 rounded-lg font-bold">
            ENQUIRE NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
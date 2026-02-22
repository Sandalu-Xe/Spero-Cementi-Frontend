import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun, ChevronDown, MapPin, Mail, Phone, Globe as GlobeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  isDark: boolean;
  setIsDark: (v: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, isDark, setIsDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-white/5 ${isScrolled ? 'bg-black backdrop-blur-md py-4' : 'bg-black py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo on the LEFT SIDE CONNER */}
          <Link to="/" className="group flex-shrink-0">
            <Logo className="h-10 md:h-12" />
          </Link>

          {/* Navigation Links and CTA on the RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[14px] font-black tracking-[0.3em] transition-all hover:text-[#00A550] relative group uppercase ${
                  isActive(link.path) ? 'text-[#00A550]' : 'text-zinc-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-[#00A550] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            
            <Link to="/contact" className="bg-[#00A550] text-black px-10 py-3 rounded-md text-[11px] font-black tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,165,80,0.15)] uppercase">
              ENQUIRE
            </Link>
          </div>

          {/* Mobile Toggle on the right in mobile */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slider */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-[400px] bg-[#f8f7f4] dark:bg-[#0a0a0a] z-[200] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 flex justify-between items-center border-b border-black/5 dark:border-white/5">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <Logo className="h-10" />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-4xl font-serif transition-all duration-300 ${
                        isActive(link.path) 
                          ? 'text-[#00A550] translate-x-2' 
                          : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white hover:translate-x-2'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-8 border-t border-black/5 dark:border-white/5 space-y-6">
                <div className="flex justify-between items-center px-4">
                  <button onClick={() => setIsDark(true)} className={`transition-all duration-500 ${isDark ? 'text-[#00A550] scale-125' : 'text-zinc-400'}`}>
                    <Moon className="w-5 h-5" />
                  </button>
                  <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10"></div>
                  <button onClick={() => setIsDark(false)} className={`transition-all duration-500 ${!isDark ? 'text-[#00A550] scale-125' : 'text-zinc-400'}`}>
                    <Sun className="w-5 h-5" />
                  </button>
                </div>

                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="bg-[#00A550] text-black w-full block text-center py-5 rounded-md font-black text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all active:scale-95 shadow-lg shadow-[#00A550]/20"
                >
                  ENQUIRE NOW
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

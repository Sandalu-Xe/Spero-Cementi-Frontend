import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/BlogDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ThemeToggle = ({ isDark, setIsDark, className = "" }: { isDark: boolean, setIsDark: (v: boolean) => void, className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button 
        onClick={() => setIsDark(!isDark)}
        className="group relative flex flex-col items-center gap-4 py-8 px-3 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-full shadow-2xl transition-all hover:px-4"
        aria-label="Toggle Theme"
      >
        <div className={`transition-all duration-700 ${isDark ? 'rotate-0 opacity-100' : 'rotate-180 opacity-30'}`}>
          <Moon className="w-5 h-5 text-[#00A550]" />
        </div>
        <div className="w-[1px] h-12 bg-[#00A550]/20"></div>
        <div className={`transition-all duration-700 ${!isDark ? 'rotate-0 opacity-100' : 'rotate-180 opacity-30'}`}>
          <Sun className="w-5 h-5 text-[#00A550]" />
        </div>
        
        {/* Label - visible on hover */}
        <span className="absolute left-full ml-4 whitespace-nowrap bg-black dark:bg-white text-white dark:text-black text-[8px] font-black tracking-widest px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase">
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </span>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('spero-theme');
    return saved ? saved === 'dark' : true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('spero-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('spero-theme', 'light');
    }
  }, [isDark]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <Router>
      <ScrollToTop />
      {/* Fixed Desktop Theme Toggle */}
      <ThemeToggle 
        isDark={isDark} 
        setIsDark={setIsDark} 
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] hidden md:flex" 
      />
      
      <div className="flex flex-col min-h-screen transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          isDark={isDark} 
          setIsDark={setIsDark} 
        />
        
        <main className={`flex-grow pt-20 transition-all duration-500 ${isMenuOpen ? 'blur-md scale-[0.98] brightness-50' : 'blur-0 scale-100 brightness-100'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
          </Routes>
        </main>
        
        <Footer className={isMenuOpen ? 'blur-md brightness-50' : ''} />
      </div>
    </Router>
  );
};

export default App;
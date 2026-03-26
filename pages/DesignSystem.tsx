import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const ColorCard = ({ name, hex, description }: { name: string; hex: string; description: string }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div 
        className="h-32 w-full cursor-pointer relative" 
        style={{ backgroundColor: hex }}
        onClick={copyToClipboard}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
          {copied ? <Check className="text-white w-6 h-6" /> : <Copy className="text-white w-6 h-6" />}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-black text-xs tracking-widest uppercase mb-1">{name}</h3>
        <p className="text-zinc-500 text-[11px] mb-3 font-mono uppercase">{hex}</p>
        <p className="text-zinc-400 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const DesignSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f4] dark:bg-black pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="text-[#00A550] font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Spero Design Language</span>
          <h1 className="text-6xl md:text-8xl font-serif text-black dark:text-white mb-6">Design System</h1>
          <p className="text-zinc-500 max-w-2xl text-lg">
            A comprehensive guide to the visual identity of Spero. Use these tokens to maintain consistency across Figma and development.
          </p>
        </header>

        {/* Colors Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-serif italic text-black dark:text-white">Color Palette</h2>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ColorCard 
              name="Spero Green" 
              hex="#00A550" 
              description="The primary brand color. Used for CTAs, highlights, and active states."
            />
            <ColorCard 
              name="Deep Black" 
              hex="#000000" 
              description="Primary background for dark mode and high-contrast sections."
            />
            <ColorCard 
              name="Warm Paper" 
              hex="#F8F7F4" 
              description="Primary background for light mode. Provides a luxury, organic feel."
            />
            <ColorCard 
              name="Zinc Gray" 
              hex="#71717A" 
              description="Used for secondary text, borders, and subtle UI elements."
            />
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-serif italic text-black dark:text-white">Typography</h2>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/5"></div>
          </div>
          <div className="space-y-16">
            <div className="border-b border-black/5 dark:border-white/5 pb-10">
              <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-4 block">Display / Serif</span>
              <h3 className="text-7xl font-serif text-black dark:text-white mb-4">Cormorant Garamond</h3>
              <p className="text-zinc-500 italic">Used for headings, hero sections, and editorial content.</p>
            </div>
            <div className="border-b border-black/5 dark:border-white/5 pb-10">
              <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-4 block">UI / Sans-Serif</span>
              <h3 className="text-5xl font-sans font-medium text-black dark:text-white mb-4 tracking-tight">Inter</h3>
              <p className="text-zinc-500">Used for body text, navigation, buttons, and functional UI elements.</p>
            </div>
            <div className="border-b border-black/5 dark:border-white/5 pb-10">
              <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-4 block">Navigation / Labels</span>
              <h3 className="text-2xl font-black text-black dark:text-white mb-4 tracking-[0.4em] uppercase">SPERO NAV LABEL</h3>
              <p className="text-zinc-500">Used for navigation links and micro-labels. Always uppercase with high tracking.</p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-serif italic text-black dark:text-white">Core Components</h2>
            <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block">Primary Button</span>
              <button className="bg-[#00A550] text-black px-12 py-4 rounded-md text-[11px] font-black tracking-[0.3em] uppercase shadow-[0_10px_20px_rgba(0,165,80,0.15)]">
                ENQUIRE NOW
              </button>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block">Secondary Button</span>
              <button className="border border-black/10 dark:border-white/10 text-black dark:text-white px-12 py-4 rounded-md text-[11px] font-black tracking-[0.3em] uppercase">
                LEARN MORE
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystem;

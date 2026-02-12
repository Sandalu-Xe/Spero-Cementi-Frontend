
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, CheckCircle, Lightbulb, Recycle, ShieldCheck, Quote, Search, FlaskConical, Factory, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop",
    title: "Architectural Wall Finishes",
    subtitle: "AESTHETIC EXCELLENCE",
    desc: "Transforming surfaces with polymer-based textures that provide both superior protection and modern visual appeal."
  },
  {
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop",
    title: "Seamless Floor Solutions",
    subtitle: "ENGINEERED DURABILITY",
    desc: "Experience industrial-grade strength meets residential elegance with our advanced self-leveling cement compounds."
  },
  {
    image: "https://images.unsplash.com/photo-1581850518616-bcb8186c39ea?q=80&w=2070&auto=format&fit=crop",
    title: "Modern Polymer Textures",
    subtitle: "INNOVATIVE FORMULAS",
    desc: "Our unique cement blends offer flexible application and unmatched resistance to environmental weathering."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="bg-[#000000]">
      {/* Hero Section - Matching Reference Image */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Carousel */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt="Cement texture background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6">
          <p className="text-[#19e680] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-4 animate-fade-in">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
          
          <h1 className="text-6xl md:text-9xl font-serif text-white leading-[0.9] tracking-tight mb-8">
            {HERO_SLIDES[currentSlide].title.split(' ').slice(0, 1)} <br />
            {HERO_SLIDES[currentSlide].title.split(' ').slice(1, 2)} <br />
            {HERO_SLIDES[currentSlide].title.split(' ').slice(2).join(' ')}
          </h1>

          <div className="flex justify-center py-4">
            <div className="w-20 h-1 bg-[#19e680] rounded-full shadow-[0_0_10px_rgba(25,230,128,0.5)]"></div>
          </div>

          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
            {HERO_SLIDES[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link to="/portfolio" className="bg-[#19e680] text-black px-12 py-4 rounded-sm font-bold text-[10px] tracking-[0.2em] hover:bg-[#15c26b] transition-all transform hover:scale-105 uppercase shadow-[0_10px_30px_rgba(25,230,128,0.2)]">
              EXPLORE PRODUCTS
            </Link>
            <Link to="/services" className="border border-zinc-700 text-white px-12 py-4 rounded-sm font-bold text-[10px] tracking-[0.2em] hover:border-[#19e680] hover:text-[#19e680] transition-all uppercase">
              TECHNICAL DATA
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 p-4 rounded-full border border-zinc-800 text-white hover:border-[#19e680] hover:text-[#19e680] transition-all group z-20"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 p-4 rounded-full border border-zinc-800 text-white hover:border-[#19e680] hover:text-[#19e680] transition-all group z-20"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-10 bg-[#19e680]' : 'w-4 bg-zinc-700 hover:bg-zinc-500'}`}
            />
          ))}
        </div>
      </section>

      {/* Main content below Hero remains consistent but updated with darker tone */}
      <section className="py-32 container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-24">
          <p className="text-[#19e680] text-xs font-bold tracking-[0.4em] uppercase">Architecture in Motion</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Innovative Solutions</h2>
          <div className="w-16 h-1 bg-[#19e680] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16">
          <div className="space-y-20">
            <div className="text-right space-y-4 group">
              <div className="flex justify-end"><FlaskConical className="w-10 h-10 text-[#19e680] group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-serif text-white">Our Vision</h3>
              <p className="text-zinc-500 text-sm leading-relaxed ml-auto max-w-xs">
                Dedicated to introducing innovative and reliable solutions to the building industry, bridging high-end design with practical economy.
              </p>
            </div>
            <div className="text-right space-y-4 group">
              <div className="flex justify-end"><Recycle className="w-10 h-10 text-[#19e680] group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-serif text-white">Sustainability</h3>
              <p className="text-zinc-500 text-sm leading-relaxed ml-auto max-w-xs">
                Committed to waste reduction and environmentally friendly operations, protecting nature while delivering superior quality products.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-sm group border border-zinc-900 bg-zinc-950 p-2">
             <div className="w-full h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594913785162-e6785b4ad3a2?q=80&w=1976&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" 
                  alt="Cement texture application" 
                />
             </div>
             <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          </div>

          <div className="space-y-20">
            <div className="text-left space-y-4 group">
              <div><Lightbulb className="w-10 h-10 text-[#19e680] group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-serif text-white">Our Passion</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Passionate about modern architectural trends. Our finishes are designed to facilitate luxury through innovative and economical products.
              </p>
            </div>
            <div className="text-left space-y-4 group">
              <div><CheckCircle className="w-10 h-10 text-[#19e680] group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-serif text-white">Global Standards</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Built upon quality consistency, innovation, and economy. Tested to meet the highest international building standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finishing Section Updated */}
      <section className="py-32 bg-zinc-950/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-4 mb-24">
            <p className="text-[#19e680] text-xs font-bold tracking-[0.4em] uppercase">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Surface Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FinishingCard 
              title="Floor"
              subtitle="Finishes"
              description="From seamless epoxy to high-durability tile adhesives, we offer various options for finishing your floors, ensuring long-lasting elegance."
              image="https://images.unsplash.com/photo-1581850518616-bcb8186c39ea?q=80&w=1000"
              link="/services"
            />
            <FinishingCard 
              title="Wall"
              subtitle="Finishes"
              description="The finish of a wall is a key design factor. We offer global textures with localized quality control to match any architectural vision."
              image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000"
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Technical Guidance Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <p className="text-[#19e680] text-xs font-bold tracking-[0.4em] uppercase">Professional Guidance</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Mastery in Every Layer</h2>
            <p className="text-zinc-500 leading-relaxed text-lg">
              Achieving a perfect finish requires more than just premium materials. It demands technical insight and correct application methodologies.
            </p>

            <div className="space-y-8">
              <div className="p-10 border border-zinc-900 rounded-sm bg-zinc-950/50 backdrop-blur-sm relative group transition-all hover:border-[#19e680]/30">
                <Quote className="absolute top-6 right-8 text-[#19e680]/10 w-16 h-16" />
                <p className="text-zinc-300 italic mb-6 leading-relaxed text-lg">
                  "Always use high-grade tile adhesive; it ensures the bonding strength is maximized for long-term durability and aesthetic preservation."
                </p>
                <p className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase">TECHNICAL ADVISORY</p>
              </div>

              <div className="p-10 border border-zinc-900 rounded-sm bg-zinc-950/50 backdrop-blur-sm relative group transition-all hover:border-[#19e680]/30">
                <Quote className="absolute top-6 right-8 text-[#19e680]/10 w-16 h-16" />
                <p className="text-zinc-300 italic mb-6 leading-relaxed text-lg">
                  "For exterior cement walls, Tile Bond is essential to prevent unsightly cracks effectively over time."
                </p>
                <p className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase">MASTER APPLICATOR</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square rounded-sm overflow-hidden border-[1px] border-zinc-800">
               <img 
                 src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
                 alt="Finished surface close-up" 
                 className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#19e680] p-12 rounded-sm shadow-2xl">
              <span className="block text-6xl font-serif text-black leading-none mb-2">15+</span>
              <span className="text-[10px] text-black font-bold tracking-[0.3em] uppercase">Years of excellence</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Updated Helper Components for Darker Theme
const ProjectCard = ({ image, isTall }: { image: string, isTall?: boolean }) => (
  <div className={`group relative overflow-hidden rounded-sm ${isTall ? 'h-full min-h-[500px]' : 'aspect-square'} border border-zinc-900`}>
    <img 
      src={`${image}?auto=format&fit=crop&w=800&q=80`} 
      alt="Project" 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-75" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
        <p className="text-[#19e680] text-[10px] font-bold tracking-widest uppercase mb-3">Architectural</p>
        <h3 className="text-white text-3xl font-serif">Luxe Surface Design</h3>
      </div>
    </div>
  </div>
);

const FinishingCard = ({ title, subtitle, description, image, link }: any) => (
  <div className="group relative overflow-hidden rounded-sm h-[600px] border border-zinc-900 shadow-2xl">
    <img src={image} className="absolute inset-0 w-full h-full object-cover brightness-[0.3] transition-all duration-1000 group-hover:brightness-50 group-hover:scale-105" alt={title} />
    <div className="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-5xl font-serif text-white">
            {title} <span className="text-[#19e680] italic">{subtitle}</span>
          </h3>
          <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-[#19e680] group-hover:border-[#19e680] transition-colors">
            {title === "Floor" ? <Factory className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
          </div>
        </div>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-md group-hover:text-zinc-200 transition-colors">
          {description}
        </p>
        <Link to={link} className="inline-flex items-center gap-4 text-[#19e680] text-[10px] font-bold tracking-[0.4em] uppercase group/link transition-all">
          Explore {title} <ArrowRight className="w-5 h-5 group-hover/link:translate-x-3 transition-transform" />
        </Link>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ icon, step, title, subtitle, isAccent }: any) => (
  <div className="flex flex-col items-center group">
    <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-10 relative transition-all duration-500 ${isAccent ? 'bg-[#19e680] text-black scale-110 shadow-[0_0_50px_rgba(25,230,128,0.3)]' : 'bg-zinc-950 text-[#19e680]/30 border border-zinc-900 group-hover:border-[#19e680]/50 group-hover:text-[#19e680]'}`}>
      {icon}
      <span className={`absolute -top-3 -right-3 text-[10px] w-10 h-10 rounded-full border flex items-center justify-center font-bold ${isAccent ? 'bg-black text-[#19e680] border-[#19e680]/20' : 'bg-zinc-900 text-white border-zinc-800'}`}>{step}</span>
    </div>
    <h4 className="text-white text-xl font-serif mb-2 tracking-tight">{title}</h4>
    <p className="text-zinc-600 text-[10px] font-bold tracking-[0.4em] uppercase">{subtitle}</p>
  </div>
);

export default Home;

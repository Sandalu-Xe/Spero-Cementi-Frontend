
import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle, Lightbulb, Recycle, ShieldCheck, Quote, Search, FlaskConical, Factory, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[#050706]">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          {/* Green tinted overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-brand-dark/40 to-zinc-950"></div>
        </div>
        <div className="relative z-10 text-center space-y-10 px-4">
          <p className="text-brand-primary text-[10px] font-black tracking-[0.6em] uppercase animate-pulse">Redefining Architectural Luxury</p>
          <h1 className="text-5xl md:text-9xl font-serif text-white max-w-5xl mx-auto leading-[1.1] tracking-tight">
            Premium Wall & <br />
            <span className="text-brand-primary italic">Floor Finishes</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link to="/portfolio" className="bg-brand-primary text-zinc-950 px-12 py-5 rounded-full font-black text-xs tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,209,139,0.3)]">
              VIEW PORTFOLIO
            </Link>
            <Link to="/services" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-black text-xs tracking-widest hover:bg-white/15 transition-all">
              OUR SERVICES
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-primary animate-bounce cursor-pointer opacity-70">
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>

      {/* Innovative Solutions (About Intro) */}
      <section className="py-32 container mx-auto px-6 lg:px-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="text-center space-y-6 mb-24">
          <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">Welcome to Spero Solutions</p>
          <h2 className="text-5xl md:text-6xl font-serif text-white">Innovative Architectural Solutions</h2>
          <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(0,209,139,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16">
          {/* Left Column */}
          <div className="space-y-20">
            <div className="text-right space-y-5 group">
              <div className="flex justify-end p-4 bg-brand-primary/10 rounded-2xl w-fit ml-auto transition-colors group-hover:bg-brand-primary/20"><FlaskConical className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Our Vision</h3>
              <p className="text-zinc-500 text-sm leading-relaxed ml-auto max-w-xs group-hover:text-zinc-300 transition-colors">
                A premier manufacturer dedicated to introducing innovative and reliable solutions to the building industry, bridging high-end design with practical economy.
              </p>
            </div>
            <div className="text-right space-y-5 group">
              <div className="flex justify-end p-4 bg-brand-primary/10 rounded-2xl w-fit ml-auto transition-colors group-hover:bg-brand-primary/20"><Recycle className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Sustainability</h3>
              <p className="text-zinc-500 text-sm leading-relaxed ml-auto max-w-xs group-hover:text-zinc-300 transition-colors">
                Committed to waste reduction and environmentally friendly operations, protecting nature while delivering superior quality products.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] group border border-brand-primary/20 p-2">
             <div className="w-full h-full overflow-hidden rounded-[32px]">
               <img 
                 src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1974&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                 alt="Texture detail" 
               />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Right Column */}
          <div className="space-y-20">
            <div className="text-left space-y-5 group">
              <div className="p-4 bg-brand-primary/10 rounded-2xl w-fit transition-colors group-hover:bg-brand-primary/20"><Lightbulb className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Our Passion</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs group-hover:text-zinc-300 transition-colors">
                We are passionate about modern architectural trends. Our finishes are designed to facilitate luxury through innovative and economical products.
              </p>
            </div>
            <div className="text-left space-y-5 group">
              <div className="p-4 bg-brand-primary/10 rounded-2xl w-fit transition-colors group-hover:bg-brand-primary/20"><CheckCircle className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" /></div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Global Standards</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs group-hover:text-zinc-300 transition-colors">
                Built upon quality consistency, innovation, and economy. Every product is tested to meet the highest international building standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-[#050706]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-6">
              <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">Portfolio</p>
              <h2 className="text-5xl md:text-6xl font-serif text-white">Masterpiece Projects</h2>
            </div>
            <div className="flex gap-10 text-[10px] font-black tracking-widest text-zinc-500">
              <button className="text-brand-primary border-b-2 border-brand-primary pb-3">ALL PROJECTS</button>
              <button className="hover:text-brand-primary transition-all pb-3">WALL FINISHES</button>
              <button className="hover:text-brand-primary transition-all pb-3">FLOOR FINISHES</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" title="Emerald Villa Interior" />
            <ProjectCard image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace" title="Verdant Lofts" />
            <div className="row-span-2">
              <ProjectCard image="https://images.unsplash.com/photo-1542332213-31f87348057f" title="Spero Grand Hotel" isTall />
            </div>
            <ProjectCard image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85" title="Botanical Facades" />
            <ProjectCard image="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6" title="Luxe Green Suites" />
          </div>

          <div className="mt-20 text-center">
            <Link to="/portfolio" className="inline-block bg-brand-primary text-zinc-950 px-14 py-5 rounded-full font-black text-xs tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(0,209,139,0.2)]">
              DISCOVER MORE PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Finishing Excellence (Expertise) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh -z-10 opacity-50"></div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-6 mb-24">
            <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">Our Expertise</p>
            <h2 className="text-5xl md:text-6xl font-serif text-white">Finishing Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FinishingCard 
              title="Floor"
              subtitle="Finishes"
              description="From seamless epoxy to high-durability tile adhesives, we offer various options for finishing your floors, ensuring long-lasting elegance and industrial-grade strength."
              image="https://images.unsplash.com/photo-1581850518616-bcb8186c39ea"
              link="/services"
            />
            <FinishingCard 
              title="Wall"
              subtitle="Finishes"
              description="The finish of a wall is a key design factor. We offer a vast array of global textures with localized quality control to match any architectural vision."
              image="https://images.unsplash.com/photo-1595428774223-ef52624120d2"
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Specialized Process */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase mb-6">Execution Strategy</p>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-24">Our Specialized Process</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <ProcessStep 
              icon={<Search className="w-9 h-9" />}
              step="1"
              title="Identify Need"
              subtitle="CONSULTATION"
            />
            <ProcessStep 
              icon={<FlaskConical className="w-9 h-9" />}
              step="2"
              title="R & D"
              subtitle="LAB TESTING"
            />
            <ProcessStep 
              icon={<Factory className="w-9 h-9" />}
              step="3"
              title="Production"
              subtitle="MANUFACTURING"
            />
            <ProcessStep 
              icon={<CheckSquare className="w-9 h-9" />}
              step="4"
              title="Quality Control"
              subtitle="GLOBAL STANDARDS"
              isAccent
            />
          </div>
        </div>
      </section>

      {/* Professional Guidance */}
      <section className="py-32 bg-zinc-950/40 relative">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <p className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">Expert Knowledge</p>
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.15]">Professional Guidance for Perfect Finishes</h2>
            <p className="text-zinc-500 leading-relaxed text-lg">
              Achieving a perfect finish requires more than just premium materials. It demands technical insight and the correct application methodologies from industry specialists.
            </p>

            <div className="space-y-8">
              <div className="p-10 border border-brand-primary/10 rounded-3xl bg-zinc-950/50 backdrop-blur-md relative group transition-all hover:border-brand-primary/30">
                <Quote className="absolute top-6 right-8 text-brand-primary/10 w-16 h-16" />
                <p className="text-zinc-300 italic mb-6 leading-relaxed text-lg">
                  "Always use high-grade tile adhesive; it ensures the bonding strength is maximized for long-term durability and aesthetic preservation."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-primary"></div>
                  <p className="text-brand-primary text-[10px] font-black tracking-widest uppercase">TECHNICAL DIVISION</p>
                </div>
              </div>

              <div className="p-10 border border-brand-primary/10 rounded-3xl bg-zinc-950/50 backdrop-blur-md relative group transition-all hover:border-brand-primary/30">
                <Quote className="absolute top-6 right-8 text-brand-primary/10 w-16 h-16" />
                <p className="text-zinc-300 italic mb-6 leading-relaxed text-lg">
                  "For exterior cement walls, Tile Bond is essential to prevent unsightly cracks effectively over time, preserving the structural integrity."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-primary"></div>
                  <p className="text-brand-primary text-[10px] font-black tracking-widest uppercase">MASTER APPLICATOR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-[24px] border-zinc-950 shadow-[0_0_100px_rgba(0,209,139,0.1)]">
               <img 
                 src="https://images.unsplash.com/photo-1594913785162-e6785b4ad3a2?q=80&w=1976&auto=format&fit=crop" 
                 alt="Expert guidance" 
                 className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-primary p-10 rounded-[40px] shadow-2xl transform hover:scale-105 transition-transform">
              <span className="block text-5xl font-serif text-zinc-950 leading-none mb-2">15+</span>
              <span className="text-[10px] text-zinc-950 font-black tracking-[0.2em] uppercase">Years of legacy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ProjectCard = ({ image, title, isTall }: { image: string, title: string, isTall?: boolean }) => (
  <div className={`group relative overflow-hidden rounded-[32px] border border-white/5 ${isTall ? 'h-full min-h-[500px]' : 'aspect-square'}`}>
    <img 
      src={`${image}?auto=format&fit=crop&w=1000&q=80`} 
      alt={title} 
      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-end p-10">
      <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-700">
        <p className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase mb-3">Spero Featured</p>
        <h3 className="text-white text-3xl font-serif leading-tight">{title}</h3>
      </div>
    </div>
    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-brand-primary/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-500">
      <ArrowRight className="w-5 h-5 text-brand-primary -rotate-45" />
    </div>
  </div>
);

const FinishingCard = ({ title, subtitle, description, image, link }: any) => (
  <div className="group relative overflow-hidden rounded-[40px] h-[600px] border border-brand-primary/10">
    <img src={image} className="absolute inset-0 w-full h-full object-cover brightness-[0.35] grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-5xl font-serif text-white">
            {title} <span className="text-brand-primary italic">{subtitle}</span>
          </h3>
          <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center backdrop-blur-md">
            {title === "Floor" ? <Factory className="w-7 h-7 text-brand-primary" /> : <ShieldCheck className="w-7 h-7 text-brand-primary" />}
          </div>
        </div>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-md group-hover:text-zinc-200 transition-colors">
          {description}
        </p>
        <Link to={link} className="inline-flex items-center gap-4 text-brand-primary text-[11px] font-black tracking-[0.3em] uppercase group/link transition-all hover:text-white">
          Explore {title} Solutions <div className="w-10 h-[1px] bg-brand-primary group-hover/link:w-16 transition-all"></div>
        </Link>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ icon, step, title, subtitle, isAccent }: any) => (
  <div className="flex flex-col items-center group relative">
    <div className={`w-28 h-28 rounded-3xl flex items-center justify-center mb-10 relative transition-all duration-700 transform ${isAccent ? 'bg-brand-primary text-zinc-950 scale-110 shadow-[0_0_50px_rgba(0,209,139,0.4)] group-hover:rotate-12' : 'bg-zinc-950 text-brand-primary/40 border border-brand-primary/10 group-hover:border-brand-primary/60 group-hover:text-brand-primary shadow-xl group-hover:-translate-y-2'}`}>
      {icon}
      <span className={`absolute -top-3 -right-3 text-xs w-10 h-10 rounded-xl flex items-center justify-center font-black tracking-tighter ${isAccent ? 'bg-zinc-950 text-brand-primary border border-brand-primary/20' : 'bg-brand-primary text-zinc-950'}`}>{step}</span>
    </div>
    <h4 className="text-white text-xl font-bold mb-2 tracking-tight">{title}</h4>
    <p className="text-brand-primary/60 text-[10px] font-black tracking-[0.4em] uppercase">{subtitle}</p>
    
    {step !== "4" && (
      <div className="hidden lg:block absolute top-14 left-full w-full h-[2px] bg-gradient-to-r from-brand-primary/20 to-transparent -ml-6 -z-10"></div>
    )}
  </div>
);

export default Home;

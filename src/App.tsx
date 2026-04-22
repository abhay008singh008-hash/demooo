/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  Star, 
  MapPin, 
  Menu, 
  X,
  Sparkles,
  Award,
  GraduationCap,
  Scissors,
  Paintbrush,
  Heart,
  Palette,
  CheckCircle2
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const COLORS = {
  gold: '#D4AF37',
  black: '#0A0A0A',
  beige: '#F5E6DA',
  white: '#FFFFFF',
};

const SectionHeading = ({ children, subtitle, centered = true }: { children: React.ReactNode; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display text-white leading-tight"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className={`h-px w-24 bg-gold mt-8 ${centered ? 'mx-auto' : ''}`}
    />
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'glow' | 'academy'; 
  className?: string;
  onClick?: () => void;
}) => {
  const base = "px-8 py-4 rounded-full font-bold transition-all duration-300 text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 relative overflow-hidden group";
  const variants = {
    primary: "bg-gold text-premium-black hover:bg-white hover:scale-105 shadow-xl shadow-gold/20",
    secondary: "bg-white text-premium-black hover:bg-gold hover:scale-105 shadow-xl",
    outline: "border border-gold text-gold hover:bg-gold hover:text-premium-black",
    glow: "bg-gold text-premium-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105",
    academy: "bg-premium-black text-gold border border-gold/30 hover:border-gold hover:scale-105"
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    </button>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-premium-black overflow-x-hidden">
      {/* Sticky Actions */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
        <motion.a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center text-white"
        >
          <MessageCircle size={28} />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(238,42,123,0.4)] flex items-center justify-center text-white"
        >
          <Instagram size={28} />
        </motion.a>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-700 ${isScrolled ? 'bg-premium-black/95 py-4 shadow-2xl border-b border-gold/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="w-12 h-12 border border-gold group-hover:border-white transition-colors flex items-center justify-center font-display font-bold text-gold group-hover:text-white text-2xl tracking-tighter">
              HB
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-[0.1em] text-white leading-none">HOUSE OF BEAUTY</span>
              <span className="text-[10px] tracking-[0.3em] text-gold font-bold uppercase mt-1">Studio & Academy</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Services', 'Courses', 'Demo', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-gold transition-colors font-bold relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="h-4 w-px bg-white/20"></div>
            <Button onClick={() => scrollTo('demo')} variant="outline" className="py-2.5 px-6 !text-[9px]">Free Demo</Button>
          </div>

          <button className="lg:hidden text-gold hover:text-white transition-colors" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-110 bg-premium-black flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-2xl text-gold tracking-widest uppercase">HB STUDIO • ACADEMY</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gold">
                <X size={40} />
              </button>
            </div>
            <div className="flex flex-col gap-8 items-center text-center">
              {['About', 'Services', 'Courses', 'Demo', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-2xl uppercase tracking-[0.2em] text-white hover:text-gold transition-colors font-display"
                >
                  {item}
                </button>
              ))}
              <div className="w-full h-px bg-white/10 my-4"></div>
              <Button onClick={() => scrollTo('demo')} className="w-full">Book Free Demo</Button>
              <Button onClick={() => scrollTo('services')} variant="outline" className="w-full">Book Studio Service</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 blur-[150px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8 backdrop-blur-md">
              <Sparkles className="text-gold" size={16} />
              <span className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-bold">Chandigarh's Elite Beauty Destination</span>
            </div>
                       <h1 className="text-5xl md:text-8xl font-display text-white mb-10 leading-[1.1] text-glow">
              Luxury Hair & Nail Studio + <br />
              <span className="italic text-gold">Professional Academy</span> ✨
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-14 font-light leading-relaxed tracking-[0.05em]">
              Elevate your style at our <span className="text-white font-medium italic underline decoration-gold/50">Hair & Nail Studio</span> or start your career at our <span className="text-white font-medium italic underline decoration-gold/50">Academy</span>. 
              Expert <span className="text-gold">Hair Styling • Nail Art • Beauty Courses</span>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              <Button onClick={() => scrollTo('demo')} variant="glow" className="shadow-gold/40">
                Book Free Demo Class
              </Button>
              <Button onClick={() => scrollTo('services')} variant="secondary">
                Studio Services
              </Button>
              <Button onClick={() => scrollTo('courses')} variant="outline">
                Academy Courses
              </Button>
              <Button onClick={() => window.open('https://wa.me/91XXXXXXXXXX')} variant="academy" className="bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white">
                <MessageCircle size={16} /> WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/30 cursor-pointer text-[10px] uppercase tracking-[0.5em] flex flex-col items-center gap-4"
          onClick={() => scrollTo('about')}
        >
          <span>Scroll</span>
          <div className="w-px h-16 bg-linear-to-b from-gold/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-premium-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] md:aspect-[4/5] bg-zinc-900 border border-gold/20 rounded-3xl overflow-hidden relative group">
                <img 
                  src="/studio1.webp" 
                  alt="House of Beauty Studio"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-premium-black/80 via-premium-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:translate-x-2">
                  <p className="text-gold font-display text-2xl italic tracking-wide">Elite Standards</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Premium Excellence</p>
                </div>
              </div>
              
              {/* Achievement Badge */}
              <div className="absolute -bottom-10 -right-10 md:bottom-10 md:-right-10 bg-zinc-900/90 backdrop-blur-xl p-10 rounded-2xl border border-gold/30 shadow-2xl rotate-3">
                <div className="flex text-gold mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-4xl font-display text-white mb-1">5.0 ⭐</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Trusted Experts</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading centered={false} subtitle="Legacy of Beauty">House of Beauty</SectionHeading>
              
              <p className="text-white/70 text-lg mb-10 leading-relaxed font-light tracking-wide">
                House of Beauty is a trusted name offering premium <span className="text-gold italic">Hair & Nail Services</span> along with professional beauty training. Known for our expert stylists and dedicated hands-on learning approach.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14 text-left">
                {[
                  { icon: Award, title: "Professional Experts", desc: "Top-tier hair & nail specialists." },
                  { icon: GraduationCap, title: "Hands-on Training", desc: "Practial learning with real models." },
                  { icon: Sparkles, title: "Premium Studio", desc: "Elite treatments & international brands." },
                  { icon: CheckCircle2, title: "5.0⭐ Rated", desc: "Loved by our Chandigarh community." }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="w-14 h-14 bg-zinc-900 border border-gold/20 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-premium-black transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <h4 className="text-white font-display text-xl mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button onClick={() => scrollTo('services')} variant="outline">Studio Services</Button>
                <Button onClick={() => scrollTo('courses')} variant="academy">Academy Courses</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Services Section (Hair & Nails Focus) */}
      <section id="services" className="py-32 bg-zinc-950 relative">
        <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Hair & Nail Studio">Premium Services</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Hair Styling", icon: Scissors, desc: "Classic & trend-setting cuts and styles for any occasion.", image: "/hair1.webp" },
              { title: "Hair Treatments", icon: Sparkles, desc: "Keratin, Smoothening, and Hair Spa for healthy, radiant hair.", image: "/hair2.webp" },
              { title: "Nail Extensions", icon: Heart, desc: "Professional Gel & Acrylic extensions for perfect nails.", image: "/nail1.webp" },
              { title: "Nail Art & Designs", icon: Sparkles, desc: "Intricate custom nail art, 3D floral designs, and luxury manicure/pedicure care.", image: "/nail2.webp" }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-premium-black rounded-3xl overflow-hidden border border-white/5 hover:border-gold group transition-all duration-500"
              >
                <div className="aspect-[16/9] bg-zinc-900 relative flex items-center justify-center overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-premium-black/60"></div>
                  <div className="absolute bottom-4 left-6 z-20">
                     <service.icon className="text-gold mb-2 shadow-lg" size={24} />
                  </div>
                </div>
                <div className="p-10 bg-premium-black">
                  <h3 className="text-2xl font-display text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-white/40 text-sm mb-8 leading-relaxed font-light">{service.desc}</p>
                  <Button onClick={() => scrollTo('contact')} variant="outline" className="w-full">Book Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Courses Section */}
      <section id="courses" className="py-32 bg-premium-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Professional Certification">Beauty Academy</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Nail Art Course", 
                desc: "Complete certification in extensions, gel polish & creative nail artistry.", 
                icon: Sparkles 
              },
              { 
                title: "Hair Styling Course", 
                desc: "Master professional cuts, styling, treatments and color theory.", 
                icon: Scissors 
              },
              { 
                title: "Cosmetology Course", 
                desc: "All-in-one professional training for skin, hair & nail care specialist.", 
                icon: GraduationCap 
              }
            ].map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-zinc-900/30 p-12 rounded-3xl border border-white/5 hover:border-gold group transition-all duration-700"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-premium-black rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <course.icon size={30} />
                  </div>
                  <h3 className="text-3xl font-display text-white mb-4 italic tracking-wide">{course.title}</h3>
                  <p className="text-white/40 text-base mb-10 leading-relaxed font-light">{course.desc}</p>
                  <Button onClick={() => scrollTo('demo')} variant="academy" className="w-full">Enroll Now</Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-1 bg-linear-to-r from-transparent via-gold to-transparent rounded-full max-w-2xl mx-auto"
          >
            <div className="bg-premium-black rounded-full px-12 py-5 text-center flex items-center justify-center gap-4">
              <Sparkles className="text-gold animate-bounce" size={20} />
              <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">
                One Day <span className="text-white underline underline-offset-4 font-black">FREE Demo Class</span> Available!
              </p>
              <Sparkles className="text-gold animate-bounce" size={20} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Demo Section (High Priority) */}
      <section id="demo" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 skew-y-3 scale-110 border-y border-gold/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border-4 border-gold p-16 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 opacity-10">
               <Sparkles size={200} className="text-gold" />
            </div>
            <h2 className="text-5xl md:text-8xl font-display text-white mb-10 leading-[1.1]">
              Try Before You Join – <br />
              <span className="text-gold animate-pulse italic font-normal">Free Demo Class!</span>
            </h2>
            <p className="text-white/60 text-xl md:text-2xl mb-16 font-light max-w-3xl mx-auto tracking-wide leading-relaxed">
              Witness our professional experts in action. Experience the premium studio environment and hands-on training style before you enroll.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button onClick={() => scrollTo('contact')} variant="glow" className="w-full sm:w-auto px-16 text-lg py-5">
                Book Free Demo
              </Button>
              <Button onClick={() => window.open('https://wa.me/91XXXXXXXXXX')} variant="academy" className="w-full sm:w-auto px-16 text-lg py-5 border-white/20 text-white hover:border-white">
                <MessageCircle size={20} /> WhatsApp Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-premium-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Studio Portfolio">Our Masterpieces</SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { src: "/studio1.webp", title: "Studio Ambiance", span: "md:row-span-2" },
              { src: "/hair1.webp", title: "Luxury Hair Styling", span: "" },
              { src: "/nail1.webp", title: "Custom Nail Art", span: "" },
              { src: "/hair2.webp", title: "Professional Treatment", span: "" },
              { src: "/nail2.webp", title: "Nail Extensions", span: "" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[3/4] ${img.span} border border-white/10`}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-premium-black/90 via-premium-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-gold font-display text-xl italic">{img.title}</p>
                  <div className="h-px w-12 bg-gold/50 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Client & Student Testimonials">What They Say</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Best place to learn professional skills. The hands-on training with hair treatments helped me launch my salon.", user: "Anita R.", rating: 5, role: "Academy Alumni" },
              { text: "Highly skilled and professional. My hair color and nail extensions were perfect. Exactly the luxury feel I wanted.", user: "Sonia G.", rating: 5, role: "Studio Client" },
              { text: "Amazing service and training. Truly professional experts who know the latest global trends in hair and nails.", user: "Preeti V.", rating: 5, role: "Studio Client" }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-premium-black p-12 rounded-[3rem] border border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <div className="flex text-gold mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-white/80 text-lg mb-10 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-full border border-gold/30 flex items-center justify-center text-gold font-display font-bold">
                    {review.user[0]}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">{review.user}</h4>
                    <p className="text-gold text-[9px] uppercase tracking-widest mt-1">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion CTA Section */}
      <section id="cta" className="py-40 bg-premium-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[200px] scale-150 rounded-full animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-display text-white mb-10 leading-[1.1]">
              Launch Your Style or <br />
              <span className="text-gold italic font-normal">Start Your Career!</span>
            </h2>
            <p className="text-white/50 text-xl font-light mb-16 max-w-2xl mx-auto tracking-widest leading-relaxed font-sans">
              Book your hair & nail transformation or enroll in our next professional certification batch.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button onClick={() => scrollTo('contact')} variant="glow" className="w-full md:w-auto px-16 text-lg py-5">Book Now</Button>
              <Button onClick={() => scrollTo('courses')} variant="secondary" className="w-full md:w-auto px-16 text-lg py-5">Enroll In Academy</Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => window.open('tel:+91XXXXXXXXXX')}
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors font-bold uppercase tracking-[0.3em] text-[10px]"
              >
                <Phone size={14} /> Call Now
              </button>
              <button 
                onClick={() => window.open('https://wa.me/91XXXXXXXXXX')}
                className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors font-bold uppercase tracking-[0.3em] text-[10px]"
              >
                <MessageCircle size={14} /> WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <SectionHeading centered={false} subtitle="Visit Our Studio">Connect With HB</SectionHeading>
              
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-premium-black border border-gold/20 rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-display text-2xl mb-2">Location</h4>
                    <p className="text-white/40 text-lg italic leading-relaxed">
                      Sector 34A, Chandigarh <br />
                      Elite Beauty Complex
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-premium-black border border-gold/20 rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-display text-2xl mb-2">Contact</h4>
                    <p className="text-white/40 text-lg">+91 XXXXX XXXXX</p>
                    <p className="text-white/40 text-lg">hello@houseofbeauty.com</p>
                  </div>
                </div>

                <div className="pt-12">
                  <h4 className="text-white uppercase tracking-[0.4em] text-[10px] font-black mb-6">Socials</h4>
                  <div className="flex gap-6">
                     <motion.a href="#" whileHover={{ y: -5, color: COLORS.gold }} className="text-white/50"><Instagram size={24} /></motion.a>
                     <motion.a href="#" whileHover={{ y: -5, color: '#25D366' }} className="text-white/50"><MessageCircle size={24} /></motion.a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px] bg-premium-black rounded-[4rem] border border-white/10 flex items-center justify-center text-center p-12 relative group group overflow-hidden">
               <div className="absolute inset-0 bg-gold/5 blur-[100px] animate-pulse"></div>
               <span className="relative z-10 text-white/20 italic uppercase tracking-[0.4em] font-black group-hover:text-gold/20 transition-colors">
                 [ Map Placeholder - Sector 34A, Chandigarh ]
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-premium-black border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-10 mb-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gold flex items-center justify-center font-display font-bold text-gold text-2xl tracking-tighter">
                HB
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-xl tracking-[0.1em] text-white leading-none">HOUSE OF BEAUTY</span>
                <span className="text-[10px] tracking-[0.3em] text-gold font-bold uppercase mt-1">Studio & Academy</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-white/30">
              {['About', 'Services', 'Courses', 'Gallery', 'Contact'].map(link => (
                <button key={link} onClick={() => scrollTo(link.toLowerCase())} className="hover:text-gold transition-colors">{link}</button>
              ))}
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
            <p>© 2024 House of Beauty Studio & Academy. Chandigarh.</p>
            <p>Crafted for Excellence & Luxury</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Star, Menu, X, ArrowRight, Mail, Instagram, MapPin } from 'lucide-react';
import { SITE_CONTENT } from './data';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gift Cards', href: '#gift-cards' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-[#041d1a]/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif tracking-widest text-white z-50 relative">
          SKIN BY CHLOE
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-teal-100 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm uppercase tracking-widest transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[#041d1a] z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518112166137-19000cd967ce?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa atmosphere" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/40 via-teal-950/60 to-[#041d1a]" />
        {/* Animated water/fog effect overlay could go here */}
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-indigo-300 uppercase tracking-[0.3em] text-sm mb-6"
        >
          Esthetician • Skin Health • Wellness
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-tight"
        >
          {SITE_CONTENT.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 font-light mb-12 italic font-serif"
        >
          {SITE_CONTENT.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#services" 
            className="glass-button inline-flex items-center px-8 py-4 rounded-full text-white uppercase tracking-widest text-sm font-medium group"
          >
            {SITE_CONTENT.hero.cta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden relative z-10">
            <img 
              src={SITE_CONTENT.about.image} 
              alt="Chloe" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-full h-full border border-white/10 rounded-2xl z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">{SITE_CONTENT.about.title}</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed font-light text-lg">
            {SITE_CONTENT.about.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
              alt="Signature" 
              className="h-12 invert opacity-70" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-teal-950/30 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-300 uppercase tracking-widest text-sm"
          >
            Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mt-4 text-white"
          >
            Curated Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SITE_CONTENT.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-xl font-serif text-white">{service.title}</h3>
                  </div>
                  <div className="flex items-center space-x-4 mb-6 text-sm text-indigo-300 font-mono">
                    <span>{service.price}</span>
                    <span className="w-1 h-1 bg-indigo-300 rounded-full" />
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  <button className="w-full py-3 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 rounded-lg transition-colors uppercase tracking-wider text-xs font-medium">
                    Select Service
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Transformation Packages</h2>
          <p className="text-slate-400 mt-4">Commit to your skin journey and save</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SITE_CONTENT.packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-indigo-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/20">
                  {pkg.savings}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif text-white mb-2">{pkg.title}</h3>
              <p className="text-3xl font-light text-white mb-6">{pkg.price}</p>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {pkg.description}
              </p>

              <button className="glass-button w-full py-4 rounded-xl text-white font-medium tracking-wide">
                Purchase Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState('$100');
  const [selectedDesign, setSelectedDesign] = useState(0);

  return (
    <section id="gift-cards" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">{SITE_CONTENT.giftCards.title}</h2>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest text-teal-200 mb-4">Choose an amount</h3>
            <div className="flex flex-wrap gap-3">
              {SITE_CONTENT.giftCards.amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    selectedAmount === amount 
                      ? 'bg-white text-teal-950 border-white' 
                      : 'bg-transparent text-teal-100 border-teal-800 hover:border-teal-600'
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-widest text-teal-200 mb-4">Choose a design</h3>
            <div className="grid grid-cols-4 gap-3">
              {SITE_CONTENT.giftCards.designs.map((design, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDesign(idx)}
                  className={`aspect-square rounded-lg ${design.color} flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-center p-1 transition-transform hover:scale-105 ${
                    selectedDesign === idx ? 'ring-2 ring-white ring-offset-2 ring-offset-teal-950' : ''
                  }`}
                >
                  {design.name}
                </button>
              ))}
            </div>
          </div>

          <button className="glass-button px-8 py-4 rounded-full text-white font-medium tracking-wide w-full md:w-auto">
            Continue Purchase
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Preview Card */}
          <div className={`aspect-[4/3] rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${SITE_CONTENT.giftCards.designs[selectedDesign].color}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mix-blend-overlay">
              {SITE_CONTENT.giftCards.designs[selectedDesign].name}
            </h3>
            <div className="absolute bottom-6 right-6 text-slate-900 font-mono text-xl font-bold opacity-50">
              {selectedAmount}
            </div>
          </div>
          <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-teal-500/10 rounded-2xl blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#021815]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="flex space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <h2 className="text-4xl font-serif text-white text-center">Client Love</h2>
          <p className="text-slate-500 mt-2">9 Verified Reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONTENT.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-teal-900/20 p-6 rounded-xl border border-white/5"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="text-white font-serif text-sm">{review.author}</p>
                <p className="text-slate-600 text-xs mt-1">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ask Chloe a Question</h2>
            <p className="text-slate-400">Ready to start your skin journey? Send me a message.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="How can I help you?"
              />
            </div>
            <button type="submit" className="w-full glass-button py-4 rounded-lg text-white font-medium tracking-wide mt-4">
              Send Message
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#02100e] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-serif text-white tracking-widest mb-2">SKIN BY CHLOE</h3>
          <p className="text-slate-500 text-sm">Dedicated to your skin health journey.</p>
        </div>

        <div className="flex space-x-8 mb-8 md:mb-0">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><MapPin size={20} /></a>
        </div>

        <div className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Skin by Chloe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#041d1a] min-h-screen text-teal-50 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <GiftCards />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-background/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        <a
          href="#home"
          onClick={() => handleNavigation('home')}
          className="text-xl font-display font-bold tracking-wider text-white flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-shadow">
            RB
          </span>
          Rakesh
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(sectionId)}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {link.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavigation(sectionId)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-white border border-primary/20'
                        : 'text-muted-foreground hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className={isActive ? 'text-primary' : 'opacity-40'}
                    />
                  </motion.a>
                );
              })}

              <p className="text-xs text-muted-foreground text-center pt-4 border-t border-white/10 mt-2">
                Always Learning. Always Building.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

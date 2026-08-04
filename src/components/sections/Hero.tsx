import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../../IMG_5210.jpeg';
 
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] z-10 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] z-10 mix-blend-screen" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center"><div className="flex justify-center">
  <img
    src={heroBg}
    alt="Rakesh Bhajwad"
    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-500 shadow-2xl"
  />
</div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            Rakesh <br />
            <span className="text-gradient">Bhajwad</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 font-display mb-8"
          >
            Aspiring Web Developer • AI Developer • Content Creator
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Creating cinematic horror content for YouTube and Instagram while learning Web Development and Artificial Intelligence. Building creative digital experiences and documenting my journey every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a 
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
            >
              Explore My Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a><a
  href="/resume.pdf"
  download
  className="inline-flex items-center gap-3 px-8 py-4 mt-4 border border-primary rounded-full text-white font-medium hover:bg-primary transition-all duration-300"
>
  Download Resume
</a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}


import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Sparkles,
  Layers3,
} from 'lucide-react';
import heroBg from '../../../IMG_5210.jpeg';

const worldCards = [
  {
    title: 'WEB DEVELOPMENT',
    subtitle: 'Building digital experiences',
    icon: Code2,
    position: 'left-card',
  },
  {
    title: 'AI INNOVATION',
    subtitle: 'Exploring intelligent systems',
    icon: Cpu,
    position: 'right-card',
  },
  {
    title: 'PROJECT STUDIO',
    subtitle: 'Turning ideas into products',
    icon: Layers3,
    position: 'bottom-card',
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-10" />

        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />
      </div>

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Introduction */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-7"
            >
              <Sparkles size={15} />
              MY DIGITAL WORLD • 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-bold leading-[1.05] mb-6"
            >
              Rakesh
              <br />
              <span className="text-gradient">Bhajwad.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/85 font-display mb-6"
            >
              Aspiring Web Developer
              <br />
              <span className="text-primary">
                AI Developer • Content Creator
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              I’m learning, building and exploring the world of technology.
              From web experiences to AI-powered ideas, this is my journey
              of turning imagination into something real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary rounded-full text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                Explore My Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/15 bg-white/5 rounded-full text-white font-medium hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
              >
                Discover My Journey
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          {/* Interactive 3D-style Digital World */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 min-w-0"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto w-full max-w-[510px] h-[390px] sm:h-[480px] md:h-[520px]"
              style={{ perspective: '1200px' }}
            >
              {/* Main glass environment */}
              <div
                className="absolute inset-5 sm:inset-8 rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/[0.03] to-primary/10 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden"
                style={{
                  transform: 'rotateY(-9deg) rotateX(4deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

                <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] text-white/65">
                      DIGITAL WORLD / ONLINE
                    </span>
                  </div>
                  <span className="text-xs text-white/40">RB • 2026</span>
                </div>

                {/* Portrait */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[245px] h-[245px] sm:w-[315px] sm:h-[315px] rounded-full border border-primary/30 animate-[spin_25s_linear_infinite]" />

                  <div className="absolute w-[205px] h-[205px] sm:w-[270px] sm:h-[270px] rounded-full border border-dashed border-white/20 animate-[spin_35s_linear_infinite_reverse]" />

                  <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-br from-primary via-purple-400 to-secondary shadow-[0_0_65px_rgba(124,58,237,0.35)]">
                    <img
                      src={heroBg}
                      alt="Rakesh Bhajwad"
                      className="w-full h-full object-cover rounded-full border-4 border-background"
                    />
                  </div>
                </div>

                {/* Environment details */}
                <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] text-primary mb-1">
                      THE BUILDER
                    </p>
                    <p className="text-lg sm:text-xl font-display font-bold text-white">
                      Rakesh Bhajwad
                    </p>
                  </div>
                  <Sparkles className="text-primary/70" size={22} />
                </div>
              </div>

              {/* Floating information cards */}
              {worldCards.map((card, index) => {
                const Icon = card.icon;

                const position =
                  card.position === 'left-card'
                    ? 'top-[18%] -left-1 sm:left-0'
                    : card.position === 'right-card'
                    ? 'top-[48%] -right-1 sm:right-0'
                    : 'bottom-[7%] left-[8%] sm:left-[12%]';

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.7 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`absolute ${position} z-20 max-w-[190px] sm:max-w-[220px] flex items-center gap-3 p-3 sm:p-4 rounded-2xl border border-white/15 bg-[#15131d]/90 backdrop-blur-xl shadow-xl`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs font-bold text-white tracking-wide">
                        {card.title}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-white/50 mt-1">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          Explore
        </span>
        <div className="w-px h-8 bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 32] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

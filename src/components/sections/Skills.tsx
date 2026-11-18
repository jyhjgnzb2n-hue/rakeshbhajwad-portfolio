
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Clapperboard,
  Sparkles,
  Terminal,
  Cpu,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

const skillLabs = [
  {
    id: '01',
    title: 'Web Development',
    subtitle: 'THE DIGITAL FOUNDATION',
    description:
      'Learning to design, develop and launch responsive websites and modern web applications.',
    icon: Code2,
    symbol: Terminal,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'Git & GitHub',
    ],
    status: 'CURRENT LEARNING',
    accent: 'from-purple-500/20 to-transparent',
  },
  {
    id: '02',
    title: 'AI & Intelligent Systems',
    subtitle: 'THE INTELLIGENCE LAB',
    description:
      'Exploring artificial intelligence, AI tools and intelligent systems that can solve real-world problems.',
    icon: BrainCircuit,
    symbol: Cpu,
    skills: [
      'Artificial Intelligence',
      'Prompt Engineering',
      'AI Tools',
      'AI Agents — Exploring',
      'AI Product Ideas — Exploring',
    ],
    status: 'EXPLORING',
    accent: 'from-blue-500/20 to-transparent',
  },
  {
    id: '03',
    title: 'Creative Technology',
    subtitle: 'THE CREATION STUDIO',
    description:
      'Combining creativity, storytelling and digital media to turn ideas into engaging experiences.',
    icon: Clapperboard,
    symbol: Layers3,
    skills: [
      'Content Creation',
      'Storytelling',
      'Video Editing',
      'YouTube Shorts',
      'Creative Writing',
      'Digital Experiences',
    ],
    status: 'BUILDING',
    accent: 'from-pink-500/20 to-transparent',
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden bg-white/[0.015]"
    >
      {/* Background effects */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
            <span className="w-10 h-px bg-primary" />
            <span className="text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">
              Technology Division / 002
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold">
                My Skills
                <br />
                <span className="text-gradient">Laboratory.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
              A growing collection of technologies, creative abilities
              and ideas I am learning through hands-on exploration.
            </p>
          </div>
        </motion.div>

        {/* Lab cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {skillLabs.map((lab, index) => {
            const Icon = lab.icon;
            const Symbol = lab.symbol;

            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-[2rem] border border-white/10 bg-gradient-to-br ${lab.accent} to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 overflow-hidden ${
                  index === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full border border-white/5 group-hover:border-primary/20 transition-colors duration-500" />

                <div className="relative z-10">

                  {/* Card header */}
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon size={27} />
                      </div>

                      <div>
                        <p className="text-[10px] tracking-[0.2em] text-primary font-semibold mb-1">
                          {lab.subtitle}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                          {lab.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-2xl sm:text-3xl font-display font-bold text-white/10">
                      {lab.id}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-7">
                    {lab.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5">
                    {lab.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.04 }}
                        className="px-3.5 py-2 rounded-xl border border-white/10 bg-black/20 text-xs sm:text-sm text-white/75 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                      <span className="text-[10px] sm:text-xs text-white/50 tracking-[0.15em]">
                        {lab.status}
                      </span>
                    </div>

                    <Symbol size={20} className="text-primary/60" />
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
              <Sparkles size={24} />
            </div>

            <div>
              <h3 className="text-white font-semibold">
                The learning never stops.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Learn something new. Build something real.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors"
          >
            Explore My Work
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Rocket,
  Lightbulb,
  Plane,
  Video,
  Globe,
  Sparkles,
} from 'lucide-react';

const interests = [
  {
    title: 'Web Development',
    description: 'Creating modern websites and digital experiences.',
    icon: Code2,
    category: 'Technology',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Exploring AI tools, agents and intelligent systems.',
    icon: BrainCircuit,
    category: 'Future Tech',
  },
  {
    title: 'Building Products',
    description: 'Turning creative ideas into useful digital products.',
    icon: Rocket,
    category: 'Innovation',
  },
  {
    title: 'Creative Thinking',
    description: 'Discovering new ideas and solving real problems.',
    icon: Lightbulb,
    category: 'Creativity',
  },
  {
    title: 'Travel & Exploration',
    description: 'Exploring new places, people and experiences.',
    icon: Plane,
    category: 'Lifestyle',
  },
  {
    title: 'Content Creation',
    description: 'Creating videos and sharing meaningful stories.',
    icon: Video,
    category: 'Creativity',
  },
  {
    title: 'Technology',
    description: 'Learning about emerging technologies and innovation.',
    icon: Globe,
    category: 'Discovery',
  },
  {
    title: 'Continuous Learning',
    description: 'Improving my skills and discovering something new every day.',
    icon: Sparkles,
    category: 'Growth',
  },
];

export function Interests() {
  return (
    <section
      id="interests"
      className="py-24 md:py-32 relative bg-white/[0.02] border-y border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Beyond the Code
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Things That <span className="text-gradient">Inspire Me</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I'm curious about technology, creativity and the world around me.
            These are the things that keep me exploring, learning and building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;

            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -7 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon
                    size={23}
                    className="text-primary"
                  />
                </div>

                <span className="text-xs text-primary/80 font-semibold uppercase tracking-wider">
                  {interest.category}
                </span>

                <h3 className="text-lg font-semibold mt-2 mb-3">
                  {interest.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Rocket,
  Globe2,
  Sparkles,
  Target,
  ArrowUpRight,
} from 'lucide-react';

const directions = [
  {
    number: '01',
    icon: Code2,
    title: 'Web Development',
    description: 'Creating modern websites, digital experiences and useful web applications.',
    tag: 'BUILD',
    link: '#skills',
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    description: 'Exploring AI tools, intelligent agents and systems that solve real problems.',
    tag: 'INNOVATE',
    link: '#interests',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Product Building',
    description: 'Turning ideas into prototypes, real projects and products with purpose.',
    tag: 'CREATE',
    link: '#projects',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-primary" />
            <span className="text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">
              Digital Identity / 001
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight">
            Beyond a
            <br />
            <span className="text-gradient">Portfolio.</span>
          </h2>

          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            A look into my journey, the technologies I am exploring,
            and the future I am working towards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">

          {/* Identity panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="h-full min-h-[430px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.015] backdrop-blur-xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden relative">

              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-primary/10" />
              <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border border-primary/10" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-8">
                  <Globe2 size={27} />
                </div>

                <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">
                  The Person Behind
                </span>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4 mb-5">
                  Rakesh
                  <br />
                  <span className="text-gradient">Bhajwad.</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Hi, I'm Rakesh Bhajwad from India. I'm learning
                  Web Development and Artificial Intelligence by
                  building real projects and exploring new technologies.
                </p>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  I enjoy creativity, content creation, discovering
                  new ideas and understanding how technology can
                  make everyday life better.
                </p>
              </div>

              <div className="relative z-10 mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    Personal Mission
                  </p>
                  <p className="text-sm text-white font-medium mt-2">
                    Learn. Build. Innovate.
                  </p>
                </div>
                <Sparkles className="text-primary" size={25} />
              </div>
            </div>
          </motion.div>

          {/* Technology direction panel */}
          <div className="lg:col-span-7 flex flex-col gap-5">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3 mb-7">
                <div>
                  <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">
                    My Direction
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                    Areas of Exploration
                  </h3>
                </div>
                <Target className="text-primary shrink-0" size={30} />
              </div>

              <div className="space-y-3">
                {directions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      href={item.link}
                      key={item.number}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                      whileHover={{ x: 5 }}
                      className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/[0.025] hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                        <Icon size={22} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] text-primary/70">
                            {item.number}
                          </span>
                          <span className="text-[9px] text-white/35 tracking-widest">
                            {item.tag}
                          </span>
                        </div>

                        <h4 className="text-white font-semibold text-sm sm:text-base">
                          {item.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-white/30 group-hover:text-primary transition-colors shrink-0"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Future vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/15 via-white/[0.025] to-transparent p-7 sm:p-8 overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-16 w-56 h-56 bg-primary/15 blur-[80px] rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Rocket size={19} />
                  <span className="text-xs tracking-[0.2em] uppercase font-semibold">
                    Long-Term Vision
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  Building Beyond Today.
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  My long-term vision is to build intelligent AI-powered
                  products, create a technology company, develop meaningful
                  solutions and create opportunities that make a positive
                  difference in people's lives.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-white/60 tracking-wider">
                    ONE STEP AT A TIME
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Globe2,
  Youtube,
  Code2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio',
    category: 'WEB DEVELOPMENT',
    description:
      'My personal digital identity, built to showcase my journey in Web Development, Artificial Intelligence, creative projects and technology.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    icon: Code2,
    live: 'https://rakeshbhajwad-portfolio.vercel.app',
    source: 'https://github.com/jyhjgnzb2n-hue/rakeshbhajwad-portfolio',
    accent: 'from-purple-500/20',
  },
  {
    number: '02',
    title: 'Patel Sanitary Ware',
    category: 'REAL BUSINESS WEBSITE',
    description:
      'A website project for a real sanitary products shop, designed to create a professional digital presence and help customers explore the business online.',
    tags: ['Business Website', 'Web Design', 'Responsive Design'],
    icon: Globe2,
    live: 'https://jyhjgnzb2n-hue.github.io/-patel-sanitary-ware/',
    accent: 'from-blue-500/20',
  },
  {
    number: '03',
    title: 'Little Champ',
    category: 'AI-ASSISTED CONTENT CREATION',
    description:
      'A kids storytelling channel creating entertaining, realistic AI-assisted stories with fun moments and meaningful everyday lessons for children.',
    tags: ['AI Content', 'Storytelling', 'Video Creation', 'YouTube'],
    icon: Youtube,
    live: 'https://youtube.com/@little_champkids',
    accent: 'from-pink-500/20',
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* Heading */}
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
              Project Division / 003
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold">
              Projects
              <br />
              <span className="text-gradient">In Motion.</span>
            </h2>

            <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
              Every project is an opportunity to experiment, learn
              and turn an idea into something real.
            </p>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} to-white/[0.025] backdrop-blur-xl p-6 sm:p-8 lg:p-9 overflow-hidden flex flex-col ${
                  index === 2 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-white/5 group-hover:border-primary/20 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col flex-grow">

                  <div className="flex justify-between items-start mb-9">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={27} />
                    </div>

                    <span className="text-4xl font-display font-bold text-white/10">
                      {project.number}
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-primary font-semibold mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 rounded-lg border border-white/10 bg-black/20 text-xs text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 border-t border-white/10 flex flex-wrap items-center gap-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                    >
                      <Globe2 size={17} />
                      Visit Project
                      <ArrowUpRight size={15} />
                    </a>

                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
                      >
                        <Github size={17} />
                        Source Code
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}

        </div>

        {/* Closing panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 sm:p-8 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
            <Sparkles size={24} />
          </div>

          <div>
            <h3 className="text-white font-semibold">
              More ideas are in the making.
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              This is just the beginning of my building journey.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

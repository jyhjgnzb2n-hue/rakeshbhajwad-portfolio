
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "My personal digital space, built with React, TypeScript, Tailwind CSS and Framer Motion. It showcases my learning journey, skills and projects as I grow in Web Development and AI.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      link: "https://github.com/jyhjgnzb2n-hue/rakeshbhajwad-portfolio",
      button: "View Source Code",
      type: "Development",
    },
    {
      title: "Little Champ",
      description:
        "An AI-assisted kids storytelling project focused on entertaining children through fun, realistic stories and meaningful everyday lessons.",
      tags: ["AI Content", "Storytelling", "Video Creation", "YouTube"],
      type: "Content Creation",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Real <span className="text-gradient">Projects</span>
          </motion.h2>

          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Ideas I'm turning into real digital experiences, one project at a time.
          </p>

          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group glass-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col min-h-full glass-card-hover"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="mb-5">
                  <span className="inline-flex text-xs font-medium tracking-wide uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5">
                    {project.type}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    {project.button}
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

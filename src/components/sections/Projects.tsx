import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Dark Truth Files",
      description: "Creating cinematic AI-powered horror stories for YouTube using storytelling, editing, visual effects and AI tools.",
      tags: ["ChatGPT", "CapCut", "AI", "YouTube"],
      link: "https://youtube.com/@darktruthfilees?si=2TCjw04KKFSa-vdb",
      theme: "secondary"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built during my Web Development learning journey. I will continue improving this portfolio as I build more real projects.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/jyhjgnzb2n-hue",
      theme: "primary" // Purple theme
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Real <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden flex flex-col h-full glass-card-hover"
            >
              {/* Background ambient light */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${
                project.theme === 'primary' ? 'bg-primary' : 'bg-secondary'
              }`} />
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="mb-6 flex items-start justify-between">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-muted-foreground transition-all">
                    {project.title}
                  </h3>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/50 group-hover:text-white group-hover:border-${project.theme}/50 group-hover:bg-${project.theme}/10 transition-colors`}>
                    <ExternalLink size={18} />
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-8 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/5 rounded-md text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group/btn"
                  >
                    <Github size={16} />
                    View GitHub
                    <motion.span 
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

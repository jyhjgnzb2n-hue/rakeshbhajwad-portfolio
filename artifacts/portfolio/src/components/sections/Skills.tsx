import { motion } from 'framer-motion';

export function Skills() {
  const currentlyLearning = [
    "HTML", "CSS", "JavaScript", "Responsive Web Design", 
    "Git & GitHub", "React", "Artificial Intelligence", "Prompt Engineering"
  ];

  const contentCreation = [
    "Horror Storytelling", "Video Editing", "AI Tools", "YouTube Shorts", 
    "Instagram Reels", "Creative Writing", "Cinematic Content"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            The <span className="text-gradient">Journey</span> in Progress
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I am a student of the craft. Here is what I am actively learning and applying to build my digital footprint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Currently Learning */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full" />
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3 text-white">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </span>
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-3">
              {currentlyLearning.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-foreground hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Creation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full" />
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3 text-white">
              <span className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>
              </span>
              Content Creation
            </h3>
            <div className="flex flex-wrap gap-3">
              {contentCreation.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-foreground hover:border-secondary/50 hover:bg-secondary/10 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={textVariants}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                The <span className="text-gradient">Story</span> So Far
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-secondary to-transparent"></div>
            </motion.div>
            
            <motion.div variants={textVariants} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-white font-medium">Rakesh Bhajwad</span> from India.
              </p>
              <p>
                I'm currently creating cinematic horror videos for YouTube and Instagram while learning Web Development and Artificial Intelligence.
              </p>
              <p>
                I enjoy building creative ideas, exploring new technologies, and improving my skills every day. Apart from technology, I love traveling, vlogging, exploring new places, and I have a strong interest in luxury lifestyle, creativity, and digital content.
              </p>
              <p>
                My goal is to become a skilled Web Developer and AI Developer while building a successful personal brand through content creation and inspiring people with my journey.
              </p>
              <p className="text-primary/90 font-medium italic">
                "This portfolio represents my learning journey and will continue to grow as I complete real-world projects."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card relative p-2">
              <div className="w-full h-full rounded-xl bg-muted/30 border border-white/5 relative overflow-hidden flex flex-col justify-end p-8">
                {/* Abstract cinematic representation */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />
                
                <div className="relative z-20 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center bg-secondary/10 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Documenting the process.</h3>
                  <p className="text-muted-foreground text-sm">Every line of code, every edit, every story.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-[30px]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-[40px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

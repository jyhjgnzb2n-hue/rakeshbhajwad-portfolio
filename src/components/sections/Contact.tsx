import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Subtle background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you want to collaborate on a project, talk about horror storytelling, or share insights on web development and AI, I'm always open to connecting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a 
                href="mailto:rakeshbhajwad123@gmail.com"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
              >
                <Mail size={20} />
                Email Me
              </a>
              
              <a 
                href="https://github.com/jyhjgnzb2n-hue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors group"
              >
                <Github size={20} className="group-hover:text-primary transition-colors" />
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

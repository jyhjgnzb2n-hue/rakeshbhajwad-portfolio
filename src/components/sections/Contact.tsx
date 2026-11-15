
import { motion } from 'framer-motion';
import { Mail, Github, Instagram, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email Me',
    detail: 'Let’s discuss an idea',
    href: 'mailto:rakeshbhajwad123@gmail.com',
    icon: Mail,
    style: 'bg-primary text-white hover:bg-primary/90',
  },
  {
    name: 'GitHub',
    detail: 'Explore my code',
    href: 'https://github.com/jyhjgnzb2n-hue',
    icon: Github,
    style: 'bg-white/5 border border-white/10 text-white hover:bg-white/10',
  },
  {
    name: 'Instagram',
    detail: 'Follow my journey',
    href: 'https://www.instagram.com/mr_raakesh_bhajwad',
    icon: Instagram,
    style: 'bg-white/5 border border-white/10 text-white hover:bg-white/10',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Open to Ideas & Collaboration
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Build
              <br />
              <span className="text-gradient">Something Great.</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Have an interesting idea or want to collaborate?
              I'm exploring Web Development, Artificial Intelligence
              and building meaningful digital experiences.
              Let's connect and create something valuable together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name === 'Email Me' ? undefined : '_blank'}
                    rel={link.name === 'Email Me' ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -5 }}
                    className={`group flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 ${link.style}`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/10">
                      <Icon size={23} />
                    </div>

                    <div className="flex items-center gap-1 font-semibold">
                      {link.name}
                      <ArrowUpRight
                        size={16}
                        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </div>

                    <span className="text-xs opacity-70">
                      {link.detail}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground">
                Always learning. Always building. Always moving forward.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Rocket } from 'lucide-react';

export function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const visionCards = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Learning to build modern websites and useful digital experiences."
    },
    {
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      description: "Exploring AI tools, agents and intelligent systems that solve real problems."
    },
    {
      icon: Rocket,
      title: "Building Products",
      description: "Turning creative ideas into real projects, prototypes and future products."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-7"
          >
            <motion.div variants={textVariants}>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">
                About Me
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-5">
                The Journey of a
                <br />
                <span className="text-gradient">Future Builder</span>
              </h2>

              <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            </motion.div>

            <motion.div
              variants={textVariants}
              className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              <p>
                Hi, I'm <span className="text-white font-semibold">Rakesh Bhajwad</span> from India.
              </p>

              <p>
                I'm learning Web Development and Artificial Intelligence by building real projects and experimenting with new technologies.
              </p>

              <p>
                I enjoy turning ideas into digital experiences, exploring AI-powered tools, creating content, and learning how technology can solve everyday problems.
              </p>

              <p>
                My long-term vision is to build intelligent AI-powered products, create a technology company, and develop solutions that make people's lives better.
              </p>

              <p>
                I believe in learning through action, improving every day, and building something meaningful step by step.
              </p>

              <p className="text-primary/90 font-medium italic">
                "From learning the basics to building ideas that can make a difference."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 space-y-7">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  My Direction
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                  Learning Today.
                  <br />
                  Building Tomorrow.
                </h3>
              </div>

              <div className="space-y-6">
                {visionCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-xl border border-primary/30 flex items-center justify-center bg-primary/10 text-primary">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-muted-foreground">
                  This portfolio documents my progress, experiments and projects as I grow from a beginner into a builder.
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-[35px] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

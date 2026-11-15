
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Clapperboard, Sparkles } from 'lucide-react';

export function Skills() {
  const skillGroups = [
    {
      title: "Web Development",
      subtitle: "Building digital foundations",
      icon: Code2,
      color: "primary",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Web Design",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Git & GitHub"
      ]
    },
    {
      title: "AI & Technology",
      subtitle: "Exploring intelligent systems",
      icon: BrainCircuit,
      color: "secondary",
      skills: [
        "Artificial Intelligence",
        "Prompt Engineering",
        "AI Tools",
        "AI Agents — Exploring",
        "AI Product Ideas — Exploring"
      ]
    },
    {
      title: "Creative Building",
      subtitle: "Turning ideas into experiences",
      icon: Clapperboard,
      color: "primary",
      skills: [
        "Content Creation",
        "Storytelling",
        "Video Editing",
        "YouTube Shorts",
        "Creative Writing",
        "Digital Experiences"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">

        <div className="text-center mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium uppercase tracking-widest"
          >
            Skills & Exploration
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-5"
          >
            Building My <span className="text-gradient">Skill Set</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Every skill is a step forward. I'm learning, experimenting
            and applying new ideas through real projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden ${
                  index === 2 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-[65px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                        {group.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.04 }}
                        className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.04] text-sm text-white/80 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles size={16} className="text-primary" />
            <span>Learning today. Building for tomorrow.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export function Interests() {
  const interests = [
    "Horror Storytelling", "Travel", "Vlogging", "Web Development", 
    "Artificial Intelligence", "Technology", "Luxury Lifestyle", 
    "Content Creation", "Learning New Skills"
  ];

  return (
    <section id="interests" className="py-32 relative bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-16"
        >
          My <span className="text-gradient">Interests</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.05, 
                type: "spring", 
                stiffness: 200, 
                damping: 20 
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(124, 58, 237, 0.4)"
              }}
              className="px-6 py-4 rounded-xl border border-white/5 bg-white/5 text-foreground font-medium transition-colors cursor-default shadow-sm backdrop-blur-sm"
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

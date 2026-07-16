import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "OpenAI API", "NLP"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "Vercel", "AWS", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        SKILLS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Tools of the craft
      </motion.h2>

      <div className="w-full max-w-5xl flex flex-col gap-10">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
          >
            <h3 className="text-sm tracking-widest text-secondary uppercase mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.03 }}
                  className="skill-chip text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

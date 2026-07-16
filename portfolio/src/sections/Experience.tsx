import { motion } from "framer-motion";

// TODO: replace with your real experience
const experience = [
  {
    role: "AI Engineering Intern",
    company: "Company Name",
    period: "May 2025 — Aug 2025",
    points: [
      "Built and deployed a model-serving pipeline used in production",
      "Reduced inference latency by optimizing batching and caching",
    ],
    tech: ["Python", "PyTorch", "Docker"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Company Name",
    period: "Jan 2025 — Apr 2025",
    points: [
      "Shipped customer-facing features across the web application",
      "Collaborated with design to rebuild the onboarding flow",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        EXPERIENCE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Where I've worked
      </motion.h2>

      <div className="timeline w-full max-w-3xl">
        {experience.map((item, i) => (
          <motion.div
            key={item.role + item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="timeline-item"
          >
            <div className="timeline-dot" />
            <div className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <span className="text-xs text-secondary">{item.period}</span>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--gold-2)" }}>
                {item.company}
              </p>
              <ul className="flex flex-col gap-2 mb-4">
                {item.points.map((point) => (
                  <li key={point} className="text-sm text-secondary leading-relaxed pl-4 relative">
                    <span className="absolute left-0" style={{ color: "var(--gold-2)" }}>—</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="skill-chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

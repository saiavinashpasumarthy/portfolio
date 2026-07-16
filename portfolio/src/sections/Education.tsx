import { motion } from "framer-motion";

// TODO: replace with your real education
const education = {
  degree: "B.Tech in Computer Science",
  institution: "Your University",
  period: "2022 — 2026",
  cgpa: "8.9 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
  ],
};

export default function Education() {
  return (
    <section id="education" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        EDUCATION
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Academic background
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card w-full max-w-3xl"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            {education.degree}
          </h3>
          <span className="text-xs text-secondary">{education.period}</span>
        </div>
        <p className="text-sm mb-6" style={{ color: "var(--gold-2)" }}>
          {education.institution} · CGPA {education.cgpa}
        </p>
        <p className="text-xs tracking-widest text-secondary uppercase mb-3">
          Relevant coursework
        </p>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <span key={course} className="skill-chip text-xs">
              {course}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

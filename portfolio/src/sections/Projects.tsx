import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  tech: string[];
  github?: string;
  demo?: string;
  achievement: string;
}

// TODO: replace with your real projects
const projects: Project[] = [
  {
    title: "Neural Vision",
    description:
      "Real-time object detection app with a custom-trained model served over a lightweight FastAPI backend.",
    category: "AI/ML",
    tech: ["PyTorch", "FastAPI", "React"],
    github: "https://github.com/",
    demo: "https://example.com/",
    achievement: "94% detection accuracy on the validation set",
  },
  {
    title: "Ledger",
    description:
      "A full-stack expense tracker with shared budgets, recurring transactions, and live analytics dashboards.",
    category: "Web",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/",
    demo: "https://example.com/",
    achievement: "Used weekly by 200+ people during closed beta",
  },
  {
    title: "Aurora",
    description:
      "This portfolio site — a black-and-gold, Apple-inspired experience with a custom Three.js neural sphere.",
    category: "Web",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/",
    achievement: "Fully custom WebGL scene built from scratch",
  },
  {
    title: "Signal",
    description:
      "An NLP pipeline that summarizes and clusters news articles by topic in near real time.",
    category: "AI/ML",
    tech: ["LangChain", "OpenAI API", "Python"],
    github: "https://github.com/",
    achievement: "Cut manual triage time by an estimated 70%",
  },
];

const filters = ["All", "Web", "AI/ML"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        PROJECTS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-center"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Selected work
      </motion.h2>

      <div className="flex gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`filter-btn ${active === f ? "filter-btn-active" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="card flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                      <Github size={18} className="text-secondary hover:text-[var(--gold-2)] transition-colors" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                      <ExternalLink size={18} className="text-secondary hover:text-[var(--gold-2)] transition-colors" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="skill-chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs mt-auto pt-3 border-t" style={{ borderColor: "var(--glass-border)", color: "var(--gold-2)" }}>
                ★ {project.achievement}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

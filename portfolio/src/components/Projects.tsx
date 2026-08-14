import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'RAG Customer Support Assistant',
    category: 'RAG / NLP',
    description:
      'Built a RAG-based Customer Support Assistant using LangGraph and ChromaDB that performs semantic document retrieval, automated query resolution, and Human-in-the-Loop escalation for complex customer requests.',
    tags: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'FastAPI', 'OpenAI API'],
    github: 'https://github.com/saiavinashpasumarthy/rag_customer_support_assistant',
    demo: null,
  },
  {
    name: 'AI Resume Screening System',
    category: 'AI / LLM',
    description:
      'Automated resume parsing and candidate ranking using LLMs and vector similarity. Reduces time-to-hire significantly with bias-reduced scoring and structured evaluation.',
    tags: ['Python', 'LangChain', 'FastAPI', 'ChromaDB'],
    github: '#',
    demo: null,
  },
  {
    name: 'MERN College Portal',
    category: 'Full Stack',
    description:
      'Full-stack web portal for students and faculty with secure authentication, role-based access control, announcements, timetables, and feedback management features.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    github: '#',
    demo: null,
  },
  {
    name: 'Food Delivery Platform',
    category: 'Full Stack',
    description:
      'End-to-end food ordering app with real-time order tracking, restaurant listings, cart management, and order history built on the MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: null,
  },
  {
    name: 'AI Intrusion Detection System',
    category: 'AI / Security',
    description:
      'ML-based network intrusion detection with real-time anomaly classification, alert system, and monitoring dashboard powered by TensorFlow and Scikit-learn.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask'],
    github: '#',
    demo: null,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease:'easeOut' as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative" style={{ background: '#050505' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.08), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-widest font-medium mb-3" style={{ color: 'rgba(255,215,0,0.6)' }}>
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold section-title"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group glass-card rounded-2xl p-6 flex flex-col gap-4 cursor-default"
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span
                    className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full"
                    style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700' }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="mt-3 text-base font-semibold leading-snug"
                    style={{ color: '#F5F5F5', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className="flex items-center gap-4 pt-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {project.github && project.github !== '#' ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <FiGithub size={14} />
                    Source Code
                  </a>
                ) : (
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    <FiGithub size={14} />
                    Private Repo
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Upskill',
    period: 'May 2026 – Present',
    type: 'Full Stack',
    achievements: [
      'Developed a full-stack Food Delivery Application using the MERN stack with React.js frontend and Node.js, Express.js, and MongoDB backend',
      'Implemented secure user authentication with JWT, password hashing using bcrypt, and role-based access control for Customer, Restaurant Owner, and Delivery Driver roles',
      'Designed the application architecture, configured React Router and Tailwind CSS, and integrated frontend-backend API communication',
      'Resolved integration and validation issues through systematic API testing and debugging',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt', 'Tailwind CSS', 'REST APIs', 'Git/GitHub'],
  },
  {
    title: 'Agentic AI Intern',
    company: 'Innomatics Research Labs',
    period: 'February 2026 – May 2026',
    type: 'AI / Machine Learning',
    achievements: [
      'Developed and implemented Machine Learning and AI solutions across production-grade projects',
      'Built and debugged 3+ Agentic AI modules utilizing RAG pipelines and vector databases, reducing query resolution times during automated testing',
      'Developed projects involving RAG (Retrieval Augmented Generation), Semantic Search, and customer support automation',
      'Gained hands-on experience with Python, data processing, vector databases, and workflow orchestration',
    ],
    tags: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'FastAPI', 'Vector Databases'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative" style={{ background: '#080808' }}>
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
            Work History
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold section-title"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
          >
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-10 flex flex-col gap-10">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(255,215,0,0.4), rgba(255,215,0,0.05))' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15, ease: 'easeOut' }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="absolute -left-[46px] top-5 w-3 h-3 rounded-full"
                style={{ background: '#FFD700', boxShadow: '0 0 12px rgba(255,215,0,0.6)' }}
              />

              <div
                className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: '#F5F5F5', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {exp.title}
                    </h3>
                    <p className="mt-1 font-medium" style={{ color: '#FFD700' }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.2)' }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 mb-5">
                  {exp.achievements.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: '#FFD700' }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

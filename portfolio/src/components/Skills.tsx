import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode, FiServer, FiCpu, FiDatabase, FiTool,
} from 'react-icons/fi';

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: <FiCode size={15} />,
    skills: ['Python', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    label: 'Web & Frameworks',
    icon: <FiServer size={15} />,
    skills: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: <FiCpu size={15} />,
    skills: ['Machine Learning', 'RAG Systems', 'LangChain', 'LangGraph', 'LangSmith', 'NLP', 'TensorFlow', 'Scikit-learn'],
  },
  {
    id: 'database',
    label: 'Databases',
    icon: <FiDatabase size={15} />,
    skills: ['MongoDB', 'MySQL', 'SQLite', 'ChromaDB', 'Vector Databases'],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <FiTool size={15} />,
    skills: ['Git', 'GitHub', 'Postman', 'Uvicorn', 'VS Code'],
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const current = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-24 md:py-32 relative" style={{ background: '#080808' }}>
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
            Expertise
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold section-title"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
          >
            Technical Skills
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                activeTab === cat.id
                  ? {
                      background: 'rgba(255,215,0,0.12)',
                      border: '1px solid rgba(255,215,0,0.35)',
                      color: '#FFD700',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.55)',
                    }
              }
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill pills */}
        <motion.div
          key={activeTab}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-3"
        >
          {current.skills.map(skill => (
            <motion.div
              key={skill}
              variants={fadeUp}
              className="px-5 py-2.5 rounded-full text-sm font-medium cursor-default transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.8)',
              }}
              whileHover={{
                borderColor: 'rgba(255,215,0,0.4)',
                backgroundColor: 'rgba(255,215,0,0.06)',
                color: '#FFD700',
                y: -2,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '5+', label: 'AI/ML Projects' },
            { value: '1+', label: 'Internship' },
            { value: '1+', label: 'Certification' },
            { value: '20+', label: 'Technologies' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 rounded-2xl text-center transition-all duration-200 hover:-translate-y-1"
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: '#FFD700', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

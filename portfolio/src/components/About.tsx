import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiCalendar, FiBriefcase, FiZap } from 'react-icons/fi';
import ResumeRequestModal from './ResumeRequestModal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const quickFacts = [
  { icon: <FiCalendar size={16} />, label: 'B.Tech Computer Science', value: 'Class of 2027' },
  { icon: <FiMapPin size={16} />, label: 'Location', value: 'India' },
  { icon: <FiBriefcase size={16} />, label: 'Status', value: 'Open to opportunities' },
  { icon: <FiZap size={16} />, label: 'Specialization', value: 'LLM & RAG Systems' },
];

export default function About() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 relative" style={{ background: '#050505' }}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Avatar */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Gold glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              <div
                className="absolute -inset-0.75 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #FFD700, #FFC107, transparent, #FFD700)',
                  padding: '2px',
                  animation: 'spin 8s linear infinite',
                  opacity: 0.6,
                }}
              />
              <div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
                style={{ border: '2px solid rgba(255,215,0,0.2)' }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a1a0a)' }}
                >
                  <span
                    className="text-8xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    SA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest font-medium mb-3" style={{ color: '#FFD700', opacity: 0.7 }}>
                About Me
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold section-title"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
              >
                Engineering Intelligence
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              I'm a Computer Science undergraduate passionate about building production-ready intelligent
              systems. My focus spans LLM applications, RAG architectures, and full-stack web
              development — technology that doesn't just process data but actually{' '}
              <em style={{ color: 'rgba(255,215,0,0.8)', fontStyle: 'normal' }}>reasons about it</em>.
            </p>

            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              From building RAG-powered customer support assistants with semantic search and
              Human-in-the-Loop escalation, to developing MERN stack portals with secure
              authentication — I care deeply about making software that works in the real world.
            </p>

            <div
              className="p-4 rounded-xl text-sm"
              style={{
                background: 'rgba(255,215,0,0.05)',
                border: '1px solid rgba(255,215,0,0.12)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: '#FFD700', fontWeight: 500 }}>Career Objective:</span>{' '}
              Seeking challenging roles where I can apply cutting-edge AI/ML and full-stack
              techniques to solve meaningful problems at scale.
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {quickFacts.map((fact, i) => (
                <div
                  key={i}
                  className="glass-card p-4 rounded-xl flex flex-col gap-1 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2" style={{ color: '#FFD700' }}>
                    {fact.icon}
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,215,0,0.6)' }}>
                      {fact.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="btn-outline-gold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
              >
                <FiDownload size={15} />
                Download Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ResumeRequestModal open={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
}

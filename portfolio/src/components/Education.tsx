import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative" style={{ background: '#050505' }}>
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
            Academic Background
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold section-title"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
          >
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <div
            className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-[0.03]"
              style={{ background: 'radial-gradient(circle, #FFD700, transparent 70%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.2)' }}
                >
                  <FiBook size={20} style={{ color: '#FFD700' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: '#F5F5F5', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    B.Tech in Computer Science &amp; Engineering
                  </h3>
                  <p className="mt-1 font-medium" style={{ color: '#FFD700' }}>
                    Swarna Bharathi Institute of Science &amp; Technology
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <FiCalendar size={14} style={{ color: 'rgba(255,215,0,0.5)' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>2023 – 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiAward size={14} style={{ color: 'rgba(255,215,0,0.5)' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>CGPA: <strong style={{ color: '#FFD700' }}>8.03 / 10</strong></span>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Machine Learning',
                    'Deep Learning',
                    'Database Systems',
                    'Computer Networks',
                    'Operating Systems',
                    'Natural Language Processing',
                    'Object Oriented Programming',
                    'Software Engineering',
                    'DBMS',
                  ].map(course => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.55)',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

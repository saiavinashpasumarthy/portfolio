import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';

const certs = [
  {
    name: 'Agentic AI Internship',
    issuer: 'Innomatics Research Labs',
    credentialId: 'IN226018302',
    verify: 'https://online.innomatics.in/verify/A_02261523',
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative" style={{ background: '#080808' }}>
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
            Credentials
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold section-title"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
          >
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 group"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.15)' }}
                >
                  <FiAward size={16} style={{ color: '#FFD700' }} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold leading-snug"
                    style={{ color: '#F5F5F5', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: '#FFD700', opacity: 0.85 }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {cert.credentialId}
                </span>
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: 'rgba(255,215,0,0.08)',
                    border: '1px solid rgba(255,215,0,0.2)',
                    color: '#FFD700',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,215,0,0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,215,0,0.4)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,215,0,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,215,0,0.2)';
                  }}
                >
                  <FiExternalLink size={11} />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import NeuralSphere from './NeuralSphere';
import ResumeRequestModal from './ResumeRequestModal';

const floatingParticles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${1 + Math.random() * 2}px`,
  duration: `${8 + Math.random() * 12}s`,
  delay: `${Math.random() * 10}s`,
}));

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-125 h-125 rounded-full opacity-[0.06] blur-[80px]"
          style={{ background: 'radial-gradient(circle, #FFD700, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-75 h-75 rounded-full opacity-[0.04] blur-[60px]"
          style={{ background: 'radial-gradient(circle, #FFC107, transparent 70%)' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingParticles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              background: '#FFD700',
              opacity: 0,
              animation: `float-particle ${p.duration} ${p.delay} infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-widest"
                style={{
                  background: 'rgba(255,215,0,0.08)',
                  border: '1px solid rgba(255,215,0,0.2)',
                  color: '#FFD700',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
            >
              Sai Avinash
              <br />
              Pasumarthy
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-medium"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 60%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI &amp; ML Engineer · Full Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed max-w-xl"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Motivated Computer Science undergraduate with hands-on experience in AI/ML and
              Full-stack Development. Skilled in Python, MERN Stack, RAG Systems, and REST APIs —
              passionate about building scalable, intelligent software solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <button
                className="btn-gold px-6 py-3 rounded-full text-sm font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button
                onClick={() => setResumeModalOpen(true)}
                className="btn-outline-gold px-6 py-3 rounded-full text-sm flex items-center gap-2"
              >
                <FiDownload size={15} />
                Download Resume
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/saiavinashpasumarthy"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sai-avinash-pasumarthy-143476291"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >
                <FiLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Three.js sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' as const }}
            className="relative h-112.5 lg:h-140"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <NeuralSphere />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,215,0,0.4)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} style={{ color: 'rgba(255,215,0,0.4)' }} />
        </motion.div>
      </motion.div>

      <ResumeRequestModal open={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
}

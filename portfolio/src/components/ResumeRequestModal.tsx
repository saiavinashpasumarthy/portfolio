import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiCheckCircle, FiUser, FiMail, FiBriefcase } from 'react-icons/fi';

interface ResumeRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeRequestModal({ open, onClose }: ResumeRequestModalProps) {
  const [form, setForm] = useState({ name: '', email: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Resume Request — ${form.name}`);
    const body = encodeURIComponent(
      `Hi Sai Avinash,\n\nI would like to request a copy of your resume.\n\nName: ${form.name}\nEmail: ${form.email}${form.reason ? `\nReason: ${form.reason}` : ''}\n\nPlease share your resume at your earliest convenience.\n\nThank you!`
    );
    const mailto = `mailto:saiavinashpasumarthy2005@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailto, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation completes
    setTimeout(() => {
      setForm({ name: '', email: '', reason: '' });
      setSubmitted(false);
    }, 300);
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200
    bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/25
    focus:border-yellow-400/40 focus:bg-white/[0.06]
  `;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] cursor-pointer"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md pointer-events-auto rounded-2xl p-8"
              style={{
                background: 'rgba(10,10,10,0.97)',
                border: '1px solid rgba(255,215,0,0.15)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,215,0,0.05)',
              }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                <FiX size={18} />
              </button>

              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.2)' }}
                    >
                      <FiMail size={18} style={{ color: '#FFD700' }} />
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: '#F5F5F5', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Request Resume
                    </h3>
                    <p className="mt-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      Leave your details and I'll send you my resume directly.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                      <FiUser
                        size={14}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: 'rgba(255,215,0,0.4)' }}
                      />
                      <input
                        className={inputClass}
                        style={{ paddingLeft: '2.25rem' }}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="relative">
                      <FiMail
                        size={14}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: 'rgba(255,215,0,0.4)' }}
                      />
                      <input
                        type="email"
                        className={inputClass}
                        style={{ paddingLeft: '2.25rem' }}
                        placeholder="Your email address"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="relative">
                      <FiBriefcase
                        size={14}
                        className="absolute left-3.5 top-3.5 pointer-events-none"
                        style={{ color: 'rgba(255,215,0,0.4)' }}
                      />
                      <textarea
                        className={inputClass}
                        style={{ paddingLeft: '2.25rem', resize: 'none' }}
                        rows={3}
                        placeholder="Purpose (optional) — e.g. Hiring for a role, Freelance project..."
                        value={form.reason}
                        onChange={e => setForm(f => ({ ...f, reason: e.target.value }))}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-gold mt-1 px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <FiSend size={14} />
                      Send Request
                    </button>
                  </form>
                </>
              ) : (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center gap-4 py-4"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.25)' }}
                  >
                    <FiCheckCircle size={26} style={{ color: '#FFD700' }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: '#F5F5F5', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Request Sent!
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Your email client should have opened with the request pre-filled.
                      Once approved, you'll receive the resume directly in your inbox.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="btn-outline-gold px-6 py-2.5 rounded-full text-sm mt-2"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

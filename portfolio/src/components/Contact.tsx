import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200
    bg-white/[0.04] border border-white/[0.08] text-white/80 placeholder:text-white/25
    focus:border-yellow-400/40 focus:bg-white/[0.06]
  `;

  return (
    <section id="contact" className="py-24 md:py-32 relative" style={{ background: '#050505' }}>
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
            Reach Out
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold section-title"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F5F5F5' }}
          >
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Whether you have a project in mind, want to discuss AI/ML opportunities, or just want
              to connect — I'm always open to interesting conversations.
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <FiMail size={18} />,
                  label: 'Email',
                  value: 'saiavinashpasumarthy2005@gmail.com',
                  href: 'mailto:saiavinashpasumarthy2005@gmail.com',
                },
                {
                  icon: <FiGithub size={18} />,
                  label: 'GitHub',
                  value: 'github.com/saiavinashpasumarthy',
                  href: 'https://github.com/saiavinashpasumarthy',
                },
                {
                  icon: <FiLinkedin size={18} />,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/sai-avinash-pasumarthy',
                  href: 'https://linkedin.com/in/sai-avinash-pasumarthy-143476291',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,215,0,0.08)', color: '#FFD700' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  className={inputClass}
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
                <input
                  type="email"
                  className={inputClass}
                  placeholder="Your email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <input
                className={inputClass}
                placeholder="Subject"
                value={form.subject}
                onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              />
              <textarea
                className={inputClass}
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
                style={{ resize: 'none' }}
              />
              <button
                type="submit"
                className="btn-gold px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 self-start"
              >
                <FiSend size={15} />
                {sent ? 'Message Sent!' : 'Send Message'}
              </button>
              {sent && (
                <p className="text-sm" style={{ color: '#FFD700', opacity: 0.8 }}>
                  Your message has been sent. I'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

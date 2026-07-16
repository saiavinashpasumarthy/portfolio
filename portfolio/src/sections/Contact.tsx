import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:you@example.com" }, // TODO: your real email
  { icon: Github, label: "GitHub", href: "https://github.com/" }, // TODO: your real GitHub
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" }, // TODO: your real LinkedIn
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to your email service / form backend of choice
    setSent(true);
  };

  return (
    <section id="contact" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        CONTACT
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Let's build something
      </motion.h2>
      <p className="text-secondary text-center max-w-xl mb-14">
        Open to internships, full-time roles, and interesting collaborations.
        The fastest way to reach me is below.
      </p>

      <div className="w-full max-w-4xl grid md:grid-cols-5 gap-10">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="card md:col-span-3 flex flex-col gap-4"
        >
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="form-input"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="form-input"
          />
          <textarea
            required
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="form-input resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="gold-button flex items-center justify-center gap-2 rounded-full px-6 py-3 mt-2"
          >
            {sent ? "Message sent" : "Send message"}
            <Send size={16} />
          </motion.button>
        </motion.form>

        {/* Socials + resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center gap-4"
            >
              <s.icon size={20} color="var(--gold-2)" />
              <span className="text-sm">{s.label}</span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="outline-button flex items-center justify-center gap-2 rounded-full px-6 py-3 mt-2"
          >
            Download Resume
            <Download size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

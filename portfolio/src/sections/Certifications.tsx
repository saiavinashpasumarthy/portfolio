import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

// TODO: replace with your real certifications
const certifications = [
  {
    title: "Machine Learning Specialization",
    org: "DeepLearning.AI",
    id: "CERT-ML-0001",
    link: "https://example.com/verify",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    id: "CERT-AWS-0002",
    link: "https://example.com/verify",
  },
  {
    title: "Full Stack Web Development",
    org: "Meta",
    id: "CERT-FSD-0003",
    link: "https://example.com/verify",
  },
];

export default function Certifications() {
  return (
    <section id="certificates" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        CERTIFICATIONS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Verified credentials
      </motion.h2>

      <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card flex flex-col items-center text-center"
          >
            <div className="cert-medallion mb-5">
              <BadgeCheck size={28} color="var(--gold-2)" />
            </div>
            <h3 className="text-base font-semibold mb-1">{cert.title}</h3>
            <p className="text-sm text-secondary mb-4">{cert.org}</p>
            <p className="text-xs text-secondary mb-5" style={{ letterSpacing: "0.05em" }}>
              ID · {cert.id}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="outline-button flex items-center gap-2 px-5 py-2 rounded-full text-sm mt-auto"
            >
              Verify
              <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

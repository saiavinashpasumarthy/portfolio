import { motion } from "framer-motion";
import { Sparkles, Code2, GraduationCap, Rocket } from "lucide-react";

const quickFacts = [
  { icon: Rocket, label: "Projects Shipped", value: "12+" },
  { icon: Code2, label: "Technologies", value: "20+" },
  { icon: GraduationCap, label: "Certifications", value: "6" },
  { icon: Sparkles, label: "Years Building", value: "3+" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="section flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.3em] text-gold-2 mb-4 text-center"
        style={{ color: "var(--gold-2)" }}
      >
        ABOUT
      </motion.p>

      <div className="grid md:grid-cols-5 gap-16 w-full max-w-6xl items-start">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Building at the edge of AI and software.
          </h2>
          <p className="text-secondary leading-relaxed mb-5">
            {/* TODO: replace with your real introduction */}
            I'm a software engineer who works across the full stack, with a
            focus on applying AI and machine learning to real products. My
            path started with a curiosity for how systems think, and turned
            into a habit of shipping things that combine solid engineering
            with intelligent behavior.
          </p>
          <p className="text-secondary leading-relaxed mb-5">
            {/* TODO: replace with your real career journey */}
            Along the way I've worked on internships and independent
            projects spanning web platforms, ML pipelines, and interactive
            3D experiences — this site included. I care about interfaces
            that feel considered, and code that's built to last past the
            first demo.
          </p>
          <p className="text-secondary leading-relaxed">
            {/* TODO: replace with your real objective */}
            Right now I'm looking for opportunities to work on ambitious AI
            products, on teams that value craft as much as velocity.
          </p>
        </motion.div>

        {/* Quick facts */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {quickFacts.map((fact, i) => (
            <motion.div
              key={fact.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card flex flex-col items-start gap-3"
            >
              <fact.icon size={22} color="var(--gold-2)" />
              <div>
                <p className="text-2xl font-bold gradient-text">{fact.value}</p>
                <p className="text-xs text-secondary mt-1">{fact.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

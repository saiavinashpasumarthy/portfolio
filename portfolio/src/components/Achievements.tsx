import { motion } from "framer-motion";
import {
  Trophy,
  BriefcaseBusiness,
  Bot,
  Medal,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Prize — DSA with Python",
    description:
      "Secured 1st place in a 15-day DSA with Python CRT program conducted through ICare Academy.",
    highlight: "₹5,000 Award",
    category: "Achievement",
  },
  {
    icon: BriefcaseBusiness,
    title: "Campus Placement — Shnoor International",
    description:
      "Selected through the campus recruitment process at Shnoor International as Software Engineer Intern.",
    highlight: "Campus Selection",
    category: "Career",
  },
  {
    icon: Bot,
    title: "Advanced Generative AI Internship",
    description:
      "Successfully completed an Advanced Generative AI internship at Innomatics Research Labs, Hyderabad.",
    highlight: "Feb 2026 — May 2026",
    category: "Internship",
  },
  {
    icon: Medal,
    title: "2nd Prize — Employability Skills",
    description:
      "Secured 2nd prize in an Employability Skills program focused on professional etiquette, communication, and workplace readiness.",
    highlight: "2nd Prize",
    category: "Achievement",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">
            Milestones
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Achievements{" "}
            <span className="text-yellow-500">&amp; Milestones</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A few milestones that reflect my journey in technology,
            leadership, and professional growth.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl p-7 transition-all duration-300 group-hover:border-yellow-500/40 group-hover:bg-yellow-500/3">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>

                    <span className="text-xs uppercase tracking-widest text-gray-500 border border-white/10 rounded-full px-3 py-1">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {achievement.description}
                  </p>

                  {/* Highlight */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-sm font-medium text-yellow-500">
                      {achievement.highlight}
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl bg-yellow-500/10 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
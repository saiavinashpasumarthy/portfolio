import {motion} from 'framer-motion';
import {ArrowRight, Download} from 'lucide-react';

export default function HeroButton() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <motion.a
        href="#projects"
        whileHover={{scale: 1.05, y: -2}}
        whileTap={{scale: 0.97,}}
        className="group flex items-center gap-2 rounded-full gold-button">
          view projects
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      <motion.a
        href="/resume.pdf"
        whileHover={{scale: 1.05, y: -2}}
        whileTap={{scale: 0.97,}}
        className="group flex items-center gap-2 px-7 py-4 rounded-full outline-button">
          Download Resume
        <Download size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </motion.a>
    </div>
  );
}
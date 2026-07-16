import { motion } from 'framer-motion';

const NavItems = [
  { name: 'Hero', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-[92vw]"
    >
      <div className="glass flex items-center gap-6 md:gap-8 px-6 md:px-8 py-4 rounded-full overflow-x-auto no-scrollbar">
        <h1 className="gradient-text font-bold text-lg shrink-0">SA</h1>
        <ul className="flex items-center gap-6 md:gap-8 shrink-0">
          {NavItems.map((item) => (
            <li key={item.name} className="shrink-0">
              <a href={item.href} className="nav-link text-sm font-medium whitespace-nowrap">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

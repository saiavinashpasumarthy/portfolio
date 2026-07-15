import {motion} from 'framer-motion';

const NavItems = [
  {name: 'Hero', href: '#hero'},
  {name: 'About', href: '#about'},
  {name: 'Skills', href: '#skills'},
  {name: 'Projects', href: '#projects'},
  {name: 'Certificates', href: '#certificates'},
  {name: 'Contact', href: '#contact'},
];
export default function Navbar() {
  return (
    <motion.nav
    initial={{y: -100, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.8}}
    className="fixed top-5 left-1/2 translate-x-1/2 z-50">
        <div className="glass flex items-center justify-between gap-12 px-8 py-4 rounded-full">
            <h1 className= "gradient-text font-bold text-lg">
                SA
            </h1>
            <ul className="flex items-center gap-8">
                {NavItems.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="nav-link text-sm font-medium">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </motion.nav>
  );
}
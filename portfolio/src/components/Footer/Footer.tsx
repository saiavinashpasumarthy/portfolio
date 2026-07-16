import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/" }, // TODO: your real GitHub
  { icon: Linkedin, href: "https://linkedin.com/" }, // TODO: your real LinkedIn
  { icon: Mail, href: "mailto:you@example.com" }, // TODO: your real email
];

export default function Footer() {
  return (
    <footer className="px-[10%] py-10 flex flex-col items-center gap-6 border-t" style={{ borderColor: "var(--glass-border)" }}>
      <h2 className="gradient-text font-bold text-lg">SA</h2>

      <ul className="flex flex-wrap items-center justify-center gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="nav-link text-sm">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        {socials.map(({ icon: Icon, href }, i) => (
          <a key={i} href={href} target="_blank" rel="noreferrer">
            <Icon size={18} className="text-secondary hover:text-[var(--gold-2)] transition-colors" />
          </a>
        ))}
      </div>

      <p className="text-xs text-secondary">
        © {new Date().getFullYear()} Sai Avinash. Built with React, Three.js & a lot of gold.
      </p>
    </footer>
  );
}

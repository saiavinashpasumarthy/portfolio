import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-6 lg:px-12"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,215,0,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name + tagline */}
          <div className="text-center md:text-left">
            <span
              className="text-xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FFC107)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Sai Avinash Pasumarthy
            </span>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Designed &amp; developed with precision
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {quickLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FiGithub size={17} />, href: 'https://github.com/saiavinashpasumarthy' },
              { icon: <FiLinkedin size={17} />, href: 'https://linkedin.com/in/sai-avinash-pasumarthy-143476291' },
              { icon: <FiMail size={17} />, href: 'mailto:saiavinashpasumarthy2005@gmail.com' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)' }}
        >
          &copy; 2026 Sai Avinash Pasumarthy. Built with React, Three.js &amp; passion.
        </div>
      </div>
    </footer>
  );
}

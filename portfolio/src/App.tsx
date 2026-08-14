import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Spotlight cursor position
function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      className="spotlight-cursor"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}

// Lenis smooth scroll initialization
function useLenis() {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    let rafId: number | null = null;
    let cancelled = false;

    const initLenis = async () => {
      try {
        const LenisModule = await import('@studio-freight/lenis');

        if (cancelled) return;

        const LenisClass = LenisModule.default;

        if (!LenisClass) return;

        const instance = new LenisClass({
          duration: 1.2,
          easing: (t: number) =>
            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        if (cancelled) {
          instance.destroy();
          return;
        }

        lenis = instance;

        const raf = (time: number) => {
          if (!lenis) return;

          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis is optional — native scrolling remains available.
      }
    };

    initLenis();

    return () => {
      cancelled = true;

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useLenis();

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <SpotlightCursor />

          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
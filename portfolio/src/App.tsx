import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import useLenis from "./hooks/useLenis";
import SpotlightCursor from "./components/UI/spotlightcursor";
import LoadingScreen from "./components/Loading/loadingscreen";

export default function App() {
  useLenis();
  return (
    <>
      <LoadingScreen>
        <SpotlightCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </LoadingScreen>
    </>
  );
}

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
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
      <Projects />
      <Contact />
      <Footer />
      </LoadingScreen>
    </>
  );
}
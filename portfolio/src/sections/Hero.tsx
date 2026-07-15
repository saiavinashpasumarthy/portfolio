import HeroButton from "../components/UI/HeroButton";
import Scene from "../three/Scene";
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen px-[10%] flex items-center">
      <div>
        <p className="text-lg text-secondary">
            Hi,I'm
        </p>
        <h1 className="hero-title gradient-text">
            SAI AVINASH
        </h1>
        <p className="hero-subtitle mt-6 max-w-xl">
            Software Engineer . AI . ML . Full Stack Developer
        </p>
        <HeroButton />
      </div>
      <div className="flex justify-center items-center h-125">
        <Scene />
      </div>
      <div className="hero-background"/>
      Hero content
    </section>
  );
}
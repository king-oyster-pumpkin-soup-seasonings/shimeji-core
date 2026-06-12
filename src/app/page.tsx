import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

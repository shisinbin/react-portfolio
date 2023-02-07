import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SourceCode from '../components/SourceCode';
import Hero from '../components/Hero';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SourceCode />
    </main>
  );
}

export default Home;

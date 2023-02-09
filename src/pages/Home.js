import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SourceCode from '../components/SourceCode';
import Hero from '../components/Hero';

import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

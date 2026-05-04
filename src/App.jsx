import React from 'react';
import './index.css';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Skills   from './components/Skills';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

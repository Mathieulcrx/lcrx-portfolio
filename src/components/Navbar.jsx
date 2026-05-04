import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">LCRX<span>.</span></a>
      <ul>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

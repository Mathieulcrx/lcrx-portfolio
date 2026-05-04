import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <p className="hero-eyebrow reveal">Vidéaste · Photographe</p>

      <h1 className="hero-title reveal reveal-delay-1">
        <span className="outline">LACROIX</span><br />
        <span>MATHIEU</span><br />
        <span className="gold">LCRX<span className="gold-outline">.</span></span>
      </h1>

      <div className="hero-sub reveal reveal-delay-2">
        <p className="hero-desc">
          Production vidéo &amp; photographie à haute valeur cinématique —
          sport, événementiel, athlètes d'élite.
        </p>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}

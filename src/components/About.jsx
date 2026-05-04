import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="about-left reveal">
        <span className="about-number">01</span>
        <h2 className="about-heading">
          L'image<br />au service<br />de l'émotion
        </h2>
        <div className="about-stats">
          <div>
            <span className="stat-num">2+</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
          <div>
            <span className="stat-num">20+</span>
            <span className="stat-label">Projets réalisés</span>
          </div>
          <div>
            <span className="stat-num">∞</span>
            <span className="stat-label">Images capturées</span>
          </div>
        </div>
      </div>

      <div className="about-right reveal reveal-delay-1">
        <p className="section-label">À propos</p>
        <p className="about-text">
          Je m'appelle Mathieu Lacroix, vidéaste et photographe spécialisé dans
          l'univers du sport et de l'événementiel. Mon travail s'articule autour
          d'une conviction simple : chaque image doit raconter une histoire,
          porter une émotion, figer un instant qui ne se répétera jamais.
        </p>
        <p className="about-text">
          J'ai eu l'honneur de collaborer avec des clients exigeants — la station
          de Val d'Isère, le Marathon de la Bière à Saint-Étienne, ou encore des
          athlètes de l'Équipe de France d'athlétisme. Des terrains de jeu variés,
          un seul standard : l'excellence visuelle.
        </p>
        <p className="about-text">
          Chaque production est pensée avec une identité colorimétrique forte, un
          sens du cadre hérité du cinéma, et une capacité à capter l'instant
          décisif dans les environnements les plus dynamiques.
        </p>
      </div>
    </section>
  );
}

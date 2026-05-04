import React from 'react';
import './Skills.css';
import skills from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-layout">

        <div className="reveal">
          <p className="section-label">Expertise</p>
          <h2 className="skills-heading">
            Mes<br />
            <span className="gold">compé-<br />tences</span>
          </h2>
        </div>

        <ul className="skills-list reveal reveal-delay-1">
          {skills.map((s, i) => (
            <li key={s.id} className="skill-item">
              <span className="skill-num">0{i + 1}</span>
              <div className="skill-info">
                <span className="skill-name">{s.name}</span>
                <span className="skill-desc">{s.desc}</span>
              </div>
              <div className="skill-tools">
                {s.tools.map((t) => (
                  <span key={t} className="tool-pill">{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

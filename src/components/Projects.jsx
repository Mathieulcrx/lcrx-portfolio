import React, { useState } from 'react';
import './Projects.css';
import projects from '../data/projects';

function ProjectCard({ project }) {
  const [muted, setMuted] = useState(true);

  const videoSrc = project.videoUrl
    ? project.videoUrl.replace('mute=1', `mute=${muted ? 1 : 0}`)
    : null;

  return (
    <div className="project-card">
      {/* ── Visuel ── */}
      {project.videoUrl ? (
        <>
          <iframe
            className="project-media"
            src={videoSrc}
            title={project.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            key={muted}
          />
          <button
            className="mute-btn"
            onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
            title={muted ? 'Activer le son' : 'Couper le son'}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </>
      ) : project.image ? (
        <img src={project.image} alt={project.title} className="project-media" />
      ) : (
        <div className={`project-placeholder ${project.placeholder}`}>
          <span className="ph-icon">{project.placeholderIcon}</span>
        </div>
      )}

      {/* ── Badge tag ── */}
      {project.tag && (
        <span className="project-badge">{project.tag}</span>
      )}

      {/* ── Overlay hover ── */}
      <div className="project-overlay">
        <span className="project-tag">{project.label}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-intro reveal">
        <div>
          <p className="section-label">Réalisations</p>
          <h2 className="projects-heading">
            Projets<br />
            <span className="gold">sélectionnés</span>
          </h2>
        </div>
      </div>

      <div className="projects-grid reveal reveal-delay-1">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

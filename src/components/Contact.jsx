import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-bg-text" aria-hidden="true">LCRX</div>
      <div className="contact-content">
        <p className="section-label reveal">Contact</p>
        <h2 className="contact-heading reveal reveal-delay-1">
          Un projet<br />
          <span className="outline">en tête ?</span>
        </h2>
        <div className="contact-links reveal reveal-delay-2">
          <a href="mailto:lcrx.production@gmail.com" className="contact-link">
            <span>lcrx.production@gmail.com</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href="https://instagram.com/lcrx.production"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span>@lcrx.production</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './Hero.css';

const Hero = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="hero">
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${base}hero_background_updated.png)` }}
      ></div>

      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">
          <span className="hero-title-main">HEAL HEAART</span>
          <span className="hero-title-sub">A Door to Your Answers.</span>
        </h1>

        <p className="hero-subtitle">
          A platform dedicated to mental and chronic health awareness, support, and understanding. You don't have to carry the weight alone.
        </p>

        <a href="#contact" className="primary-cta glass-panel">
          Join Our Community
        </a>
      </div>
    </section>
  );
};

export default Hero;
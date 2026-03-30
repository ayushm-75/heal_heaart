import React from 'react';
import './TheProblem.css';
import { EyeOff, Activity, Link2Off } from 'lucide-react';

const TheProblem = () => {
  return (
    <section id="problem" className="section-padding problem-section">
      <div className="container">
        <h2 className="section-title">Why HEAL HEAART?</h2>
        <div className="problem-grid">
          <div className="problem-card glass-panel">
            <div className="problem-icon"><EyeOff size={40} /></div>
            <h3>Stigma</h3>
            <p>Despite growing awareness, mental health remains stigmatized, preventing open expression and honest conversations.</p>
          </div>
          <div className="problem-card glass-panel">
            <div className="problem-icon"><Activity size={40} /></div>
            <h3>Invisible Illness</h3>
            <p>Chronic illnesses without visible symptoms are often dismissed, leaving many feeling unheard and isolated.</p>
          </div>
          <div className="problem-card glass-panel">
            <div className="problem-icon"><Link2Off size={40} /></div>
            <h3>The Disconnect</h3>
            <p>The gap between physical and psychological health leads to isolation and delayed, fragmented care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;

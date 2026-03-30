import React from 'react';
import './FourPillars.css';
import { Lightbulb, Users, BookOpen, Search } from 'lucide-react';

const FourPillars = () => {
  const pillars = [
    { title: 'Awareness', desc: 'Spreading knowledge to reduce stigma and encourage understanding.', icon: <Lightbulb size={32} /> },
    { title: 'Community', desc: 'Building a safe, inclusive space for sharing experiences and finding support.', icon: <Users size={32} /> },
    { title: 'Education', desc: 'Improving comprehension of total well-being, merging physical and mental health.', icon: <BookOpen size={32} /> },
    { title: 'Exploration', desc: 'Finding deeper insights into misunderstood illnesses through ongoing research.', icon: <Search size={32} /> }
  ];

  return (
    <section id="pillars" className="section-padding pillars-section">
      <div className="container">
        <h2 className="section-title">The Four Pillars</h2>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card glass-panel">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;

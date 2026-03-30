import React from 'react';
import './OurSolution.css';
import { ArrowRight } from 'lucide-react';

const OurSolution = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="solution" className="section-padding solution-section">
      <div className="container">
        <div className="solution-content">
          <h2 className="section-title">Turning Silence into Expression.</h2>
          <p className="solution-description">
            We are creating a world where no one feels ignored, dismissed, or alone in their journey toward healing. Our platform bridges the gap, offering validation and robust resources.
          </p>
          <p className="solution-description">
            By uniting medical insights with psychological support, we aim to break the stigma and build a compassionate, informed society that recognizes every form of struggle.
          </p>
          <a href="#mission" className="solution-link">
            Learn more about our mission <ArrowRight size={20} />
          </a>
          
          <div className="founder-section">
            <img 
              src={`${base}founder_portrait.png`} 
              alt="CEO and Founder of HEAL HEAART" 
              className="founder-photo" 
            />
            <div className="founder-info">
              <h3>CEO & Founder</h3>
              <p>HEAL HEAART</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
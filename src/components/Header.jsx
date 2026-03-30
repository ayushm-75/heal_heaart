import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <a href="#">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="HEAL HEAART Logo" 
              className="header-logo-img" 
            />
          </a>
        </div>
        <nav className="main-nav">
          <a href="#problem">The Gap</a>
          <a href="#solution">Our Solution</a>
          <a href="#pillars">Pillars</a>
          <a href="#contact" className="nav-cta">Connect</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
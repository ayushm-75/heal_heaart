import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import OurSolution from './components/OurSolution';
import FourPillars from './components/FourPillars';
import VisionStatement from './components/VisionStatement';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TheProblem />
        <OurSolution />
        <FourPillars />
        <VisionStatement />
      </main>
      <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import { Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Connect With Us</h2>
          <p className="footer-placeholder">
          </p>
          <div className="footer-links">
            <a href="tel:#" aria-label="Call" className="social-icon"><Phone size={24} strokeWidth={1.5} /></a>
            <a href="mailto:healheaart09@gmail.com" aria-label="Email" className="social-icon"><Mail size={24} strokeWidth={1.5} /></a>
            <a href="https://instagram.com/healheaart" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>A step toward creating a world where no one feels alone.</p>
        <p>&copy; {new Date().getFullYear()} HEAL HEAART. All Rights Reserved.</p>
        <p>Designed by Ayush Mallick</p>
      </div>
    </footer>
  );
};

export default Contact;

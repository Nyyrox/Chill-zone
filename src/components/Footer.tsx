import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/logo.jpg" alt="Chill Zone" />
          <div className="footer-brand-info">
            <h4>Chill Zone AC Repair Services</h4>
            <p>Best AC Repair in Muzaffarpur, Bihar</p>
          </div>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chill Zone AC Repair Services In Muzaffarpur. All rights reserved.</p>
      </div>
    </footer>
  );
};

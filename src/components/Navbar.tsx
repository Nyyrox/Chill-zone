import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} id="navbar">
      <a href="#" className="nav-brand" onClick={closeMenu}>
        <img src="/logo.jpg" alt="Chill Zone Logo" className="nav-logo" />
        <span className="nav-brand-text">Chill Zone</span>
      </a>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="nav-links">
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <a href="tel:+918651726130" className="nav-cta">
        <i className="fas fa-phone"></i> Call Now
      </a>

      <button
        className={`nav-mobile-toggle ${isMenuOpen ? 'open' : ''}`}
        id="nav-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

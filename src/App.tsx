import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCanvas } from './components/HeroCanvas';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export const App: React.FC = () => {
  useEffect(() => {
    // Scroll Reveal Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));

    // Smooth Anchor Scroll Offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            const topOffset = element.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <HeroCanvas />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;

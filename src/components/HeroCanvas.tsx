import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 240;
const FRAME_PATH = '/bg-animation-image/ezgif-frame-';

function pad(n: number): string {
  return String(n).padStart(3, '0');
}

function computeSlideOpacity(progress: number, inStart: number, inEnd: number, outStart: number, outEnd: number): number {
  if (progress < inStart || progress > outEnd) return 0;
  if (progress >= inEnd && progress <= outStart) return 1;
  if (progress < inEnd) return (progress - inStart) / (inEnd - inStart);
  return 1 - (progress - outStart) / (outEnd - outStart);
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loadPercent, setLoadPercent] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [slideOpacities, setSlideOpacities] = useState({
    slide1: 1,
    slide2: 0,
    slide3: 0,
    slide4: 0
  });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let allImagesLoaded = false;
    let currentFrame = -1;
    let animationFrameId: number;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      currentFrame = -1;
    }

    function drawFrame(img: HTMLImageElement) {
      if (!img || !img.complete || img.naturalWidth <= 0 || !canvas || !ctx) return;
      const cW = canvas.width;
      const cH = canvas.height;
      const iR = img.naturalWidth / img.naturalHeight;
      const cR = cW / cH;
      let dW: number, dH: number, dX: number, dY: number;

      // On widescreen desktop (cR > 1.2), cover full width and height edge-to-edge
      if (cR > 1.2) {
        if (cR > iR) {
          dW = cW;
          dH = cW / iR;
          dX = 0;
          dY = (cH - dH) / 2;
        } else {
          dH = cH;
          dW = cH * iR;
          dX = (cW - dW) / 2;
          dY = 0;
        }
      } else {
        // On mobile portrait, fit full width starting right at the bottom of the navbar
        dW = cW;
        dH = cW / iR;
        dX = 0;
        dY = 72;
      }

      ctx.fillStyle = '#080c14';
      ctx.fillRect(0, 0, cW, cH);
      ctx.drawImage(img, dX, dY, dW, dH);
    }

    function getProgress(): number {
      if (!containerRef.current) return 0;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      return Math.max(0, Math.min(1, -rect.top / total));
    }

    function render() {
      if (!allImagesLoaded) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const p = getProgress();
      const fi = Math.min(FRAME_COUNT - 1, Math.floor(p * (FRAME_COUNT - 1)));

      if (fi !== currentFrame) {
        currentFrame = fi;
        drawFrame(images[fi]);
      }

      // Slide opacities
      const o1 = computeSlideOpacity(p, -0.10, 0.00, 0.15, 0.23);
      const o2 = computeSlideOpacity(p, 0.18, 0.26, 0.40, 0.48);
      const o3 = computeSlideOpacity(p, 0.43, 0.51, 0.65, 0.73);
      const o4 = computeSlideOpacity(p, 0.68, 0.76, 0.90, 0.98);

      setSlideOpacities({
        slide1: o1,
        slide2: o2,
        slide3: o3,
        slide4: o4
      });

      animationFrameId = requestAnimationFrame(render);
    }

    function onImageLoad() {
      loadedCount++;
      const pct = Math.round((loadedCount / FRAME_COUNT) * 100);
      setLoadPercent(pct);

      if (loadedCount === 1 || images[0].complete) {
        drawFrame(images[0]);
      }

      if (loadedCount === FRAME_COUNT) {
        allImagesLoaded = true;
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      }
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.onload = onImageLoad;
      img.onerror = onImageLoad;
      img.src = `${FRAME_PATH}${pad(i + 1)}.jpg`;
      images[i] = img;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* LOADER */}
      <div id="loader" className={isLoaded ? 'hidden' : ''}>
        <img src="/logo.jpg" alt="Chill Zone" className="loader-logo" />
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${loadPercent}%` }}></div>
        </div>
        <p className="loader-text">Loading {loadPercent}%</p>
      </div>

      {/* HERO ANIMATION SCROLL TRACK */}
      <div id="animation-container" ref={containerRef}>
        <canvas id="hero-canvas" ref={canvasRef}></canvas>

        <div className="hero-overlay" id="hero-overlay">
          <div className="hero-gradient-top"></div>
          <div className="hero-gradient-bottom"></div>

          {/* SLIDE 1: Brand Intro (100% visible on load) */}
          <div
            className={`hero-slide ${slideOpacities.slide1 > 0.05 ? 'active' : ''}`}
            id="slide1"
            style={{ opacity: slideOpacities.slide1 }}
          >
            <img src="/logo.jpg" alt="Chill Zone" className="slide1-logo" />
            <h1 className="slide1-title">Chill Zone<br />Repair Service</h1>
            <p className="slide1-sub">Expert AC Repair, Servicing & Installation in Muzaffarpur</p>
            <div className="slide-cta-row">
              <a href="tel:+918651726130" className="btn-hero-primary">
                <i className="fas fa-phone"></i> Call Now
              </a>
              <a
                href="https://wa.me/918651726130?text=Hi%20Chill%20Zone%2C%20I%20need%20AC%20repair%20service"
                target="_blank"
                rel="noreferrer"
                className="btn-hero-secondary"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
            <div className="slide1-scroll">
              <div className="scroll-mouse"></div>
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* SLIDE 2: Ratings & Stats */}
          <div
            className={`hero-slide ${slideOpacities.slide2 > 0.05 ? 'active' : ''}`}
            id="slide2"
            style={{ opacity: slideOpacities.slide2 }}
          >
            <div className="slide2-badge">
              <i className="fas fa-certificate"></i> Google Verified Business
            </div>
            <div className="slide2-rating">4.9★</div>
            <div className="slide2-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="slide2-reviews">Based on 264+ Happy Customer Reviews in Muzaffarpur</p>
            <div className="slide2-stats">
              <div className="slide2-stat">
                <span className="slide2-stat-val">24/7</span>
                <span className="slide2-stat-lbl">Emergency Service</span>
              </div>
              <div className="slide2-divider"></div>
              <div className="slide2-stat">
                <span className="slide2-stat-val">45 Min</span>
                <span className="slide2-stat-lbl">Fast Doorstep Visit</span>
              </div>
              <div className="slide2-divider"></div>
              <div className="slide2-stat">
                <span className="slide2-stat-val">100%</span>
                <span className="slide2-stat-lbl">Genuine Parts</span>
              </div>
            </div>
          </div>

          {/* SLIDE 3: Services Teaser */}
          <div
            className={`hero-slide ${slideOpacities.slide3 > 0.05 ? 'active' : ''}`}
            id="slide3"
            style={{ opacity: slideOpacities.slide3 }}
          >
            <p className="slide3-label">Core Specialization</p>
            <h2 className="slide3-title">Complete Cooling Solutions</h2>
            <div className="slide3-services">
              <span className="slide3-tag"><i className="fas fa-search"></i> Diagnostics & Inspection</span>
              <span className="slide3-tag"><i className="fas fa-spray-can"></i> Jet-Pump Deep Wash</span>
              <span className="slide3-tag"><i className="fas fa-wind"></i> Full Gas Refilling</span>
              <span className="slide3-tag"><i className="fas fa-tools"></i> Split & Window Install</span>
            </div>
            <p className="slide3-price">Affordable Doorstep Rates starting from <span>₹399</span></p>
          </div>

          {/* SLIDE 4: Call to Action */}
          <div
            className={`hero-slide ${slideOpacities.slide4 > 0.05 ? 'active' : ''}`}
            id="slide4"
            style={{ opacity: slideOpacities.slide4 }}
          >
            <h2 className="slide4-title">Stay Cool with Chill Zone</h2>
            <p className="slide4-sub">Professional, reliable AC technicians ready at your doorstep across Muzaffarpur</p>
            <div className="slide4-btns">
              <a href="tel:+918651726130" className="btn-hero-primary">
                <i className="fas fa-phone-alt"></i> Call: 086517 26130
              </a>
              <a
                href="https://wa.me/918651726130?text=Hi%20Chill%20Zone%2C%20I%20need%20AC%20service"
                target="_blank"
                rel="noreferrer"
                className="btn-hero-secondary"
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
            <p className="slide4-info"><i className="fas fa-map-marker-alt"></i> Majhaulia Rd, near Idea Tower, Gobarsahi, Muzaffarpur</p>
          </div>
        </div>
      </div>
    </>
  );
};

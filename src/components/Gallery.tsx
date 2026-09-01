import React, { useState, useEffect } from 'react';

const galleryImages = [
  { id: 2, src: '/Gallery/6102624597900464746.jpg', alt: 'Doorstep AC Repair' },
  { id: 3, src: '/Gallery/6102624597900464747.jpg', alt: 'Jet-Pump Deep Wash' },
  { id: 4, src: '/Gallery/6102624597900464748.jpg', alt: 'Outdoor Unit Servicing' },
  { id: 5, src: '/Gallery/6102624597900464749.jpg', alt: 'Gas Refilling & Leak Check' },
  { id: 6, src: '/Gallery/6102624597900464750.jpg', alt: 'Precision AC Installation' },
  { id: 7, src: '/Gallery/6102624597900464751.jpg', alt: 'AC Cooling Coil Cleaning' },
  { id: 8, src: '/Gallery/6102624597900464752.jpg', alt: 'Compressor Diagnostics' },
  { id: 9, src: '/Gallery/6102624597900464753.jpg', alt: 'Expert Technician at Work' },
  { id: 10, src: '/Gallery/6102624597900464754.jpg', alt: 'Doorstep Service Visit' },
  { id: 11, src: '/Gallery/6102624597900464755.jpg', alt: 'AC Deep Cleaning Complete' },
  { id: 12, src: '/Gallery/6102624597900464756.jpg', alt: 'Chill Zone AC Repair Work' },
  { id: 13, src: '/Gallery/6102624597900464757.jpg', alt: 'High Quality AC Repair' },
  { id: 14, src: '/Gallery/6102624597900464758.jpg', alt: 'Muzaffarpur Doorstep Service' }
];

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 4);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="section">
      <div className="section-header reveal">
        <p className="section-label">Real Work Highlights</p>
        <h2 className="section-title">Our Service & Work Gallery</h2>
        <p className="section-desc">
          Explore real snapshots of doorstep AC repair, deep jet-pump servicing, PCB diagnostics, and installations completed across Muzaffarpur.
        </p>
      </div>

      <div className="gallery-grid reveal-stagger">
        {visibleImages.map((img, index) => (
          <div
            className="gallery-item"
            key={img.id}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-tag">
                <i className="fas fa-search-plus"></i> View Image
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta reveal">
        <button
          className="btn-outline"
          onClick={() => setShowAll((prev) => !prev)}
        >
          <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-th-large'}`}></i>{' '}
          {showAll ? 'Show Less' : `Browse All Photos (${galleryImages.length})`}
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          id="gallery-lightbox"
          className="lightbox-modal active"
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            id="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="lightbox-nav prev"
            id="lightbox-prev"
            onClick={prevImage}
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              id="lightbox-img"
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
            />
          </div>
          <button
            className="lightbox-nav next"
            id="lightbox-next"
            onClick={nextImage}
            aria-label="Next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

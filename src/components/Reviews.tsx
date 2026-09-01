import React from 'react';

interface ReviewItem {
  id: number;
  author: string;
  avatar: string;
  location: string;
  text: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: 1,
    author: 'Rohan Kumar',
    avatar: 'R',
    location: 'Gobarsahi, Muzaffarpur',
    text: 'Good work quality and great experience overall. My Split AC cooling improved immediately after the deep jet-pump servicing!'
  },
  {
    id: 2,
    author: 'Avinish Sharma',
    avatar: 'A',
    location: 'Majhaulia Road',
    text: 'Good service, timely response and very helpful technician. Reached my home within 45 mins of calling. Highly recommended.'
  },
  {
    id: 3,
    author: 'Pooja Kumari',
    avatar: 'P',
    location: 'Patahi, Muzaffarpur',
    text: 'Booked gas refilling and deep servicing. The technician checked for leaks properly and cooling is ice-cold now. Very honest & reasonable pricing.'
  },
  {
    id: 4,
    author: 'Suresh Verma',
    avatar: 'S',
    location: 'Mithanpura',
    text: 'Quick AC uninstallation and re-installation at my new apartment without any damage or gas leak. Polite and well-equipped staff.'
  },
  {
    id: 5,
    author: 'Md. Tariq Anwar',
    avatar: 'T',
    location: 'Khabra',
    text: 'Best emergency AC repair service in Muzaffarpur. Called on a Sunday afternoon and they fixed my PCB error quickly. 10/10 service quality.'
  },
  {
    id: 6,
    author: 'Mahfooz Alam',
    avatar: 'M',
    location: 'Owner, Chill Zone',
    text: 'Committed to providing the best, most transparent AC repair in Muzaffarpur with 24/7 doorstep support and genuine spare parts.'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section">
      <div className="section-header reveal">
        <p className="section-label">Customer Reviews</p>
        <h2 className="section-title">Trusted by 264+ Customers</h2>
        <p className="section-desc">Hear what our happy customers say about Chill Zone AC Repair Services.</p>
      </div>

      <div className="reviews-hero reveal">
        <div className="reviews-rating-big">
          <span className="rating-number-big">4.9</span>
          <div className="rating-stars-big">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="review-count">Based on 264 Google reviews</span>
          </div>
        </div>
        <div className="google-badge">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Reviews on Google
        </div>
      </div>

      <div className="reviews-grid">
        {reviewsData.map((rev) => (
          <div className="review-card reveal" key={rev.id}>
            <div className="review-header">
              <div className="review-avatar">{rev.avatar}</div>
              <div>
                <div className="review-author">{rev.author}</div>
                <div className="review-meta">
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="review-date">{rev.location}</span>
                </div>
              </div>
            </div>
            <p className="review-text">{rev.text}</p>
          </div>
        ))}
      </div>

      <div className="reviews-cta reveal">
        <a
          href="https://maps.app.goo.gl/oDYa84Gj3NAhJmv48?g_st=ac"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <i className="fab fa-google"></i> View All Google Reviews
        </a>
      </div>
    </section>
  );
};

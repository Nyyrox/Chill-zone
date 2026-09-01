import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="section-header reveal">
        <p className="section-label">About Chill Zone</p>
        <h2 className="section-title">Muzaffarpur's Most Trusted AC Specialists</h2>
        <p className="section-desc">
          Delivering expert cooling care, transparent pricing, and fast 24/7 doorstep assistance for homes and businesses.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <h3>Why Choose Chill Zone AC Repair?</h3>
          <p>
            At Chill Zone, we combine certified HVAC expertise with prompt doorstep response across Muzaffarpur, Bihar. Whether your AC is blowing warm air, making unusual noises, or needing a deep chemical jet wash, our verified technicians handle it with precision.
          </p>
          <p>
            We use 100% genuine spare parts, nitrogen pressure leak testing, and high-pressure jet pumps to ensure peak cooling efficiency and lower electricity bills.
          </p>

          <div className="about-features reveal-stagger">
            <div className="about-feature">
              <div className="about-feature-icon"><i className="fas fa-clock"></i></div>
              <div className="about-feature-text">24/7 Emergency Support</div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon"><i className="fas fa-bolt"></i></div>
              <div className="about-feature-text">45-Min Doorstep Arrival</div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon"><i className="fas fa-shield-alt"></i></div>
              <div className="about-feature-text">100% Genuine Spare Parts</div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon"><i className="fas fa-rupee-sign"></i></div>
              <div className="about-feature-text">No Hidden Charges</div>
            </div>
          </div>
        </div>

        <div className="about-stats-grid reveal-stagger">
          <div className="about-stat-card">
            <div className="stat-icon"><i className="fas fa-star"></i></div>
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Google Rating</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-icon"><i className="fas fa-users"></i></div>
            <div className="stat-number">264+</div>
            <div className="stat-label">Customer Reviews</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-icon"><i className="fas fa-history"></i></div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Doorstep Service</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-icon"><i className="fas fa-map-marked-alt"></i></div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Muzaffarpur Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

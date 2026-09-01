import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="section-header reveal">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Contact Chill Zone</h2>
        <p className="section-desc">Available 24/7 for all your AC repair, servicing, and installation needs.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info reveal">
          <h3>Let's Fix Your AC Today!</h3>
          <p>Call us anytime or WhatsApp for quick booking. Fast doorstep service across Muzaffarpur and nearby areas.</p>

          <div className="contact-item">
            <div className="contact-item-icon"><i className="fas fa-phone-alt"></i></div>
            <div className="contact-item-text">
              <div className="label">Phone</div>
              <div className="value"><a href="tel:+918651726130">086517 26130</a></div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon"><i className="fab fa-whatsapp"></i></div>
            <div className="contact-item-text">
              <div className="label">WhatsApp</div>
              <div className="value"><a href="https://wa.me/918651726130" target="_blank" rel="noreferrer">086517 26130</a></div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="contact-item-text">
              <div className="label">Address / Location</div>
              <div className="value">
                <a href="https://maps.app.goo.gl/oDYa84Gj3NAhJmv48?g_st=ac" target="_blank" rel="noreferrer">
                  Majhaulia Rd, near Idea Tower,<br />Gobarsahi, Muzaffarpur, Bihar 843113 <i className="fas fa-external-link-alt" style={{ fontSize: '11px', marginLeft: '4px' }}></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon"><i className="fas fa-clock"></i></div>
            <div className="contact-item-text">
              <div className="label">Business Hours</div>
              <div className="value">Open 24 Hours — 7 Days a Week</div>
            </div>
          </div>

          <div className="contact-buttons">
            <a href="tel:+918651726130" className="contact-btn call">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a
              href="https://wa.me/918651726130?text=Hi%20Chill%20Zone%2C%20I%20need%20AC%20repair%20service"
              target="_blank"
              rel="noreferrer"
              className="contact-btn whatsapp"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-map reveal">
          <iframe
            src="https://maps.google.com/maps?q=Chill%20Zone%20AC%20Repair%20Services%20In%20Muzaffarpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chill Zone Google Map Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

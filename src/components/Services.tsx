import React from 'react';

interface ServiceItem {
  id: number;
  title: string;
  icon: string;
  desc: string;
  price: string;
  waText: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Diagnostics & Inspection',
    icon: 'fas fa-search',
    desc: 'Complete electrical, compressor, PCB, and refrigerant pressure checkup to pinpoint cooling or power issues.',
    price: '₹399',
    waText: 'Hi, I need AC Diagnostics & Inspection (₹399)'
  },
  {
    id: 2,
    title: 'Jet-Pump Deep Servicing',
    icon: 'fas fa-spray-can',
    desc: 'High-pressure water jet cleaning for cooling coils, blower fan, drain tray, and outdoor condenser unit.',
    price: '₹599',
    waText: 'Hi, I need Jet-Pump Deep Servicing (₹599)'
  },
  {
    id: 3,
    title: 'Full Gas Refilling + Leak Check',
    icon: 'fas fa-wind',
    desc: 'Thorough nitrogen pressure leak test, brazing repairs, and 100% genuine gas recharge (R22/R32/R410).',
    price: '₹3,000',
    waText: 'Hi, I need Full Gas Refilling + Leak Check (₹3000)'
  },
  {
    id: 4,
    title: 'AC Installation',
    icon: 'fas fa-tools',
    desc: 'Expert split & window AC installation with precision bracket mounting and secure piping connection.',
    price: '₹1,299',
    waText: 'Hi, I need AC Installation (₹1299)'
  },
  {
    id: 5,
    title: 'AC Uninstallation',
    icon: 'fas fa-box-open',
    desc: 'Safe uninstallation with gas lock-in technique, pipe detachment, and bracket removal without damage.',
    price: '₹699',
    waText: 'Hi, I need AC Uninstallation (₹699)'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="section-header reveal">
        <p className="section-label">Transparent Rates</p>
        <h2 className="section-title">Our Core AC Services</h2>
        <p className="section-desc">
          Upfront pricing, certified technicians, and 100% guaranteed cooling restoration at your doorstep.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card reveal" key={service.id}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="service-price">
              <span className="from">Price</span>
              <span className="amount">{service.price}</span>
              <span className="onwards">only</span>
            </div>
            <a
              href={`https://wa.me/918651726130?text=${encodeURIComponent(service.waText)}`}
              target="_blank"
              rel="noreferrer"
              className="service-book-btn"
            >
              <i className="fab fa-whatsapp"></i> Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

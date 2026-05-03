import Accordion from '@/components/Accordion';
import { Star, Wifi, Coffee, MapPin } from 'lucide-react';

const cipLoungeItems = [
  { title: 'Lounge Access', content: 'Access to the CIP (Commercially Important Person) Lounge is available for First and Business Class passengers, eligible frequent flyers, and guests who purchase a lounge pass at the reception.' },
  { title: 'Amenities', content: 'Enjoy complimentary high-speed Wi-Fi, a premium buffet featuring local and international cuisine, comfortable seating areas, business workstations, and shower facilities.' },
  { title: 'Location & Hours', content: 'The main CIP Lounge is located in the international departures area after passport control. It operates 24 hours a day to serve passengers on all flight schedules.' },
  { title: 'Family Facilities', content: 'The lounge includes a dedicated family seating area and a children\'s playroom to ensure our youngest travelers are entertained while waiting for their flight.' },
];

export default function CIPLoungePage() {
  return (
    <div id="cip-lounge-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Star size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Facilities</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>CIP Lounge</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Experience world-class hospitality, comfort, and premium amenities before your flight.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Star size={28} /></div>
                <h3>Premium Comfort</h3>
                <p>Relax in an exclusive environment away from the busy terminal.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Wifi size={18} color="var(--primary)" /> Complimentary Wi-Fi
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Coffee size={18} color="var(--primary)" /> Buffet & Beverages
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> Departures Area
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Lounge Services</h2>
            <Accordion items={cipLoungeItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Accordion from '@/components/Accordion';
import { Camera, Calendar, MapPin, Ticket } from 'lucide-react';

const festivalItems = [
  { title: 'About the Festival', content: 'Experience the rich tapestry of Bangladeshi culture at the annual Cultural Festival. Enjoy traditional music, dance performances, and art exhibitions showcasing local talent.' },
  { title: 'Event Schedule', content: 'The festival runs for three days with main stage performances starting from 4:00 PM to 10:00 PM daily. A detailed schedule is available at the venue entrances.' },
  { title: 'Food & Stalls', content: 'Sample authentic Bengali cuisine from over 50 food stalls. Artisan markets will feature handmade crafts, textiles, and traditional souvenirs.' },
  { title: 'Ticketing Information', content: 'Entry is free for all visitors. However, some special indoor workshops require pre-registration. Please visit the official event website for workshop tickets.' },
];

export default function CulturalFestivalPage() {
  return (
    <div id="cultural-festival-page">
      <div className="page-header" style={{ background: '#015c55', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Camera size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Events</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Cultural Festival</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Explore the vibrant events and rich history of Bangladesh's capital city.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Calendar size={28} /></div>
                <h3>Event Details</h3>
                <p>Join us in celebrating the vibrant heritage and artistry of Dhaka.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> Hatirjheel Amphitheater
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Ticket size={18} color="var(--primary)" /> Free Entry
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Event Guide</h2>
            <Accordion items={festivalItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

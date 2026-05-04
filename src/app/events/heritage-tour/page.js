import Accordion from '@/components/Accordion';
import { Map, Calendar, MapPin, Ticket } from 'lucide-react';

const tourItems = [
  { title: 'Tour Overview', content: 'Take a guided journey through Old Dhaka and witness centuries-old architecture, bustling markets, and historical landmarks like Ahsan Manzil and Lalbagh Fort.' },
  { title: 'Itinerary', content: 'The tour begins at 9:00 AM from the National Museum, proceeds to Dhaka University campus, explores the narrow streets of Puran Dhaka, and concludes with a traditional riverboat ride on the Buriganga at sunset.' },
  { title: 'What to Bring', content: 'Wear comfortable walking shoes and modest clothing. Don\'t forget your camera, sunglasses, and a bottle of water. Umbrellas are provided during the monsoon season.' },
  { title: 'Booking Information', content: 'Tours operate daily except Mondays. Pre-booking is required at least 24 hours in advance. Group discounts are available for parties of 5 or more.' },
];

export default function HeritageTourPage() {
  return (
    <div id="heritage-tour-page">
      <div className="page-header" style={{ background: '#015c55', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Map size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Events</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Heritage Tour</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Step back in time and discover the rich cultural legacy of Dhaka.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Calendar size={28} /></div>
                <h3>Tour Details</h3>
                <p>An immersive full-day walking and riding tour of the historic districts.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> Old Dhaka
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Ticket size={18} color="var(--primary)" /> ৳1,500 / person
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Tour Guide</h2>
            <Accordion items={tourItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

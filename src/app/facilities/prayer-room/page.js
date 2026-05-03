import Accordion from '@/components/Accordion';
import { Heart, Clock, MapPin, Info } from 'lucide-react';

const prayerRoomItems = [
  { title: 'Location', content: 'Prayer rooms are conveniently located in both the departure and arrival concourses of Terminal 1 and Terminal 2. Look for the designated signs or ask our airport staff for directions.' },
  { title: 'Facilities Provided', content: 'Each prayer room is equipped with ablution (Wudu) areas, prayer mats, and separate sections for men and women to ensure privacy and comfort.' },
  { title: 'Operating Hours', content: 'The prayer rooms are open 24 hours a day, 7 days a week, accommodating passengers on all flight schedules.' },
  { title: 'Multi-faith Meditation Room', content: 'A dedicated quiet room for meditation and prayer for passengers of all faiths is available near the international departure lounges.' },
];

export default function PrayerRoomPage() {
  return (
    <div id="prayer-room-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Heart size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Facilities</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Prayer Room</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Find peace and tranquility before your journey in our dedicated prayer and meditation rooms.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Info size={28} /></div>
                <h3>At a Glance</h3>
                <p>Accessible, clean, and peaceful environments for your spiritual needs.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Clock size={18} color="var(--primary)" /> Open 24/7
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> Terminals 1 & 2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Details & Information</h2>
            <Accordion items={prayerRoomItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Accordion from '@/components/Accordion';
import { Briefcase, Calendar, MapPin, Ticket } from 'lucide-react';

const expoItems = [
  { title: 'About the Expo', content: 'Discover the latest innovations and business opportunities at the Dhaka International Trade Expo. The event features hundreds of exhibitors from across the globe.' },
  { title: 'Exhibitor Directory', content: 'From technology startups to established manufacturing giants, explore over 500 booths across 10 specialized pavilions.' },
  { title: 'Seminars & Workshops', content: 'Attend daily keynote speeches and industry-specific workshops hosted by global business leaders and economic experts.' },
  { title: 'Registration', content: 'Trade visitors can register online for a complimentary pass. General public tickets are available at the gates.' },
];

export default function TradeExpoPage() {
  return (
    <div id="trade-expo-page">
      <div className="page-header" style={{ background: '#015c55', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Briefcase size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Events</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Trade Expo</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Connect with global industries and explore new business frontiers right here in Dhaka.
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
                <p>Join industry leaders for the premier business networking event of the year.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> ICCB, Bashundhara
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Ticket size={18} color="var(--primary)" /> Pre-registration req.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Event Guide</h2>
            <Accordion items={expoItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

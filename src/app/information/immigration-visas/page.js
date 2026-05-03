import Accordion from '@/components/Accordion';
import { Shield, FileText, Globe, Clock } from 'lucide-react';

const visaItems = [
  { title: 'Visa on arrival', content: 'Eligible travellers can obtain a visa at the immigration counter upon arrival at HSIA. Requirements include a valid passport (minimum 6 months validity), return ticket, hotel booking confirmation, and sufficient funds for the stay.' },
  { title: 'Getting a visa for Bangladesh', content: 'Most foreign nationals require a visa to enter Bangladesh. Applications can be submitted at Bangladeshi embassies or consulates in your home country.' },
  { title: 'E-visa (Electronic Visa)', content: 'Bangladesh has introduced an electronic visa system for eligible nationalities. The e-visa can be applied for online through the official Bangladesh immigration portal.' },
  { title: 'Immigration counters', content: 'HSIA has dedicated immigration counters for arrivals and departures. Separate lanes are available for Bangladeshi nationals, foreign passport holders, and diplomatic passport holders.' },
];

export default function ImmigrationVisasPage() {
  return (
    <div id="immigration-page">
      <div className="page-header" style={{ background: '#004d47', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <FileText size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Security & Border</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Passport Control & Visas</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Essential information for a seamless entry and exit process at Hazrat Shahjalal International Airport.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: '#f4f4f4', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Globe size={28} /></div>
                <h3>Travel Readiness</h3>
                <p>Ensure you have all necessary documents before arriving at the immigration counter.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Shield size={18} color="var(--primary)" /> Entry Requirements
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Clock size={18} color="var(--primary)" /> Processing Times
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Immigration Guide</h2>
            <Accordion items={visaItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

import Accordion from '@/components/Accordion';
import { Heart, Accessibility, Shield, Users } from 'lucide-react';

const assistanceItems = [
  { title: 'Wheelchair Assistance', content: 'Wheelchair services are available for departing and arriving passengers. Please request this service through your airline at least 48 hours before your flight.' },
  { title: 'Hidden Disabilities', content: 'We offer support for passengers with hidden disabilities, including the Sunflower Lanyard scheme to discreetly indicate that you may need additional support, help, or more time.' },
  { title: 'Dedicated Seating', content: 'Designated seating areas for elderly passengers, pregnant women, and those with reduced mobility are available throughout all terminals and near boarding gates.' },
  { title: 'Medical Services', content: 'A 24-hour medical centre is located on the ground floor of Terminal 1, equipped to handle emergencies and provide basic medical assistance to passengers.' },
];

export default function SpecialAssistancePage() {
  return (
    <div id="special-assistance-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Heart size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Information</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Special Assistance</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Tailored support for passengers with reduced mobility, hidden disabilities, or special medical needs.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Accessibility size={28} /></div>
                <h3>Accessible Travel</h3>
                <p>We are committed to making your journey through HSIA as comfortable and stress-free as possible.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Shield size={18} color="var(--primary)" /> Priority Processing
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Users size={18} color="var(--primary)" /> Dedicated Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Assistance Guide</h2>
            <Accordion items={assistanceItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

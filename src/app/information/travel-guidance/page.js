import Accordion from '@/components/Accordion';
import { Shield, FileText, Globe, Clock } from 'lucide-react';

const guidanceItems = [
  { title: 'Entry Requirements', content: 'Ensure you have a valid passport with at least 6 months validity. Visa requirements vary by nationality. Please check with the Bangladesh embassy or consulate in your country.' },
  { title: 'Health & Safety', content: 'Review the latest health advisories and vaccination requirements before travelling. Face masks and hand sanitizers are available at various points in the airport.' },
  { title: 'Customs Regulations', content: 'Familiarise yourself with Bangladesh customs regulations regarding duty-free allowances, restricted items, and currency declaration limits.' },
  { title: 'Security Screening', content: 'Prepare for security checks by keeping your liquids, aerosols, and gels in a clear plastic bag. Laptops and large electronics must be removed from your cabin baggage.' },
];

export default function TravelGuidancePage() {
  return (
    <div id="travel-guidance-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <FileText size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Security & Border</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Travel Guidance</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Essential information on entry requirements, safety protocols, and security procedures.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Globe size={28} /></div>
                <h3>Travel Readiness</h3>
                <p>Ensure you have all necessary documents and information before arriving at the airport.</p>
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
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Guidance Directory</h2>
            <Accordion items={guidanceItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

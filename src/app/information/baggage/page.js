import Accordion from '@/components/Accordion';
import { ShoppingBag, Shield, HelpCircle, Briefcase } from 'lucide-react';

const baggageItems = [
  { title: 'Baggage tips', content: 'Label your bags clearly with your name, address, and contact number. Remove old tags and stickers. Use distinctive luggage tags or ribbons to easily identify your bag on the carousel.' },
  { title: 'Baggage services', content: 'HSIA offers baggage wrapping services, porter assistance, and trolley availability across all terminals. Lost baggage counters are available at the arrivals hall of each terminal for immediate assistance.' },
  { title: 'Porters', content: 'Porter services are available throughout the airport to assist with your luggage. Porters can be found at arrivals, departures, and near check-in counters. A nominal fee applies for the service.' },
  { title: 'Trolleys', content: 'Free luggage trolleys are available throughout HSIA terminals. Trolleys can be found at arrivals, departures, and in the car park areas.' },
  { title: 'Baggage wrapping', content: 'Protect your luggage with our baggage wrapping service available before the check-in area. The service provides an extra layer of security and protection for your belongings during transit.' },
  { title: 'Short-term storage', content: 'Left luggage facilities are available at HSIA for passengers who need to store their bags temporarily. The service operates 24/7.' },
  { title: 'Baggage delivery service', content: 'HSIA offers a baggage delivery service for arriving passengers. Your luggage can be delivered directly to your hotel or residence in Dhaka.' },
  { title: 'Baggage regulations', content: 'Baggage allowances vary by airline and ticket class. Check with your airline for specific weight and size restrictions.' },
  { title: 'Baggage reclaim', content: 'Baggage reclaim carousels are located in the arrivals hall. Flight information displays will indicate which carousel to collect your bags from.' },
];

export default function BaggagePage() {
  return (
    <div id="baggage-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <ShoppingBag size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Information</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Baggage Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Comprehensive guides and services to ensure your luggage journey is as smooth as yours.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Briefcase size={28} /></div>
                <h3>Travel Smart</h3>
                <p>Ensure your bags are compliant with international aviation standards to avoid delays.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Shield size={18} color="var(--primary)" /> Prohibited Items
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <HelpCircle size={18} color="var(--primary)" /> Lost & Found
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Common Questions</h2>
            <Accordion items={baggageItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

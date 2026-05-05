import { Bus, Car, Navigation, MapPin, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TransportPage() {
  const options = [
    { icon: <Car size={32} />, title: 'Taxi Services', desc: 'Pre-paid and on-demand taxi services available 24/7. Fixed rates based on your destination zone in Dhaka.', color: '#01796f' },
    { icon: <Bus size={32} />, title: 'Public Bus', desc: 'Affordable shuttle and public bus services connecting HSIA to major city hubs including Uttara and Motijheel.', color: '#015c55' },
    { icon: <Navigation size={32} />, title: 'Ride Sharing', desc: 'Dedicated pickup points for popular ride-sharing apps like Uber and Pathao for a convenient journey.', color: '#013d38' },
    { icon: <MapPin size={32} />, title: 'Car Parking', desc: 'Secure multi-level parking with short and long-stay options. Conveniently located near both terminals.', color: '#008744' },
    { icon: <Search size={32} />, title: 'Rent a Car', desc: 'Premium car rental services with professional drivers. Ideal for business travellers and families.', color: '#004d47' },
  ];

  return (
    <div id="transport-page">
      <div className="page-header" style={{ background: '#f8f8f8', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Bus size={32} color="var(--primary)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--text-light)' }}>Transport</span>
          </div>
          <h1 className="page-title">Getting to & from HSIA</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Choose from a variety of reliable transport options to reach your destination in Dhaka and beyond.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {options.map((opt, i) => (
            <div key={i} className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="service-icon-box" style={{ background: 'var(--bg-light)', color: opt.color }}>{opt.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: 16 }}>{opt.title}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: 32 }}>{opt.desc}</p>
              <div style={{ marginTop: 'auto', width: '100%', borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                <Link href="/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
                  Explore {opt.title} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

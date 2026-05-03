import Accordion from '@/components/Accordion';
import { ShoppingBag, MapPin, Tag, Gift } from 'lucide-react';

const shopItems = [
  { title: 'Duty Free Shopping', content: 'Extensive Duty Free shops are available in the international departures and arrivals halls. Enjoy tax-free shopping on a wide range of products including cosmetics, perfumes, electronics, and chocolates.' },
  { title: 'Local Souvenirs & Handicrafts', content: 'Take a piece of Bangladesh with you. Dedicated souvenir shops offer traditional handicrafts, textiles, Nakshi Kantha, and locally produced teas and sweets.' },
  { title: 'Travel Essentials', content: 'Forgot something? Convenience stores and pharmacies are located throughout the terminals offering travel adapters, neck pillows, reading materials, snacks, and basic medical supplies.' },
  { title: 'Payment Options', content: 'All retail outlets accept major international credit and debit cards, as well as Bangladeshi Taka. Currency exchange booths are located nearby for your convenience.' },
];

export default function ShopPage() {
  return (
    <div id="shop-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <ShoppingBag size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Facilities</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Shopping</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Indulge in retail therapy with our selection of duty-free products, local souvenirs, and travel essentials.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Gift size={28} /></div>
                <h3>Retail Experience</h3>
                <p>Discover premium brands and authentic local products across our terminals.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Tag size={18} color="var(--primary)" /> Tax-Free Shopping
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> Departures & Arrivals
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Shopping Categories</h2>
            <Accordion items={shopItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

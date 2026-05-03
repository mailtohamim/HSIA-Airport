import Accordion from '@/components/Accordion';
import { Coffee, MapPin, Clock, Utensils } from 'lucide-react';

const dineItems = [
  { title: 'Local Cuisine', content: 'Experience the authentic taste of Bangladesh before you fly. Several restaurants offer traditional dishes, including curries, biryanis, and local sweets, perfect for a final taste of the country.' },
  { title: 'International Fast Food', content: 'Familiar international fast food chains are located in both the departure and arrival concourses, offering quick bites, burgers, fried chicken, and sandwiches for travelers on the go.' },
  { title: 'Cafes & Bakeries', content: 'Grab a freshly brewed coffee, tea, and baked goods at our various cafes. They offer a relaxing environment with comfortable seating to pass the time before your flight.' },
  { title: 'Vegetarian & Halal Options', content: 'All dining establishments at HSIA serve Halal food. Additionally, a wide variety of vegetarian and vegan options are clearly marked on menus across our restaurants.' },
];

export default function DinePage() {
  return (
    <div id="dine-page">
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
            <Coffee size={32} color="var(--accent)" />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, opacity: 0.8 }}>Facilities</span>
          </div>
          <h1 className="page-title" style={{ color: '#fff' }}>Dining Options</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: 600, marginTop: 16 }}>
            Explore a diverse range of culinary experiences, from local Bangladeshi flavors to international favorites.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <div className="journey-grid">
          <div>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start', background: 'var(--primary-light)', border: 'none' }}>
                <div className="service-icon-box" style={{ background: '#fff' }}><Utensils size={28} /></div>
                <h3>Taste the World</h3>
                <p>Satisfy your cravings before your flight with our wide selection of eateries.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <MapPin size={18} color="var(--primary)" /> Food Courts in all Terminals
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <Clock size={18} color="var(--primary)" /> Most outlets open 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 40 }}>Dining Categories</h2>
            <Accordion items={dineItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

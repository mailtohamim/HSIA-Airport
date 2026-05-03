'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Plane, Clock, Shield, Map, Coffee, ShoppingBag, Star, ChevronRight, Info, Heart, Camera, Briefcase } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/flights/status?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const highlights = [
    { title: 'Accessibility at HSIA', sub: 'Inclusive Travel', img: '/images/highlight_accessibility.png' },
    { title: 'Know your baggage', sub: 'Travel Smart', img: '/images/highlight_baggage.png' },
    { title: 'Digital Immigration', sub: 'Fast Track', img: '/images/highlight_immigration.png' },
    { title: 'Green Airport Initiative', sub: 'Sustainability', img: '/images/highlight_sustainability.png' },
  ];

  const experiences = [
    { label: 'Discover shops', icon: <ShoppingBag size={20} />, img: '/images/exp_shops.png' },
    { label: 'Explore lounges', icon: <Star size={20} />, img: '/images/exp_lounges.png' },
    { label: 'Relax & refresh', icon: <Heart size={20} />, img: '/images/exp_relax.png' },
    { label: 'Find restaurants', icon: <Coffee size={20} />, img: '/images/exp_dining.png' },
    { label: 'Browse services', icon: <Info size={20} />, img: '/images/exp_services.png' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero home-hero">
        <div className="hero-bg" style={{ backgroundImage: 'url("/HSIA_Terminal_3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 }} />
        <div className="container home-hero-content">
          <div className="search-box-wrapper">
            <div className="search-card">
              <div className="search-main">
                <h2>Find your flight</h2>
                <form onSubmit={handleSearch}>
                  <div className="input-group">
                    <Search size={20} color="var(--text-light)" />
                    <input 
                      type="text" 
                      placeholder="Flight number, airline or city" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="search-actions">
                    <button type="submit" className="btn btn-primary" onClick={() => { if(!searchQuery) router.push('/flights/status?tab=departures') }}>
                      Departures <ChevronRight size={18} />
                    </button>
                    <Link href="/flights/status?tab=arrivals" className="btn btn-outline">
                      Arrivals
                    </Link>
                  </div>
                </form>
              </div>
              <div className="quick-access">
                <Link href="/information/baggage" className="quick-btn">
                  <Heart className="icon" size={28} />
                  <span>Prayer Room</span>
                </Link>
                <Link href="/" className="quick-btn">
                  <Star className="icon" size={28} />
                  <span>CIP Lounge</span>
                </Link>
                <Link href="/" className="quick-btn">
                  <Coffee className="icon" size={28} />
                  <span>Dine</span>
                </Link>
                <Link href="/" className="quick-btn">
                  <ShoppingBag className="icon" size={28} />
                  <span>Shop</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Useful information</h2>
            <p className="section-subtitle">Plan your journey with ease using our comprehensive guides and services.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-box"><Heart size={32} /></div>
              <h3>Special Assistance</h3>
              <p>Tailored support for passengers with reduced mobility or special needs.</p>
              <Link href="/information/baggage" className="btn btn-outline">Explore services</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><Shield size={32} /></div>
              <h3>Travel Guidance</h3>
              <p>Essential information on entry requirements and safety protocols.</p>
              <Link href="/information/immigration-visas" className="btn btn-outline">View guidance</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><ShoppingBag size={32} /></div>
              <h3>Baggage</h3>
              <p>Rules, allowances and services to help you travel with peace of mind.</p>
              <Link href="/information/baggage" className="btn btn-outline">Read more</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><Bus size={32} /></div>
              <h3>Transport</h3>
              <p>Explore convenient transport and parking options at the airport.</p>
              <Link href="/transport" className="btn btn-outline">View options</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-header">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Highlights</h2>
            </div>
            <div style={{ fontWeight: 800 }}>1 / 4 <ChevronRight size={18} style={{ verticalAlign: 'middle' }} /></div>
          </div>
          <div className="highlights-scroll">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-item">
                <div className="highlight-img" style={{ backgroundImage: `url("${h.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="highlight-content">
                  <span>{h.sub}</span>
                  <h3>{h.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experiences at HSIA</h2>
            <p className="section-subtitle">Discover world-class facilities and comfort during your time at our airport.</p>
          </div>
          <div className="exp-grid">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card">
                <div className="exp-bg" style={{ backgroundImage: `url("${exp.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="exp-overlay">
                  <div className="exp-label">
                    {exp.icon} {exp.label} <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP */}
      <section className="section" style={{ padding: 0 }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #013d38 0%, #01796f 100%)', 
            borderRadius: 32, padding: 80, color: '#fff', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ maxWidth: 500, position: 'relative', zIndex: 2 }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 24, fontSize: '3rem' }}>CIP Lounge Service</h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: 40 }}>Treat yourself to a premium experience while travelling through Hazrat Shahjalal International Airport.</p>
              <Link href="/" className="btn btn-accent" style={{ padding: '20px 40px', fontSize: '1.1rem' }}>
                Book CIP Service <ChevronRight size={20} />
              </Link>
            </div>
            <div style={{ position: 'absolute', right: -50, top: -50, opacity: 0.1, zIndex: 1 }}>
              <Star size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Happening in Dhaka</h2>
          </div>
          <div className="services-grid">
            {[
              { title: 'Cultural Festival', icon: <Camera size={32} /> },
              { title: 'Trade Expo', icon: <Briefcase size={32} /> },
              { title: 'Heritage Tour', icon: <Map size={32} /> },
            ].map((ev, i) => (
              <div key={i} className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <div className="service-icon-box">{ev.icon}</div>
                <h3>{ev.title}</h3>
                <p>Explore the vibrant events and rich history of Bangladesh's capital city.</p>
                <Link href="/" className="mega-link">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

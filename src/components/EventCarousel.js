"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { Camera, Briefcase, Map, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  { title: 'Cultural Festival', icon: <Camera size={32} />, desc: "Explore the vibrant events and rich history of Bangladesh's capital city.", link: '/events/cultural-festival' },
  { title: 'Trade Expo', icon: <Briefcase size={32} />, desc: "Explore the vibrant events and rich history of Bangladesh's capital city.", link: '/events/trade-expo' },
  { title: 'Heritage Tour', icon: <Map size={32} />, desc: "Explore the vibrant events and rich history of Bangladesh's capital city.", link: '/events/heritage-tour' },
];

export default function EventCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // approximate width of card + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <h2 className="section-title" style={{ marginBottom: 0, textAlign: 'left' }}>Happening in Dhaka</h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => scroll('left')} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #ddd', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.transform = 'scale(1)'; }}>
              <ChevronLeft size={24} color="var(--primary)" />
            </button>
            <button onClick={() => scroll('right')} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #ddd', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.transform = 'scale(1)'; }}>
              <ChevronRight size={24} color="var(--primary)" />
            </button>
          </div>
        </div>
        
        <div ref={scrollRef} style={{ display: 'flex', gap: 24, overflowX: 'auto', paddingBottom: 16 }} className="carousel-container">
          {events.map((ev, i) => (
            <div key={i} className="service-card event-card-wrapper" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="service-icon-box">{ev.icon}</div>
              <h3>{ev.title}</h3>
              <p>{ev.desc}</p>
              <Link href={ev.link} className="mega-link">Learn more</Link>
            </div>
          ))}
        </div>
        <style jsx>{`
          .carousel-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          .carousel-container::-webkit-scrollbar {
            display: none;
          }
          .event-card-wrapper {
            flex: 0 0 auto;
            width: 320px;
            scroll-snap-align: center;
          }
          @media (max-width: 768px) {
            .event-card-wrapper {
              width: 280px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

'use client';
import { use } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Clock, MapPin, Plane, Shield, Info, ShoppingBag, Coffee, ChevronRight, CheckCircle2, User } from 'lucide-react';
import { departures, arrivals, airlines, airports } from '@/data/flights';

const FlightTracker = dynamic(() => import('@/components/FlightTracker'), { ssr: false });

export default function FlightDetailPage({ params }) {
  const { id } = use(params);
  const flight = [...departures, ...arrivals].find(f => f.id === id);

  if (!flight) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1 className="page-title">Flight not found</h1>
        <Link href="/flights/status" className="btn btn-primary" style={{ marginTop: 24 }}>
          <ArrowLeft size={18} /> Back to flights
        </Link>
      </div>
    );
  }

  const airline = airlines[flight.airlineCode];
  const dest = airports[flight.destination];

  return (
    <div id="flight-detail-page">
      {/* Header */}
      <div className="page-header" style={{ background: 'var(--primary)', color: '#fff', padding: '60px 0' }}>
        <div className="container">
          <Link href="/flights/status" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 24, fontWeight: 700 }}>
            <ArrowLeft size={16} /> BACK TO FLIGHT STATUS
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9, marginBottom: 8 }}>
                {flight.flightNumber} • {airline ? airline.name : ''}
              </div>
              <h1 className="page-title" style={{ color: '#fff', marginBottom: 0 }}>
                {dest ? `${dest.city} (${flight.destination})` : flight.destination}
              </h1>
            </div>
            <div className={`status-pill`} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '12px 24px', fontSize: '1rem' }}>
              {flight.status}
            </div>
          </div>

          <div className="search-card" style={{ marginTop: 40, gridTemplateColumns: 'repeat(4, 1fr)', padding: '32px' }}>
            <div style={{ borderRight: '1px solid var(--border)', paddingRight: 24 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 8 }}>Date</div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text)' }}>3 May</div>
            </div>
            <div style={{ borderRight: '1px solid var(--border)', paddingLeft: 24, paddingRight: 24 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 8 }}>Scheduled</div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text)' }}>{flight.scheduledTime}</div>
            </div>
            <div style={{ borderRight: '1px solid var(--border)', paddingLeft: 24, paddingRight: 24 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 8 }}>Estimated</div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: flight.actualTime !== flight.scheduledTime ? 'var(--danger)' : 'var(--text)' }}>
                {flight.actualTime}
              </div>
            </div>
            <div style={{ paddingLeft: 24 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 8 }}>Terminal & Gate</div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text)' }}>{flight.terminal} • {flight.gate}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        {/* Tracker Section - Now visible for all flights including arrivals */}
        <div style={{ marginBottom: 80 }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 32 }}>Live Flight Tracker</h2>
          <FlightTracker flight={flight} />
        </div>

        <div className="journey-grid">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 12 }}>Journey Planner</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: 40 }}>Personalise your airport experience based on your traveller profile.</p>
            
            <div className="tabs-premium" style={{ marginBottom: 48, width: 'fit-content' }}>
              <button className="tab-premium active">Regular Traveller</button>
              <button className="tab-premium">Business Traveller</button>
            </div>

            <div className="timeline-premium">
              {[
                { title: 'Before you fly', desc: 'Check travel documents and baggage allowance.', icon: <Shield size={20} /> },
                { title: 'Arrive at HSIA', desc: 'Plan your route to reach at least 3 hours before departure.', icon: <MapPin size={20} /> },
                { title: 'Check-in & Bag Drop', desc: 'Proceed to Terminal ' + flight.terminal + ' counters.', time: '15-25 min', icon: <ShoppingBag size={20} /> },
                { title: 'Security & Passport Control', desc: 'Fast track available for CIP and Business class.', time: '10-20 min', icon: <CheckCircle2 size={20} /> },
                { title: 'Experience HSIA', desc: 'Explore duty free shops and dining in the boarding area.', icon: <Coffee size={20} /> },
                { title: 'Boarding', desc: 'Proceed to Gate ' + flight.gate + ' when status changes to Boarding.', icon: <Plane size={20} /> },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 40, position: 'relative' }}>
                  <div style={{ flex: '0 0 48px', height: 48, borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyPosition: 'center', zIndex: 2, position: 'relative' }}>
                    <div style={{ margin: 'auto' }}>{step.icon}</div>
                  </div>
                  {i < 5 && (
                    <div style={{ position: 'absolute', left: 23, top: 48, bottom: -40, width: 2, background: 'var(--border)', zIndex: 1 }} />
                  )}
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 4 }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{step.desc}</p>
                    {step.time && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, marginTop: 8 }}>
                        <Clock size={14} /> Estimated time: {step.time}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="service-card" style={{ background: 'var(--bg-light)', textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="service-icon-box" style={{ background: '#fff' }}><Info size={28} /></div>
              <h3 style={{ marginBottom: 12 }}>Travel Advisory</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 24 }}>Please arrive early as security processing may take longer during peak hours.</p>
              <Link href="/" className="btn btn-primary" style={{ width: '100%' }}>
                View Advisories <ChevronRight size={18} />
              </Link>
            </div>

            <div className="service-card" style={{ marginTop: 24, textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="service-icon-box"><User size={28} /></div>
              <h3>Special Assistance</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 24 }}>Do you need help with your journey? Our team is here to support you.</p>
              <Link href="/information/baggage" className="mega-link">Request Assistance</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

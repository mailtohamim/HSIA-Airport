'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Globe, MapPin, ChevronRight } from 'lucide-react';
import { airlines } from '@/data/flights';

const allAirlines = Object.values(airlines);
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function AirlinesPage() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = allAirlines.filter(a => {
    const matchesAlpha = !filter || a.name.toUpperCase().startsWith(filter);
    const matchesSearch = !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.code.toLowerCase().includes(search.toLowerCase());
    return matchesAlpha && matchesSearch;
  });

  return (
    <div id="airlines-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Airline Directory</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: 8 }}>Explore the airlines operating at Hazrat Shahjalal International Airport.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 100 }}>
        <div className="status-filters">
          <div className="alpha-filter" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              className={`tab-premium ${filter === '' ? 'active' : ''}`}
              onClick={() => setFilter('')}
              style={{ padding: '8px 20px' }}
            >
              All
            </button>
            {alphabet.map(letter => (
              <button
                key={letter}
                className={`tab-premium ${filter === letter ? 'active' : ''}`}
                onClick={() => setFilter(filter === letter ? '' : letter)}
                style={{ padding: '8px 16px', minWidth: 45 }}
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="input-group" style={{ margin: 0, width: 350 }}>
            <Search size={20} color="var(--text-light)" />
            <input
              type="text"
              placeholder="Search airlines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="services-grid">
          {filtered.map(airline => (
            <div key={airline.code} className="service-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="service-icon-box" style={{ width: 80, height: 80, fontSize: '1.5rem', fontWeight: 900, background: '#fff', padding: airline.logo ? 8 : 0 }}>
                {airline.logo ? (
                  <img src={airline.logo} alt={airline.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  airline.code
                )}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 4 }}>{airline.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', marginBottom: 16 }}>{airline.code}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <MapPin size={16} /> <span>Terminal {airline.code.startsWith('B') || airline.code.startsWith('V') || airline.code.startsWith('H') ? 'T1' : 'T2'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <Globe size={16} /> <span>{airline.website}</span>
                </div>
              </div>

              <div style={{ marginTop: 24, width: '100%', borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                <Link href="/" className="mega-link" style={{ fontWeight: 800, color: 'var(--primary)' }}>
                  View flights <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

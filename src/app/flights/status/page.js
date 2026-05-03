'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Plane, Clock, Info, ArrowRight, Filter } from 'lucide-react';
import { departures, arrivals, airlines, airports } from '@/data/flights';

const statusClass = (status) => {
  const map = {
    'On Time': 'status-ontime',
    'Delayed': 'status-delayed',
    'Final Call': 'status-finalcall',
    'Gate Closed': 'status-gateclosed',
    'Gate Open': 'status-gateopen',
    'Boarding': 'status-boarding',
    'Taken Off': 'status-takenoff',
    'Landed': 'status-landed',
    'Expected': 'status-expected',
  };
  return map[status] || 'status-ontime';
};

function sortFlights(flights) {
  const takenOff = flights.filter(f => f.status === 'Taken Off' || f.status === 'Landed');
  const active = flights.filter(f => f.status !== 'Taken Off' && f.status !== 'Landed');
  return [...active, ...takenOff];
}

export default function FlightStatusPage() {
  const [tab, setTab] = useState('departures');
  const [search, setSearch] = useState('');

  const flights = tab === 'departures' ? departures : arrivals;
  const sorted = sortFlights(flights);

  const filtered = sorted.filter(f => {
    if (!search) return true;
    const q = search.toLowerCase();
    const dest = tab === 'departures' ? f.destination : f.origin;
    const airport = airports[dest];
    return (
      f.flightNumber.toLowerCase().includes(q) ||
      dest.toLowerCase().includes(q) ||
      (airport && airport.city.toLowerCase().includes(q)) ||
      (airlines[f.airlineCode] && airlines[f.airlineCode].name.toLowerCase().includes(q))
    );
  });

  return (
    <div id="flight-status-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Flight Status</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: 8 }}>Track real-time arrivals and departures at HSIA.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 100 }}>
        <div className="status-filters">
          <div className="tabs-premium">
            <button
              className={`tab-premium ${tab === 'departures' ? 'active' : ''}`}
              onClick={() => setTab('departures')}
            >
              Departures
            </button>
            <button
              className={`tab-premium ${tab === 'arrivals' ? 'active' : ''}`}
              onClick={() => setTab('arrivals')}
            >
              Arrivals
            </button>
          </div>

          <div className="input-group" style={{ margin: 0, width: 400 }}>
            <Search size={20} color="var(--text-light)" />
            <input
              type="text"
              placeholder="Flight number, airline or city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, padding: '0 12px' }}>
          <button className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            <Filter size={16} /> Show earlier flights
          </button>
          <div style={{ fontWeight: 800, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Clock size={18} /> Today, 3 May
          </div>
        </div>

        <div className="flight-card-list">
          {filtered.map((flight) => {
            const dest = tab === 'departures' ? flight.destination : flight.origin;
            const airport = airports[dest];
            const airline = airlines[flight.airlineCode];
            const isTakenOff = flight.status === 'Taken Off' || flight.status === 'Landed';
            
            return (
              <Link href={`/flights/${flight.id}`} key={flight.id} className={`flight-row-premium ${isTakenOff ? 'flight-row-takenoff' : ''}`}>
                <div className="f-time">{flight.scheduledTime}</div>
                <div className="f-time" style={{ color: flight.actualTime !== flight.scheduledTime ? 'var(--danger)' : 'inherit' }}>
                  {flight.actualTime}
                </div>
                <div className="f-info">
                  <div className="f-airline-logo">{flight.airlineCode}</div>
                  <div>
                    <div className="f-dest-name">{airport ? airport.city : dest}</div>
                    <div className="f-dest-sub">{flight.flightNumber} • {airline ? airline.name : ''}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--text-light)' }}>
                  {flight.terminal} • Gate {flight.gate}
                </div>
                <div className={`status-pill ${statusClass(flight.status)}`}>
                  {flight.status}
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary" style={{ padding: '16px 48px' }}>
            Show more flights <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .status-ontime { background: #e6f7ef; color: #008744; }
        .status-delayed { background: #fff1f0; color: #cf1322; }
        .status-finalcall { background: #fffbe6; color: #d48806; }
        .status-gateclosed { background: #f5f5f5; color: #8c8c8c; }
        .status-gateopen { background: #e6f7ff; color: #0050b3; }
        .status-boarding { background: #f0f5ff; color: #2f54eb; }
        .status-takenoff { background: #f4f9f8; color: var(--primary); }
        .status-landed { background: #e6f7ef; color: #008744; }
        .status-expected { background: #e6f7ff; color: #0050b3; }
      `}</style>
    </div>
  );
}

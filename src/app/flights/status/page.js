'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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

function FlightStatusContent() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('departures');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const q = searchParams.get('search');
    if (q) setSearch(q);
    const t = searchParams.get('tab');
    if (t) setTab(t);
  }, [searchParams]);

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
    <>
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

        <div className="input-group search-input-group">
          <Search size={20} color="var(--text-light)" />
          <input
            type="text"
            placeholder="Flight number, airline or city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="status-header-mobile">
        <button className="btn btn-outline filter-btn">
          <Filter size={16} /> <span className="hide-mobile">Show earlier flights</span><span className="show-mobile">Earlier</span>
        </button>
        <div className="date-display">
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
              <div className="f-times-col">
                <div className="f-time">{flight.scheduledTime}</div>
                <div className="f-time-actual" style={{ color: flight.actualTime !== flight.scheduledTime ? 'var(--danger)' : 'var(--text-light)' }}>
                  {flight.actualTime}
                </div>
              </div>
              <div className="f-info">
                <div className="f-airline-logo">
                  {airline?.logo ? (
                    <img src={airline.logo} alt={airline.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                  ) : (
                    flight.airlineCode
                  )}
                </div>
                <div>
                  <div className="f-dest-name">{airport ? airport.city : dest}</div>
                  <div className="f-dest-sub">{flight.flightNumber} • {airline ? airline.name : ''}</div>
                </div>
              </div>
              <div className="f-gate-col">
                <span className="hide-mobile">{flight.terminal} • Gate </span>{flight.gate}
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
    </>
  );
}

export default function FlightStatusPage() {
  return (
    <div id="flight-status-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Flight Status</h1>
          <p className="page-subtitle">Track real-time arrivals and departures at HSIA.</p>
        </div>
      </div>

      <div className="container pb-100">
        <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center', fontWeight: 600 }}>Loading flight data...</div>}>
          <FlightStatusContent />
        </Suspense>
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

        .search-input-group { width: 400px; }
        .status-header-mobile { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding: 0 12px; }
        .filter-btn { padding: 10px 24px; font-size: 0.9rem; }
        .date-display { font-weight: 800; color: var(--text-light); display: flex; align-items: center; gap: 8px; font-size: 0.9rem; }
        .show-mobile { display: none; }
        .page-subtitle { color: var(--text-light); font-size: 1.1rem; margin-top: 8px; }
        .pb-100 { padding-bottom: 100px; }
        
        .f-times-col { display: flex; gap: 20px; align-items: center; width: 200px; }
        .f-time-actual { font-weight: 600; font-size: 0.9rem; }
        .f-gate-col { font-weight: 700; color: var(--text-light); }

        @media (max-width: 768px) {
          .flight-row-premium {
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            gap: 16px; padding: 20px 16px;
          }
          .f-times-col { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; width: auto; grid-column: 2; grid-row: 1; }
          .f-info { grid-column: 1; grid-row: 1; }
          .f-gate-col { grid-column: 1; grid-row: 2; font-size: 0.85rem; display: flex; align-items: center; }
          .status-pill { grid-column: 2; grid-row: 2; margin-left: auto; }
          
          .search-input-group { width: 100% !important; margin: 0; }
          .hide-mobile { display: none; }
          .show-mobile { display: inline; }
          .filter-btn { padding: 8px 16px; }
          .status-header-mobile { padding: 0; }
          .pb-100 { padding-bottom: 40px; }
          
          .f-airline-logo { width: 40px; height: 40px; }
          .f-dest-name { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
}

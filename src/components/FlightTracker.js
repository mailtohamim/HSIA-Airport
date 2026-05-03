'use client';
import { useEffect, useState } from 'react';
import { Plane, Info, MapPin, Navigation, Clock } from 'lucide-react';
import { airports } from '@/data/flights';
import 'leaflet/dist/leaflet.css';

export default function FlightTracker({ flight }) {
  const [mapReady, setMapReady] = useState(false);

  const origin = airports[flight.origin];
  const destination = airports[flight.destination];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let map;
    const initMap = async () => {
      const L = (await import('leaflet')).default;

      if (document.getElementById('tracker-map')?.children.length > 0) return;

      const currentLat = flight.currentLat || origin.lat;
      const currentLng = flight.currentLng || origin.lng;

      map = L.map('tracker-map', {
        center: [currentLat, currentLng],
        zoom: 6,
        zoomControl: false,
      });

      L.control.zoom({ position: 'topright' }).addTo(map);

      // Use a more reliable basemap URL without the .tile subdomain
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // Route lines
      const routeCoords = [[origin.lat, origin.lng], [currentLat, currentLng]];
      const futureCoords = [[currentLat, currentLng], [destination.lat, destination.lng]];

      if (flight.currentLat) {
        L.polyline(routeCoords, { color: '#01796f', weight: 4, opacity: 0.8 }).addTo(map);
      }
      L.polyline(futureCoords, { color: '#01796f', weight: 3, opacity: 0.3, dashArray: '10, 10' }).addTo(map);

      const airportIcon = L.divIcon({
        html: `<div style="width:12px;height:12px;background:#01796f;border-radius:50%;border:3px solid #fff;box-shadow:0 0 10px rgba(0,0,0,0.2);"></div>`,
        className: '', iconSize: [12, 12],
      });

      L.marker([origin.lat, origin.lng], { icon: airportIcon }).addTo(map)
        .bindTooltip(flight.origin, { permanent: true, direction: 'bottom', className: 'airport-tooltip' });

      L.marker([destination.lat, destination.lng], { icon: airportIcon }).addTo(map)
        .bindTooltip(flight.destination, { permanent: true, direction: 'bottom', className: 'airport-tooltip' });

      const dx = destination.lng - origin.lng;
      const dy = destination.lat - origin.lat;
      const angle = Math.atan2(dx, dy) * (180 / Math.PI);

      const planeIcon = L.divIcon({
        html: `<div style="transform:rotate(${angle}deg);font-size:28px;color:#01796f;filter:drop-shadow(0 0 4px rgba(0,0,0,0.3));">✈</div>`,
        className: '', iconSize: [28, 28], iconAnchor: [14, 14],
      });

      L.marker([currentLat, currentLng], { icon: planeIcon }).addTo(map)
        .bindTooltip(flight.flightNumber, { permanent: true, direction: 'top', offset: [0, -16] });

      const bounds = L.latLngBounds([[origin.lat, origin.lng], [destination.lat, destination.lng]]);
      map.fitBounds(bounds.pad(0.2));

      // Fix map rendering issues by invalidating size after container is fully painted
      setTimeout(() => {
        map.invalidateSize();
      }, 200);

      setMapReady(true);
    };

    initMap();

    return () => { if (map) map.remove(); };
  }, [flight, origin, destination]);

  const distanceKm = Math.round(111.32 * Math.sqrt(Math.pow(destination.lat - origin.lat, 2) + Math.pow((destination.lng - origin.lng) * Math.cos(origin.lat * Math.PI / 180), 2)));

  return (
    <div className="tracker-container">
      <div className="tracker-panel">
        <div style={{ background: 'var(--primary)', color: '#fff', padding: '32px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.8, marginBottom: 8 }}>Live Flight Tracker</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 900 }}>{flight.flightNumber}</h2>
          <p style={{ opacity: 0.9, fontWeight: 500 }}>{flight.aircraft}</p>
        </div>

        <div style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)' }}>{flight.origin}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>{origin.city}</div>
            </div>
            <Plane size={32} style={{ color: 'var(--border)', transform: 'rotate(45deg)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)' }}>{flight.destination}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>{destination.city}</div>
            </div>
          </div>

          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: 8, fontWeight: 700 }}>
              <span style={{ color: 'var(--text-light)' }}>Journey Progress</span>
              <span>{Math.round((flight.progress || 0) * 100)}%</span>
            </div>
            <div className="tracker-progress" style={{ height: 10, background: 'var(--bg-light)', borderRadius: 5 }}>
              <div className="tracker-progress-bar" style={{ width: `${(flight.progress || 0) * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: 5 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 8, fontWeight: 600 }}>
              <span>{Math.round(distanceKm * (flight.progress || 0))} km</span>
              <span>{Math.round(distanceKm * (1 - (flight.progress || 0)))} km to go</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 4 }}>Altitude</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>36,000 ft</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 4 }}>Speed</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>850 km/h</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 4 }}>Terminal</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{flight.terminal}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 4 }}>Gate</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{flight.gate}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tracker-map-wrapper">
        <div id="tracker-map" />
      </div>

      <style jsx global>{`
        .airport-tooltip {
          background: #fff !important;
          color: var(--primary) !important;
          border: 2px solid var(--primary) !important;
          border-radius: 8px !important;
          font-weight: 900 !important;
          font-size: 0.8rem !important;
          padding: 4px 12px !important;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important;
        }
        .airport-tooltip::before { border: none !important; }
      `}</style>
    </div>
  );
}

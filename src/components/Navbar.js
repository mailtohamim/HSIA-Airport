'use client';
import Link from 'next/link';
import { Plane, Info, Bus, Map, Search, ChevronRight, HelpCircle, Shield, Briefcase, Coffee, ShoppingBag, Palmtree } from 'lucide-react';

const navItems = [
  {
    label: 'Flights',
    icon: <Plane size={24} />,
    featured: { icon: <Plane size={48} />, title: 'Flight Status', desc: 'Real-time arrival and departure information for all flights at HSIA.', link: '/flights/status', cta: 'Search Flights' },
    links: [
      { label: 'Arrivals', href: '/flights/status?tab=arrivals' },
      { label: 'Departures', href: '/flights/status?tab=departures' },
      { label: 'Airlines Directory', href: '/flights/airlines' },
      { label: 'Flight Tracker', href: '/flights/status' },
    ],
  },
  {
    label: 'Information',
    icon: <Info size={24} />,
    featured: { icon: <HelpCircle size={48} />, title: 'Travel Guide', desc: 'Everything you need to know before you fly through Dhaka.', link: '/information/baggage', cta: 'View Guide' },
    links: [
      { label: 'Passport & Visas', href: '/information/immigration-visas' },
      { label: 'Security & Customs', href: '/information/immigration-visas' },
      { label: 'Baggage Services', href: '/information/baggage' },
      { label: 'Special Assistance', href: '/information/baggage' },
    ],
  },
  {
    label: 'Transport',
    icon: <Bus size={24} />,
    featured: { icon: <Bus size={48} />, title: 'Airport Transport', desc: 'Easy ways to get to and from Hazrat Shahjalal International Airport.', link: '/transport', cta: 'Find Transport' },
    links: [
      { label: 'Taxis', href: '/transport' },
      { label: 'Bus Services', href: '/transport' },
      { label: 'Car Parking', href: '/transport' },
      { label: 'Ride Sharing', href: '/transport' },
    ],
  },
  {
    label: 'Experiences',
    icon: <Palmtree size={24} />,
    featured: { icon: <Map size={48} />, title: 'Airport Map', desc: 'Navigate HSIA with ease and discover all our facilities.', link: '/', cta: 'Explore Map' },
    links: [
      { label: 'Duty Free Shops', href: '/' },
      { label: 'Dining & Cafes', href: '/' },
      { label: 'Premium Lounges', href: '/' },
      { label: 'Prayer Rooms', href: '/' },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/hsia-logo.svg" alt="HSIA Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <div key={item.label} className="nav-item-wrapper">
              <div className="nav-item">
                {item.label}
              </div>
              <div className="mega-menu">
                <div className="container">
                  <div className="mega-menu-inner">
                    <div className="mega-featured">
                      <div className="icon" style={{ color: 'var(--primary)' }}>{item.featured.icon}</div>
                      <h3>{item.featured.title}</h3>
                      <p>{item.featured.desc}</p>
                      <Link href={item.featured.link} className="btn btn-primary">
                        {item.featured.cta} <ChevronRight size={18} />
                      </Link>
                    </div>
                    <div className="mega-links-grid">
                      <div className="mega-links-col">
                        <h4>Quick Links</h4>
                        <div className="mega-links">
                          {item.links.map((link) => (
                            <Link key={link.label} href={link.href} className="mega-link">
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-links-col">
                        <h4>Planning</h4>
                        <div className="mega-links">
                          <Link href="/" className="mega-link">Travel Advisory</Link>
                          <Link href="/" className="mega-link">Airport Services</Link>
                          <Link href="/" className="mega-link">FAQs</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="nav-right">
          <div style={{ fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer' }}>EN</div>
          <div className="nav-search">
            <Search size={18} />
            <span>Search</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

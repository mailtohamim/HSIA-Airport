'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Plane, Bus, Info } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Flights', icon: Plane, href: '/flights/status' },
    { label: 'Transport', icon: Bus, href: '/transport' },
    { label: 'Guide', icon: Info, href: '/information/baggage' },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
        
        return (
          <Link key={item.label} href={item.href} className={`bottom-nav-item ${isActive ? 'active' : ''}`}>
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

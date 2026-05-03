import Link from 'next/link';
import { ChevronRight, Globe, Camera, Share2, User, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/hsia-logo.svg" alt="HSIA Logo" style={{ height: '48px', width: 'auto', marginBottom: '16px' }} />
            <p>Providing world-class aviation services and a premium travel experience at the heart of Bangladesh.</p>
            <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
              <Link href="#" className="btn btn-outline" style={{ padding: '8px 16px', borderRadius: 12, borderColor: '#333', color: '#999' }}>
                Corporate
              </Link>
              <Link href="#" className="btn btn-outline" style={{ padding: '8px 16px', borderRadius: 12, borderColor: '#333', color: '#999' }}>
                CAAB
              </Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="/flights/status">Flight Status</Link></li>
              <li><Link href="/flights/airlines">Airlines Directory</Link></li>
              <li><Link href="/transport">Airport Transport</Link></li>
              <li><Link href="/">CIP Lounge</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link href="/">Contact Us</Link></li>
              <li><Link href="/">Feedback</Link></li>
              <li><Link href="/">Lost & Found</Link></li>
              <li><Link href="/">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of Use</Link></li>
              <li><Link href="/">Accessibility</Link></li>
              <li><Link href="/">Travel Advisory</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Hazrat Shahjalal International Airport. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link href="#"><Globe size={20} /></Link>
            <Link href="#"><Camera size={20} /></Link>
            <Link href="#"><Share2 size={20} /></Link>
            <Link href="#"><User size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';
import { useState } from 'react';
import { ArrowLeft, CheckCircle2, PlaneLanding, PlaneTakeoff, User, Users, Calendar, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function BookCIPPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'departure',
    flightNumber: '',
    travelDate: '',
    passengers: '1',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  if (isSubmitted) {
    return (
      <div className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, padding: 40, background: '#fff', borderRadius: 24, boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
          <CheckCircle2 size={80} color="var(--primary)" style={{ margin: '0 auto 24px' }} />
          <h1 style={{ marginBottom: 16, fontSize: '2.5rem', color: 'var(--primary)' }}>Booking Requested</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: 32 }}>
            Thank you, {formData.firstName}. Your CIP Lounge booking request has been received. Our team will contact you shortly to confirm the details and process payment.
          </p>
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ background: 'var(--primary)', color: '#fff', padding: '60px 0', marginBottom: 40 }}>
        <div className="container">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', color: '#fff', opacity: 0.8, textDecoration: 'none', marginBottom: 24 }}>
            <ArrowLeft size={20} style={{ marginRight: 8 }} /> Back to Home
          </Link>
          <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>Book CIP Lounge</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: 600 }}>
            Experience unparalleled comfort and convenience. Complete the form below to request access to our premium CIP services.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="book-cip-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: 40, alignItems: 'start' }}>
          
          {/* Form Section */}
          <div style={{ background: '#fff', padding: '40px', borderRadius: 24, boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>Passenger Information</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>First Name</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="John" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Last Name</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="Doe" />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Phone Number</label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="+880 1XXX XXXXXX" />
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>Travel Details</h3>
              
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 12, fontWeight: 500 }}>Service Type</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <label style={{ display: 'flex', alignItems: 'center', padding: 16, border: `2px solid ${formData.serviceType === 'departure' ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 12, cursor: 'pointer', background: formData.serviceType === 'departure' ? 'rgba(1, 121, 111, 0.05)' : 'transparent', transition: 'all 0.2s' }}>
                    <input type="radio" name="serviceType" value="departure" checked={formData.serviceType === 'departure'} onChange={handleChange} style={{ marginRight: 12 }} />
                    <PlaneTakeoff size={20} style={{ marginRight: 8, color: formData.serviceType === 'departure' ? 'var(--primary)' : 'var(--text-light)' }} />
                    <span style={{ fontWeight: 500, color: formData.serviceType === 'departure' ? 'var(--primary)' : 'var(--text)' }}>Departure</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', padding: 16, border: `2px solid ${formData.serviceType === 'arrival' ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 12, cursor: 'pointer', background: formData.serviceType === 'arrival' ? 'rgba(1, 121, 111, 0.05)' : 'transparent', transition: 'all 0.2s' }}>
                    <input type="radio" name="serviceType" value="arrival" checked={formData.serviceType === 'arrival'} onChange={handleChange} style={{ marginRight: 12 }} />
                    <PlaneLanding size={20} style={{ marginRight: 8, color: formData.serviceType === 'arrival' ? 'var(--primary)' : 'var(--text-light)' }} />
                    <span style={{ fontWeight: 500, color: formData.serviceType === 'arrival' ? 'var(--primary)' : 'var(--text)' }}>Arrival</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Flight Number</label>
                  <div style={{ position: 'relative' }}>
                    <PlaneTakeoff size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                    <input type="text" name="flightNumber" value={formData.flightNumber} onChange={handleChange} required style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="e.g. BG123" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Travel Date</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                    <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }} />
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Number of Passengers</label>
                <div style={{ position: 'relative' }}>
                  <Users size={18} style={{ position: 'absolute', left: 16, top: 15, color: 'var(--text-light)' }} />
                  <select name="passengers" value={formData.passengers} onChange={handleChange} style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', appearance: 'none', backgroundColor: '#fff', fontFamily: 'inherit' }}>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
                  </select>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>Additional Information</h3>
              
              <div style={{ marginBottom: 32 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Special Requests (Optional)</label>
                <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows="4" style={{ width: '100%', padding: 16, borderRadius: 12, border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} placeholder="Any dietary requirements or special assistance needed?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: 20, fontSize: '1.1rem', justifyContent: 'center' }}>
                Submit Booking Request
              </button>
              <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.9rem', color: 'var(--text-light)' }}>
                By submitting this form, you agree to our Terms & Conditions.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ background: '#f8f9fa', padding: 32, borderRadius: 24, marginBottom: 24 }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 16 }}>What's Included</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Personalized Meet & Greet',
                  'Dedicated check-in & immigration counter',
                  'Access to premium lounge facilities',
                  'Complimentary food & beverages',
                  'High-speed Wi-Fi & charging stations',
                  'Porter service for baggage handling'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ marginRight: 12, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: 'var(--primary)', color: '#fff', padding: 32, borderRadius: 24 }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: 16 }}>Need Help?</h4>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: 16 }}>
                If you have any questions about our CIP services or need assistance with your booking.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <Phone size={18} style={{ marginRight: 12, opacity: 0.8 }} />
                <span>+880 2 8901444</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={18} style={{ marginRight: 12, opacity: 0.8 }} />
                <span>cip@hsia.gov.bd</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .book-cip-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          form > div[style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
          h1 {
            fontSize: 2.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

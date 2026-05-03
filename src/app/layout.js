import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hazrat Shahjalal International Airport (HSIA) — Dhaka',
  description: 'Official website of Hazrat Shahjalal International Airport, Dhaka, Bangladesh. Find flight status, airline information, baggage services, immigration details, and transport options.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

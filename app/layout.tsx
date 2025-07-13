
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Govo ELD - Effortless ELD Compliance Solutions',
  description: 'Leading electronic logging device provider ensuring FMCSA compliance, driver safety, and streamlined fleet operations. Start your free trial today.',
  keywords: 'ELD, electronic logging device, FMCSA compliance, fleet management, DOT, HOS tracking, driver safety',
  authors: [{ name: 'Govo ELD' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Govo ELD - Effortless ELD Compliance Solutions',
    description: 'Leading electronic logging device provider ensuring FMCSA compliance, driver safety, and streamlined fleet operations.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

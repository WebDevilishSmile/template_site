import './globals.css';

import { Montserrat } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Website Name',
  description: 'description of website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

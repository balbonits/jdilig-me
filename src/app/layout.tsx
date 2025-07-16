`use client`;

import type { Metadata } from 'next';

// components
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import Providers from '@components/Providers';

// styles
import './app.css';

export const metadata: Metadata = {
  title: 'John Dilig - My Website',
  description: "John Dilig's website, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
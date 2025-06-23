import type { AppProps } from 'next/app';
import '@app/app.css';
import Header from '@components/layout/Header/Header'; 
import Footer from '@components/layout/Footer/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
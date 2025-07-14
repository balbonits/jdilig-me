import type { Metadata } from "next";
import { Provider } from 'react-redux';
import { store } from '@store';

import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";

import "./app.css";

export const metadata: Metadata = {
  title: "John Dilig - My Website",
  description: "John Dilig's website, showcasing projects and skills.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Header />
          <main>
          {children}
          </main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}

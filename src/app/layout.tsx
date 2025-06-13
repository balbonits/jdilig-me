import type { Metadata } from "next";

import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";

import "./app.css";

export const metadata: Metadata = {
  title: "John Dilig - My Website",
  description: "John Dilig's personal website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

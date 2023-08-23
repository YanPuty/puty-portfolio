import '@/app/globals.scss';
import '@styles/styles.scss';

import Header from '@/components/layouts/header';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puty Yan",
  description: "Puty Yan Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="body-wrapper">
          <Header />
          {children}
          <div className="body-noise"></div>
        </div>
      </body>
    </html>
  );
}

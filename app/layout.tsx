import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DomFix',
  description: 'Platforma pro domácí služby',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="antialiased">{children}</body>
    </html>
  );
}

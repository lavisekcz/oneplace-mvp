<head>
  ...
  {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      data-recording-token="0jRcTZMmnA5ik4cBhMZlrILFUhE0MNQZQzru32nY"
      data-is-production-environment="false"
      src="https://snippet.meticulous.ai/v1/meticulous.js"
    />
  )}
  ...
</head>
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OnePlace',
  description: 'Platforma pro domácí služby',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="antialiased">{children}</body>
    </html>
  );
}

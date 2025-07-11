// app/layout.tsx
import './globals.css'; // Import globálních stylů
import type { Metadata } from 'next'; // Import typu Metadata z Next.js

// Definice metadat pro stránku. Tyto informace se objeví v HTML <head>
// a jsou důležité pro SEO a sdílení na sociálních sítích.
export const metadata: Metadata = {
  title: 'OnePlace - Platforma pro domácí služby', // Titulek stránky, který se zobrazí v záložce prohlížeče
  description: 'Propojujeme klienty a profesionály v bydlení a nemovitostech. Najděte důvěryhodné služby a produkty s lehkostí.', // Popis stránky pro vyhledávače
};

// Hlavní layout komponenta pro celou aplikaci.
// Obklopuje všechny ostatní stránky a sdílí společné prvky jako <head> a <body> strukturu.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'lang="cs"' nastavuje jazyk stránky na češtinu.
    <html lang="cs">
      {/* <body> tag je místo, kam se renderuje veškerý obsah vaší aplikace. */}
      {/* 'className="antialiased"' je třída z Tailwind CSS pro lepší vykreslování textu. */}
      <body className="antialiased">{children}</body>
    </html>
  );
}

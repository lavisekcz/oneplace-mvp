import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'OnePlace',
  description: 'Spojte se s ověřenými odborníky na domácí služby ve vašem okolí',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <head />
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">OnePlace</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#onas" className="hover:underline">O nás</a>
                </li>
                <li>
                  <a href="#sluzby" className="hover:underline">Služby</a>
                </li>
                <li>
                  <a href="#odbornici" className="hover:underline">Odborníci</a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:underline">Kontakt</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto my-8 px-4">{children}</main>
        <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-16 border-t">
          © 2025 OnePlace. Všechna práva vyhrazena.
        </footer>
      </body>
    </html>
  )
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link komponenty

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
        .then((res) => res.json())
        .then((data) => setSearchResults(data.map((item: { name: string }) => item.name)))
        .catch((error) => console.error('Error fetching search results:', error));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigace - Desktop */}
      <nav className="bg-gray-800 text-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">🏠 ONEPLACE</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/professionals" className="hover:text-gray-300">Pro Profíky</Link>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded mt-2 w-48">
                <Link href="/professionals#pro-overview" className="block hover:bg-gray-600 p-1">Přehled Výhod</Link>
                <Link href="/professionals#pro-membership" className="block hover:bg-gray-600 p-1">Členství</Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/clients" className="hover:text-gray-300">Pro Klienty</Link>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded mt-2 w-48">
                <Link href="/clients#client-portal" className="block hover:bg-gray-600 p-1">Projektový Portál</Link>
                <Link href="/clients#client-membership" className="block hover:bg-gray-600 p-1">Členství</Link>
              </div>
            </div>
            <Link href="/eshop" className="hover:text-gray-300">E-shop</Link>
            <Link href="/properties" className="hover:text-gray-300">Nemovitosti</Link>
            <Link href="/sustainability" className="hover:text-gray-300">Udržitelnost & Smart</Link>
            <Link href="/magazine" className="hover:text-gray-300">Magazín</Link>
            <Link href="/academy" className="hover:text-gray-300">Academy</Link>
            <span className="hover:text-gray-300">🇬🇧 EN</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-300">Sign In</button>
            <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Register</button>
          </div>
        </div>
      </nav>

      {/* Hamburger menu pro mobil */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-800">
        <span className="text-white text-2xl font-bold">🏠 ONEPLACE</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 z-10 w-48">
          <Link href="/professionals" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Pro Profíky</Link>
          <Link href="/clients" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Pro Klienty</Link>
          <Link href="/eshop" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>E-shop</Link>
          <Link href="/properties" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Nemovitosti</Link>
          <Link href="/sustainability" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Udržitelnost & Smart</Link>
          <Link href="/magazine" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Magazín</Link>
          <Link href="/academy" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Academy</Link>
          <div className="border-t my-2"></div>
          <button className="block text-gray-600 hover:text-gray-900 py-2 w-full text-left" onClick={() => setIsMenuOpen(false)}>Sign In</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2 w-full" onClick={() => setIsMenuOpen(false)}>Register</button>
        </div>
      )}

      {/* Úvodní banner */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white text-center">
        <h1 className="text-5xl font-bold text-teal-800 mb-4">Vítejte v ONEPLACE</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Propojujeme klienty a profesionály v bydlení a nemovitostech. Najděte důvěryhodné služby a produkty s lehkostí.
        </p>
        <div className="space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Najděte profesionála</button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Nakupte produkty</button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Zaregistrujte se</button>
        </div>
        <form onSubmit={handleSearch} className="max-w-md mx-auto flex items-center bg-white rounded-lg shadow-md mt-6 overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Co potřebujete dnes vyřídit?"
            className="flex-grow p-3 border-none focus:outline-none"
          />
          <button type="submit" className="bg-green-600 text-white px-6 py-3 hover:bg-green-700">Hledat</button>
        </form>
        {searchResults.length > 0 && (
          <div className="mt-4 max-w-md mx-auto bg-white rounded-lg shadow-md p-2">
            {searchResults.map((result, index) => (
              <div key={index} className="text-gray-700">{result}</div>
            ))}
          </div>
        )}
      </section>

      {/* Přehled služeb */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Naše Služby</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <span className="text-4xl text-green-600">🔧</span>
            <h3 className="text-xl font-semibold mt-2">Pro Profíky</h3>
            <p className="text-gray-600 mt-2">Získejte zakázky a spravujte svůj profil.</p>
          </div>
          <div className="text-center">
            <span className="text-4xl text-green-600">🏠</span>
            <h3 className="text-xl font-semibold mt-2">Pro Klienty</h3>
            <p className="text-gray-600 mt-2">Najděte profesionály a spravujte projekty.</p>
          </div>
          <div className="text-center">
            <span className="text-4xl text-green-600">🛒</span>
            <h3 className="text-xl font-semibold mt-2">E-shop</h3>
            <p className="text-gray-600 mt-2">Nakupte nábytek a materiály.</p>
          </div>
        </div>
      </section>

      {/* Vybraní profesionálové */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Vybraní Profesionálové</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Top Rated</span>
              <p className="mt-2">Jan Novák - Elektrikář</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Top Rated</span>
              <p className="mt-2">Petr Svoboda - Tesař</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Top Rated</span>
              <p className="mt-2">Marie Dvořáková - Malířka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doporučené produkty */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Doporučené Produkty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="text-gray-600">Nábytek</span>
              <p className="mt-2">Moderní židle - 5 000 Kč</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="text-gray-600">Stavební materiály</span>
              <p className="mt-2">Cihly - 2 000 Kč</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <span className="text-gray-600">Chytrá domácnost</span>
              <p className="mt-2">Chytrá žárovka - 1 500 Kč</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nejnovější články z Magazínu */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nejnovější z Magazínu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">Inspirace & Trendy</p>
              <p className="mt-2">Nové trendy v interiéru 2025</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">Odborné články</p>
              <p className="mt-2">Jak vybrat elektroinstalaci</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">Rozhovory</p>
              <p className="mt-2">Rozhovor s top malířem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

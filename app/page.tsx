'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserTie, FaUser, FaShoppingCart, FaBuilding, FaLeaf, FaBookOpen, FaGraduationCap, FaSignInAlt, FaRegRegistered, FaChair, FaCubes, FaLightbulb } from 'react-icons/fa';

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

  // Menu položky
  const menuLinks = [
    { href: "/professionals", label: "Pro Profíky", icon: <FaUserTie /> },
    { href: "/clients", label: "Pro Klienty", icon: <FaUser /> },
    { href: "/eshop", label: "E-shop", icon: <FaShoppingCart /> },
    { href: "/properties", label: "Nemovitosti", icon: <FaBuilding /> },
    { href: "/sustainability", label: "Udržitelnost & Smart", icon: <FaLeaf /> },
    { href: "/magazine", label: "Magazín", icon: <FaBookOpen /> },
    { href: "/academy", label: "Academy", icon: <FaGraduationCap /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Desktop Navigace */}
      <nav className="bg-gray-900 text-white sticky top-0 z-20 shadow-md hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
          <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-green-500">
            {/* Houzz styl: zelený název */}
            ONEPLACE
          </Link>
          <div className="flex items-center space-x-6">
            {menuLinks.map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 hover:text-green-400 transition">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <span className="hover:text-green-400 cursor-pointer">EN</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center gap-2 hover:text-green-400 transition"><FaSignInAlt />Sign In</button>
            <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition text-white"><FaRegRegistered />Register</button>
          </div>
        </div>
      </nav>

      {/* Mobilní Navigace (Houzz styl) */}
      <div className="md:hidden bg-gray-900 px-4 py-3 flex justify-between items-center sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-500">
          ONEPLACE
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-3xl focus:outline-none"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>
      {/* Mobilní Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-between items-center px-6 py-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-500">ONEPLACE</Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col mt-8 space-y-6 px-8">
            {menuLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-4 text-lg text-white hover:text-green-400 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <span className="flex items-center gap-4 text-lg text-white hover:text-green-400 py-2 cursor-pointer">
              EN
            </span>
            <button
              className="flex items-center gap-4 text-lg text-white hover:text-green-400 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaSignInAlt />
              Sign In
            </button>
            <button
              className="flex items-center gap-4 text-lg bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaRegRegistered />
              Register
            </button>
          </div>
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
            <FaUserTie className="mx-auto text-4xl text-green-600" />
            <h3 className="text-xl font-semibold mt-2">Pro Profíky</h3>
            <p className="text-gray-600 mt-2">Získejte zakázky a spravujte svůj profil.</p>
          </div>
          <div className="text-center">
            <FaUser className="mx-auto text-4xl text-green-600" />
            <h3 className="text-xl font-semibold mt-2">Pro Klienty</h3>
            <p className="text-gray-600 mt-2">Najděte profesionály a spravujte projekty.</p>
          </div>
          <div className="text-center">
            <FaShoppingCart className="mx-auto text-4xl text-green-600" />
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
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaChair className="text-3xl text-green-600" />
              <div>
                <span className="text-gray-600">Nábytek</span>
                <p className="mt-2">Moderní židle - 5 000 Kč</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaCubes className="text-3xl text-green-600" />
              <div>
                <span className="text-gray-600">Stavební materiály</span>
                <p className="mt-2">Cihly - 2 000 Kč</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <FaLightbulb className="text-3xl text-green-600" />
              <div>
                <span className="text-gray-600">Chytrá domácnost</span>
                <p className="mt-2">Chytrá žárovka - 1 500 Kč</p>
              </div>
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
              <FaBookOpen className="text-2xl text-green-600 mb-2" />
              <p className="text-gray-600">Inspirace & Trendy</p>
              <p className="mt-2">Nové trendy v interiéru 2025</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <FaLeaf className="text-2xl text-green-600 mb-2" />
              <p className="text-gray-600">Odborné články</p>
              <p className="mt-2">Jak vybrat elektroinstalaci</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <FaUserTie className="text-2xl text-green-600 mb-2" />
              <p className="text-gray-600">Rozhovory</p>
              <p className="mt-2">Rozhovor s top malířem</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    // API call is handled by useEffect
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigace - Desktop */}
      <nav className="bg-gray-800 text-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">🏠 DomFix</span> {/* Placeholder pro logo, nahraď <img src="/logo.png" alt="Logo" className="h-8" /> */}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="#professionals" className="hover:text-gray-300">Professionals</Link>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded mt-2 w-48">
                <Link href="#pro-search" className="block hover:bg-gray-600 p-1">Search Pros</Link>
                <Link href="#pro-reviews" className="block hover:bg-gray-600 p-1">Reviews</Link>
              </div>
            </div>
            <Link href="#search" className="hover:text-gray-300">Search Services</Link>
            <Link href="#how-it-works" className="hover:text-gray-300">How it Works</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gray-300">Sign In</button>
            <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Register</button>
          </div>
        </div>
      </nav>

      {/* Hamburger menu pro mobil (zůstává stejné, aktivní < 768px) */}
      <div className="md:hidden p-4 flex justify-between items-center bg-gray-800">
        <span className="text-white text-2xl font-bold">🏠 DomFix</span>
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
          <Link href="#professionals" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Professionals</Link>
          <Link href="#search" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Search Services</Link>
          <Link href="#how-it-works" className="block text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
          <div className="border-t my-2"></div>
          <button className="block text-gray-600 hover:text-gray-900 py-2 w-full text-left" onClick={() => setIsMenuOpen(false)}>Sign In</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2 w-full" onClick={() => setIsMenuOpen(false)}>Register</button>
        </div>
      )}

      {/* Zbytek stránky (Hero sekce, Kategorie, atd.) zůstává stejný – doplním podle tvé struktury */}
      {/* ... (zde by pokračoval zbytek původního kódu) ... */}
    </div>
  );
}

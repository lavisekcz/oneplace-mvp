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

      {/* Hamburger menu pro mobil */}
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

      {/* Hero sekce */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white text-center">
        <h1 className="text-5xl font-bold text-teal-800 mb-4">Fix it Fast. Fix it Right.</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Connect with trusted professionals for all your home service needs. Get quality work done by experienced experts in your area.
        </p>
        <form onSubmit={handleSearch} className="max-w-md mx-auto flex items-center bg-white rounded-lg shadow-md overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you need help with today?"
            className="flex-grow p-3 border-none focus:outline-none"
          />
          <button type="submit" className="bg-green-600 text-white px-6 py-3 hover:bg-green-700">Search Services</button>
        </form>
        {searchResults.length > 0 && (
          <div className="mt-4 max-w-md mx-auto bg-white rounded-lg shadow-md p-2">
            {searchResults.map((result, index) => (
              <div key={index} className="text-gray-700">{result}</div>
            ))}
          </div>
        )}
      </section>

      {/* Kategorie */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200">Home Repairs</button>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200">Carpentry</button>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200">Plumbing</button>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200">Electrical</button>
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200">Painting</button>
          <Link href="#view-all" className="col-span-2 md:col-span-1 text-green-600 hover:underline text-center mt-2">View All</Link>
        </div>
      </section>

      {/* Odborník */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:mr-12">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Top Rated Pro</span>
            <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Electrician</span>
          </div>
          <img
            src="https://via.placeholder.com/300x400?text=Professional+Image"
            alt="Professional"
            className="w-64 h-80 object-cover rounded-lg shadow-md mt-4 md:mt-0"
          />
        </div>
      </section>

      {/* Sekce s výhodami */}
      <section className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-3xl text-green-600">🛡️</span>
          <h3 className="text-xl font-semibold mt-2">Verified Professionals</h3>
          <p className="text-gray-600 mt-2">All our professionals undergo thorough background checks and skill verification.</p>
        </div>
        <div>
          <span className="text-3xl text-green-600">🔧</span>
          <h3 className="text-xl font-semibold mt-2">Wide Range of Services</h3>
          <p className="text-gray-600 mt-2">From minor repairs to major renovations, we have specialists for every home service need.</p>
        </div>
        <div>
          <span className="text-3xl text-green-600">⏱️</span>
          <h3 className="text-xl font-semibold mt-2">Fast Response</h3>
          <p className="text-gray-600 mt-2">Get quotes quickly and schedule appointments at your convenience, often same-day.</p>
        </div>
      </section>

      {/* Další sekce (Our Services) */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Whatever project you have in mind, our network of qualified professionals is ready to deliver exceptional results.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
          <span className="text-2xl text-green-600">🏠</span>

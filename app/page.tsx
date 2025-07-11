'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/FormInput';
import ExpertCards from '../components/ExpertCards';
import ServiceCard from '../components/ServiceCard';

// Základní definice typů pro služby a experty.
// Upřesněno: Odebráno [key: string]: any; pro striktnější typovou kontrolu.
// Měli byste zde přidat VŠECHNY skutečné vlastnosti, které vaše API vrací pro Service a Expert.
interface Service {
  slug: string;
  name: string; // Předpokládám, že služba má jméno
  desc: string; // Předpokládám, že služba má popis
  // Přidejte další vlastnosti služby zde, např.:
  // price: number;
}

interface Expert {
  slug: string; // Předpokládám, že expert má slug
  name: string; // Předpokládám, že expert má jméno
  profession: string; // Předpokládám, že expert má profesi
  avatar: string; // Předpokládám, že expert má avatar
  rating?: number; // Předpokládám, že expert může mít hodnocení
  // Přidejte další vlastnosti expertů zde, např.:
  // city: string;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [experts, setExperts] = useState<Expert[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/api/experts').then(res => res.json()).then(setExperts);
    fetch('/api/services').then(res => res.json()).then(setServices);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
        .then(res => res.json())
        .then(data => setSearchResults(data.map((item: { name: string }) => item.name)));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-teal-50 to-white text-center">
          <h1 className="text-5xl font-bold text-teal-800 mb-4">Vítejte v ONEPLACE</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Propojujeme klienty a profesionály v bydlení a nemovitostech. Najděte důvěryhodné služby a produkty s lehkostí.
          </p>
          <form className="max-w-md mx-auto flex items-center bg-white rounded-lg shadow-md mt-6 overflow-hidden">
            <FormInput value={searchQuery} onChange={setSearchQuery} placeholder="Co potřebujete dnes vyřídit?" />
            <button type="submit" className="bg-green-600 text-white px-6 py-3 hover:bg-green-700">Hledat</button>
          </form>
          {searchResults.length > 0 && (
            <div className="mt-4 max-w-md mx-auto bg-white rounded-lg shadow-md p-2">
              {searchResults.map((result, _idx) => (
                <div key={_idx} className="text-gray-700">{result}</div>
              ))}
            </div>
          )}
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service: Service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Vybraní Profesionálové</h2>
            <ExpertCards experts={experts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
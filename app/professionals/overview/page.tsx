'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Importujeme komponentu Image z Next.js
import { FaStar, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { experts } from '../data'; // Předpokládá se, že experts z '../data' jsou správně typované

export default function ExpertOverviewPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
  const expert = experts[slug as keyof typeof experts]; // Předpokládá se, že typ 'experts' v data.ts je definován tak, aby to bylo bezpečné

  if (!expert) {
    return (
      <main className="max-w-2xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Odborník nenalezen</h1>
        <Link href="/odbornici" className="text-green-700 hover:underline">Zpět na katalog</Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center">
        {/* Opraveno: Nahrazeno <img> komponentou <Image /> pro optimalizaci */}
        <Image
          src={expert.avatar}
          alt={expert.name}
          width={112} // Původní w-28 h-28 je 112px x 112px
          height={112} // Specifikujte šířku a výšku
          className="w-28 h-28 rounded-full object-cover border-4 border-green-500 mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900">{expert.name}</h1>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <span>{expert.profession}</span>
          <FaMapMarkerAlt className="text-green-600" />
          <span>{expert.city}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-500" />
          <span className="font-semibold">{expert.rating}</span>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <FaInfoCircle className="text-blue-600" /> Overview
        </h2>
        <p className="mt-2 text-gray-700">{expert.overview || 'Bez popisu.'}</p>
      </section>
      <div className="mt-6 flex gap-4">
        <Link href={`/odbornici/${slug}/membership`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Membership
        </Link>
        <Link href={`/odbornici/${slug}`} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
          Zpět na detail
        </Link>
        <Link href="/odbornici" className="text-green-700 hover:underline px-4 py-2">Katalog</Link>
      </div>
    </main>
  );
}
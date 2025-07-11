'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { experts } from '../data';

export default function ExpertDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
  const expert = experts[slug as keyof typeof experts];

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
        <img
          src={expert.avatar}
          alt={expert.name}
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
        <div className="mt-4 flex gap-4">
          <Link href={`/odbornici/${slug}/overview`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Overview
          </Link>
          <Link href={`/odbornici/${slug}/membership`} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Membership
          </Link>
        </div>
        <Link
          href="/kontakt"
          className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          Kontaktovat
        </Link>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-800">Reference klientů</h2>
        <div className="mt-2">
          {expert.reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded p-3 mb-2">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold">{review.rating}</span>
                <span className="ml-2 text-gray-600">{review.author}</span>
              </div>
              <div className="text-gray-700 mt-1">{review.text}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
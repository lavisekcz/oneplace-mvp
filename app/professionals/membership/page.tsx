'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { experts } from '../data';

export default function ExpertMembershipPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
  const expert = experts[slug as keyof typeof experts];
  const membership = expert?.membership;

  if (!membership) {
    return (
      <main className="max-w-2xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Membership nebyl nalezen</h1>
        <Link href={`/odbornici/${slug}/overview`} className="text-green-700 hover:underline">Zpět na Overview</Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Membership</h1>
      <div className="flex flex-col items-center mt-4">
        <FaCheckCircle className="text-green-600 text-4xl mb-2" />
        <div className="font-semibold text-green-700 mb-2">{membership.type} členství</div>
        <ul className="list-disc text-gray-700 ml-6">
          {membership.perks.map(perk => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-4 justify-center">
        <Link href={`/odbornici/${slug}/overview`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Overview
        </Link>
        <Link href={`/odbornici/${slug}`} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
          Zpět na detail
        </Link>
        <Link href="/odbornici" className="text-green-700 hover:underline px-4 py-2">Katalog</Link>
      </div>
    </main>
  );
}
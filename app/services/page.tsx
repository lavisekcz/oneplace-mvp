'use client';

import Link from 'next/link';
import { FaToolbox, FaBolt, FaPaintRoller, FaHammer, FaDoorOpen, FaTruckMoving, FaLeaf, FaShower, FaUserMd } from 'react-icons/fa';

const categories = [
  {
    slug: 'instalater',
    name: 'Instalatér',
    icon: <FaShower className="text-3xl text-green-600" />,
    desc: 'Voda, rozvody, opravy, montáže.',
  },
  {
    slug: 'elektrikar',
    name: 'Elektrikář',
    icon: <FaBolt className="text-3xl text-yellow-500" />,
    desc: 'Elektroinstalace, revize, opravy.',
  },
  {
    slug: 'malir',
    name: 'Malíř',
    icon: <FaPaintRoller className="text-3xl text-blue-500" />,
    desc: 'Malování, tapetování, dekorace.',
  },
  {
    slug: 'zednik',
    name: 'Zedník',
    icon: <FaHammer className="text-3xl text-gray-700" />,
    desc: 'Zednické práce, rekonstrukce.',
  },
  {
    slug: 'podlahar',
    name: 'Podlahář',
    icon: <FaDoorOpen className="text-3xl text-orange-600" />,
    desc: 'Pokládka a opravy podlah.',
  },
  {
    slug: 'truhlar',
    name: 'Truhlář',
    icon: <FaToolbox className="text-3xl text-amber-700" />,
    desc: 'Truhlářské práce, nábytek.',
  },
  {
    slug: 'stehovak',
    name: 'Stěhovák',
    icon: <FaTruckMoving className="text-3xl text-indigo-600" />,
    desc: 'Stěhování, přeprava, logistika.',
  },
  {
    slug: 'zahradnik',
    name: 'Zahradník',
    icon: <FaLeaf className="text-3xl text-green-700" />,
    desc: 'Údržba zahrad, realizace.',
  },
  {
    slug: 'odbornik',
    name: 'Odborné konzultace',
    icon: <FaUserMd className="text-3xl text-teal-700" />,
    desc: 'Poradenství, projektování.',
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Přehled služeb</h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Najděte spolehlivé odborníky pro všechny typy služeb kolem bydlení, renovací a domácnosti.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map(cat => (
          <div
            key={cat.slug}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {cat.icon}
            <h2 className="text-xl font-semibold mt-4">{cat.name}</h2>
            <p className="text-gray-500 mt-2 mb-4">{cat.desc}</p>
            <Link
              href={`/sluzby/${cat.slug}`}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
            >
              Detail služby
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
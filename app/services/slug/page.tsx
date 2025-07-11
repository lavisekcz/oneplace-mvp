'use client';

import { useParams } from 'next/navigation';
import { FaShower, FaBolt, FaPaintRoller, FaHammer, FaDoorOpen, FaToolbox, FaTruckMoving, FaLeaf, FaUserMd } from 'react-icons/fa';
import Link from 'next/link';

const categories = {
  instalater: {
    name: 'Instalatér',
    icon: <FaShower className="text-5xl text-green-600" />,
    desc: 'Instalatérské služby – voda, rozvody, opravy, montáže. Pomůžeme s havárií nebo rekonstrukcí.',
    experts: [
      { name: 'Karel Hrdina', rating: 4.8, city: 'Praha' },
      { name: 'Petr Voda', rating: 4.6, city: 'Brno' },
    ],
  },
  elektrikar: {
    name: 'Elektrikář',
    icon: <FaBolt className="text-5xl text-yellow-500" />,
    desc: 'Elektroinstalace, revize, opravy. Zajistíme montáž, opravu i bezpečnostní kontrolu.',
    experts: [
      { name: 'Jan Novák', rating: 5.0, city: 'Praha' }
    ],
  },
  malir: {
    name: 'Malíř',
    icon: <FaPaintRoller className="text-5xl text-blue-500" />,
    desc: 'Malování, tapetování, dekorace. Vymalujeme byt, dům i kancelář.',
    experts: [
      { name: 'Marie Dvořáková', rating: 4.9, city: 'Plzeň' }
    ],
  },
  zednik: {
    name: 'Zedník',
    icon: <FaHammer className="text-5xl text-gray-700" />,
    desc: 'Zednické práce, rekonstrukce. Přestavby, opravy, omítky.',
    experts: [],
  },
  podlahar: {
    name: 'Podlahář',
    icon: <FaDoorOpen className="text-5xl text-orange-600" />,
    desc: 'Pokládka a opravy podlah. Vinyl, dřevo, laminát.',
    experts: [],
  },
  truhlar: {
    name: 'Truhlář',
    icon: <FaToolbox className="text-5xl text-amber-700" />,
    desc: 'Truhlářské práce, montáž nábytku na míru.',
    experts: [],
  },
  stehovak: {
    name: 'Stěhovák',
    icon: <FaTruckMoving className="text-5xl text-indigo-600" />,
    desc: 'Stěhování, přeprava, vyklízení bytů i domů.',
    experts: [],
  },
  zahradnik: {
    name: 'Zahradník',
    icon: <FaLeaf className="text-5xl text-green-700" />,
    desc: 'Údržba zahrad, realizace, návrh zeleně.',
    experts: [],
  },
  odbornik: {
    name: 'Odborné konzultace',
    icon: <FaUserMd className="text-5xl text-teal-700" />,
    desc: 'Poradenství, projektování, technické konzultace.',
    experts: [],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';

  const service = categories[slug as keyof typeof categories];

  if (!service) {
    return (
      <main className="max-w-2xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Služba nenalezena</h1>
        <Link href="/sluzby" className="text-green-700 hover:underline">Zpět na služby</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center">
        {service.icon}
        <h1 className="text-4xl font-bold text-gray-900 mt-6">{service.name}</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8">{service.desc}</p>
        <Link href="/kontakt" className="bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700 transition mb-8">
          Kontaktovat odborníka
        </Link>
        <Link href="/odbornici" className="text-green-700 hover:underline mb-8 block">
          Zobrazit všechny odborníky
        </Link>
      </div>
      {service.experts.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Doporučení odborníci</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.experts.map((expert, idx) => (
              <div key={expert.name} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <span className="font-bold text-lg">{expert.name}</span>
                <span className="text-gray-500">{expert.city}</span>
                <span className="text-yellow-500 font-semibold">★ {expert.rating}</span>
                <Link href={`/odbornici/${expert.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-green-700 hover:underline mt-2">Profil</Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
import Link from 'next/link';

type Expert = {
  slug: string;
  name: string;
  profession: string;
  avatar: string;
  rating?: number;
};

type ExpertCardsProps = {
  experts: Expert[];
};

export default function ExpertCards({ experts }: ExpertCardsProps) {
  if (!experts.length) {
    return <div className="col-span-3 text-center text-gray-500">Načítám odborníky...</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {experts.map(expert => (
        <div key={expert.slug} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src={expert.avatar} alt={expert.name} className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-green-600" />
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm mb-2">Top Rated</span>
          <p className="mt-2 font-semibold">{expert.name}</p>
          <p className="text-gray-600">{expert.profession}</p>
          <Link href={`/odbornici/${expert.slug}`} className="text-green-700 hover:underline mt-2 text-sm">Detail</Link>
        </div>
      ))}
    </div>
  );
}
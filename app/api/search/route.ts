import { NextResponse } from 'next/server';

const services = [
  { id: 1, name: 'Home Repairs', category: 'Home Repairs' },
  { id: 2, name: 'Carpentry', category: 'Carpentry' },
  { id: 3, name: 'Plumbing', category: 'Plumbing' },
  { id: 4, name: 'Electrical', category: 'Electrical' },
  { id: 5, name: 'Painting', category: 'Painting' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(query) || service.category.toLowerCase().includes(query)
  );

  return NextResponse.json(filteredServices);
}
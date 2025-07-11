import { NextResponse } from 'next/server';
import { experts } from '../experts/data';
import { products } from '../products/data';
import { services } from '../services/data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  const results = [
    ...experts.filter(e => e.name.toLowerCase().includes(q) || e.profession.toLowerCase().includes(q)),
    ...products.filter(p => p.name.toLowerCase().includes(q)),
    ...services.filter(s => s.name.toLowerCase().includes(q)),
  ];
  return NextResponse.json(results);
}
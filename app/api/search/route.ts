// app/api/search/route.ts - CELÝ OBSAH S OPRAVAMI

import { NextResponse } from 'next/server';
// OPRAVENO: Importujeme všechny potřebné proměnné z centrálního souboru data/index.ts
import { experts, products, services } from '../../../data'; 

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  const results = [
    // Používáme Object.values(experts), protože 'experts' je objekt, nikoli pole,
    // a potřebujeme filtrovat jeho hodnoty.
    ...Object.values(experts).filter(e => 
        e.name.toLowerCase().includes(q) || e.profession.toLowerCase().includes(q)
    ),
    ...products.filter(p => p.name.toLowerCase().includes(q)),
    ...services.filter(s => s.name.toLowerCase().includes(q)),
  ];

  return NextResponse.json(results);
}
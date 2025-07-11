import { NextResponse } from 'next/server';
import { experts } from './data';

export async function GET() {
  return NextResponse.json(experts);
}
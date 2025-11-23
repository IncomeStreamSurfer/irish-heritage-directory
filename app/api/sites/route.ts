import { getAllSites } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sites = getAllSites();
    return NextResponse.json(sites);
  } catch (error) {
    console.error('Error fetching sites:', error);
    return NextResponse.json({ error: 'Failed to fetch sites' }, { status: 500 });
  }
}

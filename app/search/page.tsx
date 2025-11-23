'use client';

import { useState, useEffect } from 'react';
import SiteCard from '@/components/SiteCard';
import { HeritageSite } from '@/lib/types';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<HeritageSite[]>([]);
  const [allSites, setAllSites] = useState<HeritageSite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all sites from JSON files
    async function loadSites() {
      try {
        const response = await fetch('/api/sites');
        if (response.ok) {
          const sites = await response.json();
          setAllSites(sites);
          setResults(sites);
        }
      } catch (error) {
        console.error('Error loading sites:', error);
      } finally {
        setLoading(false);
      }
    }
    loadSites();
  }, []);

  useEffect(() => {
    if (!query) {
      setResults(allSites);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = allSites.filter(site =>
      site.name.toLowerCase().includes(lowerQuery) ||
      site.description.short.toLowerCase().includes(lowerQuery) ||
      site.description.full.toLowerCase().includes(lowerQuery) ||
      site.location.address.town.toLowerCase().includes(lowerQuery) ||
      site.location.address.county.toLowerCase().includes(lowerQuery) ||
      site.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      site.categories.some(cat => cat.toLowerCase().includes(lowerQuery))
    );
    setResults(filtered);
  }, [query, allSites]);

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="mb-8">
        <h1 className="text-[#131811] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
          Search Heritage Sites
        </h1>
        <p className="text-[#6f8961] dark:text-white/70 text-lg mb-6">
          Search through {allSites.length} heritage sites across Ireland
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl">
          <div className="flex w-full items-stretch rounded-lg h-14 border border-[#dfe6db] bg-white dark:bg-white/5 dark:border-white/10">
            <div className="text-[#6f8961] dark:text-white/70 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 text-[#131811] dark:text-white focus:outline-none placeholder:text-[#6f8961] dark:placeholder:text-white/50"
              placeholder="Search by name, location, type, or keyword..."
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="px-4 text-[#6f8961] dark:text-white/70 hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-[#6f8961] dark:text-white/70">Loading sites...</div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-[#131811] dark:text-white font-medium">
              {results.length} {results.length === 1 ? 'result' : 'results'}
              {query && ` for "${query}"`}
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map(site => (
                <SiteCard key={site.id} site={site} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-white/5 rounded-lg">
              <span className="material-symbols-outlined text-6xl text-[#6f8961] dark:text-white/70 mb-4 block">
                search_off
              </span>
              <p className="text-[#131811] dark:text-white text-lg font-medium mb-2">
                No results found
              </p>
              <p className="text-[#6f8961] dark:text-white/70">
                Try adjusting your search terms
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

import { getAllSites } from '@/lib/data';
import SiteCard from '@/components/SiteCard';

export const metadata = {
  title: 'All Irish Heritage Sites - Complete Directory',
  description: 'Browse our complete collection of Irish heritage sites including castles, monasteries, archaeological sites, and UNESCO World Heritage locations.',
};

export default function AllSitesPage() {
  const sites = getAllSites();

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="mb-8">
        <h1 className="text-[#131811] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
          All Heritage Sites
        </h1>
        <p className="text-[#6f8961] dark:text-white/70 text-lg">
          Explore {sites.length} heritage sites across Ireland
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sites.map(site => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}

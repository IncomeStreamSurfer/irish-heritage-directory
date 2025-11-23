import { getSitesByTag, getAllTags, formatForDisplay } from '@/lib/data';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(tag => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const sites = getSitesByTag(tag);
  const tagName = formatForDisplay(tag);

  if (sites.length === 0) {
    return { title: 'Tag Not Found' };
  }

  return {
    title: `Top ${tagName} Heritage Sites in Ireland - ${sites.length} Options`,
    description: `${sites.length} amazing ${tagName.toLowerCase()} heritage sites in Ireland. Explore with photos, reviews, and visitor information.`,
    keywords: `${tagName} heritage sites, best ${tagName}, ${tagName} Ireland`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const sites = getSitesByTag(tag);
  const tagName = formatForDisplay(tag);

  if (sites.length === 0) {
    notFound();
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-[#6f8961] dark:text-white/70 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-[#131811] dark:text-white">Tags</span>
        <span>/</span>
        <span className="text-[#131811] dark:text-white capitalize">{tagName}</span>
      </div>

      <div className="mb-8">
        <h1 className="text-[#131811] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 capitalize">
          {tagName}
        </h1>
        <p className="text-[#6f8961] dark:text-white/70 text-lg">
          {sites.length} heritage {sites.length === 1 ? 'site' : 'sites'} tagged with &quot;{tagName.toLowerCase()}&quot;
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

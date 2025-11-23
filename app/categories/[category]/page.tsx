import { getSitesByCategory, getAllCategories, formatForDisplay } from '@/lib/data';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map(category => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const sites = getSitesByCategory(category);
  const categoryName = formatForDisplay(category);

  if (sites.length === 0) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `Best ${categoryName} in Ireland - Top ${sites.length} ${categoryName} Sites to Visit`,
    description: `Discover the best ${categoryName.toLowerCase()} in Ireland. Compare ${sites.length} options with photos, reviews, and prices. Find your perfect ${categoryName.toLowerCase()} site today!`,
    keywords: `best ${categoryName} Ireland, top ${categoryName}, ${categoryName} guide, Irish ${categoryName}`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const sites = getSitesByCategory(category);
  const categoryName = formatForDisplay(category);

  if (sites.length === 0) {
    notFound();
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-[#6f8961] dark:text-white/70 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-primary">Categories</Link>
        <span>/</span>
        <span className="text-[#131811] dark:text-white capitalize">{categoryName}</span>
      </div>

      <div className="mb-8">
        <h1 className="text-[#131811] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4 capitalize">
          {categoryName} Heritage Sites
        </h1>
        <p className="text-[#6f8961] dark:text-white/70 text-lg">
          Explore {sites.length} {categoryName.toLowerCase()} {sites.length === 1 ? 'site' : 'sites'} across Ireland
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

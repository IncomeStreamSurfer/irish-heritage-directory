import Link from 'next/link';
import { getAllSites, getFeaturedSites, getAllCategories } from '@/lib/data';
import SiteCard from '@/components/SiteCard';

export const metadata = {
  title: 'Irish Heritage Directory - Discover Your Irish Roots',
  description: 'Explore the rich tapestry of Irish heritage with our comprehensive directory of castles, monasteries, ancient monuments, and UNESCO World Heritage sites across Ireland.',
};

export default function HomePage() {
  const featuredSites = getFeaturedSites().slice(0, 8);
  const categories = getAllCategories().slice(0, 6);
  const allSites = getAllSites();

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVxAJgrAs-5I3jyJPMFi4e5-xplch156mEUjWVxLAMunUaB96bJ2sgJHt8g61EsK1lPhhq3m3YnVsLuO8Kqv0KwAQ8wcLKnkuWcCku7VtLaHRox1t6WYja0qPu9hhDcbucjFgWW473eZq0_hjE929OZiNh7GYEDL5bHha0fbpojTxBbOWMnkicSvWQ0PwiPYBrJWRjn3jgaqeOq87zj0fpPE3lNU7AkEY8lfuXH2vmxM9R7q6PnSwlWpFpSzB8fvC82UmvjJHxdhK9")`
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Discover Your Irish Roots
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Explore the Rich Tapestry of Irish Heritage
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/sites"
                className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#131811] text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Explore All Sites</span>
              </Link>
              <Link
                href="/search"
                className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/90 text-[#131811] text-base font-bold leading-normal tracking-[0.015em] hover:bg-white transition-colors"
              >
                <span className="truncate">Search Directory</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary">{allSites.length}</div>
          <div className="text-sm text-[#6f8961] dark:text-white/70 mt-2">Heritage Sites</div>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary">{categories.length}+</div>
          <div className="text-sm text-[#6f8961] dark:text-white/70 mt-2">Categories</div>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold text-primary">2</div>
          <div className="text-sm text-[#6f8961] dark:text-white/70 mt-2">UNESCO Sites</div>
        </div>
      </div>

      {/* Featured Sites */}
      <h2 className="text-[#131811] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Featured Heritage Sites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {featuredSites.map(site => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>

      {/* Browse by Category */}
      <h2 className="text-[#131811] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Browse By Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {categories.map(category => (
          <Link
            key={category}
            href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="group flex items-center gap-4 rounded-lg bg-white dark:bg-white/5 p-4 transition-shadow hover:shadow-lg dark:hover:bg-white/10"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:text-primary">
              <span className="material-symbols-outlined">castle</span>
            </div>
            <div>
              <p className="font-bold text-[#131811] dark:text-white capitalize">
                {category.replace(/-/g, ' ')}
              </p>
              <p className="text-sm text-[#6f8961] dark:text-white/70">
                Explore {category.replace(/-/g, ' ')} sites
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mx-4 mt-12 mb-8 rounded-lg bg-primary/20 dark:bg-primary/30 p-8 text-center">
        <h3 className="text-xl font-bold text-[#131811] dark:text-white">
          Discover Ireland&apos;s Heritage
        </h3>
        <p className="mt-2 text-base text-[#131811]/80 dark:text-white/80">
          From ancient megalithic tombs to medieval castles, explore {allSites.length}+ heritage sites across Ireland.
        </p>
        <Link
          href="/sites"
          className="mt-6 inline-flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#131811] text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">View All Sites</span>
        </Link>
      </div>
    </div>
  );
}

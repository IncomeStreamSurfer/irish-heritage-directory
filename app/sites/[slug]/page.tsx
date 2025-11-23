import { getSiteBySlug, getAllSites } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const sites = getAllSites();
  return sites.map(site => ({
    slug: site.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = getSiteBySlug(slug);

  if (!site) {
    return {
      title: 'Site Not Found',
    };
  }

  return {
    title: `${site.name} - Everything You Need to Know | Irish Heritage Guide`,
    description: `Planning to visit ${site.name}? Get opening hours, prices, photos, directions & insider tips. ${site.description.short}`,
    keywords: `${site.name}, ${site.tags.join(', ')}, ${site.location.address.county}`,
    openGraph: {
      title: `${site.name} - Complete Visitor Guide`,
      description: site.description.short,
      images: [site.images.heroImage.url],
    },
  };
}

export default async function SitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-[#6f8961] dark:text-white/70 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/sites" className="hover:text-primary">All Sites</Link>
        <span>/</span>
        <span className="text-[#131811] dark:text-white">{site.name}</span>
      </div>

      {/* Hero Image */}
      <div
        className="w-full h-[400px] bg-cover bg-center rounded-xl mb-8"
        style={{ backgroundImage: `url(${site.images.heroImage.url})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-8">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-2">
              {site.name}
            </h1>
            <p className="text-white text-lg font-medium">{site.tagline}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Facts */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#131811] dark:text-white mb-4">Overview</h2>
            <p className="text-[#131811] dark:text-white leading-relaxed mb-4">
              {site.description.full}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="text-sm font-bold text-[#6f8961] dark:text-white/70">Type</h3>
                <p className="text-[#131811] dark:text-white capitalize">{site.type.replace(/-/g, ' ')}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#6f8961] dark:text-white/70">Era</h3>
                <p className="text-[#131811] dark:text-white">{site.era}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#6f8961] dark:text-white/70">Location</h3>
                <p className="text-[#131811] dark:text-white">{site.location.address.town}, Co. {site.location.address.county}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#6f8961] dark:text-white/70">Rating</h3>
                <p className="text-[#131811] dark:text-white">{site.rating}/5 ({site.reviewCount.toLocaleString()} reviews)</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#131811] dark:text-white mb-4">History</h2>
            <p className="text-[#131811] dark:text-white leading-relaxed">
              {site.description.history}
            </p>
          </div>

          {/* Architecture */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#131811] dark:text-white mb-4">Architecture</h2>
            <p className="text-[#131811] dark:text-white leading-relaxed">
              {site.description.architecture}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#131811] dark:text-white mb-4">Highlights</h2>
            <ul className="space-y-2">
              {site.features.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-[#131811] dark:text-white">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {site.images.gallery && site.images.gallery.length > 0 && (
            <div className="bg-white dark:bg-white/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#131811] dark:text-white mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {site.images.gallery.map((image, index) => (
                  <div key={index} className="aspect-video bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${image.url})` }}></div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Visiting Information */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-lg sticky top-4">
            <h3 className="text-xl font-bold text-[#131811] dark:text-white mb-4">Visiting Information</h3>

            {/* Opening Times */}
            <div className="mb-4">
              <h4 className="text-sm font-bold text-[#6f8961] dark:text-white/70 mb-2">Opening Hours</h4>
              <p className="text-[#131811] dark:text-white text-sm">
                {site.visitingInformation.openingTimes.currentStatus}
              </p>
            </div>

            {/* Admission Prices */}
            <div className="mb-4">
              <h4 className="text-sm font-bold text-[#6f8961] dark:text-white/70 mb-2">Admission</h4>
              {site.visitingInformation.admissionPrices.adult !== undefined && site.visitingInformation.admissionPrices.adult > 0 ? (
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6f8961] dark:text-white/70">Adult</span>
                    <span className="text-[#131811] dark:text-white font-medium">€{site.visitingInformation.admissionPrices.adult}</span>
                  </div>
                  {site.visitingInformation.admissionPrices.child && (
                    <div className="flex justify-between">
                      <span className="text-[#6f8961] dark:text-white/70">Child</span>
                      <span className="text-[#131811] dark:text-white font-medium">€{site.visitingInformation.admissionPrices.child}</span>
                    </div>
                  )}
                  {site.visitingInformation.admissionPrices.family && (
                    <div className="flex justify-between">
                      <span className="text-[#6f8961] dark:text-white/70">Family</span>
                      <span className="text-[#131811] dark:text-white font-medium">€{site.visitingInformation.admissionPrices.family}</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-primary font-bold text-sm">Free Entry</p>
              )}
            </div>

            {/* Contact */}
            <div className="mb-4">
              <h4 className="text-sm font-bold text-[#6f8961] dark:text-white/70 mb-2">Contact</h4>
              {site.contact.phone && (
                <p className="text-[#131811] dark:text-white text-sm mb-1">{site.contact.phone}</p>
              )}
              {site.contact.website && (
                <a href={site.contact.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm block">
                  Visit Website
                </a>
              )}
            </div>

            {/* Book Now */}
            {site.contact.bookingUrl && (
              <a
                href={site.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary text-[#131811] text-base font-bold hover:bg-primary/90 transition-colors"
              >
                Book Tickets
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="bg-white dark:bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#131811] dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {site.tags.slice(0, 10).map(tag => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded hover:bg-primary/20 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

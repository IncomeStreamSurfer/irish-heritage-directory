import Link from 'next/link';
import { HeritageSite } from '@/lib/types';

interface SiteCardProps {
  site: HeritageSite;
}

export default function SiteCard({ site }: SiteCardProps) {
  return (
    <Link href={`/sites/${site.slug}`} className="flex flex-col gap-3 pb-3 group">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg transition-transform group-hover:scale-105"
        style={{ backgroundImage: `url(${site.images.heroImage.url})` }}
      ></div>
      <div>
        <p className="text-[#131811] dark:text-white text-base font-medium leading-normal group-hover:text-primary">
          {site.name}
        </p>
        <p className="text-[#6f8961] dark:text-white/70 text-sm font-normal leading-normal line-clamp-2">
          {site.description.short}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-[#6f8961] dark:text-white/70 bg-white dark:bg-white/5 px-2 py-1 rounded">
            {site.location.address.county}
          </span>
          {site.unescoWorldHeritage && (
            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded font-medium">
              UNESCO
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

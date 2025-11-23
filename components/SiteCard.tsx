import Link from 'next/link';
import { HeritageSite } from '@/lib/types';

interface SiteCardProps {
  site: HeritageSite;
}

export default function SiteCard({ site }: SiteCardProps) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
        style={{ backgroundImage: `url(${site.images.heroImage.url})` }}
      ></div>
      <div>
        <p className="text-[#131811] dark:text-white text-base font-medium leading-normal">
          {site.name}
        </p>
        <p className="text-[#6f8961] dark:text-white/70 text-sm font-normal leading-normal">
          {site.description.short}
        </p>
      </div>
    </div>
  );
}

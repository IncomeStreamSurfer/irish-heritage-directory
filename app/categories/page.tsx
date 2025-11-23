import Link from 'next/link';
import { getAllCategories, getCategoryStats } from '@/lib/data';

export const metadata = {
  title: 'Browse by Category - Irish Heritage Directory',
  description: 'Explore Irish heritage sites by category including castles, monasteries, megalithic monuments, and more.',
};

export default function CategoriesPage() {
  const categories = getAllCategories();
  const stats = getCategoryStats();

  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="mb-8">
        <h1 className="text-[#131811] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
          Browse by Category
        </h1>
        <p className="text-[#6f8961] dark:text-white/70 text-lg">
          Explore heritage sites organized by type and category
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Link
            key={category}
            href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="group flex items-center gap-4 rounded-lg bg-white dark:bg-white/5 p-6 transition-shadow hover:shadow-lg dark:hover:bg-white/10"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:text-primary">
              <span className="material-symbols-outlined">castle</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#131811] dark:text-white capitalize mb-1">
                {category.replace(/-/g, ' ')}
              </p>
              <p className="text-sm text-[#6f8961] dark:text-white/70">
                {stats[category] || 0} {stats[category] === 1 ? 'site' : 'sites'}
              </p>
            </div>
            <span className="material-symbols-outlined text-[#6f8961] dark:text-white/70 group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

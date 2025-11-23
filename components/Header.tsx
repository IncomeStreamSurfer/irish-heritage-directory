import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f4f0] dark:border-b-white/10 px-4 md:px-10 py-3">
      <div className="flex items-center gap-4 text-[#131811] dark:text-white">
        <Link href="/" className="flex items-center gap-4">
          <div className="size-6 text-primary">
            <svg className="text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#131811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Irish Heritage Directory
          </h2>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-[#131811] dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="/">
            Home
          </Link>
          <Link className="text-[#131811] dark:text-white/80 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="/sites">
            All Sites
          </Link>
          <Link className="text-[#131811] dark:text-white/80 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="/categories">
            Categories
          </Link>
          <Link className="text-[#131811] dark:text-white/80 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="/search">
            Search
          </Link>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-solid border-b-[#f2f4f0] dark:border-t-white/10 px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 text-[#131811] dark:text-white">
            <div className="size-6 text-primary">
              <svg className="text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold">Irish Heritage Directory</h2>
          </div>
          <p className="text-sm text-[#6f8961] dark:text-white/70">
            Your guide to the rich history and culture of Ireland.
          </p>
        </div>
        <div className="md:col-start-3 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-3 text-[#131811] dark:text-white">Directory</h4>
            <ul className="space-y-2">
              <li><Link className="text-sm text-[#6f8961] dark:text-white/70 hover:text-primary" href="/">Home</Link></li>
              <li><Link className="text-sm text-[#6f8961] dark:text-white/70 hover:text-primary" href="/sites">All Sites</Link></li>
              <li><Link className="text-sm text-[#6f8961] dark:text-white/70 hover:text-primary" href="/categories">Categories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#131811] dark:text-white">About</h4>
            <ul className="space-y-2">
              <li><Link className="text-sm text-[#6f8961] dark:text-white/70 hover:text-primary" href="/">About</Link></li>
              <li><Link className="text-sm text-[#6f8961] dark:text-white/70 hover:text-primary" href="/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#131811] dark:text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a className="text-[#6f8961] dark:text-white/70 hover:text-primary" href="#">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a className="text-[#6f8961] dark:text-white/70 hover:text-primary" href="#">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#6f8961] dark:text-white/70 mt-8 pt-6 border-t border-solid border-b-[#f2f4f0] dark:border-t-white/10">
        &copy; 2024 Irish Heritage Directory. All rights reserved.
      </div>
    </footer>
  );
}

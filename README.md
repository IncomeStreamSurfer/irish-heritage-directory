# Irish Heritage Directory

A comprehensive NextJS directory website showcasing Ireland's rich heritage sites including castles, monasteries, ancient monuments, and UNESCO World Heritage locations.

## Features

- **21+ Heritage Sites**: Complete directory of Irish heritage sites with detailed information
- **SEO Optimized**: Each page has unique meta tags, titles, and descriptions
- **Dynamic Routing**: Individual pages for every site, category, and tag
- **Category Pages**: Browse sites by type (castles, monasteries, prehistoric sites, etc.)
- **Tag System**: Filter sites by specific attributes and characteristics
- **Search Functionality**: Full-text search across all sites
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode Support**: Automatic dark mode support
- **Performance**: Built with Next.js 15 for optimal performance

## Pages Generated

This site includes:
- **1 Homepage**: Hero section, featured sites, categories
- **21+ Individual Site Pages**: Detailed information for each heritage site
- **15+ Category Pages**: Browse sites by category
- **50+ Tag Pages**: Filter sites by specific tags
- **1 All Sites Page**: Complete directory listing
- **1 Search Page**: Client-side search functionality
- **1 Categories Index**: Overview of all categories

**Total: 90+ pages**

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Icons**: Material Symbols Outlined

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies (already done):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
irish-heritage-directory/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with header/footer
│   ├── sites/
│   │   ├── page.tsx                # All sites listing
│   │   └── [slug]/page.tsx         # Individual site pages
│   ├── categories/
│   │   ├── page.tsx                # Categories index
│   │   └── [category]/page.tsx     # Category pages
│   ├── tags/
│   │   └── [tag]/page.tsx          # Tag pages
│   ├── search/
│   │   └── page.tsx                # Search page
│   └── api/
│       └── sites/route.ts          # API endpoint for sites data
├── components/
│   ├── Header.tsx                  # Site header with navigation
│   ├── Footer.tsx                  # Site footer
│   └── SiteCard.tsx                # Reusable site card component
├── lib/
│   ├── types.ts                    # TypeScript type definitions
│   └── data.ts                     # Data loading utilities
├── public/
│   └── data/                       # JSON data files (21 sites)
└── tailwind.config.ts              # Tailwind configuration
```

## Data Structure

Each heritage site includes:
- Basic information (name, type, location, era)
- Detailed descriptions (history, architecture, cultural significance)
- Visiting information (hours, prices, contact)
- Features and highlights
- Images and gallery
- Tags and categories
- Accessibility information
- Nearby attractions

## SEO Optimization

Every page includes:
- Unique meta titles and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images
- Internal linking between related pages

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

### Deploy to Netlify

1. Push your code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Deploy to Digital Ocean

1. Build the production version: `npm run build`
2. Upload to your server
3. Run with: `npm start` or use PM2

## Contributing

This is a generated directory website. To add more heritage sites:

1. Create a new JSON file in `public/data/` following the schema
2. Rebuild the site: `npm run build`
3. All pages will be automatically generated

## License

This project is open source and available under the MIT License.

## Credits

- Built with Next.js and TypeScript
- Design inspired by Irish heritage
- Data sourced from Heritage Ireland and official tourism sources
- Icons from Google Material Symbols

---

**Built with Claude Code Directory Builder** 🚀

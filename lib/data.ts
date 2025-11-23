import { HeritageSite } from './types';
import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'public/data');

// Load all heritage sites
export function getAllSites(): HeritageSite[] {
  const fileNames = fs.readdirSync(dataDirectory);
  const sites = fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => {
      const filePath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const site: HeritageSite = JSON.parse(fileContents);
      return site;
    });

  return sites.sort((a, b) => a.name.localeCompare(b.name));
}

// Get a single site by slug
export function getSiteBySlug(slug: string): HeritageSite | null {
  const sites = getAllSites();
  return sites.find(site => site.slug === slug) || null;
}

// Get all unique categories
export function getAllCategories(): string[] {
  const sites = getAllSites();
  const categoriesSet = new Set<string>();

  sites.forEach(site => {
    site.categories.forEach(category => {
      categoriesSet.add(category);
    });
  });

  return Array.from(categoriesSet).sort();
}

// Get sites by category
export function getSitesByCategory(category: string): HeritageSite[] {
  const sites = getAllSites();
  return sites.filter(site =>
    site.categories.some(cat =>
      cat.toLowerCase() === category.toLowerCase() ||
      cat.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
    )
  );
}

// Get all unique tags
export function getAllTags(): string[] {
  const sites = getAllSites();
  const tagsSet = new Set<string>();

  sites.forEach(site => {
    site.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet).sort();
}

// Get sites by tag
export function getSitesByTag(tag: string): HeritageSite[] {
  const sites = getAllSites();
  return sites.filter(site =>
    site.tags.some(t =>
      t.toLowerCase() === tag.toLowerCase() ||
      t.toLowerCase().replace(/\s+/g, '-') === tag.toLowerCase()
    )
  );
}

// Get all unique counties
export function getAllCounties(): string[] {
  const sites = getAllSites();
  const countiesSet = new Set<string>();

  sites.forEach(site => {
    countiesSet.add(site.location.address.county);
  });

  return Array.from(countiesSet).sort();
}

// Get sites by county
export function getSitesByCounty(county: string): HeritageSite[] {
  const sites = getAllSites();
  return sites.filter(site =>
    site.location.address.county.toLowerCase() === county.toLowerCase()
  );
}

// Get featured sites
export function getFeaturedSites(): HeritageSite[] {
  const sites = getAllSites();
  return sites.filter(site => site.featured);
}

// Search sites by query
export function searchSites(query: string): HeritageSite[] {
  if (!query) return getAllSites();

  const sites = getAllSites();
  const lowerQuery = query.toLowerCase();

  return sites.filter(site =>
    site.name.toLowerCase().includes(lowerQuery) ||
    site.description.short.toLowerCase().includes(lowerQuery) ||
    site.description.full.toLowerCase().includes(lowerQuery) ||
    site.location.address.town.toLowerCase().includes(lowerQuery) ||
    site.location.address.county.toLowerCase().includes(lowerQuery) ||
    site.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    site.categories.some(cat => cat.toLowerCase().includes(lowerQuery))
  );
}

// Helper to format category/tag for URLs
export function formatForUrl(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-');
}

// Helper to format URL text for display
export function formatForDisplay(text: string): string {
  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Get category stats
export function getCategoryStats() {
  const sites = getAllSites();
  const stats: Record<string, number> = {};

  sites.forEach(site => {
    site.categories.forEach(category => {
      stats[category] = (stats[category] || 0) + 1;
    });
  });

  return stats;
}

// Get sites count
export function getSitesCount(): number {
  return getAllSites().length;
}

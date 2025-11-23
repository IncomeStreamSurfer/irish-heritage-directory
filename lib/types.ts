export interface HeritageSite {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  type: string;
  category: string;
  categories: string[];
  historicalPeriod: string;
  era: string;
  yearBuilt: string | number;
  significance: string;
  foundedBy: string;

  description: {
    short: string;
    full: string;
    history: string;
    architecture: string;
    culturalSignificance: string;
  };

  location: {
    address: {
      street?: string;
      town: string;
      county: string;
      region: string;
      country: string;
      postcode?: string;
      island?: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    directions: Record<string, string>;
  };

  contact: {
    phone?: string;
    email?: string;
    website?: string;
    bookingUrl?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      tiktok?: string;
    };
  };

  visitingInformation: {
    openingTimes: {
      currentStatus: string;
      seasonal: Array<{
        period: string;
        days?: string;
        hours: string;
        notes?: string;
        lastAdmission?: string;
      }>;
      closedDates?: string[];
      specialEvents?: string[];
    };
    admissionPrices: {
      currency: string;
      adult?: number;
      senior?: number;
      child?: number;
      student?: number;
      family?: number;
      family2plus2?: number;
      family2plus3?: number;
      group?: number;
      notes?: string;
    };
    tourOptions?: Array<{
      type: string;
      duration?: string;
      included?: string[];
      notes?: string;
    }>;
    averageVisitDuration?: string;
    busyPeriods?: string[];
    adviceForVisitors?: string;
  };

  features: {
    highlights: string[];
    facilities?: string[];
    accessibility: {
      wheelchairAccessible: boolean | string;
      notes?: string;
      restrictions?: string[];
    };
    uniqueSellingPoints: string[];
  };

  images: {
    heroImage: {
      url: string;
      alt: string;
      caption: string;
    };
    gallery?: Array<{
      url: string;
      alt: string;
      caption: string;
    }>;
  };

  nearbyAttractions?: Array<{
    name: string;
    distance: string;
    type: string;
    description?: string;
  }>;

  tags: string[];
  suitableFor: string[];
  weatherDependent: boolean;
  indoorActivities: boolean;
  outdoorActivities: boolean;
  guidedToursAvailable: boolean;
  bookingRequired: boolean;
  bookingRecommended?: boolean;
  heritageCardAccepted: boolean;
  managedBy: string;
  rating: number;
  reviewCount: number;
  featured: boolean;

  unescoWorldHeritage?: boolean;
  nationalPark?: string;
  safetyWarnings?: string[];
}

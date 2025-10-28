// ──────────────────────────────────────────────────────────────
//  Environment & API
// ──────────────────────────────────────────────────────────────

/** Base URL for backend API */
export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || 'https://api.alx-listing.com/v1';

/** Endpoint paths */
export const API_ENDPOINTS = {
    LISTINGS: '/listings',
    SEARCH: '/search',
    PROPERTY: (id: string) => `/listings/${id}`,
} as const;

/** Default pagination */
export const DEFAULT_PAGINATION = {
    PAGE: 1,
    LIMIT: 12,
};

// ──────────────────────────────────────────────────────────────
//  UI Text & Copy
// ──────────────────────────────────────────────────────────────

export const APP_NAME = 'ALX Listing App';
export const TAGLINE = 'Find your perfect stay, anywhere in the world.';

export const UI_TEXT = {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SUPERHOST: 'Superhost',
    GUESTS: (count: number) => `${count} guest${count > 1 ? 's' : ''}`,
    BEDROOMS: (count: number) => `${count} bedroom${count > 1 ? 's' : ''}`,
    BEDS: (count: number) => `${count} bed${count > 1 ? 's' : ''}`,
    BATHS: (count: number) => `${count} bath${count > 1 ? 's' : ''}`,
    NO_PROPERTIES_FOUND: 'No stays found. Try adjusting your filters.',
    LOADING: 'Loading amazing places...',
} as const;

// ──────────────────────────────────────────────────────────────
//  Assets & Placeholders
// ──────────────────────────────────────────────────────────────

/** Static asset paths (relative to /public) */
export const ASSETS = {
    LOGO: '/assets/logo.svg',
    FALLBACK_IMAGE: '/assets/fallback-property.jpg',
    PLACEHOLDERS: [
        '/assets/placeholder-1.jpg',
        '/assets/placeholder-2.jpg',
        '/assets/placeholder-3.jpg',
    ] as const,
};

/** Default fallback property image */
export const FALLBACK_PROPERTY_IMAGE = ASSETS.FALLBACK_IMAGE;

// ──────────────────────────────────────────────────────────────
//  Business Logic Constants
// ──────────────────────────────────────────────────────────────

/** Maximum guests allowed per booking */
export const MAX_GUESTS = 16;

/** Price range boundaries */
export const PRICE_RANGE = {
    MIN: 10,
    MAX: 1000,
    STEP: 10,
} as const;

/** Amenity icons mapping (for future use) */
export const AMENITIES = {
    wifi: 'WiFi',
    kitchen: 'Kitchen',
    pool: 'Pool',
    parking: 'Free parking',
    ac: 'Air conditioning',
    pets: 'Pets allowed',
    tv: 'TV',
    washer: 'Washer',
} as const;
// ──────────────────────────────────────────────────────────────
//  Core UI Component Props
// ──────────────────────────────────────────────────────────────

/**
 * Props for the reusable Card component
 */
export interface CardProps {
    /** Main title of the listing (e.g., "Cozy Mountain Cabin") */
    title: string;

    /** Location string (e.g., "Aspen, Colorado") */
    location: string;

    /** Price per night in USD */
    price: number;

    /** Image path relative to /public (e.g., "/assets/placeholder-1.jpg") */
    image: string;

    /** Star rating out of 5 (optional, defaults to 0) */
    rating?: number;

    /** Optional badge (e.g., "Superhost", "New") */
    badge?: string;

    /** Click handler for the card itself (optional) */
    onClick?: () => void;
}

/**
 * Props for the reusable Button component
 */
export interface ButtonProps {
    /** Button label/text */
    label: string;

    /** Click handler */
    onClick: () => void;

    /** Visual variant */
    variant?: 'primary' | 'secondary' | 'ghost';

    /** Disabled state */
    disabled?: boolean;

    /** Optional icon (ReactNode) placed before label */
    icon?: React.ReactNode;

    /** Optional full-width behavior */
    fullWidth?: boolean;

    /** Optional custom CSS classes */
    className?: string;
}

// ──────────────────────────────────────────────────────────────
//  Data Models
// ──────────────────────────────────────────────────────────────

/**
 * Full property/listing data model
 */
export interface Property {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
    rating: number;
    reviewsCount: number;
    badge?: string;
    host: {
        name: string;
        isSuperhost: boolean;
    };
    amenities: string[];
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
}

// ──────────────────────────────────────────────────────────────
//  API Response Types
// ──────────────────────────────────────────────────────────────

/**
 * Paginated API response for listings
 */
export interface ListingsResponse {
    data: Property[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

/**
 * Error response from API
 */
export interface ApiError {
    status: number;
    message: string;
    code?: string;
}

// ──────────────────────────────────────────────────────────────
//  Form & Filter Types
// ──────────────────────────────────────────────────────────────

/**
 * Search/filter form state
 */
export interface SearchFilters {
    location?: string;
    checkIn?: string; // ISO date string
    checkOut?: string; // ISO date string
    guests?: number;
    priceRange?: [number, number];
    amenities?: string[];
}

// ──────────────────────────────────────────────────────────────
//  Utility Types
// ──────────────────────────────────────────────────────────────

/** Generic pagination params */
export interface PaginationParams {
    page?: number;
    limit?: number;
}
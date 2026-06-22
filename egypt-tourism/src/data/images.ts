/**
 * Central image registry — replace paths here or from an admin dashboard later.
 * Images are stored in /public/images/ (sourced from Unsplash & Pexels, royalty-free).
 */

export interface SiteImage {
  id: string
  /** Local path under /public or external URL */
  src: string
  alt: string
}

const local = (filename: string) => `/images/${filename}`

export const heroImage: SiteImage = {
  id: 'hero-pyramids',
  src: local('hero-pyramids.jpg'),
  alt: 'منظر بانورامي لأهرامات الجiza عند الغروب',
}

export const serviceImages: Record<string, SiteImage> = {
  'airport-pickup': {
    id: 'service-airport',
    src: local('service-airport.jpg'),
    alt: 'سيارة فاخرة لاستقبال من المطار',
  },
  'hotel-discounts': {
    id: 'service-hotels',
    src: local('service-hotels.jpg'),
    alt: 'فندق فاخر بإطلالة استثنائية',
  },
  'car-rental': {
    id: 'service-cars',
    src: local('service-cars.jpg'),
    alt: 'سيارة فاخرة للإيجار',
  },
  apartments: {
    id: 'service-apartments',
    src: local('service-apartments.jpg'),
    alt: 'وحدة سكنية فاخرة ومجهزة',
  },
  'saudi-students': {
    id: 'service-students',
    src: local('service-students.jpg'),
    alt: 'طلاب في رحلة تعليمية وسياحية',
  },
  'tour-programs': {
    id: 'service-tours',
    src: local('service-tours.jpg'),
    alt: 'معالم سياحية في مصر — صحراء وآثار',
  },
  'tour-guides': {
    id: 'service-guides',
    src: local('service-guides.jpg'),
    alt: 'مرشد سياحي محترف في رحلة استكشاف',
  },
}

export const tourImages: Record<string, SiteImage> = {
  pyramids: {
    id: 'tour-pyramids',
    src: local('tour-pyramids.jpg'),
    alt: 'أهرامات الجiza وتمثال أبو الهول',
  },
  'grand-museum': {
    id: 'tour-museum',
    src: local('tour-museum.jpg'),
    alt: 'آثار فرعونية في المتحف المصري الكبير',
  },
  'cairo-tour': {
    id: 'tour-cairo',
    src: local('tour-cairo.jpg'),
    alt: 'جولة في قلب القاهرة والمعالم التاريخية',
  },
  'full-day-guide': {
    id: 'tour-nile-luxury',
    src: local('tour-nile.jpg'),
    alt: 'تجربة فاخرة على نهر النيل',
  },
}

export function isLocalImage(src: string): boolean {
  return src.startsWith('/')
}

/** Build optimized URL — local images are served as-is */
export function buildImageUrl(src: string, width: number, quality = 80): string {
  if (isLocalImage(src)) return src

  const separator = src.includes('?') ? '&' : '?'
  return `${src}${separator}auto=format&fit=crop&w=${width}&q=${quality}`
}

export function buildSrcSet(src: string, widths: number[], quality = 80): string | undefined {
  if (isLocalImage(src)) return undefined
  return widths.map((w) => `${buildImageUrl(src, w, quality)} ${w}w`).join(', ')
}

export function getServiceImage(serviceId: string): SiteImage {
  return (
    serviceImages[serviceId] ?? {
      id: `service-${serviceId}`,
      src: local('service-tours.jpg'),
      alt: 'خدمة سياحية في مصر',
    }
  )
}

export function getTourImage(tourId: string): SiteImage {
  return (
    tourImages[tourId] ?? {
      id: `tour-${tourId}`,
      src: local('tour-pyramids.jpg'),
      alt: 'برنامج سياحي في مصر',
    }
  )
}

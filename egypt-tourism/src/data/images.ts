/**
 * Central image registry — local tourism photos in /public/images/.
 * Add or replace JPG files there; update paths below if filenames change.
 */

export interface SiteImage {
  id: string
  /** Path under /public, e.g. /images/hero-pyramids.jpg */
  src: string
  alt: string
  objectPosition?: string
}

const asset = (filename: string) => `/images/${filename}`

export const heroImage: SiteImage = {
  id: 'hero-pyramids',
  src: asset('hero-pyramids.jpg'),
  alt: 'منظر بانورامي لأهرامات الجيزة عند الغروب',
  objectPosition: 'center 35%',
}

export const serviceImages: Record<string, SiteImage> = {
  'airport-pickup': {
    id: 'service-airport',
    src: asset('service-airport.jpg'),
    alt: 'سيارة فاخرة لاستقبال من المطار',
    objectPosition: 'center 60%',
  },
  'hotel-discounts': {
    id: 'service-hotels',
    src: asset('service-hotels.jpg'),
    alt: 'فندق فاخر بإطلالة استثنائية',
    objectPosition: 'center center',
  },
  'car-rental': {
    id: 'service-cars',
    src: asset('service-cars.jpg'),
    alt: 'سيارة فاخرة للإيجار',
    objectPosition: 'center 55%',
  },
  apartments: {
    id: 'service-apartments',
    src: asset('service-apartments.jpg'),
    alt: 'وحدة سكنية فاخرة ومجهزة',
    objectPosition: 'center center',
  },
  'saudi-students': {
    id: 'service-students',
    src: asset('service-students.jpg'),
    alt: 'طلاب في رحلة تعليمية وسياحية',
    objectPosition: 'center 30%',
  },
  'tour-programs': {
    id: 'service-tours',
    src: asset('service-tours.jpg'),
    alt: 'معالم سياحية في مصر — صحراء وآثار',
    objectPosition: 'center 40%',
  },
  'tour-guides': {
    id: 'service-guides',
    src: asset('service-guides.jpg'),
    alt: 'مرشد سياحي محترف في رحلة استكشاف',
    objectPosition: 'center center',
  },
}

export const tourImages: Record<string, SiteImage> = {
  pyramids: {
    id: 'tour-pyramids',
    src: asset('tour-pyramids.jpg'),
    alt: 'أهرامات الجيزة وتمثال أبو الهول',
    objectPosition: 'center 45%',
  },
  'cairo-tour': {
    id: 'tour-cairo',
    src: asset('tour-cairo.jpg'),
    alt: 'جولة في قلب القاهرة والمعالم التاريخية',
    objectPosition: 'center 35%',
  },
  'full-day-guide': {
    id: 'tour-nile-luxury',
    src: asset('tour-nile.jpg'),
    alt: 'تجربة فاخرة على نهر النيل',
    objectPosition: 'center 50%',
  },
}

export function isLocalImage(src: string): boolean {
  return src.startsWith('/')
}

/** Build optimized URL — local files are served as-is */
export function buildImageUrl(src: string, width: number, quality = 85): string {
  if (isLocalImage(src)) return src

  const separator = src.includes('?') ? '&' : '?'
  return `${src}${separator}auto=format&fit=crop&w=${width}&q=${quality}`
}

export function buildSrcSet(
  src: string,
  widths: number[],
  quality = 85,
): string | undefined {
  if (isLocalImage(src)) return undefined

  return widths.map((w) => `${buildImageUrl(src, w, quality)} ${w}w`).join(', ')
}

export function getServiceImage(serviceId: string): SiteImage {
  return (
    serviceImages[serviceId] ?? {
      id: `service-${serviceId}`,
      src: asset('service-tours.jpg'),
      alt: 'خدمة سياحية في مصر',
      objectPosition: 'center center',
    }
  )
}

export function getTourImage(tourId: string): SiteImage {
  return (
    tourImages[tourId] ?? {
      id: `tour-${tourId}`,
      src: asset('tour-pyramids.jpg'),
      alt: 'برنامج سياحي في مصر',
      objectPosition: 'center center',
    }
  )
}

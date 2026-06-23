import { cn } from '@/lib/utils'
import { buildImageUrl, buildSrcSet, isLocalImage } from '@/data/images'

type AspectRatio = 'wide' | 'card' | 'hero'

interface OptimizedImageProps {
  src: string
  alt: string
  aspectRatio?: AspectRatio
  objectPosition?: string
  priority?: boolean
  hoverZoom?: boolean
  overlay?: boolean
  overlayClassName?: string
  fill?: boolean
  className?: string
  imageClassName?: string
  sizes?: string
  widths?: number[]
  quality?: number
}

const aspectClasses: Record<AspectRatio, string> = {
  wide: 'aspect-[5/3]',
  card: 'aspect-[4/3]',
  hero: 'aspect-[16/9]',
}

const defaultWidths: Record<AspectRatio, number[]> = {
  wide: [480, 640, 960, 1280],
  card: [480, 640, 960, 1280],
  hero: [640, 960, 1280, 1920],
}

const defaultSizes: Record<AspectRatio, string> = {
  wide: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  card: '(max-width: 1024px) 100vw, 560px',
  hero: '100vw',
}

export default function OptimizedImage({
  src,
  alt,
  aspectRatio = 'wide',
  objectPosition = 'center center',
  priority = false,
  hoverZoom = false,
  overlay = false,
  overlayClassName,
  fill = false,
  className,
  imageClassName,
  sizes,
  widths,
  quality = 85,
}: OptimizedImageProps) {
  const resolvedWidths = widths ?? defaultWidths[aspectRatio]
  const resolvedSizes = sizes ?? defaultSizes[aspectRatio]
  const fallbackWidth = resolvedWidths[resolvedWidths.length - 1] ?? 1280
  const local = isLocalImage(src)
  const srcSet = buildSrcSet(src, resolvedWidths, quality)

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gray-100',
        fill ? 'absolute inset-0 h-full w-full' : aspectClasses[aspectRatio],
        className,
      )}
    >
      <img
        src={local ? src : buildImageUrl(src, fallbackWidth, quality)}
        srcSet={srcSet}
        sizes={srcSet ? resolvedSizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        style={{ objectPosition }}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700 ease-out',
          hoverZoom && 'group-hover:scale-[1.04]',
          imageClassName,
        )}
      />
      {overlay && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent',
            overlayClassName,
          )}
        />
      )}
    </div>
  )
}

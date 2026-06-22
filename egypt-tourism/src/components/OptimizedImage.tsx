import { cn } from '@/lib/utils'
import { buildImageUrl, buildSrcSet, isLocalImage } from '@/data/images'

type AspectRatio = 'wide' | 'card'

interface OptimizedImageProps {
  src: string
  alt: string
  aspectRatio?: AspectRatio
  priority?: boolean
  hoverZoom?: boolean
  overlay?: boolean
  overlayClassName?: string
  fill?: boolean
  className?: string
  imageClassName?: string
  sizes?: string
  widths?: number[]
}

const aspectClasses: Record<AspectRatio, string> = {
  wide: 'aspect-[16/10]',
  card: 'aspect-[4/3]',
}

const defaultWidths: Record<AspectRatio, number[]> = {
  wide: [400, 640, 960, 1280],
  card: [400, 640, 800],
}

const defaultSizes: Record<AspectRatio, string> = {
  wide: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}

export default function OptimizedImage({
  src,
  alt,
  aspectRatio = 'wide',
  priority = false,
  hoverZoom = false,
  overlay = false,
  overlayClassName,
  fill = false,
  className,
  imageClassName,
  sizes,
  widths,
}: OptimizedImageProps) {
  const resolvedWidths = widths ?? defaultWidths[aspectRatio]
  const resolvedSizes = sizes ?? defaultSizes[aspectRatio]
  const fallbackWidth = resolvedWidths[resolvedWidths.length - 1] ?? 1280
  const local = isLocalImage(src)
  const srcSet = buildSrcSet(src, resolvedWidths)

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gray-200',
        fill ? 'absolute inset-0 h-full w-full' : aspectClasses[aspectRatio],
        className,
      )}
    >
      <img
        src={local ? src : buildImageUrl(src, fallbackWidth)}
        srcSet={srcSet}
        sizes={srcSet ? resolvedSizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn(
          'h-full w-full object-cover transition-transform duration-500 ease-out',
          hoverZoom && 'group-hover:scale-105',
          imageClassName,
        )}
      />
      {overlay && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent',
            overlayClassName,
          )}
        />
      )}
    </div>
  )
}

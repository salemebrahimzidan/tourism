import type { Tour } from '../data/tours'
import { getTourImage } from '../data/images'
import { Clock } from 'lucide-react'
import Button from './Button'
import OptimizedImage from './OptimizedImage'

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const image = getTourImage(tour.id)

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          objectPosition={image.objectPosition}
          aspectRatio="wide"
          hoverZoom
          overlay
        />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-primary shadow-md backdrop-blur-sm">
          {tour.price}
        </span>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold text-text">{tour.title}</h3>
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4 text-secondary" />
          <span>{tour.duration}</span>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          {tour.description}
        </p>
        <Button variant="primary" className="w-full" to={`/contact?tour=${tour.id}`}>
          احجز البرنامج
        </Button>
      </div>
    </article>
  )
}

import type { Service } from '../data/services'
import { getServiceImage } from '../data/images'
import Button from './Button'
import OptimizedImage from './OptimizedImage'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  const image = getServiceImage(service.id)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          aspectRatio="wide"
          hoverZoom
        />
        <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-primary shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold text-text">{service.title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>
        <Button variant="outline" className="w-full" to={`/contact?service=${service.id}`}>
          اطلب الخدمة
        </Button>
      </div>
    </article>
  )
}

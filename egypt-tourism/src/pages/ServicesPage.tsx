import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="خدماتنا السياحية"
          subtitle="نقدم لك أفضل الخدمات بأسعار تنافسية وجودة عالية"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

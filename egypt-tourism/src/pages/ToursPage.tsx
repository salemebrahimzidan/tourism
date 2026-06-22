import SectionTitle from '../components/SectionTitle'
import TourCard from '../components/TourCard'
import { tours } from '../data/tours'

export default function ToursPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="البرامج السياحية"
          subtitle="اختر البرنامج المناسب لك واستمتع بأجمل المعالم المصرية"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}

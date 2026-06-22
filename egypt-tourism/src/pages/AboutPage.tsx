import { CheckCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { aboutContent } from '../data/contact'

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionTitle title="من نحن" subtitle="تعرف على قصتنا ورؤيتنا" />

        <div className="mt-12 space-y-12">
          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">من نحن</h3>
            <p className="leading-relaxed text-gray-600">{aboutContent.whoWeAre}</p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">رؤيتنا</h3>
            <p className="leading-relaxed text-gray-600">{aboutContent.vision}</p>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-primary">لماذا تختارنا</h3>
            <ul className="space-y-3">
              {aboutContent.whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

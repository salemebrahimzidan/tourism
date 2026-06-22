import { Check, GraduationCap } from 'lucide-react'
import { studentDiscount } from '@/data/contact'
import { getServiceImage } from '@/data/images'
import OptimizedImage from './OptimizedImage'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function StudentsDiscountSection() {
  const image = getServiceImage('saudi-students')

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
      <div className="absolute inset-0 opacity-20">
        <OptimizedImage src={image.src} alt="" fill sizes="100vw" widths={[640, 1280, 1920]} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/95 to-primary/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-sm font-medium text-secondary">
              <GraduationCap className="h-4 w-4" />
              عرض حصري للطلاب السعوديين
            </span>
            <h2 className="text-2xl font-extrabold leading-tight md:text-4xl">
              {studentDiscount.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
              {studentDiscount.description}
            </p>
            <ul className="mt-8 space-y-3">
              {studentDiscount.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={getWhatsAppUrl(studentDiscount.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-text shadow-lg transition-all hover:bg-secondary-dark md:text-base"
              >
                <GraduationCap className="h-5 w-5" />
                {studentDiscount.cta}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              aspectRatio="card"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-3xl font-extrabold text-secondary md:text-4xl">
                {studentDiscount.discountLabel}
              </p>
              <p className="mt-1 text-sm text-white/80">{studentDiscount.discountNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

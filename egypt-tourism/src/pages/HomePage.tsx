import { ArrowLeft, Shield, Star, Users, Headphones } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import TourCard from '../components/TourCard'
import StudentsDiscountSection from '../components/StudentsDiscountSection'
import BookingForm from '../components/BookingForm'
import { services } from '../data/services'
import { tours } from '../data/tours'
import { whyChooseUs } from '../data/contact'
import { getWhatsAppUrl } from '../lib/whatsapp'

const featureIcons = [Star, Shield, Headphones, Users]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="خدماتنا"
            subtitle="كل ما تحتاجه في رحلتك إلى مصر — بأسعار مميزة وخدمة موثوقة"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/services" variant="outline">
              عرض جميع الخدمات
              <ArrowLeft className="mr-2 inline h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="البرامج السياحية"
            subtitle="اكتشف عجائب مصر — من الأهرامات إلى نهر النيل"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tours.slice(0, 2).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/tours" variant="primary">
              عرض جميع البرامج
              <ArrowLeft className="mr-2 inline h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <StudentsDiscountSection />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle title="لماذا تختارنا" subtitle="شريكك الموثوق للسياحة في مصر" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = featureIcons[index] ?? Star
              return (
                <div key={item.title} className="premium-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-bold text-text">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionTitle
            title="احجز أو استفسر"
            subtitle="املأ النموذج وسنفتح واتساب مباشرة لإتمام طلبك"
          />
          <div className="premium-card mt-10 p-6 md:p-8">
            <BookingForm showTitle={false} />
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">هل أنت مستعد لرحلة لا تُنسى؟</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            تواصل معنا الآن عبر واتساب واحصل على عرض سعر مخصص لرحلتك في مصر
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={getWhatsAppUrl()} variant="whatsapp">
              تواصل معنا عبر واتساب
            </Button>
            <Button
              to="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              نموذج الحجز
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

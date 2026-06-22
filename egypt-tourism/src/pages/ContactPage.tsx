import { MessageCircle, MapPin, Phone } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import BookingForm from '../components/BookingForm'
import Button from '../components/Button'
import { contactInfo } from '../data/contact'
import { getWhatsAppUrl } from '../lib/whatsapp'

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-2xl font-extrabold md:text-4xl">تواصل معنا / احجز الآن</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            نحن هنا لمساعدتك — تواصل مباشرة عبر واتساب أو املأ نموذج الحجز
          </p>
          <div className="mt-6">
            <Button href={getWhatsAppUrl()} variant="whatsapp">
              تواصل معنا عبر واتساب
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-2">
              <SectionTitle
                title="معلومات التواصل"
                subtitle="نرد على رسائل واتساب بأسرع وقت"
                centered={false}
              />

              <div className="premium-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">واتساب — الطريقة المفضلة</h3>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-gray-600 hover:text-primary"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">الهاتف</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 block text-sm text-gray-600 hover:text-primary"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">الموقع</h3>
                    <p className="mt-1 text-sm text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-6 md:p-8 lg:col-span-3">
              <BookingForm showTitle />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

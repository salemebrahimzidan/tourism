import { heroImage } from '@/data/images'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import Button from './Button'
import OptimizedImage from './OptimizedImage'

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden text-white md:min-h-[680px]">
      <OptimizedImage
        src={heroImage.src}
        alt={heroImage.alt}
        objectPosition={heroImage.objectPosition}
        fill
        priority
        quality={90}
        sizes="100vw"
        widths={[640, 960, 1280, 1920]}
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/45 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-20 md:min-h-[680px] md:px-6 md:py-32">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-secondary/50 bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary backdrop-blur-sm">
            ✦ رفيقك الموثوق في مصر
          </span>
          <h1 className="text-3xl font-extrabold leading-tight drop-shadow-lg md:text-4xl lg:text-5xl lg:leading-[1.2]">
            بوابتك إلى تجربة استثنائية في مصر
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/90 drop-shadow md:text-lg">
            نقدّم خدمات مميزة للسياح والزوار والطلاب الخليجيين والعرب، تشمل
            الاستقبال من المطار، وحجوزات الفنادق والوحدات السكنية بأسعار خاصة،
            وتأجير السيارات، وتنظيم البرامج السياحية والترفيهية، مع مرشدين
            محترفين وخدمة عربية موثوقة تضمن لكم الراحة والأمان طوال فترة
            إقامتكم.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90 drop-shadow md:text-lg">
            سواء كنت سائحًا، طالبًا، أو زائرًا بغرض العمل، نحن نوفر لك كل ما
            تحتاجه لتجربة مريحة وممتعة من لحظة وصولك حتى مغادرتك.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={getWhatsAppUrl()} variant="whatsapp">
              تواصل معنا عبر واتساب
            </Button>
            <Button
              to="/services"
              variant="outline"
              className="border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
            >
              استكشف الخدمات
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/15 pt-8 text-sm text-white/80">
            <div>
              <p className="text-2xl font-bold text-secondary">+500</p>
              <p>عميل راضٍ</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">24/7</p>
              <p>دعم واتساب</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">7</p>
              <p>خدمات متكاملة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

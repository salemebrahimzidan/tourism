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
        fill
        priority
        sizes="100vw"
        widths={[640, 960, 1280, 1920]}
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/60 to-black/30" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-20 md:min-h-[680px] md:px-6 md:py-32">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-secondary/50 bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary backdrop-blur-sm">
            ✦ رفيقك الموثوق في مصر
          </span>
          <h1 className="text-3xl font-extrabold leading-tight drop-shadow-lg md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            تجربة سياحية فاخرة
            <span className="mt-1 block text-secondary">للسعوديين وطلاب المملكة</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 drop-shadow md:text-lg">
            استقبال من المطار، خصومات على الفنادق والسيارات والوحدات السكنية،
            برامج سياحية للأهرامات والمتحف المصري الكبير، ومرشدين محترفين —
            كل ذلك بخدمة عربية موثوقة.
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

import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './SocialIcons'
import WhatsAppButton from './WhatsAppButton'
import { contactInfo } from '../data/contact'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-secondary">مصر الذهبية للسياحة</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              شريكك الموثوق في مصر للزوار السعوديين وطلاب المملكة ودول الخليج.
              من الاستقبال في المطار إلى البرامج السياحية — بخدمة عربية احترافية.
            </p>
            <div className="mt-5">
              <WhatsAppButton floating={false} className="text-sm" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-secondary">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  واتساب: {contactInfo.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-secondary">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-white">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-white">
                  البرامج السياحية
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  تواصل / حجز
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-text"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-text"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-text"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} مصر الذهبية للسياحة. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}

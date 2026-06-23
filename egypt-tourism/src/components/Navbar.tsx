import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, MapPin } from 'lucide-react'
import Button from './Button'
import { cn } from '../lib/utils'
import { getWhatsAppUrl } from '../lib/whatsapp'

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/services', label: 'الخدمات' },
  { to: '/tours', label: 'البرامج السياحية' },
  { to: '/contact', label: 'تواصل / حجز' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-lg font-extrabold text-primary">KhalidTraval</span>
            <span className="block text-xs text-gray-500">للسياحة والسفر</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button href={getWhatsAppUrl()} variant="whatsapp" className="mr-2">
            تواصل معنا عبر واتساب
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="القائمة"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-4 py-3 text-sm font-medium',
                    isActive ? 'bg-primary/10 text-primary' : 'text-gray-600',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              className="mt-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا عبر واتساب
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

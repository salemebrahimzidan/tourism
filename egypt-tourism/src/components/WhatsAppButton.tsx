import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

interface WhatsAppButtonProps {
  floating?: boolean
  className?: string
}

export default function WhatsAppButton({ floating = true, className }: WhatsAppButtonProps) {
  const url = getWhatsAppUrl()

  if (floating) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl md:bottom-8 md:left-8 md:px-6 md:text-base ${className ?? ''}`}
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span>تواصل معنا عبر واتساب</span>
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20bd5a] hover:shadow-lg ${className ?? ''}`}
    >
      <MessageCircle className="h-5 w-5" />
      تواصل معنا عبر واتساب
    </a>
  )
}

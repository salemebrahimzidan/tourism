import { contactInfo } from '@/data/contact'
import type { BookingFormData } from './validations'
import { services } from '@/data/services'
import { tours } from '@/data/tours'

export function getWhatsAppPhone(): string {
  return contactInfo.whatsapp.replace(/\D/g, '')
}

export function getWhatsAppUrl(message?: string): string {
  const phone = getWhatsAppPhone()
  const text = message ?? contactInfo.defaultMessage
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

function findServiceTitle(id: string): string {
  return services.find((s) => s.id === id)?.title ?? id
}

function findTourTitle(id: string): string {
  return tours.find((t) => t.id === id)?.title ?? id
}

export function buildBookingWhatsAppMessage(data: BookingFormData): string {
  const lines = [
    'السلام عليكم، أود الاستفسار عن خدماتكم السياحية:',
    '',
    `الاسم: ${data.fullName}`,
    `الهاتف: ${data.phone}`,
    `واتساب: ${data.whatsapp}`,
    `الجنسية: ${data.nationality}`,
    `عدد الأشخاص: ${data.peopleCount}`,
    `تاريخ الوصول: ${data.arrivalDate}`,
  ]

  if (data.requestedService) {
    lines.push(`الخدمة المطلوبة: ${findServiceTitle(data.requestedService)}`)
  }

  if (data.requestedTour) {
    lines.push(`البرنامج السياحي: ${findTourTitle(data.requestedTour)}`)
  }

  if (data.notes?.trim()) {
    lines.push(`ملاحظات: ${data.notes.trim()}`)
  }

  return lines.join('\n')
}

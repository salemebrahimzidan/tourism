import { z } from 'zod'

export const bookingSchema = z.object({
  fullName: z.string().min(2, 'الاسم الكامل مطلوب'),
  phone: z.string().min(10, 'رقم الهاتف غير صالح'),
  whatsapp: z.string().min(10, 'رقم الواتساب غير صالح'),
  nationality: z.string().min(2, 'الجنسية مطلوبة'),
  peopleCount: z.number().min(1, 'عدد الأشخاص يجب أن يكون 1 على الأقل'),
  arrivalDate: z.string().min(1, 'تاريخ الوصول مطلوب'),
  requestedService: z.string().optional(),
  requestedTour: z.string().optional(),
  notes: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>

export const contactSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صالح'),
  message: z.string().min(10, 'الرسالة قصيرة جداً'),
})

export type ContactFormData = z.infer<typeof contactSchema>

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { bookingSchema, type BookingFormData } from '../lib/validations'
import { buildBookingWhatsAppMessage, getWhatsAppUrl } from '../lib/whatsapp'
import { services } from '../data/services'
import { tours } from '../data/tours'
import Button from './Button'

interface BookingFormProps {
  showTitle?: boolean
}

export default function BookingForm({ showTitle = true }: BookingFormProps) {
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)

  const defaultService = searchParams.get('service') ?? ''
  const defaultTour = searchParams.get('tour') ?? ''

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      whatsapp: '',
      nationality: '',
      peopleCount: 1,
      arrivalDate: '',
      requestedService: defaultService,
      requestedTour: defaultTour,
      notes: '',
    },
  })

  const onSubmit = (data: BookingFormData) => {
    const message = buildBookingWhatsAppMessage(data)
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    reset({
      fullName: '',
      phone: '',
      whatsapp: '',
      nationality: '',
      peopleCount: 1,
      arrivalDate: '',
      requestedService: '',
      requestedTour: '',
      notes: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'
  const labelClass = 'mb-2 block text-sm font-medium text-text'
  const errorClass = 'mt-1 text-xs text-red-500'

  return (
    <>
      {showTitle && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-text md:text-3xl">نموذج الحجز</h2>
          <p className="mt-2 text-gray-600">
            املأ البيانات وسيتم فتح واتساب لإرسال طلبك مباشرة
          </p>
        </div>
      )}

      {submitted && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <MessageCircle className="h-5 w-5 shrink-0 text-green-600" />
          تم فتح واتساب — أكمل إرسال رسالتك هناك
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              الاسم الكامل
            </label>
            <input id="fullName" type="text" className={inputClass} {...register('fullName')} />
            {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              رقم الهاتف
            </label>
            <input id="phone" type="tel" className={inputClass} {...register('phone')} />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              رقم الواتساب
            </label>
            <input id="whatsapp" type="tel" className={inputClass} {...register('whatsapp')} />
            {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
          </div>

          <div>
            <label htmlFor="nationality" className={labelClass}>
              الجنسية
            </label>
            <input
              id="nationality"
              type="text"
              className={inputClass}
              placeholder="مثال: سعودي"
              {...register('nationality')}
            />
            {errors.nationality && <p className={errorClass}>{errors.nationality.message}</p>}
          </div>

          <div>
            <label htmlFor="peopleCount" className={labelClass}>
              عدد الأشخاص
            </label>
            <input
              id="peopleCount"
              type="number"
              min={1}
              className={inputClass}
              {...register('peopleCount', { valueAsNumber: true })}
            />
            {errors.peopleCount && <p className={errorClass}>{errors.peopleCount.message}</p>}
          </div>

          <div>
            <label htmlFor="arrivalDate" className={labelClass}>
              تاريخ الوصول
            </label>
            <input id="arrivalDate" type="date" className={inputClass} {...register('arrivalDate')} />
            {errors.arrivalDate && <p className={errorClass}>{errors.arrivalDate.message}</p>}
          </div>

          <div>
            <label htmlFor="requestedService" className={labelClass}>
              الخدمة المطلوبة
            </label>
            <select id="requestedService" className={inputClass} {...register('requestedService')}>
              <option value="">اختر الخدمة (اختياري)</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="requestedTour" className={labelClass}>
              البرنامج السياحي
            </label>
            <select id="requestedTour" className={inputClass} {...register('requestedTour')}>
              <option value="">اختر البرنامج (اختياري)</option>
              {tours.map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className={labelClass}>
            ملاحظات إضافية
          </label>
          <textarea
            id="notes"
            rows={4}
            className={inputClass}
            placeholder="أي تفاصيل إضافية تود مشاركتها..."
            {...register('notes')}
          />
        </div>

        <Button type="submit" variant="whatsapp" className="w-full md:w-auto">
          <MessageCircle className="ml-2 inline h-5 w-5" />
          إرسال الطلب عبر واتساب
        </Button>
      </form>
    </>
  )
}

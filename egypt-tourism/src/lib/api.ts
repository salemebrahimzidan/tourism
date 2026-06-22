import axios from 'axios'
import type { BookingFormData } from './validations'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function submitBooking(data: BookingFormData): Promise<void> {
  // Placeholder for future backend integration
  await api.post('/bookings', data).catch(() => {
    // Simulate success when no backend is available
    return Promise.resolve()
  })
}

export default api

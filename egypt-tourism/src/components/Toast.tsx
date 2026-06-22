import { useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

interface ToastProps {
  message: string
  show: boolean
  onClose: () => void
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (!show) return

    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-xl bg-primary px-6 py-4 text-white shadow-2xl">
      <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
      <p className="text-sm font-medium">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="mr-2 rounded-full p-1 hover:bg-white/20"
        aria-label="إغلاق"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

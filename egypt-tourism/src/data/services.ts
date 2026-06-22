import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Car,
  GraduationCap,
  Hotel,
  Map,
  PlaneLanding,
  Users,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'airport-pickup',
    title: 'استقبال من المطار',
    description:
      'استقبال دافئ من مطار القاهرة أو أي مطار مصري مع نقل مريح إلى وجهتك.',
    icon: PlaneLanding,
  },
  {
    id: 'hotel-discounts',
    title: 'خصومات على الفنادق',
    description:
      'أسعار مميزة على أفضل الفنادق في القاهرة، الإسكندرية، الأقصر وأسوان.',
    icon: Hotel,
  },
  {
    id: 'car-rental',
    title: 'خصومات على إيجار السيارات',
    description:
      'سيارات حديثة ومريحة بأسعار مخفضة مع أو بدون سائق حسب رغبتك.',
    icon: Car,
  },
  {
    id: 'apartments',
    title: 'خصومات على الوحدات السكنية',
    description:
      'شقق ووحدات سكنية فاخرة ومجهزة في أفضل المواقع السياحية.',
    icon: Building2,
  },
  {
    id: 'saudi-students',
    title: 'خصم خاص للطلاب السعوديين',
    description:
      'عروض حصرية للطلاب السعوديين تشمل الإقامة والنقل والبرامج السياحية.',
    icon: GraduationCap,
  },
  {
    id: 'tour-programs',
    title: 'برامج سياحية',
    description:
      'برامج متنوعة تشمل الأهرامات والمتاحف والمعالم التاريخية والترفيهية.',
    icon: Map,
  },
  {
    id: 'tour-guides',
    title: 'مرشدين سياحيين',
    description:
      'مرشدون محترفون يتحدثون العربية والإنجليزية لرحلة غنية بالمعلومات.',
    icon: Users,
  },
]

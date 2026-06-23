export interface Tour {
  id: string
  title: string
  duration: string
  description: string
  price: string
}

export const tours: Tour[] = [
  {
    id: 'pyramids',
    title: 'زيارة الأهرامات',
    duration: '6 ساعات',
    description:
      'جولة شاملة لأهرامات الجiza وتمثال أبو الهول مع مرشد سياحي متخصص.',
    price: 'من 1,500 جنيه',
  },
  {
    id: 'cairo-tour',
    title: 'جولة القاهرة',
    duration: '8 ساعات',
    description:
      'جولة في قلب القاهرة تشمل القلعة والخان والأزهر والمعالم التاريخية.',
    price: 'من 2,000 جنيه',
  },
  {
    id: 'full-day-guide',
    title: 'رحلة يوم كامل مع مرشد سياحي',
    duration: '10 ساعات',
    description:
      'برنامج مخصص ليوم كامل مع مرشد خاص يصمم رحلتك حسب اهتماماتك.',
    price: 'من 3,500 جنيه',
  },
]

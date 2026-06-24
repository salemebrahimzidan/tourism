export interface Tour {
  id: string
  title: string
  duration: string
  description: string
}

export const tours: Tour[] = [
  {
    id: 'pyramids',
    title: 'زيارة الأهرامات',
    duration: '6 ساعات',
    description:
      'جولة شاملة لأهرامات الجiza وتمثال أبو الهول مع مرشد سياحي متخصص.',
  },
  {
    id: 'cairo-tour',
    title: 'جولة القاهرة',
    duration: '8 ساعات',
    description:
      'جولة في قلب القاهرة تشمل القلعة والخان والأزهر والمعالم التاريخية.',
  },
  {
    id: 'full-day-guide',
    title: 'رحلة يوم كامل مع مرشد سياحي',
    duration: '10 ساعات',
    description:
      'برنامج مخصص ليوم كامل مع مرشد خاص يصمم رحلتك حسب اهتماماتك.',
  },
]

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-2xl font-extrabold text-text md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">{subtitle}</p>
      )}
      <div
        className={`mt-4 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}
      >
        <div className="h-1 w-8 rounded-full bg-secondary/40" />
        <div className="h-1 w-16 rounded-full bg-secondary" />
        <div className="h-1 w-8 rounded-full bg-secondary/40" />
      </div>
    </div>
  )
}

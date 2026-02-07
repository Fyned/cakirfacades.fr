export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-cakir-black'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1 bg-cakir-gold ${centered ? 'mx-auto' : ''} mb-4`}></div>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-cakir-black/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

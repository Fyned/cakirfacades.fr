import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * PageHero - Reusable hero section with background image for inner pages
 *
 * @param {string} title - Page title
 * @param {string} subtitle - Page subtitle/description
 * @param {string} image - Background image path
 * @param {Array} breadcrumbs - Breadcrumb items [{name, href}]
 * @param {string} badge - Optional badge text (e.g., "Nos Services")
 */
export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs = [],
  badge = null
}) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cakir-black/95 via-cakir-black/85 to-cakir-black/70" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 lg:pt-40 pb-16 md:pb-20">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6 animate-fade-in" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-4 h-4" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white/80">{item.name}</span>
                  ) : (
                    <Link
                      to={item.href}
                      className="hover:text-cakir-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl animate-fade-in-up">
          {/* Badge */}
          {badge && (
            <span className="inline-block text-cakir-gold text-sm font-semibold tracking-wider uppercase mb-4 border border-cakir-gold/30 px-4 py-1.5 rounded-full bg-cakir-gold/10">
              {badge}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

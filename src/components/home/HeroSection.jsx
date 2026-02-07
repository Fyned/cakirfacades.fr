import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import CountUp from '../animations/CountUp'

const stats = [
  { value: 15, suffix: '+', label: 'Années d\'expérience' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 10, suffix: ' ans', label: 'Garantie décennale' },
  { value: 250, suffix: 'km', label: 'Zone d\'intervention' },
]

export default function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.querySelector('#services-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Static, no parallax for performance */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/images/projects/projet-02-enduit-pierre-gris-cloture/cover.jpg)'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cakir-black/80 via-cakir-black/60 to-cakir-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cakir-gold animate-pulse" />
          <span className="text-sm font-medium">Artisan Façadier depuis 2009</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Expert en</span>
          <span className="block bg-gradient-to-r from-cakir-gold via-cakir-gold-light to-cakir-gold bg-clip-text text-transparent">
            Façade & Isolation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Ravalement • Isolation Thermique • Enduits Décoratifs
        </p>

        {/* Location */}
        <p className="text-base text-white/60 mb-10">
          Châteaubriant et tout le Grand Ouest
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/devis-gratuit"
            className="group btn-primary text-base py-4 px-8 shadow-2xl shadow-cakir-gold/30 hover:shadow-cakir-gold/40"
          >
            Demander un Devis Gratuit
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/nos-realisations"
            className="btn-secondary text-base py-4 px-8 border-white/30 text-white hover:bg-white/10"
          >
            Voir nos Réalisations
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-cakir-gold mb-1">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce-slow"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cakir-light to-transparent" />
    </section>
  )
}

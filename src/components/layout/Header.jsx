import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'
import { navigation, companyInfo } from '../../data/navigation'
import { services } from '../../data/services'

export default function Header({ topBarVisible = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Calculate header offset based on topbar visibility
  const headerTop = topBarVisible && !isScrolled ? 'lg:top-10' : 'top-0'

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${headerTop} ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-cakir-black/95'
      }`}
    >
      <div className="container-custom">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-[72px]' : 'h-[88px]'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 relative z-10">
            <img
              src={isScrolled ? "/images/logo/cakir-header-logo-light.svg" : "/images/logo/cakir-header-logo.svg"}
              alt="Cakir Facades"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-[52px]' : 'h-[64px]'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        isScrolled
                          ? isActive(item.href)
                            ? 'text-cakir-gold'
                            : 'text-cakir-black hover:text-cakir-gold hover:bg-cakir-gold/5'
                          : isActive(item.href)
                            ? 'text-cakir-gold'
                            : 'text-white hover:text-cakir-gold hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Mega Menu - CSS transitions */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mt-2 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {/* Menu Header */}
                      <div className="bg-gradient-to-r from-cakir-black to-cakir-black/90 px-6 py-4">
                        <h3 className="text-white font-semibold">Nos Services</h3>
                        <p className="text-white/60 text-sm">Expertise en façade depuis plus de 15 ans</p>
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {services.slice(0, 4).map((service) => (
                          <Link
                            key={service.slug}
                            to={`/nos-services/${service.slug}`}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-cakir-gold/5 transition-colors duration-200"
                          >
                            <div className="w-14 h-14 rounded-xl bg-cakir-light overflow-hidden flex-shrink-0">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-cakir-black group-hover:text-cakir-gold transition-colors text-sm">
                                {service.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {service.shortDescription}
                              </p>
                              <span className="inline-flex items-center gap-1 text-xs text-cakir-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                En savoir plus <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Menu Footer */}
                      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
                        <div className="flex items-center justify-between">
                          <Link
                            to="/nos-services"
                            className="text-sm font-medium text-cakir-gold hover:text-cakir-gold/80 transition-colors flex items-center gap-2"
                          >
                            Voir tous nos services <ArrowRight className="w-4 h-4" />
                          </Link>
                          <a
                            href={companyInfo.phoneLink}
                            className="text-sm text-gray-600 hover:text-cakir-gold transition-colors flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Besoin d'un conseil? {companyInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg inline-block ${
                      isScrolled
                        ? isActive(item.href)
                          ? 'text-cakir-gold'
                          : 'text-cakir-black hover:text-cakir-gold hover:bg-cakir-gold/5'
                        : isActive(item.href)
                          ? 'text-cakir-gold'
                          : 'text-white hover:text-cakir-gold hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={companyInfo.phoneLink}
              className={`flex items-center gap-2 text-sm font-medium transition-colors group ${
                isScrolled ? 'text-cakir-black' : 'text-white'
              }`}
            >
              <span className="w-9 h-9 rounded-full bg-cakir-gold/10 flex items-center justify-center group-hover:bg-cakir-gold/20 transition-colors">
                <Phone className="w-4 h-4 text-cakir-gold" />
              </span>
              <span className="hidden xl:block">{companyInfo.phone}</span>
            </a>
            <Link
              to="/devis-gratuit"
              className="btn-primary text-sm py-3 px-6 shadow-lg shadow-cakir-gold/20 hover:shadow-cakir-gold/30 transition-shadow"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button - 48px touch target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 -mr-2 rounded-xl transition-colors active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center ${
              isScrolled
                ? 'text-cakir-black active:bg-gray-100'
                : 'text-white active:bg-white/10'
            }`}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - CSS transitions */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-100">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/logo/cakir-header-logo-light.svg"
              alt="Cakir Facades"
              className="h-12 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-cakir-black hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="overflow-y-auto h-[calc(100vh-80px)] pb-44 overscroll-contain">
          <div className="container-custom py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className={`flex items-center justify-between w-full px-4 py-4 text-lg font-medium rounded-xl transition-colors active:bg-gray-100 min-h-[56px] ${
                        isActive(item.href)
                          ? 'text-cakir-gold bg-cakir-gold/5'
                          : 'text-cakir-black'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        activeDropdown === item.name ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-2 py-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3.5 text-base rounded-xl transition-colors active:bg-gray-100 min-h-[52px] ${
                              isActive(child.href)
                                ? 'text-cakir-gold bg-cakir-gold/5'
                                : 'text-cakir-black/70'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-cakir-gold/40 flex-shrink-0" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-4 text-lg font-medium rounded-xl transition-colors active:bg-gray-100 min-h-[56px] ${
                      isActive(item.href)
                        ? 'text-cakir-gold bg-cakir-gold/5'
                        : 'text-cakir-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA - Fixed at bottom with safe area */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 space-y-3" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
            <a
              href={companyInfo.phoneLink}
              className="flex items-center justify-center gap-3 w-full py-4 text-cakir-black font-semibold border-2 border-gray-200 rounded-xl active:scale-[0.98] active:border-cakir-gold transition-all min-h-[52px]"
            >
              <Phone className="w-5 h-5 text-cakir-gold" />
              Appeler: {companyInfo.phone}
            </a>
            <Link
              to="/devis-gratuit"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-cakir-gold to-cakir-gold-dark text-white font-semibold rounded-xl shadow-lg shadow-cakir-gold/20 active:scale-[0.98] transition-all min-h-[52px]"
            >
              Demander un Devis Gratuit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

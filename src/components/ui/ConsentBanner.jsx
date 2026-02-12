import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
          {/* Icon */}
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-cakir-gold/10">
            <Cookie className="w-6 h-6 text-cakir-gold" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">Nous utilisons des cookies</h3>
            <p className="text-cakir-black/60 text-sm">
              Ce site utilise des cookies pour améliorer votre expérience de navigation.
              En continuant, vous acceptez notre{' '}
              <a href="/mentions-legales" className="text-cakir-gold hover:underline">
                politique de confidentialité
              </a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-cakir-black/60 hover:text-cakir-black border border-cakir-gray rounded-lg transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2 text-sm font-medium text-white bg-cakir-gold hover:bg-cakir-gold-dark rounded-lg transition-colors"
            >
              Accepter
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:static p-1 text-cakir-black/40 hover:text-cakir-black transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

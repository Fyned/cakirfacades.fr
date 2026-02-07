import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const tickingRef = useRef(false)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Show/hide button based on scroll position - throttled
  useEffect(() => {
    const toggleVisibility = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 400)
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`fixed bottom-24 md:bottom-8 right-4 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-cakir-gold text-white shadow-lg hover:bg-cakir-gold-dark hover:scale-110 active:scale-95 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Remonter en haut de page"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

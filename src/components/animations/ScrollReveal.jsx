import { useRef, useEffect, useState } from 'react'

/**
 * ScrollReveal component - Lightweight CSS-based scroll animation
 * Uses Intersection Observer instead of Framer Motion for better performance
 */
export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  once = true,
  threshold = 0.15,
  ...props
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, threshold])

  // Animation classes mapping
  const animationClasses = {
    fadeUp: 'scroll-fade-up',
    fadeDown: 'scroll-fade-down',
    fadeLeft: 'scroll-fade-left',
    fadeRight: 'scroll-fade-right',
    scale: 'scroll-scale',
  }

  const animClass = animationClasses[animation] || animationClasses.fadeUp

  return (
    <div
      ref={ref}
      className={`${animClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...props}
    >
      {children}
    </div>
  )
}

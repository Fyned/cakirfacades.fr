import { useRef, useEffect, useState } from 'react'

/**
 * StaggerContainer - Container for staggered child animations using CSS
 * Performance optimized - uses native Intersection Observer
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = '',
  once = true,
  threshold = 0.2,
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
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, threshold])

  return (
    <div
      ref={ref}
      className={`stagger-container ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--stagger-delay': `${staggerDelay}s` }}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * StaggerItem - Child element for StaggerContainer
 * Uses CSS for animation instead of framer-motion
 */
export function StaggerItem({
  children,
  className = '',
  index = 0,
  ...props
}) {
  return (
    <div
      className={`stagger-item ${className}`}
      style={{ '--stagger-index': index }}
      {...props}
    >
      {children}
    </div>
  )
}

export default StaggerContainer

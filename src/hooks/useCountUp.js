import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for animated number counting
 * Uses native Intersection Observer for better performance
 */
export function useCountUp(end, options = {}) {
  const {
    duration = 2000,
    start = 0,
    suffix = '',
    prefix = '',
    decimals = 0,
    once = true
  } = options

  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const hasAnimated = useRef(false)

  // Intersection Observer for visibility detection
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once])

  // Animation effect
  useEffect(() => {
    if (!isInView) return
    if (once && hasAnimated.current) return

    hasAnimated.current = true

    const startTime = performance.now()
    const startValue = start

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      const currentValue = startValue + (end - startValue) * easeOutCubic
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, start, duration, once])

  const formattedCount = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toString()

  const displayValue = `${prefix}${formattedCount}${suffix}`

  return { count, displayValue, ref, isInView }
}

export default useCountUp

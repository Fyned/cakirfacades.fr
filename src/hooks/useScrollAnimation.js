import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - InView options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {boolean} options.once - Only trigger once
 * @param {string} options.margin - Root margin
 * @returns {Object} - { ref, isInView }
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.threshold ?? 0.2,
    margin: options.margin ?? '0px 0px -100px 0px'
  })

  return { ref, isInView }
}

/**
 * Animation variants for common scroll reveal patterns
 */
export const scrollVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },

  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },

  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },

  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },

  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },

  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
}

/**
 * Stagger container variant for child animations
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

/**
 * Create custom stagger container with options
 */
export const createStaggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
})

/**
 * Stagger item variant
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default useScrollAnimation

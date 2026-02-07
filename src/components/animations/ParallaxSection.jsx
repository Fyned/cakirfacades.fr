import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * ParallaxSection - Creates parallax scrolling effect
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content
 * @param {string} props.backgroundImage - Background image URL
 * @param {number} props.speed - Parallax speed (0-1, default: 0.5)
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.overlayColor - Overlay color (e.g., 'rgba(0,0,0,0.5)')
 * @param {number} props.minHeight - Minimum height in vh (default: 50)
 */
export default function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  className = '',
  overlayColor = 'rgba(26, 28, 26, 0.7)',
  minHeight = 50,
  ...props
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Transform scroll progress to Y position
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: `${minHeight}vh` }}
      {...props}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

/**
 * ParallaxImage - Individual parallax image element
 */
export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} {...props}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

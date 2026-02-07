import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * TextReveal - Animated text reveal with various effects
 *
 * @param {Object} props
 * @param {string} props.text - Text to animate
 * @param {string} props.as - HTML element type (default: 'span')
 * @param {string} props.animation - Animation type: 'words', 'characters', 'lines'
 * @param {number} props.staggerDelay - Delay between items (default: 0.05)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.once - Only animate once (default: true)
 */
export default function TextReveal({
  text,
  as = 'span',
  animation = 'words',
  staggerDelay = 0.05,
  className = '',
  once = true,
  ...props
}) {
  const { ref, isInView } = useScrollAnimation({ once })

  const Container = motion[as] || motion.span

  // Split text based on animation type
  const getItems = () => {
    switch (animation) {
      case 'characters':
        return text.split('')
      case 'lines':
        return text.split('\n')
      case 'words':
      default:
        return text.split(' ')
    }
  }

  const items = getItems()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <Container
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`inline-block ${className}`}
      style={{ perspective: 1000 }}
      {...props}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {item}
          {animation === 'words' && index < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </Container>
  )
}

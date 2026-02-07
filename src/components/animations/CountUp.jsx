import { useCountUp } from '../../hooks/useCountUp'

/**
 * CountUp component - Animated number counter
 *
 * @param {Object} props
 * @param {number} props.end - Target number
 * @param {number} props.start - Starting number (default: 0)
 * @param {number} props.duration - Animation duration in ms (default: 2000)
 * @param {string} props.suffix - Suffix to display (e.g., '+', '%', '€')
 * @param {string} props.prefix - Prefix to display (e.g., '$', '€')
 * @param {number} props.decimals - Decimal places (default: 0)
 * @param {string} props.className - Additional CSS classes
 */
export default function CountUp({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  ...props
}) {
  const { displayValue, ref } = useCountUp(end, {
    start,
    duration,
    suffix,
    prefix,
    decimals
  })

  return (
    <span ref={ref} className={className} {...props}>
      {displayValue}
    </span>
  )
}

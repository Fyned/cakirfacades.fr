import { Link } from 'react-router-dom'

export default function Card({
  children,
  to,
  href,
  className = '',
  hover = true,
  accent = false,
  ...props
}) {
  const baseStyles = `bg-white rounded-xl p-8 shadow-sm ${
    hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : ''
  } ${accent ? 'border-t-4 border-cakir-gold' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={`block ${baseStyles}`} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`block ${baseStyles}`} {...props}>
        {children}
      </a>
    )
  }

  return (
    <div className={baseStyles} {...props}>
      {children}
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'px-8 py-3.5 bg-gradient-to-r from-cakir-gold via-cakir-gold-light to-cakir-gold-dark text-white hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cakir-gold/25 focus:ring-cakir-gold',
    secondary: 'px-8 py-3.5 border-2 border-cakir-gold text-cakir-gold bg-transparent hover:bg-cakir-gold hover:text-white focus:ring-cakir-gold',
    dark: 'px-8 py-3.5 bg-cakir-black text-white hover:bg-cakir-dark focus:ring-cakir-black',
    ghost: 'px-4 py-2 text-cakir-gold hover:bg-cakir-gold/10 focus:ring-cakir-gold',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  // External link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  // Button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

import { Phone, Mail, Clock, Award } from 'lucide-react'
import { companyInfo } from '../../data/navigation'

export default function TopBar({ isVisible = true }) {
  return (
    <div
      className={`hidden lg:block bg-cakir-black relative z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left Side - Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href={companyInfo.phoneLink}
              className="flex items-center gap-2 text-white/80 hover:text-cakir-gold transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-cakir-gold group-hover:scale-110 transition-transform" />
              <span>{companyInfo.phone}</span>
            </a>

            <span className="text-white/20">|</span>

            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 text-white/80 hover:text-cakir-gold transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-cakir-gold group-hover:scale-110 transition-transform" />
              <span>{companyInfo.email}</span>
            </a>

            <span className="text-white/20">|</span>

            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-3.5 h-3.5 text-cakir-gold" />
              <span>{companyInfo.hours.weekdays}</span>
            </div>
          </div>

          {/* Right Side - Trust Badges */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-4 h-4 text-cakir-gold" />
              <span className="font-medium">Garantie Décennale</span>
            </div>

            <span className="text-white/20">|</span>

            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-4 h-4 text-cakir-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
              </svg>
              <span className="font-medium">Artisan Qualifié</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

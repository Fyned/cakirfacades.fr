import { Link } from 'react-router-dom'
import { Phone, FileText } from 'lucide-react'
import { companyInfo } from '../../data/navigation'

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar">
      {/* Phone Button */}
      <a
        href={companyInfo.phoneLink}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white text-cakir-black font-semibold rounded-xl active:scale-[0.98] transition-transform min-h-[48px]"
        aria-label="Appeler Cakir Facades"
      >
        <Phone className="w-5 h-5 text-cakir-gold" />
        <span>Appeler</span>
      </a>

      {/* Quote Button */}
      <Link
        to="/devis-gratuit"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cakir-gold to-cakir-gold-dark text-white font-semibold rounded-xl shadow-lg shadow-cakir-gold/20 active:scale-[0.98] transition-transform min-h-[48px]"
        aria-label="Demander un devis gratuit"
      >
        <FileText className="w-5 h-5" />
        <span>Devis Gratuit</span>
      </Link>
    </div>
  )
}

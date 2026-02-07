import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Award, MapPinned } from 'lucide-react'
import { companyInfo, legalInfo } from '../../data/navigation'

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Nos Services', href: '/nos-services' },
  { name: 'Nos Réalisations', href: '/nos-realisations' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'Devis Gratuit', href: '/devis-gratuit' },
]

const services = [
  { name: 'Enduit de Façade', href: '/nos-services/enduit-de-facade' },
  { name: 'Ravalement de Façades', href: '/nos-services/ravalement-de-facades' },
  { name: 'Isolation Extérieure', href: '/nos-services/isolation-exterieure' },
  { name: 'Neuf & Rénovation', href: '/nos-services/neuf-et-renovation' },
]

const zoneIntervention = [
  'Châteaubriant',
  'Nantes',
  'Rennes',
  'Angers',
  'Laval',
  'Saint-Nazaire',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cakir-black text-white">
      {/* Trust Badges Bar */}
      <div className="border-b border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cakir-gold/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-cakir-gold" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Garantie Décennale</p>
                <p className="text-white/50 text-xs">Assurance tous risques</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cakir-gold/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-cakir-gold" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Artisan Qualifié</p>
                <p className="text-white/50 text-xs">15+ ans d'expérience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cakir-gold/10 flex items-center justify-center">
                <MapPinned className="w-6 h-6 text-cakir-gold" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Zone Grand Ouest</p>
                <p className="text-white/50 text-xs">Intervention 250km</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/logo/cakir-logo.svg"
                alt="Cakir Facades"
                className="w-full max-w-[250px] h-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Artisan façadier spécialisé en ravalement de façades, enduit décoratif et isolation thermique par l'extérieur à Châteaubriant et dans tout le Grand Ouest. Devis gratuit et intervention rapide.
            </p>

            {/* Zone d'intervention */}
            <div className="mb-6">
              <h5 className="text-white/90 font-medium text-sm mb-3">Zone d'intervention :</h5>
              <div className="flex flex-wrap gap-2">
                {zoneIntervention.map((ville) => (
                  <span
                    key={ville}
                    className="text-xs px-3 py-1 bg-white/5 rounded-full text-white/60"
                  >
                    {ville}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-cakir-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-cakir-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                to="/devis-gratuit"
                className="inline-flex items-center gap-2 bg-cakir-gold hover:bg-cakir-gold-dark text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Devis Gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={companyInfo.phoneLink}
                  className="flex items-start gap-3 text-white/70 hover:text-cakir-gold transition-colors group"
                >
                  <Phone className="w-5 h-5 text-cakir-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm block">{companyInfo.phone}</span>
                    <span className="text-xs text-white/40">Appel gratuit</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-cakir-gold transition-colors group"
                >
                  <Mail className="w-5 h-5 text-cakir-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm block">{companyInfo.email}</span>
                    <span className="text-xs text-white/40">Réponse sous 24h</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-cakir-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm block">
                    {companyInfo.addressDetails.street}
                  </span>
                  <span className="text-sm block">
                    {companyInfo.addressDetails.postalCode} {companyInfo.addressDetails.city}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 text-cakir-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>{companyInfo.hours.weekdays}</p>
                  <p>{companyInfo.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p className="text-white/50 text-sm">
                © {currentYear} {companyInfo.name}. Tous droits réservés.
              </p>
              <span className="hidden sm:inline text-white/20">|</span>
              <p className="text-white/40 text-xs">
                SIRET: {legalInfo.siret}
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/mentions-legales"
                className="text-white/50 hover:text-cakir-gold text-sm transition-colors"
              >
                Mentions Légales
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/faq"
                className="text-white/50 hover:text-cakir-gold text-sm transition-colors"
              >
                FAQ
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/contact"
                className="text-white/50 hover:text-cakir-gold text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

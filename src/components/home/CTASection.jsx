import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Clock } from 'lucide-react'
import { companyInfo } from '../../data/navigation'
import ScrollReveal from '../animations/ScrollReveal'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/projects/projet-08-isolation-ite/cover.jpg)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cakir-black/95 via-cakir-black/90 to-cakir-black/80" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <ScrollReveal animation="fadeLeft">
            <span className="inline-block text-cakir-gold text-sm font-semibold tracking-wider uppercase mb-4">
              Votre Projet Nous Intéresse
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à Transformer
              <br />
              <span className="text-cakir-gold">Votre Façade?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Contactez-nous pour un devis gratuit et sans engagement. Notre équipe d'experts est à votre disposition pour tous vos projets de façade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/devis-gratuit"
                className="group btn-primary text-base py-4 px-8"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={companyInfo.phoneLink}
                className="flex items-center justify-center gap-3 py-4 px-8 border-2 border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </div>
          </ScrollReveal>

          {/* Right - Info Cards */}
          <ScrollReveal animation="fadeRight" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Zone Card */}
              <div className="bg-white/10 border border-white/10 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-cakir-gold/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-cakir-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">Zone d'Intervention</h3>
                <p className="text-white/60 text-sm">
                  Châteaubriant et 250km autour : Nantes, Rennes, Angers, Le Mans
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-white/10 border border-white/10 rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-cakir-gold/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-cakir-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">Horaires</h3>
                <p className="text-white/60 text-sm">
                  {companyInfo.hours.weekdays}
                  <br />
                  {companyInfo.hours.saturday}
                </p>
              </div>

              {/* Quote Card - Full Width */}
              <div className="sm:col-span-2 bg-cakir-gold/20 border border-cakir-gold/30 rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cakir-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">€</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Devis Gratuit & Sans Engagement</h3>
                    <p className="text-white/70 text-sm">
                      Recevez une estimation détaillée sous 48h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

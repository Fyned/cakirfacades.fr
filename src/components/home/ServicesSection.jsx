import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import ScrollReveal from '../animations/ScrollReveal'
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer'

export default function ServicesSection() {
  return (
    <section id="services-section" className="section-padding bg-cakir-light">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <span className="inline-block text-cakir-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Nos Expertises
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cakir-black mb-4">
            Services de Façade Professionnels
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Du ravalement à l'isolation thermique, nous proposons une gamme complète de services pour valoriser et protéger votre patrimoine.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <StaggerItem key={service.id} index={index}>
              <Link to={`/nos-services/${service.slug}`}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover-lift">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cakir-black/90 via-cakir-black/40 to-transparent" />

                    {/* Content on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cakir-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="p-4 flex items-center justify-between border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {service.features?.length || 4} prestations disponibles
                    </span>
                    <span className="text-cakir-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" delay={0.4} className="text-center mt-12">
          <Link
            to="/nos-services"
            className="inline-flex items-center gap-2 text-cakir-gold font-semibold hover:gap-3 transition-all"
          >
            Découvrir tous nos services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

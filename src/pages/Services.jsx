import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/animations/ScrollReveal'
import { seoMeta } from '../data/seo-meta'
import { services, getServiceIcon } from '../data/services'

export default function Services() {
  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/nos-services' },
  ]

  return (
    <>
      <SEOHead {...seoMeta.services} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero with Background Image */}
      <PageHero
        title="Nos Services de Façade Professionnels"
        subtitle="Découvrez notre gamme complète de prestations pour sublimer et protéger vos façades. De l'enduit décoratif à l'isolation thermique, nous avons la solution pour votre projet."
        image="/images/projects/projet-03-enduit-beige-maison/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Nos Expertises"
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon)
              const isEven = index % 2 === 0

              return (
                <ScrollReveal
                  key={service.id}
                  animation="fadeUp"
                  delay={index * 0.1}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-cakir-gold/10">
                        <Icon className="w-7 h-7 text-cakir-gold" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-cakir-black/70 mb-6 text-lg leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <Button to={`/nos-services/${service.slug}`} variant="primary">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Un projet de façade ?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe se déplace
            gratuitement pour évaluer vos besoins.
          </p>
          <Button to="/devis-gratuit" variant="primary">
            Demander un Devis Gratuit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

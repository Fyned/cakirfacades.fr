import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from '../components/seo/StructuredData'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/animations/ScrollReveal'
import PageHero from '../components/ui/PageHero'
import { services, getServiceIcon } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return <Navigate to="/nos-services" replace />
  }

  const Icon = getServiceIcon(service.icon)
  const otherServices = services.filter(s => s.id !== service.id)

  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/nos-services' },
    { name: service.title, href: `/nos-services/${service.slug}` },
  ]

  return (
    <>
      <SEOHead
        title={`${service.title} à Châteaubriant | Cakir Facades`}
        description={service.shortDescription}
        canonical={`/nos-services/${service.slug}`}
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema service={service} />

      {/* Hero with Background Image */}
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        image={service.image}
        breadcrumbs={breadcrumbs}
        badge="Nos Services"
      />

      {/* Main Image */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="fadeUp">
                <h2 className="text-3xl font-bold mb-6">Description du Service</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-cakir-black/70 leading-relaxed whitespace-pre-line">
                    {service.fullDescription}
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefits */}
              <div className="mt-12">
                <ScrollReveal animation="fadeUp">
                  <h3 className="text-2xl font-bold mb-6">Les Avantages</h3>
                </ScrollReveal>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <ScrollReveal
                      key={index}
                      animation="fadeLeft"
                      delay={index * 0.1}
                    >
                      <div className="flex items-start gap-3 p-4 bg-cakir-cream rounded-xl">
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-cakir-gold">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-cakir-black/80">{benefit}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mt-12">
                <ScrollReveal animation="fadeUp">
                  <h3 className="text-2xl font-bold mb-6">Notre Processus</h3>
                </ScrollReveal>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <ScrollReveal
                      key={index}
                      animation="fadeUp"
                      delay={index * 0.1}
                    >
                      <div className="flex items-start gap-4 p-5 bg-cakir-gray rounded-xl">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-cakir-gold text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                          <p className="text-cakir-black/70">{step.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal animation="fadeRight">
                {/* CTA Card */}
                <div className="bg-cakir-black rounded-2xl p-8 text-white mb-8 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">
                    Besoin d'un devis pour votre projet ?
                  </h3>
                  <p className="text-white/70 mb-6">
                    Notre équipe se déplace gratuitement pour évaluer vos besoins et vous proposer un devis personnalisé.
                  </p>
                  <Button to="/devis-gratuit" variant="primary" className="w-full justify-center">
                    Demander un Devis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-white/60 mb-2">Ou appelez-nous directement :</p>
                    <a
                      href="tel:+33628821908"
                      className="text-xl font-bold text-cakir-gold hover:text-cakir-gold-light transition-colors"
                    >
                      06 28 82 19 08
                    </a>
                  </div>
                </div>

                {/* Other Services */}
                <div className="bg-cakir-gray rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Nos Autres Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => {
                      const ServiceIcon = getServiceIcon(s.icon)
                      return (
                        <Link
                          key={s.id}
                          to={`/nos-services/${s.slug}`}
                          className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-shadow group"
                        >
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cakir-gold/10 group-hover:bg-cakir-gold/20 transition-colors">
                            <ServiceIcon className="w-5 h-5 text-cakir-gold" />
                          </div>
                          <span className="font-medium text-cakir-black group-hover:text-cakir-gold transition-colors">
                            {s.title}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en {service.title.toLowerCase()}.
            Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/devis-gratuit" variant="primary">
              Demander un Devis Gratuit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button to="/nos-realisations" variant="outline">
              Voir Nos Réalisations
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

import ScrollReveal from '../components/animations/ScrollReveal'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import SectionTitle from '../components/ui/SectionTitle'
import ContactForm from '../components/ui/ContactForm'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { seoMeta } from '../data/seo-meta'
import { companyInfo } from '../data/navigation'

const contactMethods = [
  {
    icon: Phone,
    title: 'Téléphone',
    content: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
    action: 'Appeler maintenant',
  },
  {
    icon: Mail,
    title: 'Email',
    content: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    action: 'Envoyer un email',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: companyInfo.address,
    href: 'https://maps.google.com/?q=4+rue+de+Metz+44110+Châteaubriant',
    action: 'Voir sur la carte',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: `${companyInfo.hours.weekdays}\n${companyInfo.hours.saturday}`,
    href: null,
    action: null,
  },
]

export default function Contact() {
  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <SEOHead {...seoMeta.contact} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero with Background Image */}
      <PageHero
        title="Contactez-Nous"
        subtitle="Une question sur nos services ? Un projet de façade à nous soumettre ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais."
        image="/images/projects/projet-05-cloture-beige-jardin/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Contact"
      />

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  
                  
                  
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-cakir-gold/10">
                    <Icon className="w-6 h-6 text-cakir-gold" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-cakir-black/60 text-sm whitespace-pre-line mb-3">
                    {method.content}
                  </p>
                  {method.href && (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-cakir-gold font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      {method.action}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-cakir-gray">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div
              
              
              
              
            >
              <SectionTitle
                subtitle="Formulaire de Contact"
                title="Envoyez-Nous un Message"
                align="left"
              />
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div
              
              
              
              
            >
              <SectionTitle
                subtitle="Notre Localisation"
                title="Où Nous Trouver"
                align="left"
              />
              <div className="bg-white rounded-2xl overflow-hidden h-[400px] lg:h-[calc(100%-80px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.8!2d-1.3764!3d47.7181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4807f1c3f96f3d27%3A0x8c4f3c5c8f4c3c5c!2s4%20Rue%20de%20Metz%2C%2044110%20Ch%C3%A2teaubriant!5e0!3m2!1sfr!2sfr!4v1703000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Cakir Facades"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Zone d'Intervention"
            title="Nous Intervenons dans Toute la Loire-Atlantique"
            description="Basés à Châteaubriant, nous nous déplaçons dans un rayon de 50 km pour vos projets de façade."
          />

          <div
            className="grid md:grid-cols-3 gap-8 text-center"
            
            
            
            
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Châteaubriant et environs</h3>
              <p className="text-cakir-black/60">
                Derval, Soudan, Erbray, Saint-Julien-de-Vouvantes, Rougé, Moisdon-la-Rivière
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Vers Nantes</h3>
              <p className="text-cakir-black/60">
                Nort-sur-Erdre, Ancenis, Le Cellier, Ligné, Nozay, Blain
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Vers Rennes</h3>
              <p className="text-cakir-black/60">
                Vitré, Retiers, Janzé, La Guerche-de-Bretagne, Martigny-Ferchaud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'un Devis Détaillé ?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Pour un devis précis et personnalisé, remplissez notre formulaire de demande de devis.
            Nous vous recontacterons sous 24h.
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

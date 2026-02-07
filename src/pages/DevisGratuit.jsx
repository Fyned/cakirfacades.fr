import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ScrollReveal from '../components/animations/ScrollReveal'
import { Send, Check, Phone, Clock, Shield, ArrowRight } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { seoMeta } from '../data/seo-meta'
import { services } from '../data/services'
import { companyInfo } from '../data/navigation'

const projectTypes = [
  { value: 'maison', label: 'Maison individuelle' },
  { value: 'immeuble', label: 'Immeuble collectif' },
  { value: 'commercial', label: 'Local commercial' },
  { value: 'cloture', label: 'Clôture / Muret' },
  { value: 'autre', label: 'Autre' },
]

const timelines = [
  { value: 'urgent', label: 'Urgent (< 1 mois)' },
  { value: 'court', label: 'Court terme (1-3 mois)' },
  { value: 'moyen', label: 'Moyen terme (3-6 mois)' },
  { value: 'long', label: 'Long terme (> 6 mois)' },
]

const advantages = [
  { icon: Clock, title: 'Réponse rapide', text: 'Sous 24h ouvrées' },
  { icon: Shield, title: 'Sans engagement', text: 'Devis 100% gratuit' },
  { icon: Phone, title: 'Visite gratuite', text: 'Sur site si nécessaire' },
]

export default function DevisGratuit() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Devis Gratuit', href: '/devis-gratuit' },
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In production, use EmailJS or similar service
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <SEOHead {...seoMeta.devis} />
        <LocalBusinessSchema />
        <BreadcrumbSchema items={breadcrumbs} />

        <section className="min-h-screen pt-32 lg:pt-40 flex items-center justify-center bg-cakir-gray">
          <div
            className="text-center px-4"
            
            
            
          >
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Demande Envoyée !</h1>
            <p className="text-cakir-black/70 max-w-md mx-auto mb-8">
              Merci pour votre demande de devis. Nous vous recontacterons dans les
              plus brefs délais pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/" variant="primary">
                Retour à l'accueil
              </Button>
              <Button to="/nos-realisations" variant="outline-dark">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEOHead {...seoMeta.devis} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero with Background Image */}
      <PageHero
        title="Demandez Votre Devis Gratuit"
        subtitle="Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre projet de façade. Réponse garantie sous 24h."
        image="/images/projects/projet-15-maison-pierre-fenetre/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Devis Gratuit"
      />

      {/* Advantages */}
      <section className="py-8 bg-white border-b border-cakir-gray">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-6">
            {advantages.map((adv, index) => {
              const Icon = adv.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-4"
                  
                  
                  
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-cakir-gold/10">
                    <Icon className="w-6 h-6 text-cakir-gold" />
                  </div>
                  <div>
                    <div className="font-bold">{adv.title}</div>
                    <div className="text-sm text-cakir-black/60">{adv.text}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-cakir-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-6 md:p-10 shadow-sm"
            >
              {/* Personal Info */}
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-cakir-gray">
                  Vos Coordonnées
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Ce champ est requis' })}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cakir-gray focus:border-cakir-gold'
                      } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                      placeholder="Jean Dupont"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Ce champ est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cakir-gray focus:border-cakir-gold'
                      } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                      placeholder="jean@exemple.fr"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Ce champ est requis' })}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cakir-gray focus:border-cakir-gold'
                      } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                      placeholder="06 XX XX XX XX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Ville / Code postal *
                    </label>
                    <input
                      type="text"
                      {...register('city', { required: 'Ce champ est requis' })}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                        errors.city
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cakir-gray focus:border-cakir-gold'
                      } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                      placeholder="44110 Châteaubriant"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-cakir-gray">
                  Votre Projet
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Type de prestation *
                    </label>
                    <select
                      {...register('service', { required: 'Ce champ est requis' })}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                        errors.service
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cakir-gray focus:border-cakir-gold'
                      } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Type de bâtiment *
                    </label>
                    <select
                      {...register('projectType', { required: 'Ce champ est requis' })}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                        errors.projectType
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cakir-gray focus:border-cakir-gold'
                      } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                    >
                      <option value="">Sélectionnez un type</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Surface estimée (m²)
                    </label>
                    <input
                      type="text"
                      {...register('surface')}
                      className="w-full px-4 py-3 rounded-xl border border-cakir-gray focus:border-cakir-gold focus:outline-none focus:ring-2 focus:ring-cakir-gold/20 transition-colors"
                      placeholder="Ex: 100 m²"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                      Délai souhaité
                    </label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-3 rounded-xl border border-cakir-gray focus:border-cakir-gold focus:outline-none focus:ring-2 focus:ring-cakir-gold/20 transition-colors"
                    >
                      <option value="">Sélectionnez un délai</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-cakir-black/80 mb-2">
                    Description du projet *
                  </label>
                  <textarea
                    {...register('description', { required: 'Ce champ est requis' })}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                      errors.description
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-cakir-gray focus:border-cakir-gold'
                    } focus:outline-none focus:ring-2 focus:ring-cakir-gold/20`}
                    placeholder="Décrivez votre projet : état actuel de la façade, vos attentes, contraintes particulières..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Preference */}
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-cakir-gray">
                  Préférence de Contact
                </h2>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register('contactPreference')}
                      value="phone"
                      className="w-4 h-4 text-cakir-gold focus:ring-cakir-gold"
                    />
                    <span>Par téléphone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register('contactPreference')}
                      value="email"
                      className="w-4 h-4 text-cakir-gold focus:ring-cakir-gold"
                    />
                    <span>Par email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register('contactPreference')}
                      value="both"
                      defaultChecked
                      className="w-4 h-4 text-cakir-gold focus:ring-cakir-gold"
                    />
                    <span>Sans préférence</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
                <p className="text-sm text-cakir-black/50">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                </p>
              </div>
            </form>

            {/* Phone Alternative */}
            <div
              className="mt-8 text-center"
              
              
              
            >
              <p className="text-cakir-black/60 mb-2">
                Vous préférez nous appeler directement ?
              </p>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-xl font-bold text-cakir-gold hover:text-cakir-gold-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

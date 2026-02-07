import ScrollReveal from '../components/animations/ScrollReveal'
import { Award, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import SectionTitle from '../components/ui/SectionTitle'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import { seoMeta } from '../data/seo-meta'

const values = [
  {
    icon: Award,
    title: 'Savoir-faire Artisanal',
    description: 'Notre expertise en enduits décoratifs et techniques traditionnelles garantit des finitions exceptionnelles sur chaque chantier.',
  },
  {
    icon: Users,
    title: 'Proximité Client',
    description: 'Un interlocuteur unique du devis à la réception des travaux. Nous privilégions l\'écoute et la transparence.',
  },
  {
    icon: Clock,
    title: 'Respect des Délais',
    description: 'Chaque projet est planifié avec rigueur. Nous nous engageons à respecter les délais convenus.',
  },
  {
    icon: Shield,
    title: 'Garantie Décennale',
    description: 'Tous nos travaux sont couverts par une garantie décennale. Votre investissement est protégé.',
  },
]

const milestones = [
  { year: '2022', title: 'Création', description: 'Fondation de Cakir Facades à Châteaubriant' },
  { year: '2023', title: 'Développement', description: 'Extension de notre activité en Loire-Atlantique' },
  { year: '2024', title: 'Croissance', description: 'Plus de 50 projets réalisés avec succès' },
]

const certifications = [
  'Assurance décennale',
  'Artisan qualifié',
  'Respect des normes DTU',
  'Formation continue',
]

export default function About() {
  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/a-propos' },
  ]

  return (
    <>
      <SEOHead {...seoMeta.about} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero with Background Image */}
      <PageHero
        title="À Propos de Cakir Facades"
        subtitle="Artisan façadier basé à Châteaubriant, nous mettons notre savoir-faire au service de vos projets de rénovation et d'embellissement de façades."
        image="/images/projects/projet-17-neuf-moderne-blanc-gris/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Notre Entreprise"
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              
              
              
              
            >
              <SectionTitle
                subtitle="Notre Histoire"
                title="Une Passion pour les Façades"
                align="left"
              />
              <div className="space-y-4 text-cakir-black/70 text-lg leading-relaxed">
                <p>
                  Cakir Facades est née de la passion pour les métiers du bâtiment et
                  de l'envie de proposer des prestations de qualité en Loire-Atlantique.
                </p>
                <p>
                  Spécialisés dans l'enduit décoratif imitation pierre, le ravalement
                  de façades et l'isolation thermique par l'extérieur, nous accompagnons
                  particuliers et professionnels dans tous leurs projets.
                </p>
                <p>
                  Notre équipe met un point d'honneur à allier techniques traditionnelles
                  et innovations modernes pour offrir des résultats durables et esthétiques.
                </p>
              </div>
            </div>

            <div
              className="relative"
              
              
              
              
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/projects/projet-17-neuf-moderne-blanc-gris/cover.jpg"
                  alt="Réalisation Cakir Facades"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-cakir-gold text-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-white/80">Projets réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cakir-gray">
        <div className="container-custom">
          <SectionTitle
            subtitle="Nos Valeurs"
            title="Ce Qui Nous Distingue"
            description="Chaque projet est une occasion de démontrer notre engagement envers la qualité et la satisfaction client."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl"
                  
                  
                  
                  
                >
                  <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-cakir-gold/10">
                    <Icon className="w-7 h-7 text-cakir-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-cakir-black/60">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Notre Parcours"
            title="Les Étapes Clés"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cakir-gold/20" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 pb-12 last:pb-0"
                  
                  
                  
                  
                >
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-cakir-gold text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-cakir-black/60">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-cakir-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              
              
              
              
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Qualifications & Garanties
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Votre tranquillité est notre priorité. Nous sommes assurés et qualifiés
                pour intervenir sur tous types de façades.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    
                    
                    
                    
                  >
                    <CheckCircle className="w-6 h-6 text-cakir-gold flex-shrink-0" />
                    <span className="text-white text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
              
              
              
              
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-cakir-gold/20">
                  <Shield className="w-10 h-10 text-cakir-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Garantie Décennale
                </h3>
                <p className="text-white/70 mb-6">
                  Tous nos travaux sont couverts par une assurance responsabilité civile
                  décennale, garantissant la pérennité de vos investissements.
                </p>
                <Button to="/contact" variant="outline">
                  En Savoir Plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cakir-cream">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Travailler Avec Nous ?
          </h2>
          <p className="text-cakir-black/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet. Nous vous accompagnons
            de l'étude initiale jusqu'à la réception des travaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/devis-gratuit" variant="primary">
              Demander un Devis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button to="/contact" variant="outline-dark">
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

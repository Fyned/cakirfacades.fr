import { Shield, Award, BadgeCheck, Clock } from 'lucide-react'
import ScrollReveal from '../animations/ScrollReveal'

const badges = [
  {
    icon: Shield,
    title: 'Garantie Décennale',
    description: '10 ans de protection sur tous nos travaux'
  },
  {
    icon: Award,
    title: 'Artisan Qualifié',
    description: 'Plus de 15 ans d\'expérience'
  },
  {
    icon: BadgeCheck,
    title: 'Devis Gratuit',
    description: 'Estimation détaillée sans engagement'
  },
  {
    icon: Clock,
    title: 'Délais Respectés',
    description: 'Engagement sur les délais convenus'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <ScrollReveal
              key={index}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cakir-gold/10 to-cakir-gold/5 flex items-center justify-center flex-shrink-0 group-hover:from-cakir-gold/20 group-hover:to-cakir-gold/10 transition-colors">
                  <badge.icon className="w-7 h-7 text-cakir-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-cakir-black mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {badge.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

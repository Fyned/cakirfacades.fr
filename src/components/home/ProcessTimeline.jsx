import { Phone, ClipboardCheck, HardHat, ShieldCheck } from 'lucide-react'
import ScrollReveal from '../animations/ScrollReveal'
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Contact & Devis',
    description: 'Prenez contact avec nous pour discuter de votre projet. Nous vous proposons un devis gratuit et détaillé.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Diagnostic & Conseil',
    description: 'Notre expert se déplace pour analyser votre façade et vous conseiller sur les meilleures solutions.',
    color: 'from-cakir-gold to-cakir-gold-light'
  },
  {
    icon: HardHat,
    number: '03',
    title: 'Réalisation',
    description: 'Notre équipe qualifiée réalise les travaux dans le respect des délais et des normes en vigueur.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Garantie Décennale',
    description: 'Tous nos travaux sont couverts par une garantie décennale pour votre tranquillité d\'esprit.',
    color: 'from-purple-500 to-purple-600'
  }
]

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-cakir-black overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <span className="inline-block text-cakir-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Notre Processus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comment Nous Travaillons
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            De votre premier appel à la garantie finale, découvrez notre méthode de travail professionnelle et transparente.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cakir-gold/0 via-cakir-gold/50 to-cakir-gold/0" />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            staggerDelay={0.15}
          >
            {steps.map((step, index) => (
              <StaggerItem key={index} index={index}>
                <div className="relative group hover-lift">
                  {/* Card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-cakir-gold/30 transition-all duration-300">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-6">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cakir-gold/10 transition-colors">
                        <step.icon className="w-7 h-7 text-cakir-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 w-6 h-6 text-cakir-gold/50">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

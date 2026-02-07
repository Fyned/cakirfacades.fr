import { useState, useMemo } from 'react'
import { Search, ChevronDown, Clock, Euro, Wallet, Shield, Wrench, Sparkles, HelpCircle, Phone, ArrowRight } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import ScrollReveal from '../components/animations/ScrollReveal'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { faqCategories, faqQuestions, getFAQByCategory, searchFAQ } from '../data/faq'
import { companyInfo } from '../data/navigation'

// Icon mapping
const iconMap = {
  Clock,
  Euro,
  Wallet,
  Shield,
  Wrench,
  Sparkles,
}

// FAQ Schema for SEO
function FAQSchema({ questions }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map(q => ({
      '@type': 'Question',
      'name': q.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': q.answer.replace(/\*\*/g, '').replace(/\n/g, ' ')
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Single FAQ Item
function FAQItem({ question, isOpen, onToggle }) {
  return (
    <div className="border border-cakir-gray rounded-xl overflow-hidden bg-white hover:border-cakir-gold/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start justify-between text-left gap-4"
      >
        <span className="font-semibold text-cakir-black pr-4">
          {question.question}
        </span>
        <div
          className={`flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <ChevronDown className="w-5 h-5 text-cakir-gold" />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-cakir-gray">
            <div
              className="text-cakir-black/70 leading-relaxed prose prose-sm max-w-none
                prose-strong:text-cakir-black prose-strong:font-semibold
                prose-ul:my-2 prose-li:my-0.5
                prose-p:my-2"
              style={{ whiteSpace: 'pre-line' }}
            >
              {question.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState({})

  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'FAQ', href: '/faq' },
  ]

  // Filter questions based on category and search
  const filteredQuestions = useMemo(() => {
    let result = faqQuestions

    // Filter by category
    if (activeCategory !== 'tous') {
      result = getFAQByCategory(activeCategory)
    }

    // Filter by search
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase()
      result = result.filter(q =>
        q.question.toLowerCase().includes(lowerQuery) ||
        q.answer.toLowerCase().includes(lowerQuery)
      )
    }

    return result
  }, [activeCategory, searchQuery])

  // Group questions by category for display
  const groupedQuestions = useMemo(() => {
    if (activeCategory !== 'tous') {
      return [{ category: faqCategories.find(c => c.id === activeCategory), questions: filteredQuestions }]
    }

    return faqCategories.map(cat => ({
      category: cat,
      questions: filteredQuestions.filter(q => q.category === cat.id)
    })).filter(group => group.questions.length > 0)
  }, [filteredQuestions, activeCategory])

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const expandAll = () => {
    const newState = {}
    filteredQuestions.forEach(q => {
      newState[q.id] = true
    })
    setOpenItems(newState)
  }

  const collapseAll = () => {
    setOpenItems({})
  }

  return (
    <>
      <SEOHead
        title="FAQ - Questions Fréquentes sur le Ravalement de Façade | Cakir Facades"
        description="Trouvez les réponses à vos questions sur le ravalement de façade, l'isolation extérieure, les prix, les aides financières et les garanties. Plus de 40 questions/réponses détaillées."
        canonical="/faq"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema questions={filteredQuestions} />

      {/* Hero with Background Image */}
      <PageHero
        title="Questions Fréquentes"
        subtitle="Retrouvez les réponses à toutes vos questions sur le ravalement de façade, l'isolation extérieure, les prix, les aides et les garanties."
        image="/images/projects/projet-12-neuf-beige/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Centre d'aide"
      />

      {/* Search & Filters */}
      <section className="bg-white py-8 border-b border-cakir-gray sticky top-[70px] z-30">
        <div className="container-custom">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cakir-black/40" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-cakir-gray border-none rounded-xl focus:ring-2 focus:ring-cakir-gold/20 outline-none text-cakir-black placeholder:text-cakir-black/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cakir-black/40 hover:text-cakir-black"
                >
                  Effacer
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('tous')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'tous'
                  ? 'bg-cakir-gold text-white'
                  : 'bg-cakir-gray text-cakir-black/70 hover:bg-cakir-gold/10'
              }`}
            >
              Toutes ({faqQuestions.length})
            </button>
            {faqCategories.map((cat) => {
              const Icon = iconMap[cat.icon]
              const count = getFAQByCategory(cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-cakir-gold text-white'
                      : 'bg-cakir-gray text-cakir-black/70 hover:bg-cakir-gold/10'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-cakir-cream">
        <div className="container-custom">
          {/* Results count & actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-cakir-black/60">
              {filteredQuestions.length} question{filteredQuestions.length > 1 ? 's' : ''} trouvée{filteredQuestions.length > 1 ? 's' : ''}
              {searchQuery && ` pour "${searchQuery}"`}
            </p>
            <div className="flex gap-4">
              <button
                onClick={expandAll}
                className="text-sm text-cakir-gold hover:text-cakir-gold-dark transition-colors"
              >
                Tout déplier
              </button>
              <button
                onClick={collapseAll}
                className="text-sm text-cakir-black/60 hover:text-cakir-black transition-colors"
              >
                Tout replier
              </button>
            </div>
          </div>

          {/* No results */}
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-cakir-black/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cakir-black mb-2">
                Aucune question trouvée
              </h3>
              <p className="text-cakir-black/60 mb-6">
                Essayez de modifier votre recherche ou de sélectionner une autre catégorie.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('tous')
                }}
                variant="outline"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}

          {/* Questions grouped by category */}
          <div className="space-y-12">
            {groupedQuestions.map(({ category, questions }) => {
              const Icon = iconMap[category.icon]
              return (
                <ScrollReveal key={category.id}>
                  <div>
                    {/* Category Header */}
                    {activeCategory === 'tous' && (
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-cakir-gold/10 flex items-center justify-center">
                          {Icon && <Icon className="w-5 h-5 text-cakir-gold" />}
                        </div>
                        <h2 className="text-2xl font-bold text-cakir-black">
                          {category.name}
                        </h2>
                      </div>
                    )}

                    {/* Questions */}
                    <div className="space-y-3">
                      {questions.map((question) => (
                        <FAQItem
                          key={question.id}
                          question={question}
                          isOpen={openItems[question.id]}
                          onToggle={() => toggleItem(question.id)}
                        />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="text-white/70 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
                et vous accompagner dans votre projet de ravalement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button to="/contact" variant="primary">
                  Nous Contacter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button to="/devis-gratuit" variant="outline">
                  Demander un Devis Gratuit
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-cakir-gold" />
                <span>Ou appelez-nous directement :</span>
                <a
                  href={companyInfo.phoneLink}
                  className="text-cakir-gold font-bold hover:text-cakir-gold-light transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-center mb-10">
              Ressources Complémentaires
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <a
                href="/blog"
                className="block p-6 bg-cakir-cream rounded-2xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-cakir-gold transition-colors">
                  Notre Blog
                </h3>
                <p className="text-cakir-black/60 text-sm">
                  Guides détaillés, conseils techniques et actualités du ravalement de façade.
                </p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href="/nos-services"
                className="block p-6 bg-cakir-cream rounded-2xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-cakir-gold transition-colors">
                  Nos Services
                </h3>
                <p className="text-cakir-black/60 text-sm">
                  Découvrez en détail nos prestations : ravalement, enduit, isolation ITE.
                </p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="/nos-realisations"
                className="block p-6 bg-cakir-cream rounded-2xl hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-cakir-gold transition-colors">
                  Nos Réalisations
                </h3>
                <p className="text-cakir-black/60 text-sm">
                  Exemples concrets de nos chantiers de ravalement et d'isolation.
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

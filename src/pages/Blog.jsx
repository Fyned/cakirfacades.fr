import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import ScrollReveal from '../components/animations/ScrollReveal'
import PageHero from '../components/ui/PageHero'
import { blogArticles, blogCategories, formatDate } from '../data/blog-articles'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('tous')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = activeCategory === 'tous' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <SEOHead
        title="Blog Façade | Conseils, Prix et Guides | Cakir Facades"
        description="Conseils d'experts sur le ravalement de façade, l'isolation thermique, les aides financières et l'entretien. Guides pratiques et astuces de professionnels."
        canonical="/blog"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero with Background Image */}
      <PageHero
        title="Nos Articles et Guides"
        subtitle="Retrouvez nos conseils d'experts sur le ravalement de façade, l'isolation thermique, les aides financières et l'entretien de vos façades."
        image="/images/projects/projet-10-cloture-palmiye-desen/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Blog & Conseils"
      />

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[70px] z-30 backdrop-blur-sm bg-white/95">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-cakir-gold text-white'
                      : 'bg-cakir-gray text-cakir-black/70 hover:bg-cakir-gold/10 hover:text-cakir-gold'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cakir-gold/50 focus:border-cakir-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-cakir-light">
        <div className="container-custom">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} animation="fadeUp" delay={index * 0.1}>
                  <ArticleCard article={article} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-cakir-black/60 text-lg">
                Aucun article trouvé pour cette recherche.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('tous')
                  setSearchQuery('')
                }}
                className="mt-4 text-cakir-gold hover:underline"
              >
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-3xl font-bold text-white mb-4">
              Une question sur votre projet ?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour répondre à toutes vos questions
              et vous accompagner dans votre projet de façade.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

function ArticleCard({ article }) {
  const categoryLabel = blogCategories.find(c => c.id === article.category)?.name || article.category

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col card-hover">
      {/* Image */}
      <Link to={`/blog/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-cakir-gold text-white text-xs font-medium px-3 py-1 rounded-full">
            {categoryLabel}
          </span>
        </div>
        {article.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-block bg-cakir-black text-white text-xs font-medium px-3 py-1 rounded-full">
              À la une
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-cakir-black/50 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(article.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-cakir-black mb-3 group-hover:text-cakir-gold transition-colors line-clamp-2">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-cakir-black/60 mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>

        {/* Read More */}
        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-cakir-gold font-medium hover:gap-3 transition-all"
        >
          Lire l'article
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}

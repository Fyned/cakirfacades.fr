import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2 } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import ScrollReveal from '../components/animations/ScrollReveal'
import Button from '../components/ui/Button'
import { getArticleBySlug, getRelatedArticles, blogCategories, formatDate } from '../data/blog-articles'
import { services } from '../data/services'

export default function BlogArticle() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  const relatedArticles = getRelatedArticles(slug, 3)
  const categoryLabel = blogCategories.find(c => c.id === article.category)?.name || article.category
  const relatedServices = article.relatedServices
    ? services.filter(s => article.relatedServices.includes(s.slug))
    : []

  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: article.title, href: `/blog/${article.slug}` },
  ]

  // Schema.org Article markup
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://cakirfacades.fr${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'Cakir Facades',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cakir Facades',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cakirfacades.fr/images/logo/cakir-logo.svg',
      },
    },
  }

  return (
    <>
      <SEOHead
        title={`${article.title} | Blog Cakir Facades`}
        description={article.excerpt}
        canonical={`/blog/${article.slug}`}
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-cakir-black pt-32 lg:pt-40 pb-12 md:pb-20">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <Link
              to="/blog"
              className="inline-flex items-center text-white/60 hover:text-cakir-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>

            <div className="max-w-4xl">
              {/* Category */}
              <span className="inline-block bg-cakir-gold text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
                {categoryLabel}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-white/60">
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {article.readTime} de lecture
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="container-custom -mt-8 md:-mt-12">
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 animate-fade-in-up">
              {/* Article Content */}
              <div className="prose prose-lg max-w-none prose-headings:text-cakir-black prose-headings:font-bold prose-p:text-cakir-black/70 prose-a:text-cakir-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-cakir-black prose-table:text-sm prose-th:bg-cakir-gray prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-gray-100">
                <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="w-5 h-5 text-cakir-black/40" />
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-cakir-gray text-cakir-black/70 text-sm px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-cakir-black/60">
                    <Share2 className="w-5 h-5" />
                    Partager :
                  </span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-cakir-gray hover:bg-cakir-gold hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-cakir-gray hover:bg-cakir-gold hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-cakir-gray hover:bg-cakir-gold hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {/* CTA Card */}
              <div className="bg-cakir-black rounded-2xl p-8 text-white mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">
                  Besoin d'un devis ?
                </h3>
                <p className="text-white/70 mb-6">
                  Nos experts sont à votre disposition pour étudier votre projet et vous proposer un devis gratuit.
                </p>
                <Button to="/devis-gratuit" variant="primary" className="w-full justify-center">
                  Demander un Devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-2">Ou appelez-nous :</p>
                  <a
                    href="tel:+33628821908"
                    className="text-xl font-bold text-cakir-gold hover:text-cakir-gold-light transition-colors"
                  >
                    06 28 82 19 08
                  </a>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-cakir-gray rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Services associés</h3>
                  <div className="space-y-3">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.id}
                        to={`/nos-services/${service.slug}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-shadow group"
                      >
                        <span className="font-medium text-cakir-black group-hover:text-cakir-gold transition-colors">
                          {service.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-cakir-gold ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-cakir-light">
          <div className="container-custom">
            <ScrollReveal animation="fadeUp">
              <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relArticle, index) => (
                <ScrollReveal key={relArticle.id} animation="fadeUp" delay={index * 0.1}>
                  <Link
                    to={`/blog/${relArticle.slug}`}
                    className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relArticle.image}
                        alt={relArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-cakir-black group-hover:text-cakir-gold transition-colors line-clamp-2">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-cakir-black/50 mt-2">
                        {formatDate(relArticle.date)}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom text-center">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et sans engagement.
              Notre équipe est à votre disposition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/devis-gratuit" variant="primary">
                Demander un Devis Gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button to="/blog" variant="outline">
                Voir tous les articles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

// Simple markdown-like formatting
function formatContent(content) {
  return content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Tables (basic)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean)
      const isHeader = cells[0].includes('---')
      if (isHeader) return ''
      const tag = cells.every(c => c.trim().startsWith('---')) ? '' : (
        `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
      )
      return tag
    })
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<') || match.trim() === '') return match
      return match
    })
}

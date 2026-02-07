import { useState, useCallback, useEffect, useRef } from 'react'
import { MapPin, X, ChevronLeft, ChevronRight, ArrowRight, Grid, LayoutGrid } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { seoMeta } from '../data/seo-meta'
import { projects, projectCategories, getProjectsByCategory } from '../data/projects'

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'
  const [isAnimating, setIsAnimating] = useState(false)
  const lightboxRef = useRef(null)

  const filteredProjects = getProjectsByCategory(activeCategory)

  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Réalisations', href: '/nos-realisations' },
  ]

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveCategory(category)
      setIsAnimating(false)
    }, 150)
  }

  const openLightbox = useCallback((project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'auto'
  }, [])

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, closeLightbox, nextImage, prevImage])

  // Focus lightbox when opened
  useEffect(() => {
    if (selectedProject && lightboxRef.current) {
      lightboxRef.current.focus()
    }
  }, [selectedProject])

  return (
    <>
      <SEOHead {...seoMeta.realisations} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero with Background Image */}
      <PageHero
        title="Nos Réalisations"
        subtitle="Découvrez nos projets de façades réalisés en Loire-Atlantique. Enduits décoratifs, ravalement, isolation thermique... Chaque projet est unique et réalisé avec passion."
        image="/images/projects/projet-01-ravalement-immeuble-pierre/cover.jpg"
        breadcrumbs={breadcrumbs}
        badge="Portfolio"
      />

      {/* Filters */}
      <section className="bg-white py-8 border-b border-cakir-gray sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-cakir-gold text-white'
                      : 'bg-cakir-gray text-cakir-black/70 hover:bg-cakir-gold/10 hover:text-cakir-gold'
                  }`}
                >
                  {category.name}
                  <span className="ml-1 opacity-60">({category.count})</span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-cakir-gold text-white'
                    : 'bg-cakir-gray text-cakir-black/60 hover:text-cakir-gold'
                }`}
                aria-label="Vue grille"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'masonry'
                    ? 'bg-cakir-gold text-white'
                    : 'bg-cakir-gray text-cakir-black/60 hover:text-cakir-gold'
                }`}
                aria-label="Vue masonry"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-cakir-gray">
        <div className="container-custom">
          <div
            className={`transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'} ${
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 scroll-fade-up is-visible ${
                  viewMode === 'masonry' ? 'break-inside-avoid' : ''
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Main Image */}
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    viewMode === 'grid' ? 'aspect-[4/3]' : ''
                  }`}
                  onClick={() => openLightbox(project, 0)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Image Count Badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                      {project.images.length} photos
                    </div>
                  )}
                  {/* View More Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 text-white font-medium">
                      Voir le projet
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-cakir-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cakir-black/60 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-cakir-black/50">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  {/* Thumbnails */}
                  {project.images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                      {project.images.slice(0, 4).map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => openLightbox(project, idx)}
                          className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden hover:ring-2 hover:ring-cakir-gold transition-all"
                        >
                          <img
                            src={img}
                            alt={`${project.title} - ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                      {project.images.length > 4 && (
                        <button
                          onClick={() => openLightbox(project, 4)}
                          className="flex-shrink-0 w-14 h-14 rounded-lg bg-cakir-black/10 flex items-center justify-center text-sm font-medium text-cakir-black/60 hover:bg-cakir-gold/20 hover:text-cakir-gold transition-colors"
                        >
                          +{project.images.length - 4}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cakir-black/60 text-lg">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Arrows */}
          {selectedProject.images.length > 1 && (
            <>
              <button
                className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div
            className="max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* Info & Thumbnails */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="max-w-2xl">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {selectedProject.title}
                  </h3>
                  {/* Project Description */}
                  <p className="text-white/80 text-sm mb-2 line-clamp-2">
                    {selectedProject.description}
                  </p>
                  <p className="text-white/60 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </p>
                </div>
                <div className="text-white/60 text-sm flex-shrink-0">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(idx)
                      }}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        idx === currentImageIndex
                          ? 'ring-2 ring-cakir-gold'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${selectedProject.title} - ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-cakir-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de façade.
            Nous vous proposerons une solution adaptée à vos besoins et votre budget.
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

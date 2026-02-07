import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from 'lucide-react'
import { getFeaturedProjects } from '../../data/projects'
import ScrollReveal from '../animations/ScrollReveal'
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer'

export default function ProjectsPreview() {
  // Get first 6 featured projects
  const projects = getFeaturedProjects().slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <span className="inline-block text-cakir-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cakir-black mb-4">
            Nos Dernières Réalisations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents. Chaque façade est unique et mérite une attention particulière.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project, index) => (
            <StaggerItem key={project.id} index={index}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift">
                {/* Image */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cakir-black/90 via-cakir-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-cakir-gold/90 text-white text-xs font-medium px-3 py-1 rounded-full capitalize">
                      {Array.isArray(project.category) ? project.category[0] : project.category}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Title & Location */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" delay={0.4} className="text-center mt-12">
          <Link
            to="/nos-realisations"
            className="inline-flex items-center gap-2 btn-primary py-3 px-8"
          >
            Voir Toutes Nos Réalisations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

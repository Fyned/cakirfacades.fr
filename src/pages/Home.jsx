import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema } from '../components/seo/StructuredData'
import { seoMeta } from '../data/seo-meta'

// Home page sections
import HeroSection from '../components/home/HeroSection'
import TrustBadges from '../components/home/TrustBadges'
import ServicesSection from '../components/home/ServicesSection'
import ProcessTimeline from '../components/home/ProcessTimeline'
import ProjectsPreview from '../components/home/ProjectsPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <SEOHead {...seoMeta.home} />
      <LocalBusinessSchema />

      {/* Hero Section - Full viewport with parallax */}
      <HeroSection />

      {/* Trust Badges - Quick confidence builders */}
      <TrustBadges />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Projects Preview */}
      <ProjectsPreview />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call to Action */}
      <CTASection />
    </>
  )
}

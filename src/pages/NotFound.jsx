import { Link } from 'react-router-dom'
import ScrollReveal from '../components/animations/ScrollReveal'
import { Home, ArrowLeft, Phone } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import Button from '../components/ui/Button'
import { companyInfo } from '../data/navigation'

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Non Trouvée | Cakir Facades"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        canonical="/404"
      />

      <section className="min-h-screen pt-32 lg:pt-40 flex items-center justify-center bg-cakir-gray px-4">
        <div
          className="text-center max-w-lg"
          
          
          
        >
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="text-[150px] md:text-[200px] font-bold text-cakir-gold/10 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-cakir-black">
                Oups !
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Page Non Trouvée
          </h1>
          <p className="text-cakir-black/60 text-lg mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
            Pas d'inquiétude, vous pouvez retourner à l'accueil ou nous contacter directement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button to="/" variant="primary">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'Accueil
            </Button>
            <Button to="/contact" variant="outline-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Page Contact
            </Button>
          </div>

          <div className="pt-8 border-t border-cakir-gray">
            <p className="text-cakir-black/60 mb-2">
              Besoin d'aide ? Appelez-nous :
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
      </section>
    </>
  )
}

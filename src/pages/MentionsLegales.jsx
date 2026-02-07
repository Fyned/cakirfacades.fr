import ScrollReveal from '../components/animations/ScrollReveal'
import SEOHead from '../components/seo/SEOHead'
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/seo/StructuredData'
import { seoMeta } from '../data/seo-meta'
import { legalInfo, companyInfo } from '../data/navigation'

export default function MentionsLegales() {
  const breadcrumbs = [
    { name: 'Accueil', href: '/' },
    { name: 'Mentions Légales', href: '/mentions-legales' },
  ]

  return (
    <>
      <SEOHead {...seoMeta.mentionsLegales} />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-cakir-black pt-32 lg:pt-40 pb-16 md:pb-20">
        <div className="container-custom">
          <div
            className="max-w-3xl"
            
            
            
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-white/70">
              Informations légales concernant le site cakirfacades.fr
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div
            className="max-w-3xl mx-auto prose prose-lg"
            
            
            
          >
            {/* Éditeur */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du Site</h2>
              <div className="bg-cakir-gray rounded-xl p-6">
                <p className="mb-2"><strong>Raison sociale :</strong> {legalInfo.companyName}</p>
                <p className="mb-2"><strong>Forme juridique :</strong> {legalInfo.legalForm}</p>
                <p className="mb-2"><strong>Capital social :</strong> {legalInfo.capital}</p>
                <p className="mb-2"><strong>Siège social :</strong> {companyInfo.address}</p>
                <p className="mb-2"><strong>RCS :</strong> {legalInfo.rcs}</p>
                <p className="mb-2"><strong>SIRET :</strong> {legalInfo.siret}</p>
                <p className="mb-2"><strong>Code APE :</strong> {legalInfo.ape}</p>
                <p className="mb-2"><strong>Téléphone :</strong> {companyInfo.phone}</p>
                <p className="mb-2"><strong>Email :</strong> {companyInfo.email}</p>
                <p><strong>Directeur de la publication :</strong> Gérant de la société</p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
              <div className="bg-cakir-gray rounded-xl p-6">
                <p className="mb-2"><strong>Hébergeur :</strong> Hostinger International Ltd.</p>
                <p className="mb-2"><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                <p><strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-cakir-gold hover:underline">www.hostinger.fr</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Propriété Intellectuelle</h2>
              <p className="text-cakir-black/70 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-cakir-black/70">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>

            {/* Protection des données */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Protection des Données Personnelles</h2>
              <p className="text-cakir-black/70 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-cakir-black/70 mb-4">
                Les informations recueillies via les formulaires de contact et de demande de devis sont destinées exclusivement à l'usage de {legalInfo.companyName} pour répondre à vos demandes. Elles ne sont en aucun cas transmises à des tiers.
              </p>
              <p className="text-cakir-black/70">
                Pour exercer ces droits ou pour toute question relative à vos données personnelles, vous pouvez nous contacter à l'adresse : <a href={`mailto:${companyInfo.email}`} className="text-cakir-gold hover:underline">{companyInfo.email}</a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <p className="text-cakir-black/70 mb-4">
                Le site cakirfacades.fr peut utiliser des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Ces cookies sont des petits fichiers texte stockés sur votre ordinateur.
              </p>
              <p className="text-cakir-black/70">
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela pourrait affecter le fonctionnement de certaines fonctionnalités du site.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Limitation de Responsabilité</h2>
              <p className="text-cakir-black/70 mb-4">
                {legalInfo.companyName} ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site cakirfacades.fr.
              </p>
              <p className="text-cakir-black/70">
                {legalInfo.companyName} décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus présents sur ce site.
              </p>
            </div>

            {/* Liens externes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Liens Hypertextes</h2>
              <p className="text-cakir-black/70">
                Le site cakirfacades.fr peut contenir des liens hypertextes vers d'autres sites. {legalInfo.companyName} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Droit Applicable</h2>
              <p className="text-cakir-black/70">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* Crédits */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Crédits</h2>
              <p className="text-cakir-black/70 mb-2">
                <strong>Conception et développement :</strong> Site web développé pour {legalInfo.companyName}
              </p>
              <p className="text-cakir-black/70">
                <strong>Photographies :</strong> © {legalInfo.companyName} - Tous droits réservés
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

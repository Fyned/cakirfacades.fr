import { Helmet } from 'react-helmet-async'

// LocalBusiness Schema - Used on all pages
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Cakir Facades",
    "image": "https://cakirfacades.fr/images/logo/cakir-logo.svg",
    "logo": "https://cakirfacades.fr/images/logo/cakir-logo.svg",
    "@id": "https://cakirfacades.fr",
    "url": "https://cakirfacades.fr",
    "telephone": "+33628821908",
    "email": "ets-cakir@hotmail.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 rue de Metz",
      "addressLocality": "Châteaubriant",
      "postalCode": "44110",
      "addressRegion": "Pays de la Loire",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.7181,
      "longitude": -1.3761
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.7181,
        "longitude": -1.3761
      },
      "geoRadius": "250000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "€€",
    "description": "Cakir Facades, artisan façadier spécialisé en ravalement de façades, enduit décoratif et isolation thermique par l'extérieur à Châteaubriant et en Loire-Atlantique.",
    "foundingDate": "2025-03-01",
    "legalName": "CAKIR FACADES",
    "taxID": "942401407"
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// BreadcrumbList Schema
export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://cakirfacades.fr${item.href}`
    }))
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// Service Schema
export function ServiceSchema({ service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Cakir Facades",
      "url": "https://cakirfacades.fr"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Loire-Atlantique, Bretagne, Pays de la Loire"
    },
    "description": service.shortDescription,
    "image": `https://cakirfacades.fr${service.image}`,
    "url": `https://cakirfacades.fr/nos-services/${service.slug}`
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

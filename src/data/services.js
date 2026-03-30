import { PaintBucket, Building2, Thermometer, Hammer, Droplets } from 'lucide-react'

export const services = [
  {
    id: 1,
    slug: 'construction-neuf',
    title: 'Construction Neuf',
    shortDescription: 'Réalisation complète de façades pour constructions neuves.',
    description: 'Nous réalisons la mise en œuvre d\'enduits de façade pour vos constructions neuves. Enduit monocouche ou traditionnel, finition grattée, talochée ou ribbée — chaque projet est réalisé avec soin pour un résultat durable et esthétique.',
    fullDescription: `La façade est la première impression que donne votre maison. C'est pourquoi nous apportons un soin tout particulier à la réalisation des enduits sur constructions neuves.

Que vous optiez pour un enduit monocouche (application rapide et économique) ou un enduit traditionnel multicouche (finition haut de gamme), nous vous garantissons un résultat impeccable. Notre équipe maîtrise toutes les finitions : grattée pour un aspect contemporain, talochée pour une surface lisse et élégante, ribbée pour un effet strié décoratif, ou encore écrasée pour un rendu rustique.

Nous intervenons sur tous types de supports (parpaing, brique, béton) et respectons scrupuleusement les temps de séchage et les normes DTU en vigueur. Chaque chantier fait l'objet d'une préparation minutieuse : protection des ouvertures, mise en place des échafaudages certifiés, et contrôle qualité à chaque étape.`,
    image: '/images/projects/construction-neuf/cover.webp',
    icon: 'Building2',
    features: [
      'Enduit monocouche et traditionnel',
      'Large choix de coloris et finitions',
      'Finition grattée, talochée ou ribbée',
      'Protection optimale contre les intempéries',
      'Respect des normes DTU en vigueur',
    ],
    benefits: [
      'Façade protégée dès la construction',
      'Personnalisation complète des teintes',
      'Mise en œuvre rapide et soignée',
      'Garantie décennale incluse',
    ],
    process: [
      { title: 'Visite et devis', description: 'Nous nous déplaçons gratuitement pour évaluer votre chantier et établir un devis détaillé.' },
      { title: 'Préparation du support', description: 'Nettoyage et humidification du support, mise en place des échafaudages et protections.' },
      { title: 'Application de l\'enduit', description: 'Projection mécanique ou manuelle de l\'enduit, en respectant les épaisseurs requises.' },
      { title: 'Finition', description: 'Réalisation de la finition choisie (grattée, talochée, ribbée) et contrôle qualité final.' },
    ],
  },
  {
    id: 2,
    slug: 'enduit-imitation-pierre',
    title: 'Enduit Imitation Pierre',
    shortDescription: 'Enduit sculpté reproduisant l\'aspect authentique de la pierre de taille.',
    description: 'Notre spécialité : l\'enduit imitation pierre. Cette technique artisanale consiste à sculpter l\'enduit frais pour reproduire fidèlement l\'aspect de la pierre de taille.',
    fullDescription: `L'enduit imitation pierre est notre signature. Cette technique artisanale d'exception consiste à sculpter l'enduit frais pour reproduire fidèlement l'aspect de la pierre de taille, des moellons ou de la pierre sèche.

Chaque « pierre » est travaillée individuellement : les joints sont creusés à la main selon un calepinage préétabli, les surfaces sont texturées pour un effet naturel, et plusieurs nuances de teintes sont appliquées pour donner profondeur et réalisme au rendu final.

Le résultat est saisissant : votre façade prend l'apparence d'un authentique mur en pierres, pour une fraction du coût d'un parement en vraie pierre. Cette technique s'applique aussi bien sur des façades complètes que sur des éléments ponctuels : soubassements, encadrements de fenêtres, piliers ou murets de clôture.`,
    image: '/images/projects/enduit-imitation-pierre/cover.webp',
    icon: 'PaintBucket',
    features: [
      'Sculpture artisanale dans l\'enduit frais',
      'Reproduction fidèle de la pierre de taille',
      'Joints creusés à la main',
      'Mise en teinte pour un rendu naturel',
      'Applicable sur façades, soubassements et murets',
    ],
    benefits: [
      'Rendu authentique à moindre coût',
      'Valorisation immédiate de votre bien',
      'Chaque réalisation est unique',
      'Protection et esthétique combinées',
    ],
    process: [
      { title: 'Étude du projet', description: 'Définition du style de pierre souhaité, du calepinage et des teintes avec le client.' },
      { title: 'Préparation et enduit de base', description: 'Application d\'un enduit de base pour créer une surface homogène et régulière.' },
      { title: 'Sculpture des pierres', description: 'Traçage des joints et sculpture de chaque pierre à la main dans l\'enduit frais.' },
      { title: 'Mise en teinte', description: 'Application de teintes naturelles en plusieurs passes pour un rendu réaliste et profond.' },
    ],
  },
  {
    id: 3,
    slug: 'gouttiere-aluminium',
    title: 'Gouttière en Aluminium',
    shortDescription: 'Pose de gouttières aluminium laqué sur mesure, durables et esthétiques.',
    description: 'Nous assurons la pose complète de gouttières en aluminium laqué. Fabriquées sur mesure directement sur le chantier, sans raccord visible.',
    fullDescription: `Les gouttières en aluminium représentent la solution la plus performante et durable pour l'évacuation des eaux pluviales de votre habitation.

Contrairement aux gouttières en PVC qui jaunissent et se fragilisent avec le temps, l'aluminium laqué conserve son aspect et sa résistance pendant 30 à 50 ans. Il ne rouille pas, ne se déforme pas et nécessite un entretien minimal.

Nos gouttières sont fabriquées sur mesure directement sur votre chantier grâce à une profileuse mobile. Cette fabrication en continu élimine les raccords et les soudures, garantissant une étanchéité parfaite et un rendu esthétique impeccable. Avec plus de 200 coloris RAL disponibles, vos gouttières s'intègrent harmonieusement à votre toiture et votre façade.`,
    image: '/images/projects/gouttiere-aluminium/cover.webp',
    icon: 'Droplets',
    features: [
      'Fabrication sur mesure sur le chantier',
      'Plus de 200 coloris RAL disponibles',
      'Pose sans soudure ni raccord visible',
      'Aluminium laqué anti-corrosion',
      'Dépose de l\'ancienne gouttière incluse',
    ],
    benefits: [
      'Durée de vie de 30 à 50 ans',
      'Entretien minimal',
      'Étanchéité parfaite',
      'Intégration esthétique à votre toiture',
    ],
    process: [
      { title: 'Prise de mesures', description: 'Relevé précis des dimensions et choix du profil et du coloris avec le client.' },
      { title: 'Dépose de l\'ancienne gouttière', description: 'Retrait soigneux de l\'ancienne installation et vérification de la charpente.' },
      { title: 'Fabrication sur place', description: 'Profilage de la gouttière en continu directement sur le chantier, sans raccord.' },
      { title: 'Pose et raccordement', description: 'Installation des supports, pose de la gouttière et raccordement aux descentes.' },
    ],
  },
  {
    id: 4,
    slug: 'isolant-exterieur',
    title: 'Isolant Extérieur',
    shortDescription: 'Isolation thermique par l\'extérieur (ITE) pour économies d\'énergie.',
    description: 'L\'isolation thermique par l\'extérieur (ITE) enveloppe votre maison d\'un manteau isolant recouvert d\'un enduit de finition.',
    fullDescription: `L'isolation thermique par l'extérieur (ITE) est la solution la plus efficace pour améliorer les performances énergétiques de votre habitation tout en rénovant l'aspect de votre façade.

Le principe est simple : un manteau isolant (polystyrène expansé ou laine de roche) est fixé sur les murs extérieurs, puis recouvert d'un enduit de finition. Cette enveloppe continue supprime totalement les ponts thermiques — ces zones de déperdition situées aux jonctions murs/planchers qui représentent jusqu'à 20% des pertes de chaleur.

Les résultats sont immédiats : jusqu'à 30% d'économies sur vos factures de chauffage, un confort thermique été comme hiver, et une façade entièrement rénovée. De plus, l'ITE n'empiète pas sur votre surface habitable, contrairement à l'isolation par l'intérieur.

L'ITE est éligible à de nombreuses aides financières : MaPrimeRénov', CEE, éco-PTZ et TVA réduite à 5,5%.`,
    image: '/images/projects/isolant-exterieur/cover.webp',
    icon: 'Thermometer',
    features: [
      'Pose de panneaux isolants (PSE, laine de roche)',
      'Suppression totale des ponts thermiques',
      'Enduit de finition au choix',
      'Éligible aux aides MaPrimeRénov\'',
      'Aucune perte de surface habitable',
    ],
    benefits: [
      'Jusqu\'à 30% d\'économies d\'énergie',
      'Confort thermique toute l\'année',
      'Façade rénovée et valorisée',
      'Aides financières disponibles',
    ],
    process: [
      { title: 'Diagnostic thermique', description: 'Évaluation des déperditions et choix de l\'isolant adapté (PSE ou laine de roche).' },
      { title: 'Pose de l\'isolant', description: 'Collage et chevillage des panneaux isolants sur toute la surface de la façade.' },
      { title: 'Marouflage du treillis', description: 'Application du sous-enduit armé d\'un treillis en fibre de verre pour la résistance.' },
      { title: 'Enduit de finition', description: 'Application de l\'enduit décoratif dans le coloris et la texture choisis.' },
    ],
  },
  {
    id: 5,
    slug: 'renovation',
    title: 'Rénovation de Façade',
    shortDescription: 'Ravalement complet, traitement des fissures et rejointoiement de pierre.',
    description: 'Votre façade montre des signes de vieillissement ? Nous réalisons le ravalement complet : nettoyage, traitement des fissures, réfection des joints et application d\'enduit.',
    fullDescription: `Avec le temps, votre façade subit les agressions du climat et du vieillissement : fissures, décoloration, mousse, joints dégradés... Un ravalement s'impose pour redonner vie à votre habitation et prévenir des désordres plus graves.

Notre approche de la rénovation de façade est méthodique et complète. Nous commençons toujours par un diagnostic approfondi pour identifier la nature et les causes des dégradations. Ensuite, nous intervenons étape par étape : nettoyage haute pression ou sablage, traitement des fissures (microfissures ou fissures structurelles), réfection des joints de pierre si nécessaire, et enfin application de l'enduit de finition ou traitement hydrofuge.

Pour les façades en pierre, nous réalisons le rejointoiement avec des mortiers de chaux compatibles avec la pierre existante. Ce travail minutieux requiert un véritable savoir-faire artisanal pour respecter l'authenticité du bâti tout en assurant sa pérennité.

En France, le ravalement est obligatoire tous les 10 ans dans certaines communes. C'est aussi l'occasion de valoriser votre patrimoine et d'améliorer le confort de votre habitation.`,
    image: '/images/projects/renovation/cover.webp',
    icon: 'Hammer',
    features: [
      'Nettoyage haute pression et sablage',
      'Traitement des fissures et micro-fissures',
      'Rejointoiement de pierres à la chaux',
      'Application d\'enduit de rénovation',
      'Traitement hydrofuge de protection',
    ],
    benefits: [
      'Façade comme neuve',
      'Prévention des infiltrations',
      'Valorisation de votre patrimoine',
      'Conformité aux obligations légales',
    ],
    process: [
      { title: 'Diagnostic complet', description: 'Inspection de la façade, identification des désordres et des causes de dégradation.' },
      { title: 'Nettoyage', description: 'Nettoyage haute pression, sablage ou gommage selon l\'état et la nature du support.' },
      { title: 'Réparations', description: 'Traitement des fissures, rejointoiement des pierres et rebouchage des défauts.' },
      { title: 'Finition et protection', description: 'Application de l\'enduit de finition et/ou traitement hydrofuge de protection.' },
    ],
  },
]

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug)
}

export const getServiceIcon = (iconName) => {
  const icons = {
    PaintBucket,
    Building2,
    Thermometer,
    Hammer,
    Droplets,
  }
  return icons[iconName] || PaintBucket
}

export const projectCategories = [
  { id: 'all', name: 'Tous', count: 96 },
  { id: 'construction-neuf', name: 'Construction Neuf', count: 34 },
  { id: 'enduit-imitation-pierre', name: 'Enduit Imitation Pierre', count: 38 },
  { id: 'gouttiere-aluminium', name: 'Gouttière en Aluminium', count: 3 },
  { id: 'isolant-exterieur', name: 'Isolant Extérieur', count: 5 },
  { id: 'renovation', name: 'Rénovation', count: 16 },
]

const generateImages = (slug, count) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${slug}/${String(i + 1).padStart(2, '0')}.webp`)

export const projects = [
  // === CONSTRUCTION NEUF (34 images → 3 projects) ===
  {
    id: 'cn-1',
    title: 'Façade neuve — Maison individuelle',
    description: 'Réalisation complète de la façade pour une construction neuve. Enduit traditionnel avec finition grattée, coloris personnalisé selon les souhaits du client.',
    category: 'construction-neuf',
    location: 'Châteaubriant (44)',
    coverImage: '/images/projects/construction-neuf/cover.webp',
    images: generateImages('construction-neuf', 12),
    featured: true,
  },
  {
    id: 'cn-2',
    title: 'Construction neuve — Enduit monocouche',
    description: 'Application d\'enduit monocouche sur construction neuve. Travail soigné avec protection des ouvertures et finition impeccable.',
    category: 'construction-neuf',
    location: 'Derval (44)',
    coverImage: '/images/projects/construction-neuf/13.webp',
    images: generateImages('construction-neuf', 22).slice(12),
    featured: false,
  },
  {
    id: 'cn-3',
    title: 'Façade construction neuve — Finition talochée',
    description: 'Mise en œuvre d\'un enduit taloché sur pavillon neuf. Résultat élégant et durable avec une protection optimale contre les intempéries.',
    category: 'construction-neuf',
    location: 'Nozay (44)',
    coverImage: '/images/projects/construction-neuf/23.webp',
    images: generateImages('construction-neuf', 34).slice(22),
    featured: false,
  },

  // === ENDUIT IMITATION PIERRE (38 images → 4 projects) ===
  {
    id: 'eip-1',
    title: 'Enduit imitation pierre — Maison de caractère',
    description: 'Transformation complète de la façade avec un enduit sculpté imitation pierre de taille. Rendu authentique et valorisation du patrimoine.',
    category: 'enduit-imitation-pierre',
    location: 'Châteaubriant (44)',
    coverImage: '/images/projects/enduit-imitation-pierre/cover.webp',
    images: generateImages('enduit-imitation-pierre', 10),
    featured: true,
  },
  {
    id: 'eip-2',
    title: 'Imitation pierre — Façade traditionnelle',
    description: 'Réalisation d\'un enduit décoratif imitation pierre sur façade existante. Joints creusés à la main pour un effet naturel.',
    category: 'enduit-imitation-pierre',
    location: 'Rougé (44)',
    coverImage: '/images/projects/enduit-imitation-pierre/11.webp',
    images: generateImages('enduit-imitation-pierre', 20).slice(10),
    featured: false,
  },
  {
    id: 'eip-3',
    title: 'Pierre de taille sculptée — Rénovation façade',
    description: 'Enduit sculpté reproduisant fidèlement l\'aspect de la pierre de taille. Technique artisanale garantissant un rendu unique.',
    category: 'enduit-imitation-pierre',
    location: 'Soudan (44)',
    coverImage: '/images/projects/enduit-imitation-pierre/21.webp',
    images: generateImages('enduit-imitation-pierre', 30).slice(20),
    featured: false,
  },
  {
    id: 'eip-4',
    title: 'Enduit décoratif pierre — Pavillon',
    description: 'Application d\'un enduit imitation pierre sur un pavillon. Finition soignée avec harmonisation des teintes et des joints.',
    category: 'enduit-imitation-pierre',
    location: 'Saint-Julien-de-Vouvantes (44)',
    coverImage: '/images/projects/enduit-imitation-pierre/31.webp',
    images: generateImages('enduit-imitation-pierre', 38).slice(30),
    featured: false,
  },

  // === GOUTTIÈRE EN ALUMINIUM (3 images → 1 project) ===
  {
    id: 'ga-1',
    title: 'Gouttières aluminium — Pose complète',
    description: 'Installation de gouttières en aluminium laqué sur mesure. Solution durable et esthétique pour l\'évacuation des eaux pluviales.',
    category: 'gouttiere-aluminium',
    location: 'Châteaubriant (44)',
    coverImage: '/images/projects/gouttiere-aluminium/cover.webp',
    images: generateImages('gouttiere-aluminium', 3),
    featured: true,
  },

  // === ISOLANT EXTÉRIEUR (5 images → 1 project) ===
  {
    id: 'ie-1',
    title: 'Isolation thermique par l\'extérieur (ITE)',
    description: 'Pose d\'un système d\'isolation thermique par l\'extérieur. Amélioration significative du confort thermique et réduction des dépenses énergétiques.',
    category: 'isolant-exterieur',
    location: 'Châteaubriant (44)',
    coverImage: '/images/projects/isolant-exterieur/cover.webp',
    images: generateImages('isolant-exterieur', 5),
    featured: true,
  },

  // === RÉNOVATION (16 images → 2 projects) ===
  {
    id: 'rn-1',
    title: 'Rénovation de façade — Ravalement complet',
    description: 'Ravalement complet d\'une façade ancienne. Nettoyage, traitement des fissures, application d\'enduit et finition pour redonner vie à la façade.',
    category: 'renovation',
    location: 'Châteaubriant (44)',
    coverImage: '/images/projects/renovation/cover.webp',
    images: generateImages('renovation', 8),
    featured: true,
  },
  {
    id: 'rn-2',
    title: 'Rénovation façade — Joints de pierre',
    description: 'Restauration des joints de pierre et rénovation de la façade. Travail minutieux de rejointoiement pour préserver l\'authenticité du bâti.',
    category: 'renovation',
    location: 'Erbray (44)',
    coverImage: '/images/projects/renovation/09.webp',
    images: generateImages('renovation', 16).slice(8),
    featured: false,
  },
]

export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured)
}

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}

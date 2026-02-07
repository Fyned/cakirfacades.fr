export const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Nos Services',
    href: '/nos-services',
    children: [
      { name: 'Enduit de Façade', href: '/nos-services/enduit-de-facade' },
      { name: 'Ravalement de Façades', href: '/nos-services/ravalement-de-facades' },
      { name: 'Isolation Extérieure', href: '/nos-services/isolation-exterieure' },
      { name: 'Neuf & Rénovation', href: '/nos-services/neuf-et-renovation' },
    ]
  },
  { name: 'Nos Réalisations', href: '/nos-realisations' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export const companyInfo = {
  name: 'Cakir Facades',
  legalName: 'CAKIR FACADES',
  phone: '06 28 82 19 08',
  phoneLink: 'tel:+33628821908',
  email: 'ets-cakir@hotmail.fr',
  address: '4 rue de Metz, 44110 Châteaubriant',
  addressDetails: {
    street: '4 rue de Metz',
    city: 'Châteaubriant',
    postalCode: '44110',
    region: 'Pays de la Loire',
    country: 'France',
  },
  hours: {
    weekdays: 'Lun-Ven: 08h00 — 18h00',
    saturday: 'Sam: 09h00 — 12h00',
    sunday: 'Dim: Fermé',
  },
  social: {
    facebook: '#',
    instagram: '#',
  },
}

export const legalInfo = {
  companyName: 'CAKIR FACADES',
  legalForm: 'SARL à associé unique',
  capital: '3 000,00 €',
  rcs: '942 401 407 R.C.S. Nantes',
  siret: '942 401 407 00014',
  ape: '4399C - Travaux de maçonnerie générale et gros œuvre de bâtiment',
  tva: 'FR 87 942 401 407',
}

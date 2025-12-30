// Données détaillées pour chaque application Smartfilm

export interface SmartfilmApplicationDetail {
  id: string
  title: string
  slug: string
  heroImage: string
  description: string
  benefits: {
    title: string
    items: string[]
  }
  interest: {
    title: string
    description: string
    points: string[]
  }
  useCases: {
    title: string
    items: string[]
  }
  cta: string
}

// Mapping des slugs pour chaque application
const slugMapping: { [key: string]: string } = {
  'Bureaux & salles de réunion': 'bureaux-salles-reunion',
  'Cabinets médicaux': 'cabinets-medicaux',
  'Hôtels': 'hotels',
  'Maisons haut de gamme': 'maisons-haut-de-gamme',
  'Salles de bain vitrées': 'salles-de-bain-vitrees',
  'Espaces de coworking': 'espaces-coworking',
  'Hôpital / EHPAD': 'hopital-ehpad',
}

// Fonction pour créer un slug à partir du titre
export function createSmartfilmSlug(title: string): string {
  if (slugMapping[title]) {
    return slugMapping[title]
  }
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const smartfilmApplicationsData: SmartfilmApplicationDetail[] = [
  {
    id: 'bureaux-salles-reunion',
    title: 'Bureaux & salles de réunion',
    slug: 'bureaux-salles-reunion',
    heroImage: '/images/salle de reunion.png',
    description: 'Créez des espaces de travail flexibles et modernes. Le Smartfilm opacifiant transforme vos bureaux et salles de réunion en espaces adaptables à la confidentialité.',
    benefits: {
      title: 'Les avantages pour vos bureaux',
      items: [
        'Confidentialité instantanée pour les réunions sensibles',
        'Flexibilité des espaces sans travaux de cloisonnement',
        'Optimisation de l\'utilisation des surfaces',
        'Design moderne et épuré',
        'Réduction des coûts de rénovation',
        'Amélioration du bien-être au travail',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour vos bureaux ?',
      description: 'Une solution innovante qui transforme vos espaces de travail',
      points: [
        'Adaptez vos espaces en fonction des besoins : réunion privée ou espace ouvert',
        'Créez des zones de confidentialité sans perdre la lumière naturelle',
        'Valorisez vos locaux avec une technologie premium',
        'Réduisez les coûts de rénovation et d\'aménagement',
        'Améliorez la productivité grâce à des espaces mieux adaptés',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Salles de réunion avec confidentialité à la demande',
        'Bureaux individuels avec intimité variable',
        'Espaces ouverts transformables en bureaux privés',
        'Zones de confidentialité pour entretiens',
        'Séparation flexible entre départements',
      ],
    },
    cta: 'Demander un devis pour mes bureaux',
  },
  {
    id: 'cabinets-medicaux',
    title: 'Cabinets médicaux',
    slug: 'cabinets-medicaux',
    heroImage: '/images/centremedical.png',
    description: 'Garantissez la confidentialité médicale et le confort de vos patients. Le Smartfilm opacifiant protège l\'intimité tout en conservant une ambiance lumineuse et rassurante.',
    benefits: {
      title: 'Les avantages pour votre cabinet',
      items: [
        'Confidentialité médicale garantie',
        'Confort des patients préservé',
        'Respect des normes de confidentialité',
        'Design professionnel et rassurant',
        'Facilité d\'entretien',
        'Image moderne et technologique',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour votre cabinet ?',
      description: 'Une solution qui allie confidentialité et confort',
      points: [
        'Protégez la confidentialité des consultations médicales',
        'Créez un environnement rassurant et professionnel',
        'Respectez les normes de confidentialité médicale',
        'Améliorez l\'expérience patient avec un espace moderne',
        'Valorisez votre cabinet avec une technologie premium',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Consultations médicales avec intimité garantie',
        'Salles d\'examen avec confidentialité variable',
        'Espaces d\'attente avec zones privées',
        'Bureaux médicaux avec intimité à la demande',
        'Séparation entre zones publiques et privées',
      ],
    },
    cta: 'Demander un devis pour mon cabinet',
  },
  {
    id: 'hotels',
    title: 'Hôtels',
    slug: 'hotels',
    heroImage: '/images/hotel.png',
    description: 'Offrez à vos clients une expérience d\'exception. Le Smartfilm opacifiant transforme les chambres et espaces communs en lieux de confort et d\'intimité premium.',
    benefits: {
      title: 'Les avantages pour votre hôtel',
      items: [
        'Expérience client premium et moderne',
        'Intimité totale dans les chambres',
        'Flexibilité des espaces communs',
        'Design élégant et contemporain',
        'Différenciation concurrentielle',
        'Valorisation de votre établissement',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour votre hôtel ?',
      description: 'Une solution qui valorise votre établissement',
      points: [
        'Offrez une expérience unique et moderne à vos clients',
        'Créez des espaces intimes et confortables',
        'Valorisez votre établissement avec une technologie premium',
        'Différenciez-vous de la concurrence',
        'Améliorez la satisfaction client et les avis',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Chambres avec intimité totale à la demande',
        'Salles de bain vitrées avec opacité variable',
        'Espaces communs transformables (salles de réunion)',
        'Suites avec séparation flexible des espaces',
        'Zones VIP avec confidentialité garantie',
      ],
    },
    cta: 'Demander un devis pour mon hôtel',
  },
  {
    id: 'maisons-haut-de-gamme',
    title: 'Maisons haut de gamme',
    slug: 'maisons-haut-de-gamme',
    heroImage: '/images/maison.png',
    description: 'Créez des espaces de vie exceptionnels. Le Smartfilm opacifiant transforme votre résidence en lieu de vie moderne, intime et lumineux.',
    benefits: {
      title: 'Les avantages pour votre résidence',
      items: [
        'Intimité totale sans compromis sur la lumière',
        'Design moderne et épuré',
        'Flexibilité des espaces de vie',
        'Confort et bien-être optimisés',
        'Valeur immobilière augmentée',
        'Technologie premium intégrée',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour votre résidence ?',
      description: 'Une solution qui transforme votre espace de vie',
      points: [
        'Profitez de la lumière naturelle tout en préservant votre intimité',
        'Créez des espaces flexibles qui s\'adaptent à vos besoins',
        'Valorisez votre bien avec une technologie premium',
        'Améliorez votre confort de vie au quotidien',
        'Investissez dans une solution durable et moderne',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Séparation entre espaces ouverts et privés',
        'Salles de bain vitrées avec intimité à la demande',
        'Bureaux à domicile avec confidentialité',
        'Chambres avec intimité variable',
        'Espaces de vie transformables selon les occasions',
      ],
    },
    cta: 'Demander un devis pour ma résidence',
  },
  {
    id: 'salles-de-bain-vitrees',
    title: 'Salles de bain vitrées',
    slug: 'salles-de-bain-vitrees',
    heroImage: '/images/salledebain.png',
    description: 'Alliez modernité et intimité. Le Smartfilm opacifiant transforme vos salles de bain vitrées en espaces élégants et privés à la demande.',
    benefits: {
      title: 'Les avantages pour vos salles de bain',
      items: [
        'Intimité totale en un instant',
        'Lumière naturelle préservée',
        'Design moderne sans rideaux',
        'Facilité d\'entretien',
        'Espace optimisé',
        'Esthétique premium',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour vos salles de bain ?',
      description: 'Une solution qui allie élégance et intimité',
      points: [
        'Profitez de la lumière naturelle sans compromis sur l\'intimité',
        'Éliminez les rideaux et stores pour un design épuré',
        'Créez des espaces modernes et élégants',
        'Améliorez votre confort quotidien',
        'Valorisez votre bien avec une solution premium',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Salles de bain vitrées avec intimité à la demande',
        'Douches vitrées avec opacité variable',
        'Séparation entre baignoire et espace de vie',
        'Cabines de douche avec intimité garantie',
        'Espaces de détente avec confidentialité',
      ],
    },
    cta: 'Demander un devis pour mes salles de bain',
  },
  {
    id: 'espaces-coworking',
    title: 'Espaces de coworking',
    slug: 'espaces-coworking',
    heroImage: '/images/coworking.jpg',
    description: 'Créez des espaces de travail flexibles et adaptables. Le Smartfilm opacifiant transforme vos espaces de coworking en lieux de travail modernes et modulables.',
    benefits: {
      title: 'Les avantages pour votre espace de coworking',
      items: [
        'Flexibilité maximale des espaces',
        'Confidentialité à la demande',
        'Optimisation de l\'utilisation des surfaces',
        'Design moderne et attractif',
        'Différenciation concurrentielle',
        'Amélioration de l\'expérience utilisateur',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour votre coworking ?',
      description: 'Une solution qui optimise vos espaces de travail',
      points: [
        'Adaptez vos espaces en fonction des besoins : open space ou bureaux privés',
        'Créez des zones de confidentialité sans perdre la flexibilité',
        'Valorisez votre espace avec une technologie premium',
        'Attirez plus d\'utilisateurs avec des espaces modernes',
        'Optimisez l\'utilisation de vos surfaces',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Espaces ouverts transformables en bureaux privés',
        'Salles de réunion avec confidentialité variable',
        'Zones de confidentialité pour entretiens',
        'Espaces de détente avec intimité à la demande',
        'Séparation flexible entre zones de travail',
      ],
    },
    cta: 'Demander un devis pour mon espace de coworking',
  },
  {
    id: 'hopital-ehpad',
    title: 'Hôpital / EHPAD',
    slug: 'hopital-ehpad',
    heroImage: '/images/hopital.jpg',
    description: 'Garantissez la confidentialité et le confort des patients et résidents. Le Smartfilm opacifiant protège l\'intimité dans les établissements de santé et médico-sociaux.',
    benefits: {
      title: 'Les avantages pour votre établissement',
      items: [
        'Confidentialité médicale et respect de la vie privée',
        'Confort des patients et résidents',
        'Respect des normes de confidentialité',
        'Design moderne et rassurant',
        'Facilité d\'entretien et hygiène optimale',
        'Amélioration du bien-être des usagers',
      ],
    },
    interest: {
      title: 'Pourquoi choisir le Smartfilm pour votre établissement ?',
      description: 'Une solution qui allie confidentialité et confort',
      points: [
        'Protégez la confidentialité des soins et consultations',
        'Créez un environnement rassurant et professionnel',
        'Respectez les normes de confidentialité médicale et médico-sociale',
        'Améliorez l\'expérience des patients et résidents',
        'Valorisez votre établissement avec une technologie premium',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Chambres avec intimité garantie',
        'Salles de soins avec confidentialité variable',
        'Espaces de consultation avec intimité à la demande',
        'Zones de vie avec séparation flexible',
        'Salles de bain vitrées avec opacité variable',
      ],
    },
    cta: 'Demander un devis pour mon établissement',
  },
]

// Fonction pour obtenir une application par son slug
export function getSmartfilmApplicationBySlug(slug: string): SmartfilmApplicationDetail | undefined {
  return smartfilmApplicationsData.find(app => app.slug === slug)
}

// Fonction pour obtenir toutes les applications
export function getAllSmartfilmApplications(): SmartfilmApplicationDetail[] {
  return smartfilmApplicationsData
}


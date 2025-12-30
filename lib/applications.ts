// Données détaillées pour chaque application Film LED

export interface ApplicationDetail {
  id: string
  title: string
  slug: string
  heroImage: string
  description: string
  benefits: {
    title: string
    items: string[]
  }
  roi: {
    title: string
    description: string
    metrics: string[]
  }
  useCases: {
    title: string
    items: string[]
  }
  cta: string
}

// Mapping des slugs pour chaque application (pour garantir la correspondance)
const slugMapping: { [key: string]: string } = {
  'Vitrines commerces': 'vitrines-commerces',
  'Hôtels et réception': 'hotels-reception',
  'Aéroport / Gare': 'aeroport-gare',
  'Pharmacie / Parapharmacie': 'pharmacie-parapharmacie',
  'Restaurant / Bar': 'restaurant-bar',
  'Centre commercial': 'centre-commercial',
  'Galerie commerciale': 'galerie-commerciale',
  'Cinéma': 'cinema',
}

// Fonction pour créer un slug à partir du titre
export function createSlug(title: string): string {
  // Utilise le mapping si disponible, sinon génère le slug
  if (slugMapping[title]) {
    return slugMapping[title]
  }
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, '') // Supprime les tirets en début/fin
}

export const applicationsData: ApplicationDetail[] = [
  {
    id: 'vitrines-commerces',
    title: 'Vitrines commerces',
    slug: 'vitrines-commerces',
    heroImage: '/images/vitrinemagsin.png',
    description: 'Transformez vos vitrines en véritables outils de communication dynamique. Le Film LED attire l\'attention des passants et augmente significativement votre visibilité.',
    benefits: {
      title: 'Les avantages pour votre commerce',
      items: [
        'Augmentation du trafic piéton de 30 à 50%',
        'Amélioration de la notoriété de votre marque',
        'Diffusion de promotions et offres en temps réel',
        'Mise en valeur de vos produits phares',
        'Différenciation visuelle par rapport à la concurrence',
        'Communication 24/7 même en dehors des heures d\'ouverture',
        'Aspect environnemental : Technologie LED éco-énergétique réduisant la consommation électrique et l\'empreinte carbone',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement rentable avec des résultats mesurables',
      metrics: [
        'ROI moyen : 6 à 12 mois',
        'Augmentation des ventes : +15 à +35%',
        'Amélioration de la notoriété : +40%',
        'Taux de conversion : +25%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Affichage des promotions du jour',
        'Mise en avant des nouveautés produits',
        'Diffusion d\'animations attractives',
        'Communication événementielle',
        'Affichage d\'informations pratiques (horaires, services)',
      ],
    },
    cta: 'Demander un devis pour ma vitrine',
  },
  {
    id: 'hotels-reception',
    title: 'Hôtels et réception',
    slug: 'hotels-reception',
    heroImage: '/images/hotelréception.png',
    description: 'Créez une première impression mémorable pour vos clients. Le Film LED transforme votre réception en espace d\'accueil moderne et premium.',
    benefits: {
      title: 'Les avantages pour votre établissement',
      items: [
        'Amélioration de l\'expérience client dès l\'arrivée',
        'Affichage d\'informations pratiques (horaires, services)',
        'Mise en valeur de vos équipements et services',
        'Communication événementielle et promotions',
        'Image de marque premium et technologique',
        'Différenciation concurrentielle',
        'Revenus publicitaires supplémentaires : Valorisez vos espaces avec des campagnes publicitaires ciblées',
        'Aspect environnemental : Solution éco-énergétique s\'intégrant dans votre démarche hôtelière durable',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement qui valorise votre établissement',
      metrics: [
        'ROI moyen : 8 à 14 mois',
        'Satisfaction client : +30%',
        'Taux de réservation : +20%',
        'Revenus publicitaires : +25 à +40%',
        'Notoriété : +35%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Affichage des services de l\'hôtel',
        'Promotion des offres spéciales',
        'Information sur les événements locaux',
        'Mise en valeur des équipements (spa, restaurant)',
        'Communication multilingue',
      ],
    },
    cta: 'Demander un devis pour mon hôtel',
  },
  {
    id: 'aeroport-gare',
    title: 'Aéroport / Gare',
    slug: 'aeroport-gare',
    heroImage: '/images/Aeroport.png',
    description: 'Optimisez l\'information voyageur et créez une expérience de navigation fluide. Le Film LED guide et informe efficacement les passagers.',
    benefits: {
      title: 'Les avantages pour votre infrastructure',
      items: [
        'Amélioration de l\'orientation des passagers',
        'Affichage d\'informations en temps réel (horaires, retards)',
        'Communication publicitaire ciblée',
        'Réduction du stress des voyageurs',
        'Image moderne et technologique',
        'Optimisation des flux de circulation',
        'Revenus publicitaires supplémentaires : Publicité ciblée générant des revenus additionnels',
        'Aspect environnemental : Technologie LED à faible consommation adaptée aux infrastructures durables',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement stratégique pour votre infrastructure',
      metrics: [
        'ROI moyen : 12 à 18 mois',
        'Satisfaction voyageur : +40%',
        'Revenus publicitaires : +25%',
        'Efficacité opérationnelle : +30%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Affichage des horaires de départ/arrivée',
        'Information sur les retards et changements',
        'Guidage vers les zones (embarquement, bagages)',
        'Publicité pour les commerces et services',
        'Alertes sécurité et informations pratiques',
      ],
    },
    cta: 'Demander un devis pour mon infrastructure',
  },
  {
    id: 'pharmacie-parapharmacie',
    title: 'Pharmacie / Parapharmacie',
    slug: 'pharmacie-parapharmacie',
    heroImage: '/images/parapharmacie.png',
    description: 'Valorisez vos produits et services de santé. Le Film LED vous permet de communiquer efficacement sur vos promotions et conseils santé.',
    benefits: {
      title: 'Les avantages pour votre pharmacie',
      items: [
        'Mise en avant des promotions et nouveautés',
        'Communication sur les services (conseils, préparations)',
        'Augmentation du panier moyen',
        'Amélioration de la visibilité des produits',
        'Différenciation par rapport aux concurrents',
        'Communication santé et prévention',
        'Aspect environnemental : Solution éco-responsable alignée avec les valeurs santé et bien-être',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement rentable pour votre activité',
      metrics: [
        'ROI moyen : 6 à 10 mois',
        'Augmentation des ventes : +20 à +30%',
        'Panier moyen : +15%',
        'Fidélisation client : +25%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Promotion des produits en promotion',
        'Mise en avant des nouveautés',
        'Communication sur les services (vaccination, tests)',
        'Conseils santé et prévention',
        'Information sur les horaires et services',
      ],
    },
    cta: 'Demander un devis pour ma pharmacie',
  },
  {
    id: 'restaurant-bar',
    title: 'Restaurant / Bar',
    slug: 'restaurant-bar',
    heroImage: '/images/Bar.png',
    description: 'Créez une ambiance unique et attirez les clients. Le Film LED transforme votre établissement en destination attractive et moderne.',
    benefits: {
      title: 'Les avantages pour votre établissement',
      items: [
        'Augmentation de la fréquentation',
        'Mise en valeur de votre carte et spécialités',
        'Création d\'une ambiance moderne et dynamique',
        'Communication sur les événements et animations',
        'Différenciation visuelle',
        'Amélioration de l\'expérience client',
        'Aspect environnemental : Technologie LED éco-énergétique réduisant votre consommation électrique',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement qui attire et fidélise',
      metrics: [
        'ROI moyen : 5 à 9 mois',
        'Augmentation de la fréquentation : +25 à +40%',
        'Chiffre d\'affaires : +20 à +30%',
        'Notoriété : +35%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Affichage de la carte et menus du jour',
        'Promotion des plats du jour et happy hours',
        'Communication sur les événements (concerts, soirées)',
        'Mise en valeur de l\'ambiance et du décor',
        'Information sur les horaires et réservations',
      ],
    },
    cta: 'Demander un devis pour mon établissement',
  },
  {
    id: 'centre-commercial',
    title: 'Centre commercial',
    slug: 'centre-commercial',
    heroImage: '/images/centrecommercial.png',
    description: 'Optimisez l\'expérience shopping et maximisez les revenus publicitaires. Le Film LED transforme votre centre commercial en destination shopping moderne.',
    benefits: {
      title: 'Les avantages pour votre centre commercial',
      items: [
        'Augmentation du temps de visite',
        'Revenus publicitaires supplémentaires : Valorisez vos espaces avec des campagnes publicitaires ciblées',
        'Amélioration de l\'orientation des visiteurs',
        'Communication événementielle efficace',
        'Image moderne et technologique',
        'Différenciation concurrentielle',
        'Aspect environnemental : Solution éco-énergétique adaptée aux grandes surfaces',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement stratégique multi-bénéfices',
      metrics: [
        'ROI moyen : 10 à 16 mois',
        'Revenus publicitaires : +30 à +50%',
        'Temps de visite : +20%',
        'Satisfaction visiteurs : +35%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Affichage des promotions des enseignes',
        'Information sur les événements du centre',
        'Guidage vers les zones et magasins',
        'Publicité pour les services et restaurants',
        'Communication sur les horaires et services',
      ],
    },
    cta: 'Demander un devis pour mon centre commercial',
  },
  {
    id: 'galerie-commerciale',
    title: 'Galerie commerciale',
    slug: 'galerie-commerciale',
    heroImage: '/images/Galleriecommercial.png',
    description: 'Valorisez votre galerie et attirez plus de visiteurs. Le Film LED crée une expérience shopping premium et moderne.',
    benefits: {
      title: 'Les avantages pour votre galerie',
      items: [
        'Augmentation du trafic piéton',
        'Mise en valeur des commerces',
        'Création d\'une ambiance premium',
        'Communication événementielle',
        'Amélioration de l\'orientation',
        'Revenus publicitaires : Valorisez vos espaces avec des campagnes publicitaires ciblées',
        'Aspect environnemental : Technologie LED éco-énergétique pour une galerie durable',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement qui dynamise votre galerie',
      metrics: [
        'ROI moyen : 8 à 14 mois',
        'Trafic piéton : +30 à +45%',
        'Revenus publicitaires : +25 à +40%',
        'Revenus locatifs : +15%',
        'Satisfaction commerçants : +40%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Promotion des commerces de la galerie',
        'Affichage des événements et animations',
        'Information sur les horaires et services',
        'Guidage vers les différents niveaux',
        'Publicité pour les services (parking, restauration)',
      ],
    },
    cta: 'Demander un devis pour ma galerie',
  },
  {
    id: 'cinema',
    title: 'Cinéma',
    slug: 'cinema',
    heroImage: '/images/cinéma.png',
    description: 'Créez une expérience immersive dès l\'entrée. Le Film LED transforme votre cinéma en destination cinématographique moderne et attractive.',
    benefits: {
      title: 'Les avantages pour votre cinéma',
      items: [
        'Augmentation de la fréquentation',
        'Mise en valeur des films à l\'affiche',
        'Création d\'une ambiance cinématographique',
        'Communication sur les événements et avant-premières',
        'Amélioration de l\'expérience client',
        'Différenciation concurrentielle',
        'Revenus publicitaires supplémentaires : Valorisez vos espaces avec des campagnes publicitaires ciblées pour les marques et annonceurs',
        'Aspect environnemental : Technologie LED éco-énergétique avec faible consommation et matériaux recyclables',
      ],
    },
    roi: {
      title: 'Retour sur investissement',
      description: 'Un investissement qui attire les spectateurs',
      metrics: [
        'ROI moyen : 7 à 12 mois',
        'Fréquentation : +25 à +40%',
        'Chiffre d\'affaires : +20 à +30%',
        'Revenus publicitaires : +30 à +50%',
        'Satisfaction client : +35%',
      ],
    },
    useCases: {
      title: 'Cas d\'usage concrets',
      items: [
        'Affichage des films à l\'affiche avec bandes-annonces',
        'Promotion des événements et avant-premières',
        'Information sur les horaires et séances',
        'Mise en valeur des équipements (IMAX, 4DX)',
        'Communication sur les offres et abonnements',
      ],
    },
    cta: 'Demander un devis pour mon cinéma',
  },
]

// Fonction pour obtenir une application par son slug
export function getApplicationBySlug(slug: string): ApplicationDetail | undefined {
  return applicationsData.find(app => app.slug === slug)
}

// Fonction pour obtenir toutes les applications
export function getAllApplications(): ApplicationDetail[] {
  return applicationsData
}


export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  id: string
  title: string
  items: FAQItem[]
}

export const faqData: FAQCategory[] = [
  {
    id: 'general',
    title: 'Questions générales',
    items: [
      {
        question: 'Quelle est la différence entre film LED et smartfilm opacifiant ?',
        answer: 'Le film LED est une solution d&apos;affichage lumineux dynamique, principalement utilisée pour la communication visuelle et la valorisation d&apos;espaces (vitrines, halls, retail). Le smartfilm opacifiant est un film posé sur vitrage qui passe de transparent à opaque à la demande pour créer de la confidentialité ou un effet design.',
      },
      {
        question: 'Peut-on installer ces solutions sur des vitrages existants ?',
        answer: 'Oui, dans la majorité des cas les films se posent directement sur des vitrages existants, sous réserve de compatibilité technique (type de verre, accès, surface, alimentation électrique).',
      },
      {
        question: 'Intervenez-vous partout ?',
        answer: 'Nous intervenons sur étude de projet. Une analyse technique et logistique est réalisée en amont pour confirmer la faisabilité et la zone d&apos;intervention.',
      },
      {
        question: 'Travaillez-vous avec les professionnels et les particuliers ?',
        answer: 'Oui, nous accompagnons à la fois les particuliers haut de gamme (villas, lofts, résidences) et les professionnels (bureaux, commerces, hôtels, cliniques, architectes, promoteurs).',
      },
      {
        question: 'Fournissez-vous uniquement le produit ou aussi la pose ?',
        answer: 'Nous proposons la fourniture seule, la fourniture + installation professionnelle et l&apos;accompagnement technique des architectes et installateurs.',
      },
    ],
  },
  {
    id: 'film-led',
    title: 'Film LED',
    items: [
      {
        question: 'Qu&apos;est-ce que le film LED exactement ?',
        answer: 'C&apos;est un film lumineux transparent intégré sur un vitrage permettant d&apos;afficher des contenus animés ou lumineux tout en conservant la transparence de la surface.',
      },
      {
        question: 'Le film LED est-il visible en plein jour ?',
        answer: 'Oui, il est conçu pour être visible en environnement lumineux, avec un contraste optimisé. Le rendu dépend toutefois de l&apos;orientation, de la luminosité ambiante et du contenu affiché.',
      },
      {
        question: 'Peut-on afficher n&apos;importe quel contenu ?',
        answer: 'Selon la technologie installée, il est possible d&apos;afficher des textes, visuels, animations simples et contenus dynamiques. Les possibilités sont précisées lors de l&apos;étude de projet.',
      },
      {
        question: 'Où peut-on installer du film LED ?',
        answer: 'Les applications les plus courantes sont les vitrines de magasins, halls d&apos;immeubles, centres commerciaux, stands d&apos;exposition et espaces d&apos;accueil ou de réunion.',
      },
      {
        question: 'Quelle est la durée de vie du film LED ?',
        answer: 'Elle dépend de l&apos;usage et des conditions environnementales. En général, la durée de vie est de plusieurs années avec une baisse progressive de luminosité classique pour la technologie LED.',
      },
      {
        question: 'Quelle est la consommation électrique ?',
        answer: 'La consommation dépend de la surface, de la luminosité programmée et du type de contenu. Une estimation personnalisée est fournie dans le devis.',
      },
    ],
  },
  {
    id: 'smartfilm',
    title: 'Smartfilm opacifiant',
    items: [
      {
        question: 'Comment fonctionne le smartfilm opacifiant ?',
        answer: 'Il s&apos;agit d&apos;un film à cristaux liquides. Sans courant, le film apparaît opaque. Avec courant, il devient transparent. Le passage de l&apos;un à l&apos;autre est quasi instantané.',
      },
      {
        question: 'Peut-on contrôler l&apos;opacité à distance ?',
        answer: 'Oui, le smartfilm peut être piloté par interrupteur, télécommande, système domotique ou application selon l&apos;installation choisie.',
      },
      {
        question: 'Est-ce sécurisé pour la santé et l&apos;électricité ?',
        answer: 'Oui, lorsque le smartfilm est installé par des professionnels qualifiés et alimenté conformément aux normes électriques en vigueur, la solution est sûre et fiable.',
      },
      {
        question: 'Où peut-on utiliser un smartfilm ?',
        answer: 'Les principaux cas d&apos;usage sont les salles de réunion, cloisons vitrées de bureaux, cabinets médicaux, espaces de soins, chambres d&apos;hôtel et salles de bain vitrées.',
      },
      {
        question: 'Peut-on projeter des images sur le smartfilm ?',
        answer: 'Oui, en mode opaque, le smartfilm peut servir d&apos;écran de rétroprojection, sous réserve d&apos;un vidéoprojecteur adapté.',
      },
      {
        question: 'Est-ce compatible avec double ou triple vitrage ?',
        answer: 'Oui, sous réserve d&apos;une analyse technique préalable (type de vitrage, feuilletage, orientation, dimensions). Ces points sont vérifiés lors de l&apos;étude projet.',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation & Technique',
    items: [
      {
        question: 'Combien de temps dure une installation ?',
        answer: 'La durée dépend de la surface et de la complexité. Pour de petites surfaces, l&apos;installation se fait généralement en quelques heures. Les projets plus importants peuvent nécessiter plusieurs jours, selon les contraintes du site.',
      },
      {
        question: 'Faut-il remplacer les vitrages existants ?',
        answer: 'Dans la plupart des cas, non. Les films se posent sur les vitrages existants, sauf cas particuliers précisés lors de l&apos;étude technique.',
      },
      {
        question: 'Y a-t-il des travaux importants à prévoir ?',
        answer: 'L&apos;installation est propre et rapide. Les interventions lourdes sont limitées et l&apos;intégration des alimentations électriques est prévue de manière discrète et esthétique.',
      },
      {
        question: 'Quelle maintenance est nécessaire ?',
        answer: 'Le nettoyage se fait comme sur un vitrage classique, avec des produits adaptés. Une vérification électrique ponctuelle peut être recommandée, mais il n&apos;y a pas de maintenance lourde à prévoir.',
      },
    ],
  },
  {
    id: 'prix',
    title: 'Prix & Devis',
    items: [
      {
        question: 'Quel est le prix d&apos;un projet ?',
        answer: 'Le prix dépend de la surface en m², du type de film, de la complexité d&apos;installation et des options (domotique, découpe, formes spéciales). Chaque projet fait l&apos;objet d&apos;un devis personnalisé.',
      },
      {
        question: 'Proposez-vous des études gratuites ?',
        answer: 'Oui, une première étude technique et commerciale peut être réalisée gratuitement à partir de vos informations et photos.',
      },
      {
        question: 'Avez-vous des minimums de commande ?',
        answer: 'Des minimums peuvent s&apos;appliquer selon le type de produit et la surface. Ils sont précisés dans le devis.',
      },
    ],
  },
  {
    id: 'simulateur',
    title: 'Simulateur IA avec photo',
    items: [
      {
        question: 'Comment fonctionne votre simulateur IA ?',
        answer: 'Vous téléversez une photo de votre espace, choisissez le type de solution (film LED ou smartfilm), et notre IA génère une simulation visuelle du rendu pour vous aider à vous projeter.',
      },
      {
        question: 'Est-ce une représentation exacte du résultat final ?',
        answer: 'Non, il s&apos;agit d&apos;une simulation indicative. Le rendu réel dépend de nombreux paramètres techniques et environnementaux. Une validation technique est toujours réalisée avant toute commande.',
      },
      {
        question: 'Mes photos sont-elles conservées ?',
        answer: 'Les photos peuvent être stockées temporairement pour le traitement de votre demande, puis supprimées selon notre politique de confidentialité. Les modalités exactes sont détaillées dans notre politique de protection des données.',
      },
      {
        question: 'Puis-je demander un devis directement après la simulation ?',
        answer: 'Oui, vous pouvez transformer votre simulation en demande de devis en un clic. Les informations de votre projet sont alors transmises à notre équipe pour étude.',
      },
    ],
  },
  {
    id: 'garanties',
    title: 'Données, Garanties & Conformité',
    items: [
      {
        question: 'Les produits sont-ils garantis ?',
        answer: 'Oui, nos films bénéficient d&apos;une garantie fabricant dont la durée dépend du produit et des conditions d&apos;utilisation. Les détails sont précisés dans votre devis et votre contrat.',
      },
      {
        question: 'Respectez-vous la réglementation et les normes ?',
        answer: 'Oui, nos solutions sont sélectionnées et installées dans le respect des normes en vigueur, selon le type de bâtiment et le pays d&apos;installation.',
      },
      {
        question: 'Mes données personnelles sont-elles protégées ?',
        answer: 'Oui, nous respectons la réglementation en matière de protection des données (RGPD). Vos informations sont utilisées uniquement dans le cadre de votre demande et ne sont pas revendues à des tiers.',
      },
    ],
  },
]

// Fonction helper pour filtrer par catégorie
export function getFAQByCategory(categoryIds: string[]): FAQCategory[] {
  return faqData.filter(category => categoryIds.includes(category.id))
}

// Fonction helper pour obtenir toutes les catégories
export function getAllFAQCategories(): FAQCategory[] {
  return faqData
}

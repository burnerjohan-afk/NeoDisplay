# Film LED & Smartfilm - Site Web Premium

Site web moderne et premium pour une entreprise spécialisée dans le Film LED et le Smartfilm Opacifiant. Développé avec Next.js 14, React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design Premium** : Interface moderne, minimaliste et high-tech
- **Deux Solutions Distinctes** : Film LED et Smartfilm Opacifiant clairement séparées
- **Simulateur IA** : Visualisation de projets avec génération d'images IA
- **SEO Optimisé** : Metadata, JSON-LD, sitemap, robots.txt
- **RGPD Compliant** : Bannière cookies, politique de confidentialité
- **Responsive** : Mobile, tablette et desktop
- **Performance** : Optimisé pour Lighthouse ≥ 90
- **Accessibilité** : Conforme aux standards WCAG

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. **Cloner le projet** (ou extraire les fichiers)

2. **Installer les dépendances** :
```bash
npm install
# ou
yarn install
```

3. **Configurer les variables d'environnement** :
```bash
cp .env.example .env.local
```

Éditez `.env.local` et configurez :
- `NEXT_PUBLIC_BASE_URL` : URL de votre site
- `AI_API_KEY` : Clé API pour la génération d'images IA (optionnel)
- Variables CRM/Backend selon votre intégration

4. **Lancer le serveur de développement** :
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
film-led-smartfilm/
├── app/                    # Pages Next.js (App Router)
│   ├── api/               # Routes API
│   ├── film-led/          # Page Film LED
│   ├── smartfilm/         # Page Smartfilm
│   ├── espace-projet/     # Simulateur IA
│   ├── contact/           # Formulaire de contact
│   ├── faq/               # FAQ
│   └── ...
├── components/            # Composants React
│   ├── layout/            # Header, Footer, CookieBanner
│   ├── home/              # Composants page d'accueil
│   ├── film-led/          # Composants Film LED
│   ├── smartfilm/         # Composants Smartfilm
│   ├── espace-projet/     # Composants simulateur IA
│   └── ...
├── lib/                   # Utilitaires
│   ├── content.ts         # Contenu du site
│   └── metadata.ts        # Fonctions SEO
├── public/                # Fichiers statiques
│   └── images/            # Images du site
└── ...
```

## 🎨 Personnalisation

### Modifier le contenu

Tous les textes sont centralisés dans `lib/content.ts`. Modifiez ce fichier pour changer :
- Textes marketing
- FAQ
- Informations de contact
- Mentions légales

### Ajouter des images

**⚠️ IMPORTANT : Le site utilise de vraies photos pour montrer les effets réels des installations.**

1. Consultez le fichier `IMAGES-TO-ADD.txt` à la racine du projet pour la liste complète des images nécessaires
2. Consultez `public/images/README-IMAGES.md` pour le guide détaillé
3. Placez vos images réelles dans `public/images/` avec les noms exacts :
   - `film-led-hero.jpg` : Photo hero Film LED (1200x600px)
   - `smartfilm-hero.jpg` : Photo hero Smartfilm (1200x600px)
   - `realisation-1.jpg` à `realisation-6.jpg` : Photos de réalisations (800x600px)

**Sources recommandées pour des photos libres de droits :**
- Unsplash : https://unsplash.com (recherchez "LED strip", "neon lights", "smart glass")
- Pexels : https://www.pexels.com (recherchez "LED lighting", "commercial lighting")
- Vos propres photos de réalisations (recommandé)

Les images apparaîtront automatiquement une fois ajoutées dans le dossier `public/images/`.

### Changer les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :
- `neon-blue` : Bleu néon principal
- `neon-green` : Vert néon
- `primary-dark` : Fond sombre
- `primary-gray` : Fond gris
- `accent-white` : Texte clair

## 🔌 Intégrations

### API IA pour le Simulateur

Le simulateur IA est prêt à être connecté. Pour activer :

1. **Choisissez votre service IA** :
   - OpenAI DALL-E
   - Stable Diffusion
   - Midjourney
   - Autre API de génération d'images

2. **Modifiez `app/api/generate-visual/route.ts`** :
   - Ajoutez votre clé API dans `.env.local`
   - Implémentez l'appel à votre API
   - Gérez le stockage des images générées

3. **Exemple avec OpenAI** :
```typescript
const response = await fetch('https://api.openai.com/v1/images/edits', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AI_API_KEY}`,
  },
  body: formData,
})
```

### CRM / Backend pour le Formulaire de Contact

Le formulaire de contact est prêt pour plusieurs intégrations :

#### Option 1 : Odoo
```typescript
// Dans app/api/contact/route.ts
const response = await fetch('https://votre-odoo.com/api/contact', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.ODOO_API_KEY}`,
  },
  body: JSON.stringify(data),
})
```

#### Option 2 : HubSpot
```typescript
const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
  },
  body: JSON.stringify({
    properties: {
      email: data.email,
      firstname: data.name.split(' ')[0],
      // ...
    },
  }),
})
```

#### Option 3 : Make (Integromat) Webhook
```typescript
const response = await fetch(process.env.MAKE_WEBHOOK_URL, {
  method: 'POST',
  body: JSON.stringify(data),
})
```

#### Option 4 : Email (Resend, SendGrid)
```typescript
await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
  },
  body: JSON.stringify({
    from: 'contact@film-led-smartfilm.com',
    to: 'contact@film-led-smartfilm.com',
    subject: 'Nouvelle demande de contact',
    html: `...`,
  }),
})
```

### Analytics

#### Google Analytics 4
1. Ajoutez `NEXT_PUBLIC_GA_ID` dans `.env.local`
2. Créez `components/analytics/GoogleAnalytics.tsx` :
```typescript
import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```
3. Importez dans `app/layout.tsx`

#### Matomo
Similaire à Google Analytics, utilisez `NEXT_PUBLIC_MATOMO_URL` et `NEXT_PUBLIC_MATOMO_SITE_ID`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Importez le projet dans Vercel
3. Configurez les variables d'environnement
4. Déployez !

### Autres plateformes

Le projet est compatible avec :
- Netlify
- AWS Amplify
- Railway
- Docker

## 📝 Commandes Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 🔒 Sécurité

- ✅ Variables d'environnement pour les clés API
- ✅ Validation des formulaires avec Zod
- ✅ Protection CSRF (Next.js natif)
- ✅ RGPD compliant
- ✅ Gestion des cookies

## 📊 Performance

- Lazy loading des images
- Code splitting automatique
- Optimisation des fonts
- Minification CSS/JS
- Cache des assets statiques

## ♿ Accessibilité

- Alt text sur toutes les images
- Contrastes conformes WCAG
- Focus visible
- ARIA labels
- Navigation au clavier

## 📄 Licence

Ce projet est propriétaire. Tous droits réservés.

## 🆘 Support

Pour toute question ou problème :
- Email : contact@film-led-smartfilm.com
- Consultez la documentation Next.js : https://nextjs.org/docs

## 🎯 Prochaines Étapes

1. **Ajouter vos images** dans `public/images/`
2. **Configurer l'API IA** dans `.env.local` et `app/api/generate-visual/route.ts`
3. **Connecter le formulaire** à votre CRM/Backend dans `app/api/contact/route.ts`
4. **Personnaliser le contenu** dans `lib/content.ts`
5. **Configurer Analytics** (Google Analytics, Matomo, etc.)
6. **Tester sur mobile** et optimiser si nécessaire
7. **Déployer en production**

---

**Développé avec ❤️ pour Film LED & Smartfilm**


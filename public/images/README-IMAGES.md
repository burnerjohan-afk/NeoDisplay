# Guide pour ajouter des photos réelles

Ce guide vous explique comment ajouter de vraies photos de vos réalisations Film LED et Smartfilm.

## 📸 Images nécessaires

### Images principales (obligatoires)
- `film-led-hero.jpg` - Photo hero pour la section Film LED (1200x600px recommandé)
- `smartfilm-hero.jpg` - Photo hero pour la section Smartfilm (1200x600px recommandé)

### Images de réalisations (recommandées)
- `realisation-1.jpg` à `realisation-6.jpg` - Photos de vos projets réels (800x600px recommandé)
- Vous pouvez en ajouter plus, il suffit de mettre à jour le tableau dans `app/realisations/page.tsx`

### Image placeholder
- `placeholder-simulation.jpg` - Image par défaut pour les simulations IA (800x600px)

## 🎯 Où trouver des photos libres de droits

### Sources recommandées :

1. **Unsplash** (https://unsplash.com)
   - Recherchez : "LED strip", "neon lights", "smart glass", "privacy glass", "modern lighting"
   - Exemples de mots-clés : `led display`, `neon sign`, `glass partition`, `smart window`

2. **Pexels** (https://www.pexels.com)
   - Recherchez : "LED lighting", "commercial lighting", "modern glass", "office partition"

3. **Pixabay** (https://pixabay.com)
   - Recherchez : "LED", "neon", "smart glass", "glass partition"

4. **Vos propres photos** (recommandé)
   - Utilisez les photos de vos vraies réalisations
   - Assurez-vous d'avoir les droits d'utilisation

## 📋 Étapes pour ajouter vos photos

### 1. Préparer les images

**Format recommandé :**
- Format : JPG ou WebP (pour de meilleures performances)
- Taille : 
  - Images hero : 1200x600px (ratio 2:1)
  - Réalisations : 800x600px (ratio 4:3)
- Poids : < 500KB par image (compressez si nécessaire)

**Outils de compression :**
- TinyPNG : https://tinypng.com
- Squoosh : https://squoosh.app
- ImageOptim (Mac)

### 2. Nommer les fichiers

Placez vos images dans `public/images/` avec ces noms exacts :
```
public/images/
├── film-led-hero.jpg          ← Photo principale Film LED
├── smartfilm-hero.jpg         ← Photo principale Smartfilm
├── realisation-1.jpg          ← Réalisation #1
├── realisation-2.jpg          ← Réalisation #2
├── realisation-3.jpg          ← Réalisation #3
├── realisation-4.jpg          ← Réalisation #4
├── realisation-5.jpg          ← Réalisation #5
├── realisation-6.jpg          ← Réalisation #6
└── placeholder-simulation.jpg ← Placeholder simulations IA
```

### 3. Vérifier que les images sont utilisées

Les composants sont déjà configurés pour utiliser ces images. Une fois les fichiers ajoutés, ils apparaîtront automatiquement sur le site.

## 🎨 Conseils pour de bonnes photos

### Pour Film LED :
- Montrez l'effet lumineux réel
- Photos en intérieur ou extérieur selon vos réalisations
- Éclairage visible et attractif
- Cadrage professionnel

### Pour Smartfilm :
- Montrez le contraste transparent/opaque
- Avant/après si possible
- Installations dans différents contextes (bureaux, commerces, maisons)
- Détails de l'installation

### Général :
- Qualité professionnelle
- Bonne résolution
- Éclairage correct
- Composition soignée
- Images nettes (pas floues)

## ✅ Vérification

Après avoir ajouté les images :

1. Lancez le serveur de développement : `npm run dev`
2. Vérifiez que les images apparaissent sur :
   - La page d'accueil (section Solutions)
   - La page Réalisations
3. Si une image ne s'affiche pas :
   - Vérifiez le nom du fichier (doit correspondre exactement)
   - Vérifiez que le fichier est bien dans `public/images/`
   - Vérifiez la console du navigateur pour les erreurs

## 🔄 Remplacer les images

Pour remplacer une image :
1. Gardez le même nom de fichier
2. Remplacez simplement le fichier dans `public/images/`
3. Les changements apparaîtront après un rafraîchissement

## 📝 Note légale

Assurez-vous d'avoir les droits d'utilisation de toutes les images que vous utilisez. Si vous utilisez des photos de clients, obtenez leur autorisation écrite.


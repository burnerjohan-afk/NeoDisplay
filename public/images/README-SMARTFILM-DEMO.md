# Images pour la démo Smartfilm interactive

## Images nécessaires

Pour la démonstration interactive du Smartfilm, vous devez ajouter deux images dans le dossier `public/images/` :

### 1. Image transparente (smartfilm non activé)
- **Nom du fichier** : `smartfilm-demo-transparent.jpg`
- **Description** : Salle de réunion ou bureau avec vitres transparentes, vue extérieure visible
- **Taille recommandée** : 1200x900px (ratio 4:3)
- **Utilisation** : Affichée quand le smartfilm est désactivé (état initial)

### 2. Image opaque (smartfilm activé)
- **Nom du fichier** : `smartfilm-demo-opaque.jpg`
- **Description** : Même salle de réunion ou bureau avec vitres opacifiées/frosted
- **Taille recommandée** : 1200x900px (ratio 4:3)
- **Utilisation** : Affichée quand l'utilisateur clique sur le bouton de la télécommande

## Instructions

1. Placez la première image (vitres transparentes) dans `public/images/smartfilm-demo-transparent.jpg`
2. Placez la deuxième image (vitres opacifiées) dans `public/images/smartfilm-demo-opaque.jpg`
3. Les images doivent être de la même scène, prise sous le même angle
4. Assurez-vous que les images sont bien compressées (< 500KB chacune)

## Format recommandé

- **Format** : JPG ou WebP
- **Taille** : 1200x900px (ratio 4:3)
- **Poids** : < 500KB par image
- **Qualité** : Haute résolution pour un rendu professionnel

## Vérification

Une fois les images ajoutées :
1. Lancez le serveur : `npm run dev`
2. Allez sur la page Smartfilm
3. Cliquez sur le bouton de la télécommande pour voir la transition entre les deux images


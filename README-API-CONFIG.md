# Configuration de l'API OpenAI

Pour activer la génération d'images avec l'IA, vous devez configurer votre clé API OpenAI.

## Étapes de configuration

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre clé API OpenAI :

```
OPENAI_API_KEY=votre_cle_api_openai_ici
```

3. Redémarrez le serveur de développement :

```bash
npm run dev
```

## Clé API fournie

La clé API suivante a été fournie :
```
OPENAI _API_KEY= A METTRE DANS .ENV
```

**Important** : Ne partagez jamais votre clé API publiquement. Le fichier `.env.local` est déjà dans `.gitignore` et ne sera pas commité.

## Fonctionnement

L'API utilise :
- **GPT-4 Vision** pour analyser l'image fournie par le client
- **DALL-E 3** pour générer l'image modifiée avec la solution Film LED ou Smartfilm appliquée

Le système génère une image photoréaliste qui conserve la composition originale tout en appliquant la solution sur les vitrages.


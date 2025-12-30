import { NextRequest, NextResponse } from 'next/server'

// Mapping des types de solutions
const solutionTypeMap: { [key: string]: string } = {
  'film-led': 'FILM_LED',
  'smartfilm': 'SMARTFILM_OPACIFIANT',
  'both': 'FILM_LED',
}

// Mapping des types d'espaces
const spaceTypeMap: { [key: string]: string } = {
  'Vitrine commerce': 'vitrine commerce',
  'Bureau': 'bureau',
  'Salle de réunion': 'salle de réunion',
  'Hôtel': 'hôtel',
  'Maison': 'maison',
  'Autre': 'espace commercial',
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File
    const solutionType = formData.get('solutionType') as string
    const spaceType = formData.get('spaceType') as string || 'Autre'

    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Aucune image fournie' },
        { status: 400 }
      )
    }

    // Vérification de la clé API
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Clé API OpenAI non configurée. Veuillez configurer OPENAI_API_KEY dans vos variables d\'environnement.' 
        },
        { status: 500 }
      )
    }

    // Conversion de l'image en buffer
    const imageBuffer = await image.arrayBuffer()
    const imageBase64 = Buffer.from(imageBuffer).toString('base64')
    
    const solutionTypeFormatted = solutionTypeMap[solutionType] || 'FILM_LED'
    const spaceTypeFormatted = spaceTypeMap[spaceType] || 'espace commercial'
    
    // Étape 1: Analyser l'image avec GPT-4 Vision pour identifier les vitrages
    const visionResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `Analyse cette image en détail. Décris TOUTE l'image : composition exacte, perspective, angle de vue, murs, sol, plafond, mobilier, décoration, lumière, couleurs, ambiance. Sois extrêmement précis sur TOUS les détails visuels.

Ensuite, identifie TOUS les vitrages, fenêtres, portes vitrées, cloisons vitrées, baies vitrées visibles. Pour chaque vitrage, indique sa position précise dans l'image (gauche, droite, centre, fond, premier plan, etc.), sa forme, sa taille relative, et ce qu'on voit à travers.

IMPORTANT : Je vais utiliser cette description pour générer une image IDENTIQUE mais avec les vitrages modifiés selon la solution ${solutionTypeFormatted}.`,
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`,
                },
              },
            ],
          },
        ],
        max_tokens: 2000,
      }),
    })

    if (!visionResponse.ok) {
      const error = await visionResponse.text()
      console.error('Erreur Vision API:', error)
      throw new Error('Erreur lors de l\'analyse de l\'image')
    }

    const visionData = await visionResponse.json()
    const imageDescription = visionData.choices[0]?.message?.content || ''

    // Étape 2: Créer un prompt très explicite pour DALL-E avec structure AVANT/APRÈS
    let modificationText = ''
    if (solutionTypeFormatted === 'FILM_LED') {
      modificationText = `TOUS les vitrages, fenêtres, portes vitrées et cloisons vitrées sont maintenant recouverts d'un FILM LED TRANSPARENT LUMINEUX. Le film LED émet de la lumière visible et affiche des motifs lumineux abstraits (lignes de lumière, formes géométriques, pixels lumineux) directement sur la surface du verre. On peut encore voir légèrement à travers le verre mais avec un affichage lumineux clairement visible par-dessus. L'effet LED est TRÈS VISIBLE, RÉALISTE et MODERNE.`
    } else if (solutionTypeFormatted === 'SMARTFILM_OPACIFIANT') {
      modificationText = `TOUS les vitrages, fenêtres, portes vitrées et cloisons vitrées sont maintenant COMPLÈTEMENT OPAQUES et DÉPOLIS. Le verre transparent est transformé en verre laiteux/blanc opaque avec un effet dépoli/granité uniforme. On ne voit PLUS RIEN à travers - le verre est totalement opaque. Les contours d'objets derrière peuvent être devinés très vaguement comme des ombres floues mais aucun détail n'est visible. L'opacité est COMPLÈTE, UNIFORME et TRÈS VISIBLE.`
    }

    // Prompt final structuré en AVANT/APRÈS pour que DALL-E comprenne mieux
    // On utilise une approche différente : on décrit l'image AVANT puis APRÈS avec la modification
    const finalPrompt = `Image AVANT : ${imageDescription}

Image APRÈS : La MÊME image EXACTE mais avec cette modification CRITIQUE sur TOUS les vitrages : ${modificationText}

INSTRUCTIONS STRICTES :
- Recrée EXACTEMENT l'image AVANT décrite ci-dessus
- Applique UNIQUEMENT la modification "${modificationText}" sur TOUS les vitrages visibles
- TOUT le reste (composition, perspective, mobilier, décoration, lumière, couleurs) reste IDENTIQUE
- La modification sur les vitrages doit être TRÈS VISIBLE et RÉALISTE
- Style : photoréalisme maximum, qualité professionnelle`

    // Étape 3: Générer l'image avec DALL-E 3
    const dalleResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: finalPrompt,
        n: 1,
        size: '1024x1024',
        quality: 'hd',
      }),
    })

    if (!dalleResponse.ok) {
      const error = await dalleResponse.text()
      console.error('Erreur DALL-E API:', error)
      throw new Error('Erreur lors de la génération de l\'image')
    }

    const dalleData = await dalleResponse.json()
    const generatedImageUrl = dalleData.data[0]?.url

    if (!generatedImageUrl) {
      throw new Error('Aucune image générée')
    }

    // Télécharger l'image générée et la convertir en base64
    const imageResponse = await fetch(generatedImageUrl)
    const imageBlob = await imageResponse.blob()
    const imageArrayBuffer = await imageBlob.arrayBuffer()
    const finalImageBase64 = Buffer.from(imageArrayBuffer).toString('base64')

    return NextResponse.json({
      success: true,
      imageUrl: `data:image/png;base64,${finalImageBase64}`,
      message: 'Image générée avec succès',
    })
  } catch (error: any) {
    console.error('Erreur lors de la génération:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Erreur lors de la génération de la simulation' 
      },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') // 'film-led' ou 'smartfilm'

    if (!type || (type !== 'film-led' && type !== 'smartfilm')) {
      return NextResponse.json(
        { error: 'Type de présentation invalide. Utilisez ?type=film-led ou ?type=smartfilm' },
        { status: 400 }
      )
    }

    const fileName = type === 'film-led' 
      ? 'FILM-LED-PRESENTATION.pdf'
      : 'SMARTFILM-PRESENTATION.pdf'

    const filePath = path.join(process.cwd(), 'public', 'pdfs', fileName)

    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Fichier PDF non trouvé. Veuillez d\'abord générer les PDFs avec npm run generate-pdfs' },
        { status: 404 }
      )
    }

    // Lire le fichier
    const fileBuffer = fs.readFileSync(filePath)
    const fileStats = fs.statSync(filePath)

    // Retourner le fichier PDF
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileStats.size.toString(),
      },
    })
  } catch (error: any) {
    console.error('Erreur lors du téléchargement:', error)
    return NextResponse.json(
      { error: 'Erreur lors du téléchargement du fichier' },
      { status: 500 }
    )
  }
}


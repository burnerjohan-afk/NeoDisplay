const { mdToPdf } = require('md-to-pdf')
const fs = require('fs')
const path = require('path')

async function generatePDFs() {
  const presentationsDir = path.join(__dirname, '..', 'presentations')
  const publicDir = path.join(__dirname, '..', 'public', 'pdfs')
  
  // Créer le dossier public/pdfs s'il n'existe pas
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const files = [
    {
      input: path.join(presentationsDir, 'FILM-LED-PRESENTATION.md'),
      output: path.join(publicDir, 'FILM-LED-PRESENTATION.pdf'),
      title: 'Film LED - Présentation Client'
    },
    {
      input: path.join(presentationsDir, 'SMARTFILM-PRESENTATION.md'),
      output: path.join(publicDir, 'SMARTFILM-PRESENTATION.pdf'),
      title: 'Smartfilm Opacifiant - Présentation Client'
    }
  ]

  console.log('Génération des PDFs en cours...\n')

  for (const file of files) {
    try {
      console.log(`Génération de ${path.basename(file.output)}...`)
      
      const pdf = await mdToPdf(
        { path: file.input },
        {
          pdf_options: {
            format: 'A4',
            margin: {
              top: '20mm',
              right: '15mm',
              bottom: '20mm',
              left: '15mm'
            },
            printBackground: true
          },
          stylesheet: `
            @page {
              margin: 20mm 15mm;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 100%;
            }
            h1 {
              color: #2F8FFF;
              border-bottom: 3px solid #2F8FFF;
              padding-bottom: 10px;
              margin-top: 30px;
              margin-bottom: 20px;
            }
            h2 {
              color: #22E3D5;
              border-bottom: 2px solid #22E3D5;
              padding-bottom: 8px;
              margin-top: 25px;
              margin-bottom: 15px;
            }
            h3 {
              color: #2F8FFF;
              margin-top: 20px;
              margin-bottom: 10px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 15px 0;
            }
            table th, table td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            table th {
              background-color: #2F8FFF;
              color: white;
              font-weight: bold;
            }
            code {
              background-color: #f4f4f4;
              padding: 2px 6px;
              border-radius: 3px;
              font-family: 'Courier New', monospace;
            }
            blockquote {
              border-left: 4px solid #2F8FFF;
              padding-left: 15px;
              margin: 15px 0;
              color: #666;
            }
            ul, ol {
              margin: 10px 0;
              padding-left: 25px;
            }
            li {
              margin: 5px 0;
            }
            strong {
              color: #2F8FFF;
            }
          `
        }
      )

      if (pdf) {
        fs.writeFileSync(file.output, pdf.content)
        console.log(`✓ ${path.basename(file.output)} généré avec succès\n`)
      } else {
        console.error(`✗ Erreur lors de la génération de ${path.basename(file.output)}\n`)
      }
    } catch (error) {
      console.error(`✗ Erreur lors de la génération de ${path.basename(file.output)}:`, error.message)
    }
  }

  console.log('Génération terminée !')
}

generatePDFs().catch(console.error)


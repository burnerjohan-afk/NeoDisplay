import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Ici, vous intégrerez votre backend/CRM
    // Exemples d'intégrations possibles :

    // 1. Odoo
    /*
    const odooResponse = await fetch('https://votre-odoo.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ODOO_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
    */

    // 2. HubSpot
    /*
    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: data.name.split(' ')[0],
          lastname: data.name.split(' ').slice(1).join(' '),
          email: data.email,
          phone: data.phone,
          company: data.company,
        },
      }),
    })
    */

    // 3. Make (Integromat) webhook
    /*
    const makeResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    */

    // 4. Email simple (avec Resend, SendGrid, etc.)
    /*
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contact@film-led-smartfilm.com',
        to: 'contact@film-led-smartfilm.com',
        subject: `Nouvelle demande de contact - ${data.solutionType}`,
        html: `
          <h2>Nouvelle demande de contact</h2>
          <p><strong>Nom:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Téléphone:</strong> ${data.phone}</p>
          <p><strong>Société:</strong> ${data.company || 'N/A'}</p>
          <p><strong>Solution:</strong> ${data.solutionType}</p>
          <p><strong>Type d'espace:</strong> ${data.spaceType}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    })
    */

    // Pour l'instant, on simule un succès
    // En production, remplacez ceci par votre intégration réelle
    console.log('Données reçues:', data)

    return NextResponse.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès',
    })
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi du formulaire' },
      { status: 500 }
    )
  }
}


import { generateMetadata as generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles.',
  path: '/politique-confidentialite',
})

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Politique de Confidentialité</span>
          </h1>

          <div className="bg-primary-light rounded-lg p-8 border border-primary-light space-y-6 text-accent-gray">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">1. Collecte des données</h2>
              <p>
                Nous collectons les données personnelles que vous nous fournissez volontairement lors de
                l&apos;utilisation de nos services, notamment via nos formulaires de contact et de demande de devis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">2. Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Améliorer nos services</li>
                <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">3. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour
                lesquelles elles ont été collectées, conformément à la réglementation en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">4. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à : contact@film-led-smartfilm.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">5. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez
                gérer vos préférences de cookies via la bannière de consentement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">6. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter
                à l&apos;adresse : contact@film-led-smartfilm.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


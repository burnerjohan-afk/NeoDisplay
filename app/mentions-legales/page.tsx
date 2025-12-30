import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'

export const metadata = generatePageMetadata({
  title: 'Mentions Légales',
  description: 'Mentions légales du site Film LED & Smartfilm.',
  path: '/mentions-legales',
})

export default function MentionsLegalesPage() {
  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Mentions Légales</span>
          </h1>

          <div className="bg-primary-light rounded-lg p-8 border border-primary-light space-y-6 text-accent-gray">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Éditeur du site</h2>
              <p>
                <strong>{content.legal.companyName}</strong>
                <br />
                SIRET : {content.legal.siret}
                <br />
                {content.legal.address}
                <br />
                Téléphone : {content.legal.phone}
                <br />
                Email : {content.legal.email}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">Directeur de publication</h2>
              <p>Le directeur de publication est le représentant légal de {content.legal.companyName}.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">Hébergement</h2>
              <p>
                Ce site est hébergé par [Nom de l'hébergeur]
                <br />
                Adresse : [Adresse de l'hébergeur]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">Protection des données personnelles</h2>
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement
                Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification,
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


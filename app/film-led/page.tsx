import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import { generateJsonLd } from '@/lib/metadata'
import { content } from '@/lib/content'
import FilmLedHero from '@/components/film-led/Hero'
import FilmLedFeatures from '@/components/film-led/Features'
import FilmLedBenefits from '@/components/film-led/Benefits'
import FilmLedApplications from '@/components/film-led/Applications'
import FilmLedClientProcess from '@/components/film-led/ClientProcess'
import FilmLedClientAdvantages from '@/components/film-led/ClientAdvantages'
import FilmLedCTA from '@/components/film-led/CTA'

export const metadata = generatePageMetadata({
  title: 'Film LED - Vitrines et Espaces à Fort Impact Visuel',
  description: 'Film LED pour créer des vitrines et espaces spectaculaires. Haute luminosité, personnalisation totale, faible consommation. Installation professionnelle garantie.',
  path: '/film-led',
})

export default function FilmLedPage() {
  const jsonLd = generateJsonLd('Product', {
    name: 'Film LED',
    description: content.filmLed.hero.subtitle,
    brand: content.company.name,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FilmLedHero />
      <FilmLedFeatures />
      <FilmLedBenefits />
      <FilmLedApplications />
      <FilmLedClientProcess />
      <FilmLedClientAdvantages />
      <FilmLedCTA />
    </>
  )
}


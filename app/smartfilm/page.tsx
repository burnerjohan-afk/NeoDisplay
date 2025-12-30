import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import { generateJsonLd } from '@/lib/metadata'
import { content } from '@/lib/content'
import SmartfilmHero from '@/components/smartfilm/Hero'
import SmartfilmExplanation from '@/components/smartfilm/Explanation'
import SmartfilmDemo from '@/components/smartfilm/Demo'
import SmartfilmBenefits from '@/components/smartfilm/Benefits'
import SmartfilmApplications from '@/components/smartfilm/Applications'
import SmartfilmFAQ from '@/components/smartfilm/FAQ'
import SmartfilmCTA from '@/components/smartfilm/CTA'

export const metadata = generatePageMetadata({
  title: 'Smartfilm Opacifiant - Verre Intelligent Transparent/Opaque',
  description: 'Smartfilm opacifiant pour contrôler l\'intimité en un instant. Verre intelligent transparent/opaque, compatible domotique. Installation professionnelle.',
  path: '/smartfilm',
})

export default function SmartfilmPage() {
  const jsonLd = generateJsonLd('Product', {
    name: 'Smartfilm Opacifiant',
    description: content.smartfilm.hero.subtitle,
    brand: content.company.name,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmartfilmHero />
      <SmartfilmExplanation />
      <SmartfilmDemo />
      <SmartfilmBenefits />
      <SmartfilmApplications />
      <SmartfilmFAQ />
      <SmartfilmCTA />
    </>
  )
}


import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import FAQSection from '@/components/faq/FAQSection'

export const metadata = generatePageMetadata({
  title: 'FAQ - Questions Fréquentes Film LED et Smartfilm',
  description: 'Réponses aux questions fréquentes sur le Film LED et le Smartfilm opacifiant. Installation, prix, garantie, compatibilité domotique.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-20">
      <FAQSection showCategories={true} />
    </div>
  )
}


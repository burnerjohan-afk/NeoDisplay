import { Suspense } from 'react'
import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import ContactForm from '@/components/contact/ContactForm'
import { content } from '@/lib/content'

export const metadata = generatePageMetadata({
  title: 'Contact - Demande de Devis Film LED et Smartfilm',
  description: 'Contactez-nous pour votre projet Film LED ou Smartfilm. Demandez un devis personnalisé gratuit. Intervention partout en France.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{content.contact.title}</span>
            </h1>
            <p className="text-xl text-accent-gray">
              {content.contact.subtitle}
            </p>
          </div>
          <Suspense fallback={<div className="text-center py-12 text-accent-gray">Chargement du formulaire...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}


import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import ProjectWizard from '@/components/espace-projet/ProjectWizard'

export const metadata = generatePageMetadata({
  title: 'Espace Projet (IA) - Simulateur de Visualisation',
  description: 'Visualisez votre projet avec notre simulateur IA. Téléversez une photo de votre espace et découvrez le rendu avec Film LED ou Smartfilm.',
  path: '/espace-projet',
})

export default function EspaceProjetPage() {
  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Espace Projet (IA)</span>
          </h1>
          <p className="text-xl text-accent-gray">
            Visualisez votre projet avec notre simulateur IA
          </p>
        </div>
        <ProjectWizard />
      </div>
    </section>
  )
}


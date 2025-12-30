import { notFound } from 'next/navigation'
import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import { getApplicationBySlug, getAllApplications } from '@/lib/applications'
import ApplicationDetailComponent from '@/components/film-led/ApplicationDetail'

// Génération des métadonnées
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const application = getApplicationBySlug(slug)
  
  if (!application) {
    return {
      title: 'Application non trouvée',
    }
  }

  return generatePageMetadata({
    title: `Film LED pour ${application.title} - NeoDisplay`,
    description: application.description,
    path: `/film-led/applications/${application.slug}`,
  })
}

// Génération statique des pages
export async function generateStaticParams() {
  const applications = getAllApplications()
  return applications.map((app) => ({
    slug: app.slug,
  }))
}

export default async function ApplicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const application = getApplicationBySlug(slug)

  if (!application) {
    notFound()
  }

  return <ApplicationDetailComponent application={application} />
}


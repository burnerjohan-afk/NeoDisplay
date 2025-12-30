import { notFound } from 'next/navigation'
import { generateMetadata as generatePageMetadata } from '@/lib/metadata'
import { getSmartfilmApplicationBySlug, getAllSmartfilmApplications } from '@/lib/smartfilm-applications'
import SmartfilmApplicationDetailComponent from '@/components/smartfilm/ApplicationDetail'

// Génération des métadonnées
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const application = getSmartfilmApplicationBySlug(slug)
  
  if (!application) {
    return {
      title: 'Application non trouvée',
    }
  }

  return generatePageMetadata({
    title: `Smartfilm pour ${application.title} - NeoDisplay`,
    description: application.description,
    path: `/smartfilm/applications/${application.slug}`,
  })
}

// Génération statique des pages
export async function generateStaticParams() {
  const applications = getAllSmartfilmApplications()
  return applications.map((app) => ({
    slug: app.slug,
  }))
}

export default async function SmartfilmApplicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const application = getSmartfilmApplicationBySlug(slug)

  if (!application) {
    notFound()
  }

  return <SmartfilmApplicationDetailComponent application={application} />
}


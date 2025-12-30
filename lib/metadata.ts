import type { Metadata } from 'next'

export function generateMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://film-led-smartfilm.com'
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateJsonLd(type: 'Organization' | 'Product' | 'FAQPage', data: any) {
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'Organization':
      return {
        ...base,
        name: data.name,
        url: data.url,
        logo: data.logo,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: data.phone,
          contactType: 'customer service',
          email: data.email,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.address,
        },
      }
    case 'Product':
      return {
        ...base,
        name: data.name,
        description: data.description,
        brand: {
          '@type': 'Brand',
          name: data.brand,
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      }
    case 'FAQPage':
      return {
        ...base,
        mainEntity: data.items.map((item: { question: string; answer: string }) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    default:
      return base
  }
}


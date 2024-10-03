import { Metadata } from 'next'
import SoftwareDetailClient from '@/app/components/softwares/SoftwareDetailClient'
import softwareData from '@/app/data/softwareDara'
import Script from 'next/script'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const software = softwareData.find((s) => s.slug.split('/').pop() === params.slug)

  if (!software) {
    return {
      title: 'Software Not Found - Chandamama',
      description: 'The requested software could not be found.',
    }
  }

  const imageUrl = typeof software.image === 'string' 
    ? software.image 
    : software.image.src

  const fullUrl = `https://www.chandamama.tech${software.slug}`

  return {
    title: `${software.title} - Chandamama`,
    description: software.description.slice(0, 160),
    openGraph: {
      title: `${software.title} - Chandamama`,
      description: software.description.slice(0, 160),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: software.title,
        },
      ],
      url: fullUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${software.title} - Chandamama`,
      description: software.description.slice(0, 160),
      images: [imageUrl],
    },
  }
}

export default function SoftwareDetail({ params }: Props) {
  const software = softwareData.find((s) => s.slug.split('/').pop() === params.slug)

  if (!software) {
    return <SoftwareDetailClient slug={params.slug} />
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: software.title,
    description: software.description.slice(0, 160),
    image: typeof software.image === 'string' ? software.image : software.image.src,
    url: `https://www.chandamama.tech${software.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <Script
        id="software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareDetailClient slug={params.slug} />
    </>
  )
}
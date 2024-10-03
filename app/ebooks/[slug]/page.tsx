import { Metadata } from 'next'
import EBookDetailClient from '@/app/components/eBooks/EBookDetailClient'
import eBooksData from '@/app/data/eBooksData'
import Script from 'next/script'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = eBooksData.find((b) => b.link.split('/').pop() === params.slug)

  if (!book) {
    return {
      title: 'eBook Not Found',
      description: 'The requested eBook could not be found.',
    }
  }

  const imageUrl = typeof book.image === 'string' 
    ? book.image 
    : book.image.src

  return {
    title: `${book.title} - Chandamama.tech`,
    description: book.content.slice(0, 160) + '...',
    openGraph: {
      title: book.title,
      description: book.content.slice(0, 160) + '...',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: book.title,
        },
      ],
      type: 'book',
      url: `https://www.chandamama.tech${book.link}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: book.title,
      description: book.content.slice(0, 160) + '...',
      images: [imageUrl],
    },
  }
}

export default function EBookDetail({ params }: Props) {
  const book = eBooksData.find((b) => b.link.split('/').pop() === params.slug)

  if (!book) {
    return <EBookDetailClient slug={params.slug} />
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: 'Chandamama.tech',
    description: book.content.slice(0, 160) + '...',
    image: typeof book.image === 'string' ? book.image : book.image.src,
    url: `https://www.chandamama.tech${book.link}`,
    publisher: {
      '@type': 'Organization',
      name: 'Chandamama.tech',
      url: 'https://www.chandamama.tech',
    },
    genre: book.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'INR',
      url: book.pdfLink,
    },
  }

  return (
    <>
      <Script
        id="book-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EBookDetailClient slug={params.slug} />
    </>
  )
}
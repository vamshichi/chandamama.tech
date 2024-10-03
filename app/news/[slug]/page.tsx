import { Metadata } from 'next'
import NewsDetailClient from '@/app/components/News/NewsDetailClient'
import newsArticlesData from '@/app/data/newsArticlesData'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticlesData.find((news) => news.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    }
  }

  // Convert StaticImageData to string URL
  const imageUrl = typeof article.image === 'string' 
    ? article.image 
    : article.image.src

  return {
    title: article.title,
    description: article.content.slice(0, 160) + '...',
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 160) + '...',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.content.slice(0, 160) + '...',
      images: [imageUrl],
    },
  }
}

export default function NewsDetail({ params }: Props) {
  return <NewsDetailClient slug={params.slug} />
}
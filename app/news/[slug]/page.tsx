'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import newsArticlesData from '@/app/data/newsArticlesData'

export default function NewsDetailClient() {
  const params = useParams()
  const { slug } = params

  const article = newsArticlesData.find((news) => news.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-4">{article.date}</p>
      <img src={article.image} alt={article.title} className="w-full h-auto mb-6" />
      <p>{article.content}</p>
    </div>
  )
}
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import newsArticlesWithSnippets from '@/app/data/newsArticlesData'
import NewsCard from './NewsCard'

interface NewsArticle {
  id: number
  title: string
  date : string
  content: string
  image: string | StaticImageData
  slug: string
  readTime?: number
  snippet: string
}

interface NewsGridProps {
  showViewAllButton?: boolean
  limit?: number
}

export default function NewsGrid({ showViewAllButton = false, limit }: NewsGridProps) {
  // Sort news articles by id in descending order to show the latest one (by id) first
  const sortedNews = [...newsArticlesWithSnippets].sort((a, b) => b.id - a.id)

  // Limit the news if the `limit` prop is provided
  const displayedNews = limit ? sortedNews.slice(0, limit) : sortedNews

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest News</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((news: NewsArticle) => (
            <NewsCard 
              key={news.id}
              id={news.id}
              title={news.title}
              date={news.date}
              snippet={news.snippet}
              image={news.image}
              slug={news.slug}
            />
          ))}
        </div>

        {showViewAllButton && (
          <div className="flex justify-center mt-12">
            <Link 
              href="/news"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              View All News
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

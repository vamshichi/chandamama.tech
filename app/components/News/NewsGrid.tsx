import Link from 'next/link'
import newsArticlesData from '@/app/data/newsArticlesData'
import NewsCard from './NewsCard'

interface NewsGridProps {
  showViewAllButton?: boolean
  limit?: number
}

export default function NewsGrid({ showViewAllButton = false, limit }: NewsGridProps) {
  // Reverse news articles order so the latest ones appear first
  const sortedNews = [...newsArticlesData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Limit the news if the `limit` prop is provided
  const displayedNews = limit ? sortedNews.slice(0, limit) : sortedNews

  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest News</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((news) => (
            <NewsCard key={news.id} {...news} />
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
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import newsArticlesWithSnippets from '@/app/data/newsArticlesData'
import NewsCard from './NewsCard'

interface NewsArticle {
  id: number
  title: string
  date: string
  content: string
  image: string | StaticImageData
  slug: string
  readTime?: number
  snippet: string
}

interface NewsGridProps {
  showViewAllButton?: boolean
  limit?: number
  currentSlug?: string
  titleLimit?: number
}

export default function NewsGrid({ 
  showViewAllButton = false, 
  limit, 
  currentSlug,
  titleLimit = 60 // Default title limit
}: NewsGridProps) {
  // Reverse the news articles array
  let reversedNews = [...newsArticlesWithSnippets].reverse();

  // Filter out the current article by slug if currentSlug is provided
  if (currentSlug) {
    reversedNews = reversedNews.filter(news => news.slug !== currentSlug);
  }

  // Limit the news if the `limit` prop is provided
  const displayedNews = limit ? reversedNews.slice(0, limit) : reversedNews;

  // Function to truncate title
  const truncateTitle = (title: string, limit: number) => {
    if (title.length <= limit) return title;
    return title.slice(0, limit) + '...';
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((news: NewsArticle) => (
            <NewsCard 
              key={news.id}
              id={news.id}
              title={truncateTitle(news.title, titleLimit)}
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
  );
}